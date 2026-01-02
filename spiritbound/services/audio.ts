
class AudioService {
  private ctx: AudioContext | null = null;

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  private playTone(freq: number, type: OscillatorType, duration: number, volume: number) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(10, this.ctx.currentTime + duration);

    gain.gain.setValueAtTime(volume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  playJump() { this.playTone(400, 'sine', 0.2, 0.1); }
  playHit() { this.playTone(150, 'sawtooth', 0.1, 0.2); }
  playExplosion() { this.playTone(100, 'square', 0.5, 0.3); }
  playSkill() { this.playTone(800, 'sine', 0.3, 0.1); }
  playMusic() {
     // Simplistic rhythmic loop
     if (!this.ctx) return;
     // Note: Real music is complex, this is just a pulse for vibe
  }
}

export const audioService = new AudioService();
