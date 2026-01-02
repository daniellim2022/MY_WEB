import { FighterStateBase } from '../FighterState';
import { Fighter } from '../../Fighter';
import { InputHandler } from '../../InputHandler';
import { IdleState } from './IdleState';
import { FighterState } from '../../../types';

export class HitState extends FighterStateBase {
    private stunFrames: number;
    private currentFrame: number = 0;

    constructor(fighter: Fighter, stunFrames: number) {
        super(fighter);
        this.stunFrames = stunFrames;
    }

    enter() {
        this.currentFrame = 0;
        this.fighter.state = FighterState.HIT;
        this.fighter.flashTimer = 5;
    }

    update(dt: number) {
        this.currentFrame++;
        // Friction
        this.fighter.velocity.multiplyScalar(0.9);

        if (this.currentFrame >= this.stunFrames) {
            this.fighter.stateMachine.changeState(new IdleState(this.fighter));
        }
    }

    handleInput(input: InputHandler) {
        // Can buffer tech/wakeup?
    }

    exit() {
        // cleanup
    }
}
