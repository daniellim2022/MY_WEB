export class InputManager {
    private inputQueue: { key: string, frame: number }[] = [];
    private readonly BUFFER_WINDOW = 12; // Frames to keep input alive

    update(currentFrame: number) {
        // Remove expired inputs
        this.inputQueue = this.inputQueue.filter(cmd => (currentFrame - cmd.frame) <= this.BUFFER_WINDOW);
    }

    queueInput(key: string, currentFrame: number) {
        // Prevent duplicate keys in the same frame
        if (this.inputQueue.length > 0) {
            const last = this.inputQueue[this.inputQueue.length - 1];
            if (last.key === key && last.frame === currentFrame) return;
        }
        this.inputQueue.push({ key, frame: currentFrame });
    }

    consume(): string | null {
        // Return the oldest valid input (FIFO)
        if (this.inputQueue.length > 0) {
            return this.inputQueue.shift()!.key;
        }
        return null;
    }

    peek(): string | null {
        if (this.inputQueue.length > 0) {
            return this.inputQueue[0].key;
        }
        return null;
    }

    clear() {
        this.inputQueue = [];
    }
}
