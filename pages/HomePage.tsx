import React, { useState, useEffect, useMemo } from 'react';
import { Plus, Search, Ghost, Compass } from 'lucide-react';
import { WebLink, Category } from '../types';
import { LinkCard } from '../components/LinkCard';
import { AddLinkModal } from '../components/AddLinkModal';
import { Button } from '../components/Button';

const LOCAL_STORAGE_KEY = 'my_website_links_v1';

export const HomePage: React.FC = () => {
  const [links, setLinks] = useState<WebLink[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse links from local storage", e);
      }
    }
    // Default Initial Data
    return [
      {
        id: '1',
        title: 'Google',
        url: 'https://google.com',
        description: '전 세계의 정보에 접근할 수 있게 해주는 검색 엔진.',
        category: Category.Other,
        tags: ['검색', '포털'],
        createdAt: Date.now()
      }
    ];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(links));
  }, [links]);

  const handleAddLink = (newLink: WebLink) => {
    setLinks(prev => [newLink, ...prev]);
    setIsModalOpen(false);
  };

  const handleDeleteLink = (id: string) => {
    if (window.confirm('정말로 이 사이트를 삭제하시겠습니까?')) {
      setLinks(prev => prev.filter(link => link.id !== id));
    }
  };

  const filteredLinks = useMemo(() => {
    return links.filter(link => {
      const matchesSearch = (
        link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      const matchesCategory = selectedCategory === 'All' || link.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [links, searchQuery, selectedCategory]);

  const categories = ['All', ...Object.values(Category)];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
          <div className="flex-1 max-w-md mr-4">
            {/* Desktop Search */}
            <div className="hidden md:flex relative">
              <input
                type="text"
                placeholder="검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 border-transparent focus:bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none text-sm"
              />
              <Search className="absolute left-3.5 top-2.5 text-gray-400 w-4 h-4" />
            </div>
            {/* Mobile Search */}
            <div className="md:hidden relative">
              <input
                type="text"
                placeholder="사이트 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-gray-200 shadow-sm focus:ring-2 focus:ring-primary-500 outline-none"
              />
              <Search className="absolute left-3.5 top-3.5 text-gray-400 w-5 h-5" />
            </div>
          </div>
          <Button onClick={() => setIsModalOpen(true)} icon={<Plus size={18} />}>
            추가하기
          </Button>
        </div>

        {/* Category Filter */}
        <div className="mb-8 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat as Category | 'All')}
                className={`
                  whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                  ${selectedCategory === cat 
                    ? 'bg-gray-900 text-white shadow-md transform scale-105' 
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'}
                `}
              >
                {cat === 'All' ? '전체' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredLinks.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredLinks.map((link) => (
              <LinkCard 
                key={link.id} 
                link={link} 
                onDelete={handleDeleteLink} 
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
            {searchQuery || selectedCategory !== 'All' ? (
              <>
                <Compass size={64} className="mb-4 text-gray-300" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">검색 결과가 없습니다</h3>
                <p>다른 검색어나 카테고리를 선택해보세요.</p>
              </>
            ) : (
              <>
                <Ghost size={64} className="mb-4 text-gray-300" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">아직 추가된 사이트가 없습니다</h3>
                <p className="mb-6">자주 방문하는 웹사이트를 추가하여 관리해보세요.</p>
                <Button onClick={() => setIsModalOpen(true)} variant="secondary" icon={<Plus size={16} />}>
                  첫 번째 사이트 추가
                </Button>
              </>
            )}
          </div>
        )}

      <AddLinkModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onAdd={handleAddLink} 
      />
    </div>
  );
};

