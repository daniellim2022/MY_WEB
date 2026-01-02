import { Fighter } from '../../Fighter';
import { InputHandler } from '../../InputHandler';

export abstract class FighterStateBase {
    protected fighter: Fighter;

    constructor(fighter: Fighter) {
        this.fighter = fighter;
    }

    abstract enter(): void;
    abstract update(dt: number): void;
    abstract handleInput(input: InputHandler): void;
    abstract exit(): void;
}
