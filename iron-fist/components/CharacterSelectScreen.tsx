import React, { useState } from 'react';
import { CharacterType } from '../types';

interface CharacterSelectScreenProps {
    onConfirm: (p1Char: CharacterType, p2Char: CharacterType) => void;
}

const CharacterSelectScreen: React.FC<CharacterSelectScreenProps> = ({ onConfirm }) => {
    const [selectedChar, setSelectedChar] = useState<CharacterType>('GILGAMESH');

    return (
        <div className="absolute inset-0 bg-black flex flex-col items-center justify-center z-50 overflow-hidden" style={{ fontFamily: '"Russo One", sans-serif' }}>
            {/* Background Ambience */}
            <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center filter grayscale contrast-150"></div>

            <h1 className="text-5xl font-black text-white italic tracking-tighter mb-12 z-10" style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>
                SELECT YOUR SERVANT
            </h1>

            <div className="flex gap-16 z-10">
                {/* GILGAMESH CARD */}
                <div
                    className={`relative w-80 h-[500px] border-4 transition-all duration-300 cursor-pointer overflow-hidden group backdrop-blur-sm ${selectedChar === 'GILGAMESH' ? 'border-yellow-500 scale-105 shadow-[0_0_50px_rgba(255,215,0,0.6)] bg-yellow-900/20' : 'border-gray-800 grayscale hover:grayscale-0 hover:border-yellow-700 bg-black/40'}`}
                    onClick={() => setSelectedChar('GILGAMESH')}
                >
                    {/* Stylized BG */}
                    <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/50 to-black"></div>

                    <div className="absolute bottom-32 left-0 right-0 text-center">
                        <h2 className="text-4xl font-black text-yellow-500 tracking-widest uppercase mb-2">GILGAMESH</h2>
                        <p className="text-yellow-200 text-xs tracking-[0.2em] font-bold">KING OF HEROES</p>
                    </div>

                    {/* Stats / Styles */}
                    <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <div className="text-yellow-500/80 text-sm space-y-1 font-mono">
                            <p>TYPE: ZONER / BURST</p>
                            <p>NP: GATE OF BABYLON</p>
                        </div>
                    </div>
                </div>

                {/* ARCHER CARD */}
                <div
                    className={`relative w-80 h-[500px] border-4 transition-all duration-300 cursor-pointer overflow-hidden group backdrop-blur-sm ${selectedChar === 'ARCHER' ? 'border-red-600 scale-105 shadow-[0_0_50px_rgba(255,0,0,0.6)] bg-red-900/20' : 'border-gray-800 grayscale hover:grayscale-0 hover:border-red-900 bg-black/40'}`}
                    onClick={() => setSelectedChar('ARCHER')}
                >
                    {/* Stylized BG */}
                    <div className="absolute inset-0 bg-gradient-to-b from-red-900/50 to-black"></div>

                    <div className="absolute bottom-32 left-0 right-0 text-center">
                        <h2 className="text-4xl font-black text-red-500 tracking-widest uppercase mb-2">EMIYA</h2>
                        <p className="text-red-200 text-xs tracking-[0.2em] font-bold">WROUGHT IRON HERO</p>
                    </div>

                    <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                        <div className="text-red-500/80 text-sm space-y-1 font-mono">
                            <p>TYPE: ALL-ROUNDER</p>
                            <p>NP: UNLIMITED BLADE WORKS</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONFIRM BUTTON */}
            <button
                className="mt-16 px-16 py-4 bg-white text-black font-black text-2xl hover:bg-yellow-400 hover:scale-105 transition-all z-10 tracking-widest"
                onClick={() => {
                    // Logic: Selected is P1. Opponent is inferred.
                    const p1 = selectedChar;
                    const p2 = selectedChar === 'GILGAMESH' ? 'ARCHER' : 'GILGAMESH';
                    onConfirm(p1, p2);
                }}
            >
                CONFIRM
            </button>

        </div>
    );
};

export default CharacterSelectScreen;
