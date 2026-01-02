import { FighterStateBase } from '../FighterState';
import { Fighter } from '../../Fighter';
import { InputHandler } from '../../InputHandler';
import { FighterState, FrameData } from '../../../types';
import { MOVE_LIST } from '../../data/MoveList';
import { IdleState } from './IdleState';
import { HitState } from './HitState';

export class AttackState extends FighterStateBase {
    private frame: number = 0;
    private moveData: FrameData;
    private moveName: FighterState;
    private hasHit: boolean = false;

    constructor(fighter: Fighter, moveName: FighterState) {
        super(fighter);
        this.moveName = moveName;
        this.moveData = MOVE_LIST[moveName]!;
        if (!this.moveData) {
            console.error(`Missing FrameData for ${moveName}`);
            // Fallback to idle to prevent lock
            this.moveData = { startup: 1, active: 1, recovery: 1, damage: 0, stun: 0, knockback: 0, blockStun: 0, hitLevel: 'mid' };
        }
    }

    enter() {
        this.frame = 0;
        this.hasHit = false;
        this.fighter.state = this.moveName; // Sync legacy state for animations
        console.log(`[Enter Attack] ${this.moveName}`);

        // Reset Physics
        this.fighter.velocity.set(0, 0, 0);
    }

    update(dt: number) {
        this.frame++;

        const { startup, active, recovery } = this.moveData;
        const totalDuration = startup + active + recovery;

        if (this.frame < startup) {
            // Startup Phase
        } else if (this.frame < startup + active) {
            // Active Phase
            if (!this.hasHit && this.frame === startup) { // Hit once at start of active
                this.checkHit();
                this.hasHit = true;
            }
        } else if (this.frame < totalDuration) {
            // Recovery Phase
            // Check Buffer for Cancels
            this.checkBuffer();
        } else {
            // End
            this.fighter.stateMachine.changeState(new IdleState(this.fighter));
        }
    }

    checkHit() {
        // Basic Hit Detection Delegate
        // In a real separate engine, AttackBox would check overlaps.
        // For now, call Fighter's checkHit or trigger logic
        this.fighter.attemptHit(this.moveData);
    }

    checkBuffer() {
        // Simple Next Move Logic
        const nextMoveKey = this.fighter.inputManager.peek();
        if (nextMoveKey && this.moveData.nextMoves && this.moveData.nextMoves[nextMoveKey]) {
            const nextState = this.moveData.nextMoves[nextMoveKey];
            // Consume buffer
            this.fighter.inputManager.consume();
            // Transition
            if (nextState) this.fighter.stateMachine.changeState(new AttackState(this.fighter, nextState));
        }
    }

    handleInput(input: InputHandler) {
        // Inputs here are queued by InputManager globally?
        // Or we manually queue them.
        // Fighter.ts update calls inputManager.update()

        const key = input.getJustPressed(); // We need a way to get just pressed keys 
        if (key) {
            this.fighter.inputManager.queueInput(key, this.frame);
        }
    }

    exit() {
        // Cleanup
    }
}
