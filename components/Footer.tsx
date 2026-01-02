import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-8 mt-auto backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} 나의 웹사이트. Powered by Google Gemini.</p>
      </div>
    </footer>
  );
};

