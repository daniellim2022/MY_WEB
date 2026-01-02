import React, { useRef, useState } from 'react';
import { Trash2, Globe } from 'lucide-react';
import { WebLink, Category } from '../types';

interface LinkCardProps {
  link: WebLink;
  onDelete: (id: string) => void;
  isSelected?: boolean;
}

const categoryColors: Record<Category, string> = {
  [Category.Technology]: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  [Category.News]: "bg-red-500/20 text-red-300 border-red-500/30",
  [Category.Social]: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  [Category.Entertainment]: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  [Category.Education]: "bg-green-500/20 text-green-300 border-green-500/30",
  [Category.Shopping]: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  [Category.Work]: "bg-slate-500/20 text-slate-300 border-slate-500/30",
  [Category.Game]: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  [Category.Utility]: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  [Category.Other]: "bg-gray-500/20 text-gray-300 border-gray-500/30",
};

export const LinkCard: React.FC<LinkCardProps> = ({ link, onDelete, isSelected = false }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg rotation
    const rotateY = ((x - centerX) / centerX) * 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative glass-card rounded-[0.8rem] transition-all duration-500 hover:z-10 flex flex-col h-full cursor-pointer overflow-hidden transform will-change-transform hover:scale-[1.03] ${isSelected
        ? 'ring-2 ring-brand-500 shadow-[0_0_15px_rgba(79,70,229,0.5)]'
        : 'hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:bg-white/10'
        }`}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(${rotate.x !== 0 ? 1.05 : 1})`,
        transition: 'transform 0.1s ease-out, box-shadow 0.3s ease, background-color 0.3s ease',
        boxShadow: isSelected
          ? '0 0 15px rgba(0, 243, 255, 0.5)'
          : rotate.x !== 0
            ? `0 10px 25px rgba(0, 243, 255, 0.15), ${-rotate.y}px ${rotate.x}px 10px rgba(255, 255, 255, 0.1) inset`
            : '0 2px 15px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Holographic Overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none mix-blend-overlay z-0"
        style={{
          background: `linear-gradient(105deg, transparent 20%, rgba(255, 0, 150, 0.3) 40%, rgba(0, 255, 255, 0.3) 45%, rgba(255, 255, 0, 0.3) 50%, transparent 70%)`,
          transform: `translateX(${rotate.y * 3}%) translateY(${rotate.x * 3}%)`,
          filter: 'brightness(1.5) contrast(1.2)'
        }}
      />

      {/* Decorative Gradient Blob */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-brand-500/20 rounded-full blur-2xl group-hover:bg-brand-500/30 transition-all duration-500" />

      {/* Delete Button */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDelete(link.id);
          }}
          className="p-1 glass rounded-full text-gray-400 hover:text-red-400 hover:bg-red-500/20 transition-all border border-white/10"
          title="삭제"
        >
          <Trash2 size={12} />
        </button>
      </div>

      <div className="p-2 flex-grow flex flex-col relative z-10">
        {/* Header: Icon & Category */}
        <div className="flex items-start justify-between mb-2">
          <div className="p-1.5 bg-white/5 border border-white/10 rounded-lg text-brand-300 shrink-0 shadow-inner">
            <Globe size={14} />
          </div>
          <span className={`px-2 py-0.5 rounded-full text-[9px] font-semibold border ${categoryColors[link.category]}`}>
            {link.category}
          </span>
        </div>

        {/* Content */}
        <div className="mb-1">
          <h3 className="font-serif font-bold text-xs text-white truncate mb-0.5 group-hover:text-brand-300 transition-colors tracking-wide" title={link.title}>
            {link.title}
          </h3>
          <p className="text-gray-400 text-[9px] line-clamp-2 leading-tight h-6 group-hover:text-gray-300 transition-colors font-sans">
            {link.description || "설명이 없습니다."}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-auto pt-2 flex flex-wrap gap-1">
          {link.tags.slice(0, 2).map((tag, idx) => ( // Limit tags to 2
            <span key={idx} className="text-[8px] text-gray-400 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
