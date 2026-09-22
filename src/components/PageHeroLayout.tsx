import React from 'react';

interface PageHeroLayoutProps {
  title: string; // e.g., "ABOUT US."
  navItems: { label: string; targetId?: string; onClick?: () => void; active?: boolean }[];
  paragraphs: React.ReactNode[]; // Array of paragraphs to display on the right
}

export default function PageHeroLayout({ title, navItems, paragraphs }: PageHeroLayoutProps) {
  const handleItemClick = (item: typeof navItems[0]) => {
    if (item.onClick) {
      item.onClick();
    } else if (item.targetId) {
      const el = document.getElementById(item.targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="w-full bg-white border-b border-[#5c0202]/10 py-16 md:py-24 font-body text-slate-custom relative overflow-hidden">
      {/* Background soft light accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial from-[#5c0202]/2 to-transparent rounded-full pointer-events-none -z-10" />
      
      <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
        {/* Huge Display Title */}
        <div className="mb-12 md:mb-16 select-none">
          <h1 className="font-display font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-obsidian">
            {title.replace(/\.$/, '').toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}<span className="text-[#5c0202]">.</span>
          </h1>
        </div>

        {/* Dynamic Multi-Column Body Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sub-navigation/Category List */}
          <div className="md:col-span-3 flex flex-row md:flex-col gap-4 md:gap-3 flex-wrap md:flex-nowrap border-b md:border-b-0 md:border-r border-[#5c0202]/10 pb-6 md:pb-0 md:pr-6">
            {navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleItemClick(item)}
                className={`relative text-left text-sm sm:text-[15px] font-medium hover:text-[#5c0202] transition-colors cursor-pointer py-1 pl-4 block bg-transparent border-none ${
                  item.active
                    ? 'text-[#5c0202] font-semibold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-[2px] before:bg-[#5c0202]'
                    : 'text-[#2C2824]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right Column: Content Paragraphs */}
          <div className="md:col-span-9 space-y-6 max-w-4xl">
            {paragraphs.map((para, idx) => (
              <div 
                key={idx} 
                className="text-[#2C2824] text-sm sm:text-base leading-relaxed font-light"
              >
                {para}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
