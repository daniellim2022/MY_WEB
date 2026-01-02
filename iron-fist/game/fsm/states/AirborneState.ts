import { FighterStateBase } from '../FighterState';
import { Fighter } from '../../Fighter';
import { InputHandler } from '../../InputHandler';
import { IdleState } from './IdleState';
import { FighterState, GAME_CONFIG } from '../../../types';

export class AirborneState extends FighterStateBase {
    enter() {
        this.fighter.state = FighterState.AIRBORNE;
    }

    update(dt: number) {
        // Apply Gravity
        this.fighter.velocity.y -= GAME_CONFIG.GRAVITY * (1 / 60); // Simple Euler

        // Ground Check
        if (this.fighter.mesh.position.y <= GAME_CONFIG.GROUND_Y) {
            this.fighter.mesh.position.y = GAME_CONFIG.GROUND_Y;
            this.fighter.velocity.y = 0;
            this.fighter.stateMachine.changeState(new IdleState(this.fighter));
        }
    }

    handleInput(input: InputHandler) {
        // Air controls?
    }

    exit() {
        // Land FX
    }
}
