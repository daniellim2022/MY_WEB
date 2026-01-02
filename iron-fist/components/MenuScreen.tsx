import React, { useEffect, useState } from 'react';

interface MenuScreenProps {
    onStart: () => void;
}

const MenuScreen: React.FC<MenuScreenProps> = ({ onStart }) => {
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setBlink(prev => !prev);
        }, 800);

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Space' || e.code === 'Enter') {
                onStart();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            clearInterval(interval);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onStart]);

    return (
        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center overflow-hidden z-[100]">

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a0b00] to-black opacity-90 z-0" />

            {/* Animated Embers / Speed Lines */}
            <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
                {/* Ember 1 */}
                <div className="absolute bottom-[-10%] left-[20%] w-2 h-2 bg-yellow-500 rounded-full blur-[2px] animate-[ping_3s_linear_infinite_0s] opacity-0" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-[-10%] left-[50%] w-3 h-3 bg-red-500 rounded-full blur-[2px] animate-[ping_5s_linear_infinite_1s] opacity-0" />
                <div className="absolute bottom-[-10%] left-[80%] w-1 h-1 bg-orange-400 rounded-full blur-sm animate-[bounce_6s_infinite] opacity-50" />

                {/* Speed Line Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)] z-10 opacity-50"></div>
                <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] bg-[repeating-conic-gradient(from_0deg,_transparent_0deg,_transparent_10deg,_rgba(255,165,0,0.05)_10deg,_rgba(255,165,0,0.05)_20deg)] animate-[spin_20s_linear_infinite] opacity-30"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
                {/* Main Title */}
                <div className="mb-12 relative group cursor-default">
                    <h1 className="text-8xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-t from-yellow-600 to-yellow-300 scale-y-110 transform"
                        style={{ filter: 'drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))' }}>
                        IRON FIST
                    </h1>
                    <div className="absolute -inset-1 blur-xl bg-yellow-500/20 -z-10 animate-pulse" />

                    {/* Subtitle */}
                    <div className="absolute -bottom-6 right-0 text-red-500 font-bold tracking-[0.5em] text-sm uppercase">
                        Unlimited Blade Works
                    </div>
                </div>

                {/* Press Start */}
                <div
                    className={`mt-12 text-2xl font-bold text-white tracking-widest cursor-pointer transition-opacity duration-100 ${blink ? 'opacity-100' : 'opacity-0'}`}
                    onClick={onStart}
                    style={{ textShadow: '0 0 10px white' }}
                >
                    PRESS START
                </div>

                {/* Footer */}
                <div className="absolute bottom-[-30vh] text-gray-600 text-xs tracking-wider">
                    © 2025 IRON FIST PROJECT
                </div>
            </div>
        </div>
    );
};

export default MenuScreen;
