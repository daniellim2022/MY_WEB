import React from 'react';
import { WebViewer } from '../components/WebViewer';

interface ProjectPageProps {
  url: string;
}

export const ProjectPage: React.FC<ProjectPageProps> = ({ url }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        <WebViewer url={url} />
      </main>
    </div>
  );
};

