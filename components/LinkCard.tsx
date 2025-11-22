import React from 'react';
import { Trash2, ExternalLink, Tag, Globe } from 'lucide-react';
import { WebLink, Category } from '../types';

interface LinkCardProps {
  link: WebLink;
  onDelete: (id: string) => void;
  isSelected?: boolean;
}

const categoryColors: Record<Category, string> = {
  [Category.Technology]: "bg-blue-100 text-blue-800",
  [Category.News]: "bg-red-100 text-red-800",
  [Category.Social]: "bg-pink-100 text-pink-800",
  [Category.Entertainment]: "bg-purple-100 text-purple-800",
  [Category.Education]: "bg-green-100 text-green-800",
  [Category.Shopping]: "bg-yellow-100 text-yellow-800",
  [Category.Work]: "bg-slate-100 text-slate-800",
  [Category.Other]: "bg-gray-100 text-gray-800",
};

export const LinkCard: React.FC<LinkCardProps> = ({ link, onDelete, isSelected = false }) => {
  return (
    <div className={`group relative bg-white rounded-xl border-2 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full cursor-pointer ${
      isSelected ? 'border-primary-500 shadow-md ring-2 ring-primary-200' : 'border-gray-200'
    }`}>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDelete(link.id);
          }}
          className="p-2 bg-white/90 rounded-full text-red-500 hover:bg-red-50 hover:text-red-700 shadow-sm border border-gray-100"
          title="삭제"
        >
          <Trash2 size={16} />
        </button>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="p-2 bg-primary-50 rounded-lg text-primary-600 shrink-0">
              <Globe size={20} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 truncate leading-tight" title={link.title}>
                {link.title}
              </h3>
              <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium mt-1 ${categoryColors[link.category]}`}>
                {link.category}
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow leading-relaxed">
          {link.description || "설명이 없습니다."}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {link.tags.map((tag, idx) => (
            <span key={idx} className="inline-flex items-center text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
              <Tag size={10} className="mr-1 opacity-70" />
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="block bg-gray-50 px-5 py-3 text-sm font-medium text-primary-700 hover:bg-primary-50 hover:text-primary-800 transition-colors border-t border-gray-100 flex items-center justify-center gap-2">
        <span>{isSelected ? '선택됨' : '클릭하여 미리보기'}</span>
        <ExternalLink size={14} />
      </div>
    </div>
  );
};
