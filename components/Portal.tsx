import React, { useEffect, useState } from 'react';

interface PortalProps {
    x: number;
    y: number;
    scale: number;
}

export const Portal: React.FC<PortalProps> = ({ x, y, scale }) => {
    // Phases: init (0s) -> charge (0.1s) -> blast (0.3s) -> stable (0.5s+)
    const [phase, setPhase] = useState<'init' | 'charge' | 'blast' | 'stable'>('init');

    useEffect(() => {
        // Timeline
        const t1 = setTimeout(() => setPhase('charge'), 50);
        const t2 = setTimeout(() => setPhase('blast'), 300); // Sync with sword spawn
        const t3 = setTimeout(() => setPhase('stable'), 600);

        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);

    return (
        <div
            className={`absolute flex items-center justify-center pointer-events-none transition-all duration-300 ease-out`}
            style={{
                left: x,
                top: y,
                width: 70 * scale, // Halved base size (was 140)
                height: 70 * scale,
                transform: `translate(-50%, -50%) scale(${phase === 'init' ? 0 : 1})`,
                zIndex: 20
            }}
        >
            {/* --- LAYERS --- */}

            {/* 1. Space Warp Background (Dark Rift) */}
            <div className={`absolute inset-[15%] rounded-full bg-black/40 backdrop-blur-[2px] shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 ${phase === 'blast' ? 'scale-110 opacity-100' : 'scale-90 opacity-80'}`} />

            {/* 2. Particle Burst (on Open) - Simple Divs moving out */}
            {phase === 'charge' && (
                <>
                    <div className="absolute inset-0 m-auto w-1 h-1 bg-yellow-200 rounded-full animate-[ping_1s_ease-out]" />
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="absolute inset-0 m-auto w-1 h-1 bg-yellow-400 rounded-full animate-ping"
                            style={{
                                transform: `rotate(${i * 60}deg) translate(40px)`,
                                opacity: 0.6,
                                animationDuration: '0.6s'
                            }}
                        />
                    ))}
                </>
            )}

            {/* 3. SVG Magic Circle (Rotating) */}
            <svg
                className={`absolute inset-0 w-full h-full text-yellow-300/80 animate-[spin_10s_linear_infinite] drop-shadow-[0_0_5px_rgba(253,224,71,0.6)] ${phase === 'blast' ? 'brightness-150' : ''}`}
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
            >
                {/* Outer Ring */}
                <circle cx="50" cy="50" r="48" strokeWidth="1" strokeDasharray="4 2" />
                <circle cx="50" cy="50" r="44" strokeOpacity="0.5" />

                {/* Hexagram (Two Triangles) */}
                <path d="M50 10 L85 75 L15 75 Z" className="animate-[spin_3s_linear_infinite_reverse] origin-center" strokeWidth="0.8" />
                <path d="M50 90 L15 25 L85 25 Z" className="animate-[spin_3s_linear_infinite_reverse] origin-center" strokeWidth="0.8" />

                {/* Inner Runes (Decorative squares/dots) */}
                {[...Array(8)].map((_, i) => (
                    <rect key={i} x="49" y="8" width="2" height="4"
                        transform={`rotate(${i * 45} 50 50)`}
                        fill="currentColor"
                        className="animate-pulse"
                    />
                ))}
            </svg>

            {/* 4. Counter-Rotating Inner Ring */}
            <svg
                className="absolute inset-[15%] w-[70%] h-[70%] text-orange-400/60 animate-[spin_5s_linear_infinite_reverse] drop-shadow-[0_0_2px_orange]"
                viewBox="0 0 100 100"
                fill="none"
                stroke="currentColor"
            >
                <circle cx="50" cy="50" r="45" strokeWidth="2" strokeDasharray="10 5" />
                <path d="M50 5 L50 95 M5 50 L95 50" strokeWidth="0.5" opacity="0.5" />
            </svg>

            {/* 5. Core Energy Blast (Pulsing Center) */}
            <div className={`absolute inset-0 m-auto w-[60%] h-[60%] rounded-full bg-gradient-to-r from-yellow-500/0 via-yellow-200/20 to-yellow-500/0 blur-md pointer-events-none transition-all duration-100 ${phase === 'blast' ? 'scale-150 opacity-100 mix-blend-screen' : 'scale-100 opacity-20'}`} />

            {/* 6. Shockwave Ring (Blast Phase) */}
            {phase === 'blast' && (
                <div className="absolute inset-0 border-[6px] border-white/60 rounded-full animate-[ping_0.4s_ease-out_forwards] mix-blend-overlay" />
            )}

            {/* 7. Opening Flash (Whiteout) */}
            <div className={`absolute inset-0 bg-white rounded-full mix-blend-hard-light transition-opacity duration-200 ${phase === 'charge' ? 'opacity-80' : 'opacity-0'}`} />
        </div>
    );
};
