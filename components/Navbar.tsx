import React from 'react';
import { LayoutGrid } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
        <div className="flex items-center gap-3">
          <div className="bg-primary-600 p-2 rounded-xl text-white shadow-lg shadow-primary-200">
            <LayoutGrid size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            나의 웹사이트
          </h1>
        </div>
      </div>
    </header>
  );
};

