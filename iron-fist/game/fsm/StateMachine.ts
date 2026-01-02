import { FighterStateBase } from './FighterState';

export class StateMachine {
    currentState: FighterStateBase | null = null;

    changeState(newState: FighterStateBase) {
        if (this.currentState) {
            this.currentState.exit();
        }
        this.currentState = newState;
        this.currentState.enter();
    }

    update(dt: number) {
        if (this.currentState) {
            this.currentState.update(dt);
        }
    }

    handleInput(input: any) { // Type as InputHandler
        if (this.currentState) {
            this.currentState.handleInput(input);
        }
    }
}
