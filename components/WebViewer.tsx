import React, { useState, useRef } from 'react';
import { RefreshCw, ExternalLink, ArrowLeft, Monitor, Smartphone, Compass } from 'lucide-react';

interface WebViewerProps {
  url: string;
  onBack: () => void;
  initialRatio?: 'video' | '4/3' | 'mobile';
  initialMaxWidth?: string;
}

export const WebViewer: React.FC<WebViewerProps> = ({ url, onBack, initialRatio = 'video', initialMaxWidth }) => {
  // We keep key for refresh, but remove scale/ratio toggles as we want "Fill"
  const [key, setKey] = useState(0);

  const handleRefresh = () => {
    setKey(prev => prev + 1);
  };

  const handleOpenNewTab = () => {
    window.open(url, '_blank');
  };

  return (
    <div className="w-full h-full relative flex flex-col bg-black/5 animate-in fade-in zoom-in-95 duration-500">
      {/* Toolbar / Floating Controls */}
      {/* Toolbar / Floating Controls - Moved to Top Right to avoid collision with Navbar */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-black/80 text-white hover:bg-black rounded-full backdrop-blur-md border border-white/10 shadow-lg transition-all hover:scale-105 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back</span>
        </button>

        <button
          onClick={handleRefresh}
          className="p-2 bg-black/80 text-white/70 hover:text-white hover:bg-black rounded-full backdrop-blur-md border border-white/10 shadow-lg transition-all"
          title="Refresh"
        >
          <RefreshCw size={16} />
        </button>

        <button
          onClick={handleOpenNewTab}
          className="p-2 bg-black/80 text-white/70 hover:text-white hover:bg-black rounded-full backdrop-blur-md border border-white/10 shadow-lg transition-all"
          title="Open New Tab"
        >
          <ExternalLink size={16} />
        </button>
      </div>

      {/* Content Area - Full Fill */}
      <div className="absolute inset-0 w-full h-full bg-transparent overflow-hidden flex items-center justify-center">
        {/* We allow the iframe to fill the space. The app inside handles its own ratio/centering if needed. */}
        <iframe
          key={key}
          src={url}
          className="w-full h-full border-0 block"
          title="App Viewer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default WebViewer;