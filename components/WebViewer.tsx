import React from 'react';

interface WebViewerProps {
  url: string;
}

export const WebViewer: React.FC<WebViewerProps> = ({ url }) => {
  return (
    <div className="w-full h-full overflow-hidden">
      <iframe
        src={url}
        className="w-full h-full border-0"
        title="External Website"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

