import { useState } from 'react';
import { ShieldCheck, Award, Sparkles, HelpCircle, Flame, MapPin, ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null);

  const keyStats = [
    { 
      num: '3', 
      label: 'Soundproof Halls',
      short: 'Pillarless & Partitionable',
      detail: 'Fully sound-insulated partition panels that convert the massive 30,000 sq ft hall into discrete customizable spaces instantly.',
      icon: <Sparkles className="w-5 h-5 text-[#E5C084]" />
    },
    { 
      num: '800+', 
      label: 'Secure Parking',
      short: 'Valet & Automated Gate',
      detail: 'Abundant parking managed by custom automatic boom-barriers and specialized professional valet services for VIP arrival.',
      icon: <ShieldCheck className="w-5 h-5 text-[#E5C084]" />
    },
    { 
      num: '5-Star', 
      label: 'Hospitality Caps',
      short: 'Dedicated Captains & Crew',
      detail: 'Dedicated guest relationships coordinators and master banquet captains trained to fulfill diplomatic protocols & premium expectations.',
      icon: <Award className="w-5 h-5 text-[#E5C084]" />
    }
  ];

  return (
    <section 
      id="about" 
      className="relative z-10 py-24 md:py-32 bg-[#FCFAF5]/80 border-b border-[#5c0202]/10 overflow-hidden font-body" 
      aria-labelledby="about-heading"
    >
      {/* Decorative premium side vertical line accent */}
      <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#5c0202] via-[#E5C084] to-transparent hidden lg:block" />

      <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Block: Layered Luxury Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              
              {/* Backing Gold Mesh Ambient Glow */}
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#E5C084]/10 rounded-full blur-[80px] -z-10" />
              
              {/* Main Premium Portrait Image */}
              <div 
                className="w-full aspect-[4/5] rounded-[3px] shadow-2xl relative overflow-hidden group/media border border-[#5c0202]/10"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1000&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '480px'
                }}
                role="img"
                aria-label="Elegant glass lighting accents in Shrutham's main foyer"
              >
                {/* Visual Glassmorphism overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent opacity-60 group-hover/media:opacity-40 transition-opacity duration-500" />
                
                {/* Floating dynamic content inside image */}
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/15 backdrop-blur-md rounded-[2px] border border-white/20 text-white transform translate-y-2 group-hover/media:translate-y-0 transition-transform duration-500">
                  <span className="text-[9px] tracking-[0.2em] uppercase text-[#E5C084] font-bold block mb-1">HYDERABAD'S DESTINATION</span>
                  <p className="text-sm font-light font-display leading-relaxed">Where world-class architecture meets warm Indian hospitality.</p>
                </div>
              </div>

              {/* Overlapping Floating Secondary Image to add depth */}
              <div 
                className="absolute -bottom-8 -right-8 w-44 h-44 hidden md:block rounded-[2px] shadow-2xl border-2 border-white overflow-hidden group/submedia"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&q=80')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/10 group-hover/submedia:bg-black/0 transition-colors duration-300" />
              </div>

              {/* Gilded frame corner elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#E5C084] -z-10" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-[#5c0202]/30 -z-10" />
            </div>
          </div>

          {/* Right Block: Pure editorial storytelling */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-8 bg-[#5c0202]/30" />
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#5c0202]">
                The Shrutham Standard
              </span>
              <span className="h-[1px] w-12 bg-[#5c0202]" />
            </div>

            <h2 id="about-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.1] text-obsidian tracking-tight mb-4">
              Where World-Class Architecture Meets Warm Indian Hospitality
            </h2>

            <h3 className="font-display text-lg sm:text-xl font-semibold text-[#5c0202] tracking-wide mb-8">
              Welcome to Shrutham Convention — Hyderabad's Destination for Elegant Celebrations
            </h3>

            <div className="space-y-6 text-[0.98rem] text-[#2C2824] font-normal leading-relaxed mb-8">
              <p>
                Shrutham Convention is more than a venue — it is a promise of perfection. Strategically located near <span className="font-medium text-obsidian">Nehru Outer Ring Road (ORR) Exit 15, Hyderabad</span>, we offer unmatched accessibility for guests travelling from across the city and beyond. Whether you are planning a grand wedding reception, a corporate conference, a milestone birthday, or a cultural ceremony, our versatile spaces and expert hospitality team transform your vision into a breathtaking reality.
              </p>
              <p>
                From the moment your guests step through our doors, they are welcomed by an ambiance of warmth, sophistication, and refined luxury — setting the tone for an unforgettable occasion.
              </p>
            </div>

            {/* Premium CTA Trigger button with sleek outline slide effect */}
            <div className="mb-12">
              <button
                onClick={() => {
                  window.location.hash = '#about';
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="btn-slide-outline group inline-flex items-center gap-3 font-body text-xs font-semibold tracking-widest uppercase px-8 py-4 rounded-[2px] transition-all duration-300 cursor-pointer shadow-sm"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Interactive Stat Cards */}
            <div className="border-t border-[#5c0202]/15 pt-8">
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-4 h-4 text-[#5c0202]" />
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#5c0202]/70">
                  Click on key metrics to expand highlight details
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {keyStats.map((stat, idx) => {
                  const isSelected = activeHighlight === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`relative cursor-pointer select-none p-5 rounded-[2px] border transition-all duration-300 ${
                        isSelected 
                          ? 'bg-white border-[#E5C084] shadow-md ring-1 ring-[#E5C084]/20' 
                          : 'bg-white/40 hover:bg-white hover:border-[#5c0202]/30 border-[#5c0202]/10 shadow-sm'
                      }`}
                      onMouseEnter={() => setActiveHighlight(idx)}
                      onMouseLeave={() => setActiveHighlight(null)}
                      onClick={() => setActiveHighlight(isSelected ? null : idx)}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-display text-2xl sm:text-3xl font-light text-obsidian tracking-tight">
                          {stat.num}
                        </div>
                        <div className="p-1 bg-[#5c0202]/5 rounded">
                          {stat.icon}
                        </div>
                      </div>
                      
                      <div className="text-xs font-bold text-obsidian tracking-wide uppercase mb-1">
                        {stat.label}
                      </div>
                      <div className="text-[11px] text-mid/70 font-light leading-tight">
                        {stat.short}
                      </div>
                      
                      {/* Interactive Drawer Panel */}
                      {isSelected && (
                        <div className="absolute left-0 right-0 top-full mt-2 bg-[#5c0202] text-white p-4 rounded-[2px] shadow-xl border border-[#5c0202] z-30 text-xs leading-relaxed animate-scale-up">
                          <div className="flex items-center gap-1.5 font-semibold text-[#E5C084] mb-1.5 uppercase tracking-wider text-[10px]">
                            {stat.icon}
                            <span>Key Advantage</span>
                          </div>
                          {stat.detail}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
