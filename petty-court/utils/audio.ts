// Web Audio API를 사용한 간단한 효과음 생성기

// 1. 판사봉 소리 (Gavel Sound)
export const playGavelSound = () => {
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContext) return;

  const ctx = new AudioContext();
  
  // 나무 부딪히는 둔탁한 소리를 흉내내기 위한 오실레이터와 노이즈
  const t = ctx.currentTime;
  
  // 저음 충격 (Low Thud)
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  
  osc.type = 'square';
  osc.frequency.setValueAtTime(150, t);
  osc.frequency.exponentialRampToValueAtTime(40, t + 0.1);
  
  gain.gain.setValueAtTime(1, t);
  gain.gain.exponentialRampToValueAtTime(0.01, t + 0.15);
  
  osc.connect(gain);
  gain.connect(ctx.destination);
  
  osc.start(t);
  osc.stop(t + 0.2);

  // 두 번째 딱! 소리 (Echo/Aftershock) - 약간 뒤에
  setTimeout(() => {
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(200, ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(50, ctx.currentTime + 0.1);
    gain2.gain.setValueAtTime(0.8, ctx.currentTime);
    gain2.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(ctx.currentTime);
    osc2.stop(ctx.currentTime + 0.2);
  }, 100);
};

// 2. 판결 도장 찍는 소리 (Stamp Sound)
export const playStampSound = () => {
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContext) return;

  const ctx = new AudioContext();
  const t = ctx.currentTime;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'triangle';
  osc.frequency.setValueAtTime(300, t);
  osc.frequency.exponentialRampToValueAtTime(50, t + 0.1);

  gain.gain.setValueAtTime(1, t);
  gain.gain.exponentialRampToValueAtTime(0.01, t + 0.1);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(t);
  osc.stop(t + 0.1);
};
