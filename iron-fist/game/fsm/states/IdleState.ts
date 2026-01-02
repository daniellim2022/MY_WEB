import { FighterStateBase } from '../FighterState';
import { Fighter } from '../../Fighter';
import { InputHandler } from '../../InputHandler';
import { MoveState } from './MoveState';
import { AttackState } from './AttackState';
import { FighterState } from '../../../types';
import { AirborneState } from './AirborneState';

export class IdleState extends FighterStateBase {
    enter() {
        this.fighter.mesh.position.y = 0; // Ensure grounded
        this.fighter.velocity.set(0, 0, 0);
        // Play Idle Animation
    }

    update(dt: number) {
        // Friction / Deceleration to 0 if sliding
        this.fighter.velocity.x *= 0.8;
        this.fighter.velocity.z *= 0.8;
    }

    handleInput(input: InputHandler) {
        if (!input || !input.keys) return; // Crash Fix: Check input existence
        const keys = input.keys;

        // 1. Jump
        if (keys['KeyW'] && !this.fighter.prevKeys['KeyW']) { // Simple Jump for now, usually Up
            // Sidestep logic is in MoveState, generic Up is jump? 
            // Tekken: Up = Jump / Sidestep depending on tap vs hold. 
            // Let's map KeySpace to Jump for ease, or W for Up.
            // Fighter.ts had W/S for Sidestep.
        }

        // 2. Attack
        // Check queues or direct press
        const attackCmd = this.fighter.getCommand(input);
        if (attackCmd) {
            this.fighter.stateMachine.changeState(new AttackState(this.fighter, attackCmd));
            return;
        }

        // 3. Movement
        if (keys['KeyA'] || keys['KeyD'] || keys['KeyW'] || keys['KeyS']) {
            this.fighter.stateMachine.changeState(new MoveState(this.fighter));
            return;
        }
    }

    exit() { }
}
