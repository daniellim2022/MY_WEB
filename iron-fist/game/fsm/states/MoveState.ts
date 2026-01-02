import * as THREE from 'three';
import { FighterStateBase } from '../FighterState';
import { Fighter } from '../../Fighter';
import { InputHandler } from '../../InputHandler';
import { FighterState, GAME_CONFIG } from '../../../types';
import { IdleState } from './IdleState';
import { AttackState } from './AttackState';

export class MoveState extends FighterStateBase {
    enter() {
        // Determine initial move type? 
        // Or just update velocity every frame based on input
    }

    update(dt: number) {
        // Logic is in HandleInput mostly for movement? 
        // Or we read input here to set velocity.
    }

    handleInput(input: InputHandler) {
        const keys = input.keys;
        const opponent = this.fighter.currentOpponent;

        if (!opponent) {
            // Fallback to old Input if no opponent found (shouldn't happen in match)
            this.defaultMovement(keys);
            return;
        }

        let moveSpeed = GAME_CONFIG.MOVE_SPEED;
        let inputX = 0; // D/A
        let inputZ = 0; // W/S

        if (keys['KeyD']) inputX = 1;
        if (keys['KeyA']) inputX = -1;
        if (keys['KeyW']) inputZ = -1;
        if (keys['KeyS']) inputZ = 1;

        // IDLE CHECK
        if (inputX === 0 && inputZ === 0) {
            this.fighter.stateMachine.changeState(new IdleState(this.fighter));
            return;
        }

        // MOVEMENT VECTORS (Relative to Opponent)
        const dir = new THREE.Vector3().subVectors(opponent.mesh.position, this.fighter.mesh.position);
        dir.y = 0;
        dir.normalize();

        const up = new THREE.Vector3(0, 1, 0);
        const tangent = new THREE.Vector3().crossVectors(up, dir).normalize();

        // Calculate Velocity
        // Forward/Back: (InputX * Facing) * Dir
        // Side: (InputZ * -Facing) * Tangent

        // P1 (Facing 1): D(1) -> Right (Toward Opp). A(-1) -> Left.
        // P2 (Facing -1): A(-1) -> Right (Toward Opp). D(1) -> Left.
        // wait, we established: (InputX * Facing) * Dir maps screen relative inputs correctly to the line.

        // Let's refine Facing logic:
        // Facing is usually Auto-Updated by Fighter.ts updateRotation? 
        // Or calculated:
        const toOpponentX = Math.sign(opponent.mesh.position.x - this.fighter.mesh.position.x) || 1;
        this.fighter.facing = toOpponentX;

        // Main Movement
        const fwdVel = dir.clone().multiplyScalar(inputX * this.fighter.facing * moveSpeed);

        // Side Movement (Tangent)
        // Tangent of (1,0,0) is (0,0,-1) [Into Screen].
        // We want S(+1) to be Toward Screen (+Z).
        // P1(Face1): Tan=(-Z). Want +Z. Need (-1).
        // P2(Face-1): Tan=(+Z). Want +Z. Need (+1).
        // So factor is -Facing.
        const sideVel = tangent.clone().multiplyScalar(inputZ * -this.fighter.facing * moveSpeed);

        this.fighter.velocity.x = fwdVel.x + sideVel.x;
        this.fighter.velocity.z = fwdVel.z + sideVel.z;

        // State Transitions (Dash?)
        // Simple double tap logc is handled in InputManager/Fighter, here we just move.
        // If we want detailed states like WALK_FORWARD vs WALK_BACK:

        // Determine Walking State
        const dot = fwdVel.dot(dir); // Positive = Towards, Negative = Away
        if (Math.abs(dot) > 0.1) {
            if (dot > 0) this.fighter.state = FighterState.WALK_FORWARD;
            else this.fighter.state = FighterState.WALK_BACK;
        } else {
            if (inputZ < 0) this.fighter.state = FighterState.SIDESTEP_LEFT;
            else this.fighter.state = FighterState.SIDESTEP_RIGHT;
        }


        // Attacks
        const attackCmd = this.fighter.getCommand(input);
        if (attackCmd) {
            this.fighter.stateMachine.changeState(new AttackState(this.fighter, attackCmd));
        }
    }

    defaultMovement(keys: any) {
        // ... fallback ...
        if (!keys['KeyA'] && !keys['KeyD'] && !keys['KeyW'] && !keys['KeyS']) {
            this.fighter.stateMachine.changeState(new IdleState(this.fighter));
        }
    }

    exit() {
        this.fighter.velocity.set(0, 0, 0);
    }
}
