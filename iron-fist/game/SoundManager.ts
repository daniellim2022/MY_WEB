export class SoundManager {
    private static instance: SoundManager;
    private audioContext: AudioContext | null = null;
    private soundBuffers: { [key: string]: AudioBuffer } = {};
    private bgmSource: AudioBufferSourceNode | null = null;
    private bgmGain: GainNode | null = null;
    private sfxGain: GainNode | null = null;
    private isMuted: boolean = false;
    private initialized: boolean = false;

    // Define sound paths here
    private soundPaths: { [key: string]: string } = {
        'bgm_battle': '/sounds/bgm_battle.mp3',
        'hit_light': '/sounds/hit_light.mp3',
        'hit_heavy': '/sounds/hit_heavy.mp3',
        'block': '/sounds/block.mp3',
        'dash': '/sounds/dash.mp3',
        'jump': '/sounds/jump.mp3',
        'land': '/sounds/land.mp3',
        'clash': '/sounds/clash.mp3',
        // Skill sounds
        'charge': '/sounds/charge.mp3',
        'beam': '/sounds/beam.mp3',
        'slash': '/sounds/slash.mp3',
        'explosion': '/sounds/explosion.mp3',
        'win': '/sounds/win.mp3'
    };

    private constructor() { }

    public static getInstance(): SoundManager {
        if (!SoundManager.instance) {
            SoundManager.instance = new SoundManager();
        }
        return SoundManager.instance;
    }

    public async init() {
        if (this.initialized) return;

        try {
            // @ts-ignore - Handle Web Audio API cross-browser
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContextClass();

            // Create Gains
            this.bgmGain = this.audioContext.createGain();
            this.sfxGain = this.audioContext.createGain();

            this.bgmGain.connect(this.audioContext.destination);
            this.sfxGain.connect(this.audioContext.destination);

            // Set Volumes
            this.bgmGain.gain.value = 0.4;
            this.sfxGain.gain.value = 0.6;

            this.initialized = true;
            console.log('Audio System Initialized');

            // Preload critical sounds
            this.loadAllSounds();

        } catch (e) {
            console.error('Web Audio API not supported:', e);
        }
    }

    private async loadAllSounds() {
        if (!this.audioContext) return;

        for (const [key, path] of Object.entries(this.soundPaths)) {
            try {
                const response = await fetch(path);
                const arrayBuffer = await response.arrayBuffer();
                const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);
                this.soundBuffers[key] = audioBuffer;
                // console.log(`Loaded sound: ${key}`);
            } catch (e) {
                // Silent fail for missing assets (common in dev)
                // console.warn(`Failed to play/load ${key}, file might be missing.`); 
            }
        }
    }

    public playSFX(key: string, vol: number = 1.0, pitchVar: number = 0.0) {
        if (!this.initialized || this.isMuted || !this.audioContext || !this.soundBuffers[key]) return;

        const source = this.audioContext.createBufferSource();
        source.buffer = this.soundBuffers[key];

        // Pitch variation
        if (pitchVar > 0) {
            source.playbackRate.value = 1.0 + (Math.random() * pitchVar - (pitchVar / 2));
        }

        const gainNode = this.audioContext.createGain();
        gainNode.gain.value = vol;

        source.connect(gainNode);
        if (this.sfxGain) gainNode.connect(this.sfxGain);

        source.start(0);
    }

    public playBGM(key: string) {
        if (!this.initialized || !this.audioContext || !this.soundBuffers[key]) return;

        // Stop previous
        if (this.bgmSource) {
            this.bgmSource.stop();
        }

        const source = this.audioContext.createBufferSource();
        source.buffer = this.soundBuffers[key];
        source.loop = true;

        if (this.bgmGain) source.connect(this.bgmGain);
        source.start(0);
        this.bgmSource = source;
    }

    public stopBGM() {
        if (this.bgmSource) {
            this.bgmSource.stop();
            this.bgmSource = null;
        }
    }

    public toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.audioContext) {
            if (this.isMuted) {
                this.audioContext.suspend();
            } else {
                this.audioContext.resume();
            }
        }
    }
}
