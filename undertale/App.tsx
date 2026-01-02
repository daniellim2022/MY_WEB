import React from 'react';
import Game from './components/Game';

const App: React.FC = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
        {/* Background Atmosphere - Optional decorative elements */}
        <div className="absolute top-0 w-full h-20 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />
        
        <div className="z-10 w-full max-w-4xl px-4 flex flex-col items-center">
            <Game />
        </div>

        <div className="absolute bottom-4 text-gray-600 text-[10px] text-center">
            <p>UNDERTALE CLONE ENGINE</p>
            <p>Controls: Arrow Keys to Move • Z to Select</p>
        </div>
    </div>
  );
};

export default App;