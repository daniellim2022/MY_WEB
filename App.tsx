import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Plus, Search, Ghost, Compass } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WebViewer } from './components/WebViewer';
import { LinkCard } from './components/LinkCard';
import { AddLinkModal } from './components/AddLinkModal';
import { Button } from './components/Button';
import { WebLink, Category } from './types';
import { PhysicsWorld } from './components/PhysicsWorld';
import { PhysicsItem } from './components/PhysicsItem';
import { TestComponent } from './components/Test';

const LOCAL_STORAGE_KEY = 'my_website_links_v2';

const App: React.FC = () => {
  const [links, setLinks] = useState<WebLink[]>(() => {
    const defaultLinks: WebLink[] = [
      {
        id: 'neocity-architect',
        title: 'NeoCity Architect',
        url: window.location.origin + import.meta.env.BASE_URL + 'neocity-architect/index.html',
        description: '미래형 해상 도시 건설 시뮬레이션',
        category: Category.Game,
        tags: ['Game', 'Simulation', 'City Builder'],
        createdAt: Date.now(),
        isSystem: true
      },
      {
        id: 'spiritbound',
        title: 'Spiritbound: 주술의 각성',
        url: window.location.origin + import.meta.env.BASE_URL + 'spiritbound/index.html',
        description: '영혼도시 악령 퇴치 액션 RPG',
        category: Category.Game,
        tags: ['Game', 'Action', 'RPG'],
        createdAt: Date.now(),
        isSystem: true
      },
      {
        id: 'poke-pixel',
        title: 'Poke-Pixel: Red Quest',
        url: window.location.origin + import.meta.env.BASE_URL + 'poke-pixel/index.html',
        description: '레트로 감성의 픽셀 포켓몬 모험',
        category: Category.Game,
        tags: ['Game', 'RPG', 'Pixel'],
        createdAt: Date.now(),
        isSystem: true
      },
      {
        id: 'iron-fist',
        title: 'Iron Fist: WebGL Arena',
        url: window.location.origin + import.meta.env.BASE_URL + 'iron-fist/index.html',
        description: '강철의 주먹으로 펼쳐지는 3D 격투 액션',
        category: Category.Game,
        tags: ['Game', 'Action', '3D', 'Fighting'],
        createdAt: Date.now(),
        isSystem: true
      },
      {
        id: 'undertale',
        title: 'Undertale: Asgore Battle',
        url: window.location.origin + import.meta.env.BASE_URL + 'undertale/index.html',
        description: '언더테일 아스고어 보스전 구현',
        category: Category.Game,
        tags: ['Game', 'RPG', 'Boss Battle'],
        createdAt: Date.now(),
        isSystem: true
      },
      {
        id: 'blind-timer',
        title: 'Blind Timer',
        url: window.location.origin + import.meta.env.BASE_URL + 'blind-timer/index.html',
        description: '보이지 않는 10초를 맞춰라!',
        category: Category.Game,
        tags: ['Game', 'Casual', 'Timing'],
        createdAt: Date.now(),
        isSystem: true
      },
      {
        id: 'do-not-press',
        title: 'Do Not Press',
        url: window.location.origin + import.meta.env.BASE_URL + 'do-not-press/index.html',
        description: '절대! 절대 누르지 마시오.',
        category: Category.Game,
        tags: ['Game', 'Clicker', 'Psychological'],
        createdAt: Date.now(),
        isSystem: true
      },
      {
        id: 'dont-smile',
        title: 'Don\'t Smile Challenge',
        url: window.location.origin + import.meta.env.BASE_URL + 'dont-smile-challenge/index.html',
        description: 'AI가 당신의 웃음을 감지합니다.',
        category: Category.Game,
        tags: ['Game', 'AI', 'Camera'],
        createdAt: Date.now(),
        isSystem: true
      },
      {
        id: 'petty-court',
        title: 'Solomon\'s AI Court',
        url: window.location.origin + import.meta.env.BASE_URL + 'petty-court/index.html',
        description: '사소한 분쟁을 AI가 판결해드립니다.',
        category: Category.Utility,
        tags: ['AI', 'Utility', 'Fun'],
        createdAt: Date.now(),
        isSystem: true
      },
      {
        id: 'voice-copter',
        title: 'Voice Copter',
        url: window.location.origin + import.meta.env.BASE_URL + 'voice-copter/index.html',
        description: '목소리로 조종하는 헬리콥터',
        category: Category.Game,
        tags: ['Game', 'Voice Control', 'Arcade'],
        createdAt: Date.now(),
        isSystem: true
      },
      {
        id: 'blank-judge',
        title: 'The Blank Judge',
        url: window.location.origin + import.meta.env.BASE_URL + 'blank-judge/index.html?v=fix2',
        description: 'AI 심문관 K와의 심리 추리 게임',
        category: Category.Game,
        tags: ['Game', 'AI', 'Puzzle', 'Mystery'],
        createdAt: Date.now(),
        isSystem: true
      }
    ];

    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      try {
        const parsed: WebLink[] = JSON.parse(saved);
        const userLinks = parsed.filter(l =>
          !l.isSystem &&
          l.id !== 'default-neocity' &&
          l.title !== 'NeoCity Architect' &&
          l.title !== 'Spiritbound: 주술의 각성'
        );
        return [...defaultLinks, ...userLinks];
      } catch (e) {
        console.error("Failed to parse links from local storage", e);
      }
    }
    return defaultLinks;
  });

  const [selectedUrl, setSelectedUrl] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [isRoomActive, setIsRoomActive] = useState(false);
  // Gravity is always effectively "on" for hanging items, but we need them to start at their positions.
  // Elastic mode handles the pinning.


  // App dimensions for layout calculation
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800
  });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(links));
  }, [links]);

  /* Removed gravity timer - Elastic items hang immediately */

  const handleAddLink = (newLink: WebLink) => {
    setLinks(prev => [newLink, ...prev]);
    setIsModalOpen(false);
  };

  const handleDeleteLink = (id: string) => {
    if (window.confirm('정말로 이 사이트를 삭제하시겠습니까?')) {
      setLinks(prev => prev.filter(link => link.id !== id));
      const deletedLink = links.find(link => link.id === id);
      if (deletedLink && selectedUrl === deletedLink.url) {
        setSelectedUrl(null);
      }
    }
  };

  const handleCardClick = (url: string) => {
    setSelectedUrl(url);
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

  // -- Layout Calculation --
  const CARD_WIDTH = 120; // Reduced to 50%
  const CARD_HEIGHT = 80; // Reduced to 50% approx
  const GAP = 12;
  const TOP_OFFSET = 550; // App Grid Start
  const CATEGORY_Y = TOP_OFFSET - 60; // Just above the grid (was 170)

  const getGridPosition = (index: number, totalWidth: number) => {
    const cols = Math.max(1, Math.floor((totalWidth - 48) / (CARD_WIDTH + GAP)));
    const row = Math.floor(index / cols);
    const col = index % cols;
    const gridWidth = cols * CARD_WIDTH + (cols - 1) * GAP;
    const startX = (totalWidth - gridWidth) / 2;

    return {
      x: startX + col * (CARD_WIDTH + GAP) + CARD_WIDTH / 2,
      y: TOP_OFFSET + row * (CARD_HEIGHT + GAP) + CARD_HEIGHT / 2
    };
  };

  // Calculate Total Height for Scroll
  const cols = Math.max(1, Math.floor((windowSize.width - 48) / (CARD_WIDTH + GAP)));
  const rows = Math.ceil(filteredLinks.length / cols);
  const contentHeight = TOP_OFFSET + rows * (CARD_HEIGHT + GAP) + 100; // Extra padding
  const totalHeight = Math.max(windowSize.height, contentHeight);

  return (
    <div className={`min-h-screen bg-background text-white font-sans selection:bg-brand-500/30 relative flex flex-col transition-all duration-300 overflow-y-auto custom-scrollbar`}>
      {/* Magnificent Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#030014]">
        {/* Deep Space Background Image */}
        <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2011/12/14/12/17/galaxy-11098_1280.jpg')] bg-cover bg-center opacity-30 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014]" />

        {/* Animated Nebulas */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />

        {/* Noise */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
      </div>

      {/* ROOM Toggle Button */}
      {/* ROOM Toggle Button - Only visible on Main Screen */}
      {!selectedUrl && (
        <button
          onClick={() => setIsRoomActive(!isRoomActive)}
          className={`fixed bottom-8 right-8 z-50 px-6 py-6 rounded-full font-bold text-xl tracking-widest transition-all duration-500 border
            ${isRoomActive
              ? 'bg-amber-500/20 border-amber-400 text-amber-100 shadow-[0_0_40px_rgba(251,191,36,0.6)] scale-105'
              : 'bg-black/40 border-white/10 text-white/50 hover:bg-black/60 hover:text-amber-500/80 hover:border-amber-500/30'
            }
          `}
        >
          {isRoomActive ? 'GATE : OPEN' : 'GATE OF BABYLON'}
        </button>
      )}



      <main className={`flex-grow w-full mx-auto flex flex-col min-h-screen relative z-10 transition-all duration-500`}>
        {selectedUrl ? (
          <div className="flex flex-col h-screen relative z-30 bg-[#030014]/90 backdrop-blur-md">
            {/* Fixed Navbar (matches main screen look) */}
            <div className="absolute top-0 left-0 w-full z-50">
              <Navbar onLogoClick={() => setSelectedUrl(null)} />
            </div>

            {/* Content */}
            <div className="flex-grow w-full pt-20 pb-16 relative overflow-hidden">
              <WebViewer
                url={selectedUrl}
                onBack={() => setSelectedUrl(null)}
                initialMaxWidth={selectedUrl.includes('poke-pixel') ? 'max-w-md' : undefined}
              />
            </div>

            {/* Fixed/Static Footer */}
            <div className="absolute bottom-0 left-0 w-full z-40 bg-black/20 backdrop-blur-md">
              <Footer />
            </div>
          </div>
        ) : (
          <PhysicsWorld gravity={{ x: 0, y: 1 }} debug={false} isRoomActive={isRoomActive} height={totalHeight}>
            {/* Destructible Navbar */}
            <PhysicsItem
              id="navbar"
              x={windowSize.width / 2}
              y={60} // Adjusted Y for hanging
              initialY={-300} // Fall from sky
              width={windowSize.width}
              height={50}
              isElastic={true} // Bungee
              className="z-50"
            >
              <div className="scale-75 origin-top"> {/* Scale down Navbar visual */}
                <Navbar onLogoClick={() => setSelectedUrl(null)} />
              </div>
            </PhysicsItem>

            {/* Destructible Footer */}
            <PhysicsItem
              id="footer"
              x={windowSize.width / 2}
              y={totalHeight - 30}
              width={windowSize.width}
              height={50} // Reduced Height
              isStatic={true}
              className="z-50"
            >
              <div className="scale-75 origin-bottom">
                <Footer />
              </div>
            </PhysicsItem>

            {/* Search Bar - Physics Item */}
            <PhysicsItem
              id="search-bar"
              x={windowSize.width / 2}
              y={CATEGORY_Y - 60} // Placed directly ABOVE the Categories
              initialY={-200}
              width={Math.min(350, windowSize.width - 40)}
              height={50}
              isElastic={true}
              className="z-50 cursor-grab active:cursor-grabbing"
            >
              <div className="w-full h-full px-2">
                <div className="relative group w-full">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-400 transition-colors">
                    <Search size={16} />
                  </div>
                  <input
                    type="text"
                    placeholder="검색"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 h-12 rounded-full glass-panel border border-white/20 text-white placeholder-gray-500 focus:bg-white/10 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all text-sm shadow-[0_0_15px_rgba(0,0,0,0.3)] backdrop-blur-xl"
                  />
                </div>
              </div>
            </PhysicsItem>

            {/* Add Button */}
            <PhysicsItem
              id="add-button"
              x={windowSize.width / 2 + 200}
              y={CATEGORY_Y - 60} // Placed directly ABOVE the Categories
              initialY={-200}
              width={40}
              height={40}
              isCircle={true}
              restitution={0.8}
              isElastic={true}
              className="z-50 cursor-pointer"
            >
              <div
                onClick={() => setIsModalOpen(true)}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 flex items-center justify-center shadow-[0_0_15px_rgba(79,70,229,0.5)] border border-white/20 hover:scale-110 transition-transform"
              >
                <Plus size={18} className="text-white" />
              </div>
            </PhysicsItem>

            {/* --- GIANT TITLE (Space Filler) --- */}
            <PhysicsItem
              id="main-title"
              x={windowSize.width / 2}
              y={280} // Center of the void
              initialY={-400}
              width={500}
              height={140}
              isElastic={true}
              className="z-20 pointer-events-none" // Non-interactive click, just visual
            >
              <div className="w-full h-full flex items-center justify-center relative">
                <h1 className="text-[6rem] font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                  style={{ fontFamily: 'Impact, sans-serif', WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}
                >
                  MY SPACE
                </h1>
                <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full -z-10 opacity-30" />
              </div>
            </PhysicsItem>

            {/* Categories */}
            {categories.map((cat, idx) => {
              const totalW = categories.length * 60; // Reduced spacing
              const startX = (windowSize.width - totalW) / 2;
              return (
                <PhysicsItem
                  key={cat}
                  id={`cat-${cat}`}
                  x={startX + idx * 60 + 30}
                  y={CATEGORY_Y} // Positioned right above Apps
                  initialY={-150 - Math.random() * 100} // Fall from sky with slight variance
                  width={50}
                  height={30}
                  isElastic={true} // Bungee Effect
                  className="z-20"
                >
                  <button
                    onClick={() => setSelectedCategory(cat as Category | 'All')}
                    className={`
                              whitespace-nowrap px-2 py-1 rounded-full text-[10px] font-semibold transition-all duration-300 border backdrop-blur-md w-full h-full flex items-center justify-center
                              ${selectedCategory === cat
                        ? 'bg-brand-600/80 border-brand-500 text-white shadow-[0_0_10px_rgba(79,70,229,0.4)]'
                        : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:text-white'}
                            `}
                  >
                    {cat === 'All' ? '전체' : cat}
                  </button>
                </PhysicsItem>
              )
            })}

            {/* Link Cards */}
            {filteredLinks.map((link, idx) => {
              const pos = getGridPosition(idx, windowSize.width);
              return (
                <PhysicsItem
                  key={link.id}
                  id={`link-${link.id}`}
                  x={pos.x}
                  y={pos.y}
                  initialX={pos.x + (Math.random() - 0.5) * 200} // Random horizontal sway
                  initialY={-100 - Math.random() * 400} // Rain from sky
                  width={CARD_WIDTH}
                  height={CARD_HEIGHT}
                  className="z-10"
                  restitution={0.5}
                  friction={0.1}
                  isElastic={true} // Enable Bungee Effect
                >
                  <div
                    className="w-full h-full"
                    onClick={() => handleCardClick(link.url)}
                  >
                    <LinkCard
                      link={link}
                      onDelete={handleDeleteLink}
                      isSelected={false}
                    />
                  </div>
                </PhysicsItem>
              );
            })}

          </PhysicsWorld>

        )}
      </main>



      <AddLinkModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddLink}
      />
    </div >
  );
};

export default App;
