import React, { useState } from 'react';
import { X, Sparkles, Link as LinkIcon } from 'lucide-react';
import { Category, WebLink } from '../types';
import { Button } from './Button';
import { analyzeLinkWithGemini } from '../services/geminiService';
import { v4 as uuidv4 } from 'uuid';

interface AddLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (link: WebLink) => void;
}

export const AddLinkModal: React.FC<AddLinkModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Category>(Category.Other);
  const [tagsString, setTagsString] = useState('');
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  if (!isOpen) return null;

  const handleAIAnalyze = async () => {
    if (!url) {
      alert("분석할 URL을 입력해주세요.");
      return;
    }

    setIsAnalyzing(true);
    try {
      const result = await analyzeLinkWithGemini(url, title);
      if (result.title) setTitle(result.title);
      setDescription(result.description);
      setCategory(result.category);
      setTagsString(result.tags.join(', '));
    } catch (error) {
      console.error(error);
      alert("AI 분석 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !title) return;

    // Simple heuristic to add https if missing
    let formattedUrl = url.trim();
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = 'https://' + formattedUrl;
    }

    const newLink: WebLink = {
      id: uuidv4(),
      url: formattedUrl,
      title,
      description,
      category,
      tags: tagsString.split(',').map(t => t.trim()).filter(Boolean),
      createdAt: Date.now(),
    };

    onAdd(newLink);
    resetForm();
  };

  const resetForm = () => {
    setUrl('');
    setTitle('');
    setDescription('');
    setCategory(Category.Other);
    setTagsString('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <LinkIcon className="w-5 h-5 text-primary-600" />
            새 사이트 추가
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* URL Input with AI Button */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">URL 주소</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                required
              />
              <Button 
                type="button" 
                variant="secondary" 
                onClick={handleAIAnalyze}
                isLoading={isAnalyzing}
                icon={<Sparkles size={16} className="text-purple-500" />}
                className="shrink-0 border-purple-200 bg-purple-50 hover:bg-purple-100 text-purple-700"
              >
                AI 자동완성
              </Button>
            </div>
            <p className="text-xs text-gray-500">URL을 입력하고 'AI 자동완성'을 누르면 정보를 자동으로 채워줍니다.</p>
          </div>

          {/* Title & Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">사이트 이름</label>
              <input
                type="text"
                placeholder="예: 네이버"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">카테고리</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none bg-white"
              >
                {Object.values(Category).map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">설명</label>
            <textarea
              placeholder="이 사이트에 대한 간단한 설명을 입력하세요."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
            />
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">태그 (쉼표로 구분)</label>
            <input
              type="text"
              placeholder="기술, 블로그, 검색..."
              value={tagsString}
              onChange={(e) => setTagsString(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            />
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <Button type="button" variant="ghost" onClick={onClose}>취소</Button>
            <Button type="submit" variant="primary">사이트 추가</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
