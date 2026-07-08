import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ChevronRight,
  Heart, 
  Briefcase, 
  PartyPopper, 
  Check,
  X,
  Shield,
  Rocket
} from 'lucide-react';
import { EventCategory } from '../types';
import PageHeroLayout from './PageHeroLayout';

interface EventCategoryWithBullets extends EventCategory {
  bullets: string[];
  label: string;
  colTitle: string;
  backgroundImage: string;
  overlayColor: string;
  bgTone: string; // Tailored bg theme classes for column hover fallback
}

const largeIconMap: Record<string, React.ReactNode> = {
  'corporate-events': <Briefcase className="text-gold w-6 h-6" />,
  'government-events': <Shield className="text-gold w-6 h-6" />,
  'trade-exhibitions': <Sparkles className="text-gold w-6 h-6" />,
  'product-launches': <Rocket className="text-gold w-6 h-6" />,
  'luxury-weddings': <Heart className="text-gold w-6 h-6" />,
  'private-celebrations': <PartyPopper className="text-gold w-6 h-6" />,
};

const mapEventIdToDetailId = (id: string) => {
  switch (id) {
    case 'corporate-events': return 'corporate';
    case 'government-events': return 'gov';
    case 'trade-exhibitions': return 'exhibitions';
    case 'product-launches': return 'launches';
    case 'luxury-weddings': return 'weddings';
    case 'private-celebrations': return 'social';
    default: return 'weddings';
  }
};

interface EventsGridProps {
  onSelectEventType: (typeName: string) => void;
  variant?: 'grid' | 'list';
}

export default function EventsGrid({ onSelectEventType, variant = 'grid' }: EventsGridProps) {
  const [activePromoDetail, setActivePromoDetail] = useState<EventCategoryWithBullets | null>(null);

  useEffect(() => {
    if (variant === 'list') {
      document.title = "Event Types & Portfolios | Shrutham Convention Hyderabad";
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', "From corporate summits to royal weddings, explore Shrutham Convention's curated event portfolios in Hyderabad — pillarless halls, five-star hospitality, up to 5,000 guests.");
    }
  }, [variant]);

  const categories: EventCategoryWithBullets[] = [
    {
      id: 'corporate-events',
      name: 'Corporate Events',
      icon: '🏢',
      label: 'ELITE',
      colTitle: 'CORPORATE',
      backgroundImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
      overlayColor: 'bg-[#5D4E43]/30',
      bgTone: 'from-[#221E1B] via-[#1C1816] to-[#121110]',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
      desc: 'Elevate your professional gatherings, annual general meetings, and corporate summits at Hyderabad\'s premier executive venue. Engineered for high-tier conferences, Shrutham offers cutting-edge AV technology, soundproof acoustics, and executive boardrooms.',
      maxCapacity: 'Up to 2,500 Delegates',
      suitableSpaces: 'Grand Sovereign Hall & Executive Boardrooms',
      bullets: [
        'State-of-the-art concert-grade audio-visual systems',
        'Pillarless design ensuring 100% stage visibility',
        'High-speed corporate networking infrastructure',
        'Exclusive executive holding rooms & VIP lounges',
        'Custom delegate dining and lounge setups'
      ]
    },
    {
      id: 'government-events',
      name: 'Government Events',
      icon: '🏛️',
      label: 'SOVEREIGN',
      colTitle: 'GOVERNMENT',
      backgroundImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&q=80',
      overlayColor: 'bg-[#1e293b]/25',
      bgTone: 'from-[#1e293b] via-[#1C1816] to-[#0f172a]',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
      desc: 'Highly secured, fully equipped venue designed to accommodate state dinners, public forums, administrative protocols, and VIP diplomatic summits. Engineered to meet absolute privacy and protocol compliance standards.',
      maxCapacity: 'Up to 3,500 Attendees',
      suitableSpaces: 'Grand Sovereign Hall & VIP Lounges',
      bullets: [
        'Strict perimeter access controls & secure routing',
        'State-mandated backup and security integration',
        'Dedicated media press briefing rooms',
        'Protocol-compliant VIP dining & security details',
        'Command center spaces for event coordination'
      ]
    },
    {
      id: 'trade-exhibitions',
      name: 'Trade Exhibitions',
      icon: '📦',
      label: 'EXPANSIVE',
      colTitle: 'EXHIBITIONS',
      backgroundImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      overlayColor: 'bg-[#1E3A8A]/25',
      bgTone: 'from-[#141C2B] via-[#1C1816] to-[#0E121A]',
      image: 'https://images.unsplash.com/photo-1561489396-888724a1543d?w=800&q=80',
      desc: 'Maximize your brand showcase with soaring 30-foot ceilings, premium climate control, and expansive layout capacities. Perfect for high-end automobile expos, jewelry trade fairs, global art exhibitions, and luxury lifestyle showcases.',
      maxCapacity: 'Up to 5,000 Visitors',
      suitableSpaces: 'Pillarless Convention Center & Pre-Function Foyers',
      bullets: [
        '30-foot clear ceiling height for massive structures',
        'Extensive heavy-load entry for vehicle access',
        'Highly adaptable modular floor plan capabilities',
        '10,000 sq ft premium air-conditioned foyer',
        'Integrated security, power backups, and logistics'
      ]
    },
    {
      id: 'product-launches',
      name: 'Product Launches',
      icon: '🚀',
      label: 'IMPACT',
      colTitle: 'LAUNCHES',
      backgroundImage: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80',
      overlayColor: 'bg-[#2d1215]/25',
      bgTone: 'from-[#2d1215] via-[#1C1816] to-[#120508]',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
      desc: 'Introduce your latest innovations, luxury automobiles, or technology solutions to the world. Create a sensory spectacle using high-load roof rigging, programmable lighting arrays, and massive LED displays.',
      maxCapacity: 'Up to 1,500 Guests',
      suitableSpaces: 'Grand Sovereign Hall & Entrance Plaza',
      bullets: [
        'Drive-in vehicular accessibility for car launches',
        'Advanced laser projection rigging points',
        'Heavy electrical phase support for high-load systems',
        'Spacious outdoor preview lawns & grand foyer',
        'Immersive acoustics with sound reflection mitigation'
      ]
    },
    {
      id: 'luxury-weddings',
      name: 'Luxury Weddings',
      icon: '💍',
      label: 'MAJESTIC',
      colTitle: 'WEDDINGS',
      backgroundImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
      overlayColor: 'bg-[#854D0E]/25',
      bgTone: 'from-[#2A2015] via-[#1C1816] to-[#141210]',
      image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?w=800&q=80',
      desc: 'Host the wedding of your dreams in a setting of unmatched grandeur. Shrutham Convention provides the ultimate canvas for grand Indian weddings, featuring a majestic pillarless hall, flawless staging, custom floral designs, and premium hospitality tailored for royal celebrations.',
      maxCapacity: 'Up to 3,500 Guests',
      suitableSpaces: 'Grand Sovereign Hall & Royal Lawns',
      bullets: [
        '30,000 sq ft pillarless space for panoramic staging',
        'Luxury bridal suites with private lounges',
        'Dedicated valet parking for 800+ premium cars',
        'Custom lighting, sound, and floral coordination',
        'Bespoke high-end culinary catering curation'
      ]
    },
    {
      id: 'private-celebrations',
      name: 'Private Celebrations',
      icon: '🎉',
      label: 'INTIMATE',
      colTitle: 'CELEBRATIONS',
      backgroundImage: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=80',
      overlayColor: 'bg-amber-950/20',
      bgTone: 'from-[#2d1b15] via-[#1C1816] to-[#16100E]',
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80',
      desc: 'Host exquisite birthday galas, milestone anniversaries, sangeets, or upscale social dinners in refined style. Delight your guests with indoor-outdoor transitions and personalized, warm Indian hospitality.',
      maxCapacity: 'Up to 1,200 Guests',
      suitableSpaces: 'Imperial Banquet Hall & Gala Lawns',
      bullets: [
        'Seamless indoor-outdoor flowing layout access',
        'Warm, ambient lighting & decorative staging options',
        'Gourmet street food & global buffet catering',
        'Dedicated kids & elder-friendly lounge spaces',
        'Complete audio systems for musical recitals & DJs'
      ]
    }
  ];

  const displayedCategories = variant === 'grid'
    ? categories.filter(cat => cat.id !== 'government-events' && cat.id !== 'product-launches')
    : categories;

  if (variant === 'list') {
    return (
      <div className="bg-[#FCFAF5] font-body text-slate-custom">
        {/* Swiss-style typographic Hero Section */}
        <PageHeroLayout
          title="EVENTS"
          navItems={[
            { label: 'corporate.', targetId: 'corporate-events', active: true },
            { label: 'government.', targetId: 'government-events' },
            { label: 'exhibitions.', targetId: 'trade-exhibitions' },
            { label: 'launches.', targetId: 'product-launches' },
            { label: 'weddings.', targetId: 'luxury-weddings' },
            { label: 'socials.', targetId: 'private-celebrations' }
          ]}
          paragraphs={[
            <>
              Shrutham Convention is Hyderabad's preeminent address for monumental gatherings of absolute caliber. Architecturally modeled on pillarless structural geometry, Shrutham serves as a versatile blueprint to accommodate <strong className="text-[#5c0202] font-semibold">royal weddings</strong>, high-profile diplomatic summits, massive <strong className="text-[#5c0202] font-semibold">trade exhibitions</strong>, and elite brand launches with five-star precision.
            </>,
            <>
              Spanning multiple climate-controlled halls and manicured lawns, Shrutham facilitates crowds ranging from <strong className="text-[#5c0202] font-semibold">500 to 5,000 guests</strong>. Each event tier is fully backed by certified VIP protocol agents, in-house FSSAI master culinary facilities, high load-bearing stage trusses, and dedicated, state-secured backstage green-rooms.
            </>
          ]}
        />

        <section 
          id="events" 
          className="relative z-10 bg-white text-obsidian border-b border-[#5c0202]/10 py-16 lg:py-24 w-full font-body"
          aria-label="World of Shrutham"
        >
          <div className="site-container px-6 sm:px-8 lg:px-12">
            {/* List layout */}
            <div className="space-y-16 lg:space-y-24">
              {categories.map((cat, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    id={cat.id}
                    key={cat.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: index * 0.05 }}
                  className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center scroll-mt-24 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image Block */}
                  <div className="w-full lg:w-1/2 group">
                    <div className="relative overflow-hidden rounded-[8px] border border-gold/30 aspect-[16/10] sm:aspect-[16/9] shadow-[0_15px_40px_-15px_rgba(92,2,2,0.12)] bg-[#FCFAF5]">
                      {/* Image zoom on hover */}
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>

                  {/* Text details block */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-2">
                      <span className="text-[10px] text-[#5c0202] font-bold uppercase tracking-widest block">
                        {cat.colTitle} SERVICES
                      </span>
                      <h3 className="font-display text-3xl sm:text-4xl font-light text-[#2D2A26] tracking-wide">
                        {cat.name}
                      </h3>
                      <div className="h-[2px] w-16 bg-[#5c0202]" />
                    </div>

                    <p className="font-body text-xs sm:text-[13px] font-light text-slate-custom/95 leading-relaxed text-justify">
                      {cat.desc}
                    </p>

                    {/* Highlights section formatted as a clean list */}
                    <div className="bg-white p-6 border border-gold/20 rounded-[4px] shadow-sm">
                      <h4 className="text-[10px] uppercase text-[#5c0202] font-bold tracking-widest mb-4 flex items-center gap-1.5">
                        <Sparkles size={11} className="text-[#5c0202]" /> Key Features &amp; Capabilities
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {cat.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs font-light text-slate-custom">
                            <Check size={12} className="text-[#5c0202] mt-0.5 shrink-0 stroke-[3]" />
                            <span className="leading-tight">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metas inside clear layout cards */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-y border-gold/20">
                      <div className="bg-white p-3 rounded-[2px] border border-gold/15 shadow-xs">
                        <span className="text-[9px] tracking-widest uppercase text-slate-custom/70 block font-semibold mb-1">Max Capacity</span>
                        <span className="text-xs sm:text-sm font-bold text-[#5c0202] font-mono">{cat.maxCapacity}</span>
                      </div>
                      <div className="bg-white p-3 rounded-[2px] border border-gold/15 shadow-xs">
                        <span className="text-[9px] tracking-widest uppercase text-slate-custom/70 block font-semibold mb-1">Suitable Spaces</span>
                        <span className="text-xs sm:text-sm font-semibold text-[#2D2A26] leading-tight block">{cat.suitableSpaces}</span>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2">
                      <button
                        onClick={() => {
                          const detailId = mapEventIdToDetailId(cat.id);
                          onSelectEventType(cat.name);
                          window.location.hash = `#event/${detailId}`;
                        }}
                        className="inline-flex items-center gap-2 bg-[#5c0202] hover:bg-[#7a0303] text-white px-7 py-3.5 text-xs font-semibold tracking-widest uppercase rounded-[2px] font-body transition-all duration-300 cursor-pointer shadow-md border border-gold/20"
                      >
                        Read More <ChevronRight size={12} className="stroke-[2.5]" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      </div>
    );
  }

  return (
    <section 
      id="events" 
      className="relative z-10 bg-[#161311] text-white border-b border-gold/15 overflow-hidden w-full font-body"
      aria-label="World of Shrutham"
    >
      
      {/* Absolute Header Overlay spanning across full width */}
      <div className="relative pt-16 pb-12 lg:pt-24 lg:pb-0 text-center max-w-4xl mx-auto px-6 z-20 pointer-events-none">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-display text-4xl sm:text-5xl md:text-[54px] font-light text-white tracking-wide leading-tight mb-4 pointer-events-auto select-text"
        >
          Spaces Designed <span className="font-semibold text-[#E5C084]">for Every Occasion</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="font-body text-xs sm:text-[13px] text-white/85 max-w-2xl mx-auto leading-relaxed font-light tracking-wide pointer-events-auto select-text"
        >
          Explore our signature spaces, from majestic weddings and exhibitions to elite corporate conferences and intimate celebrations — meticulously curated for seamless hosting.
        </motion.p>
      </div>

      {/* Grid container matching the luxury layout with ultra-smooth motion */}
      <div className="flex flex-col lg:flex-row w-full min-h-[600px] lg:min-h-[780px] mt-8 lg:mt-0">
        {displayedCategories.map((cat, index) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            onClick={() => {
              const detailId = mapEventIdToDetailId(cat.id);
              onSelectEventType(cat.name);
              window.location.hash = `#event/${detailId}`;
            }}
            className="relative flex-1 group overflow-hidden flex flex-col justify-end pt-40 pb-14 px-6 cursor-pointer border-b lg:border-b-0 border-r border-white/5 last:border-r-0 transition-all duration-700 ease-out lg:hover:flex-[1.32]"
            style={{ originX: 0.5 }}
          >
            {/* Background Cover Scene with Color Mix */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out group-hover:scale-110"
              style={{ backgroundImage: `url('${cat.backgroundImage}')` }}
            />
            
            {/* Solid Brand Tone Overlay */}
            <div className={`absolute inset-0 ${cat.overlayColor} mix-blend-multiply opacity-80 group-hover:opacity-65 transition-opacity duration-700`} />
            
            {/* Dynamic Background Gradient to add depth */}
            <div className={`absolute inset-0 bg-gradient-to-b ${cat.bgTone} mix-blend-color-burn opacity-70 group-hover:opacity-60 transition-opacity duration-700`} />
            
            {/* Top Vignette for Title Legibility */}
            <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-[#161311]/95 via-[#161311]/25 to-transparent pointer-events-none" />
            
            {/* Bottom soft gradient shadow */}
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

            {/* Inner golden glowing border line */}
            <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/20 transition-all duration-700 pointer-events-none rounded-[8px]" />

            {/* Typography Content Header with staggered transitions */}
            <div className="relative z-10 text-center mb-8 transform group-hover:-translate-y-3 transition-transform duration-700 ease-out">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/70 font-semibold block mb-1 group-hover:text-[#E5C084] transition-colors duration-500">
                {cat.label}
              </span>
              <h3 className="font-display text-lg sm:text-xl font-medium text-white tracking-[0.18em] uppercase leading-tight group-hover:scale-105 transition-transform duration-700">
                {cat.colTitle}
              </h3>
            </div>

            {/* Vertically centered rounded aspect portrait card matching the design exactly */}
            <div className="relative z-10 mx-auto w-[82%] sm:w-[65%] md:w-[60%] lg:w-[86%] xl:w-[74%] aspect-[3/4] rounded-[24px] sm:rounded-[32px] overflow-hidden border-[4px] border-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85)] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:-translate-y-4 group-hover:border-[#E5C084]/50 group-hover:shadow-[0_30px_60px_-10px_rgba(229,192,132,0.15),0_30px_70px_-10px_rgba(0,0,0,0.95)]">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Action button appearing on hover */}
            <div className="relative z-10 text-center mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0">
              <span className="text-[9px] tracking-[0.2em] uppercase text-[#E5C084] bg-[#5c0202] border border-gold/30 px-5 py-2.5 rounded-[2px] font-semibold inline-flex items-center gap-1 shadow-2xl transition-all duration-300 hover:bg-[#7a0303]">
                Explore Space <ChevronRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Dynamic Detail Overlay Modal (Fully client-side interactive with premium split-column format) */}
      <AnimatePresence>
        {activePromoDetail && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 cursor-pointer"
            onClick={() => setActivePromoDetail(null)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-chalk text-obsidian w-full max-w-4xl rounded-[4px] shadow-2xl overflow-hidden border border-gold/30 flex flex-col md:flex-row relative cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActivePromoDetail(null)}
                className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-slate-custom rounded-full p-2 hover:text-[#5c0202] transition-all font-body font-mono text-[11px] w-8 h-8 flex items-center justify-center cursor-pointer border border-gold/20 shadow-md"
                aria-label="Close details"
              >
                <X size={14} />
              </button>

              {/* Left Column: Visual Showcase Cover */}
              <div className="w-full md:w-[42%] relative h-48 md:h-auto min-h-[220px] md:min-h-[480px] overflow-hidden flex flex-col justify-end">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${activePromoDetail.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161311] via-[#161311]/30 to-transparent" />
                
                {/* Embedded details */}
                <div className="relative p-6 z-10 text-white space-y-2">
                  <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-gold bg-[#5c0202] px-2.5 py-1 rounded-[1px] inline-block mb-1">
                    {activePromoDetail.label} PRESETS
                  </span>
                  <h4 className="font-display text-2xl sm:text-3xl font-light text-white leading-tight">
                    {activePromoDetail.name}
                  </h4>
                  <div className="h-[1px] w-12 bg-gold/50 my-2" />
                  <p className="text-[11px] text-white/85 font-mono tracking-wider uppercase">
                    Primary Venue: {activePromoDetail.suitableSpaces}
                  </p>
                </div>
              </div>

              {/* Right Column: Detailed Premium Copy & Features */}
              <div className="w-full md:w-[58%] p-6 sm:p-8 md:p-10 flex flex-col justify-between bg-[#FDFBF7]">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-[#5c0202]/5 p-2 rounded-full w-9 h-9 flex items-center justify-center border border-gold/20 shrink-0">
                      {largeIconMap[activePromoDetail.id] || <Sparkles className="text-[#5c0202] w-5 h-5" />}
                    </div>
                    <span className="text-[10px] text-gold font-bold uppercase tracking-widest">
                      Event Factsheet &amp; Amenities
                    </span>
                  </div>

                  <p className="font-body text-[13px] sm:text-sm font-light text-mid leading-relaxed text-justify mb-6">
                    {activePromoDetail.desc}
                  </p>

                  {/* Highlights section formatted as a clean grid */}
                  <div className="mb-6 bg-white p-5 border border-gold/15 rounded-[2px] shadow-sm">
                    <h5 className="text-[10px] uppercase text-[#5c0202] font-bold tracking-widest mb-3 flex items-center gap-1.5">
                      <Sparkles size={11} className="text-gold" /> Key Program Highlights
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activePromoDetail.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs font-light text-obsidian/90 animate-fade-in" style={{ animationDelay: `${bIdx * 80}ms` }}>
                          <Check size={11} className="text-[#5c0202] mt-0.5 shrink-0 stroke-[3]" />
                          <span className="leading-tight">{bullet}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metas inside clear layout cards */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-gold/15 mb-6">
                    <div className="bg-chalk/50 p-2.5 rounded-[2px] border border-gold/10">
                      <span className="text-[9px] tracking-widest uppercase text-mid block font-semibold mb-1">Max Capacity</span>
                      <span className="text-xs sm:text-sm font-bold text-obsidian font-mono">{activePromoDetail.maxCapacity}</span>
                    </div>
                    <div className="bg-chalk/50 p-2.5 rounded-[2px] border border-gold/10">
                      <span className="text-[9px] tracking-widest uppercase text-mid block font-semibold mb-1">Planning Support</span>
                      <span className="text-xs sm:text-sm font-bold text-obsidian">Dedicated Coordinator</span>
                    </div>
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:justify-end pt-2">
                  <button 
                    onClick={() => setActivePromoDetail(null)}
                    className="w-full sm:w-auto border border-gold/30 hover:border-[#5c0202] text-black hover:text-[#5c0202] px-6 py-3 text-xs font-semibold tracking-widest uppercase rounded-[2px] font-body transition-all duration-300 cursor-pointer text-center hover:bg-gold/5"
                  >
                    Close
                  </button>
                  <button 
                    onClick={() => {
                      onSelectEventType(activePromoDetail.name);
                      setActivePromoDetail(null);
                      const bTool = document.getElementById('booking-tool');
                      if (bTool) {
                        bTool.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        window.location.hash = '#contact';
                      }
                    }}
                    className="w-full sm:w-auto bg-[#5c0202] hover:bg-[#7a0303] text-white px-6 py-3 text-xs font-semibold tracking-widest uppercase rounded-[2px] font-body transition-all duration-300 cursor-pointer shadow-md text-center"
                  >
                    Select Event Type &amp; Enquire
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
