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
          <h1 className="font-sans font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none text-obsidian uppercase">
            {title.endsWith('.') ? title : `${title}.`}
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
                className={`text-left text-xs sm:text-sm font-medium tracking-tight hover:text-[#5c0202] transition-colors cursor-pointer py-1 block ${
                  item.active 
                    ? 'text-[#5c0202] font-semibold' 
                    : 'text-[#2C2824]/65'
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
                className="text-[#2C2824] text-sm sm:text-base leading-relaxed font-light text-justify"
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
