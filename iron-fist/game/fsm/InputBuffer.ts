export interface BufferedInput {
    command: string; // The FighterState command directly (e.g. 'ATTACK_LP')
    frame: number;   // The frame it was registered
}

/**
 * Deterministic Input Buffer System (Ring Buffer)
 * Stores inputs for N frames to allow "Window" consumption.
 * Prevents dropping inputs during Recovery frames.
 */
export class InputBuffer {
    private buffer: BufferedInput[];
    private capacity: number;
    private maxAge: number; // Frames before input expires

    constructor(capacity: number = 20, maxAge: number = 12) {
        this.buffer = [];
        this.capacity = capacity;
        this.maxAge = maxAge;
    }

    /**
     * Add a command to the buffer (Push)
     * Edge Trigger verification should happen BEFORE calling this (in Fighter.ts or Listener)
     */
    add(command: string, currentFrame: number) {
        // Prevent duplicate spam of same command in same frame
        if (this.buffer.length > 0) {
            const last = this.buffer[this.buffer.length - 1];
            if (last.command === command && last.frame === currentFrame) return;
        }

        // Add
        this.buffer.push({ command, frame: currentFrame });

        // Maintain Capacity (FIFO)
        if (this.buffer.length > this.capacity) {
            this.buffer.shift();
        }
    }

    /**
     * Prune expired inputs
     */
    update(currentFrame: number) {
        // Remove old inputs
        // This is O(N) but N is tiny (20)
        this.buffer = this.buffer.filter(input => currentFrame - input.frame <= this.maxAge);
    }

    /**
     * Check if a specific command (or ANY command) is in buffer within lenient window
     * @param command Specific command to look for, or null for ANY
     * @param consume If true, removes the input from buffer (Hit Confirm)
     * @returns The oldest valid input found
     */
    consume(command: string | null = null): string | null {
        if (this.buffer.length === 0) return null;

        if (command) {
            const index = this.buffer.findIndex(input => input.command === command);
            if (index !== -1) {
                const found = this.buffer[index].command;
                this.buffer.splice(index, 1);
                return found;
            }
        } else {
            // Return oldest valid input (FIFO priority)
            const input = this.buffer.shift();
            return input ? input.command : null;
        }
        return null;
    }

    /**
     * Peek without consuming (for checking hold states? Not recommended for buffer, use raw input for hold)
     */
    peek(): string | null {
        if (this.buffer.length === 0) return null;
        return this.buffer[0].command;
    }

    clear() {
        this.buffer = [];
    }
}
