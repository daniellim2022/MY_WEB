export class InputHandler {
  keys: { [key: string]: boolean } = {};
  justPressed: string | null = null;

  mouseLeft: boolean = false;
  mouseRight: boolean = false;

  constructor() {
    window.addEventListener('keydown', (e) => this.onKeyDown(e));
    window.addEventListener('keyup', (e) => this.onKeyUp(e));

    // Mouse Support
    window.addEventListener('mousedown', (e) => this.onMouseDown(e));
    window.addEventListener('mouseup', (e) => this.onMouseUp(e));
    window.addEventListener('contextmenu', (e) => e.preventDefault()); // Block context menu
  }

  onMouseDown(event: MouseEvent) {
    if (event.button === 0) this.mouseLeft = true;
    if (event.button === 2) this.mouseRight = true;
  }

  onMouseUp(event: MouseEvent) {
    if (event.button === 0) this.mouseLeft = false;
    if (event.button === 2) this.mouseRight = false;
  }

  onKeyDownCallback: ((code: string) => void) | null = null;

  onKeyDown(event: KeyboardEvent) {
    // Use code (physical key position) instead of key (char) to support different layouts/IMEs
    if (!this.keys[event.code]) {
      // First press
      this.justPressed = event.code;
      if (this.onKeyDownCallback) this.onKeyDownCallback(event.code);
    }
    this.keys[event.code] = true;

  }

  onKeyUp(event: KeyboardEvent) {
    this.keys[event.code] = false;
  }

  isPressed(code: string): boolean {
    return !!this.keys[code];
  }

  getJustPressed(): string | null {
    const key = this.justPressed;
    this.justPressed = null; // Consume
    return key;
  }


  cleanup() {
    window.removeEventListener('keydown', (e) => this.onKeyDown(e));
    window.removeEventListener('keyup', (e) => this.onKeyUp(e));
  }
}