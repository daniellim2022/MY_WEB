class AudioService {
  private ctx: AudioContext | null = null;

  constructor() {
    try {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (e) {
      console.error("Web Audio API not supported");
    }
  }

  private initCtx() {
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq: number, type: OscillatorType, duration: number, vol: number = 0.1) {
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    
    gain.gain.setValueAtTime(vol, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  playClick() {
    this.playTone(800, 'sine', 0.1, 0.1);
  }

  playStart() {
    this.playTone(440, 'sine', 0.1, 0.2);
    setTimeout(() => this.playTone(880, 'sine', 0.3, 0.2), 100);
  }

  playSuccess() {
    // A nice major chord arpeggio
    this.playTone(523.25, 'sine', 0.3, 0.2); // C5
    setTimeout(() => this.playTone(659.25, 'sine', 0.3, 0.2), 100); // E5
    setTimeout(() => this.playTone(783.99, 'sine', 0.6, 0.2), 200); // G5
  }

  playPerfect() {
    // High pitched magical sound
    this.playTone(1046.50, 'triangle', 0.5, 0.3); // C6
    setTimeout(() => this.playTone(1318.51, 'triangle', 0.5, 0.3), 100); // E6
    setTimeout(() => this.playTone(1567.98, 'triangle', 0.8, 0.3), 200); // G6
    setTimeout(() => this.playTone(2093.00, 'sine', 1.0, 0.4), 300); // C7
  }

  playFail() {
    this.playTone(150, 'sawtooth', 0.5, 0.2);
  }
}

export const audioService = new AudioService();