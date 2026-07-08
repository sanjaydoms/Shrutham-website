import React from 'react';
import { Facility } from '../types';
import { 
  Building2, 
  Crown, 
  Accessibility, 
  Sprout, 
  ConciergeBell, 
  ArrowRight,
  Users
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  'convention-hall': <Building2 className="w-5 h-5" />,
  'grand-ballroom': <Crown className="w-5 h-5" />,
  'arrival-lobby': <Accessibility className="w-5 h-5" />,
  'landscaped-lawns': <Sprout className="w-5 h-5" />,
  'vip-lounges': <Crown className="w-5 h-5" />,
  'guest-rooms': <ConciergeBell className="w-5 h-5" />,
};

interface VisualFacility extends Facility {
  image: string;
}

export default function FacilitiesGrid() {
  const facilities: VisualFacility[] = [
    {
      id: 'convention-hall',
      name: 'Main Convention Hall',
      icon: '🏟️',
      spec: 'Pillar-Free. Double-Height.',
      desc: 'Hyderabad\'s benchmark for large corporate assemblies, product launches, and international summits. Designed 100% pillar-free with integrated smart acoustic systems.',
      capacityRange: 'Up to 5,000 guests',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'grand-ballroom',
      name: 'Grand Ballroom',
      icon: '👑',
      spec: 'Royal. Warm-Crystal Lighting.',
      desc: 'The crowning jewel of Shrutham, featuring custom crystal chandeliers and richly textured royal walls — an elegant setting for signature weddings and grand banquets.',
      capacityRange: 'Up to 3,200 guests',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'arrival-lobby',
      name: 'Arrival Lobby & Atrium',
      icon: '🏛️',
      spec: 'Double-Height Grand Entrance.',
      desc: 'A glass-facade lobby flooded with natural light, adorned with traditional Indian Jaali screen art, welcoming guests in comfort and style.',
      capacityRange: 'Up to 1,500 guests',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'landscaped-lawns',
      name: 'Landscaped Lawns',
      icon: '🌿',
      spec: 'Scenic Open-Air Gardens.',
      desc: 'Manicured evergreen lawns framed by seasonal flora and architectural night lighting — ideal for open-air weddings, al fresco dining, and receptions.',
      capacityRange: 'Up to 4,000 guests',
      image: 'https://images.unsplash.com/photo-1545232979-8bf34eb9757b?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'vip-lounges',
      name: 'VIP Lounges',
      icon: '🛡️',
      spec: 'Prestigious Private Lounges.',
      desc: 'Reserved for speakers, bridal parties, and VIP delegates, with plush seating, high-speed Wi-Fi, private restrooms, and discreet access.',
      capacityRange: 'Up to 200 guests',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop&q=80'
    },
    {
      id: 'guest-rooms',
      name: 'Luxury Guest Suites',
      icon: '🛎️',
      spec: '5-Star Integrated Rooms.',
      desc: 'Five-star suites for traveling hosts and dignitaries, with modern furnishings, bespoke bedding, and round-the-clock butler support.',
      capacityRange: '50 Elite Suites',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=80'
    }
  ];

  return (
    <section id="facilities" className="relative z-10 py-24 md:py-32 bg-[#FCFAF5] border-b border-gold/15 overflow-hidden" aria-labelledby="facilities-heading">
      
      {/* Delicate background geometric flares */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial from-[#5c0202]/3 to-transparent rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-radial from-[#5c0202]/2 to-transparent rounded-full pointer-events-none" />

      <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
        
        {/* Header content with luxury framing */}
        <div className="max-w-[800px] mx-auto text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 bg-[#5c0202]/5 border border-[#5c0202]/15 text-[#5c0202] text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase font-body rounded-full mb-5">
            OUR SPACES
          </span>
          <h2 id="facilities-heading" className="font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.15] text-obsidian tracking-tight mb-6 text-center">
            Signature Spaces Crafted for <span className="text-[#5c0202] font-semibold block sm:inline">Unforgettable Occasions</span>
          </h2>
          <div className="w-24 h-[1px] bg-[#5c0202]/30 mx-auto mb-6" />
          <p className="font-body text-base md:text-lg text-mid font-light leading-relaxed max-w-2xl mx-auto">
            Explore our curated selection of grand indoor venues, breathtaking open-air lawns, and luxury amenities tailored to deliver seamless and majestic event experiences.
          </p>
        </div>

        {/* 6 Elegant Cards in 2 Rows (3-column layout on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              onClick={() => {
                window.location.hash = `#facility/${fac.id}`;
              }}
              className="group bg-white rounded-[4px] border border-[#5c0202]/10 overflow-hidden shadow-xs hover:shadow-[0_20px_40px_rgba(92,2,2,0.06)] hover:border-[#5c0202]/30 transition-all duration-500 flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Beautiful high-quality space image with zoom */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating badge for capacity */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-[2px] shadow-sm">
                    <Users className="w-3.5 h-3.5 text-[#5c0202]" />
                    <span className="font-body text-[10px] font-bold tracking-wider text-obsidian uppercase">
                      {fac.capacityRange}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  {/* Category Indicator Tag */}
                  <div className="flex items-center gap-2 mb-3.5">
                    <span className="w-8 h-8 rounded-full bg-[#5c0202]/5 flex items-center justify-center text-[#5c0202]">
                      {iconMap[fac.id] || <span>✨</span>}
                    </span>
                    <span className="font-body text-[10px] font-bold tracking-widest text-[#5c0202] uppercase">
                      {fac.spec}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-[1.45rem] font-medium text-obsidian mb-3 leading-snug group-hover:text-[#5c0202] transition-colors">
                    {fac.name}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-[0.88rem] text-[#2C2824] font-normal leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="px-8 pb-8 pt-4 border-t border-gold/10 flex justify-between items-center bg-gradient-to-b from-transparent to-[#FCFAF5]/30">
                <span className="font-body text-[10px] font-semibold text-mid tracking-widest uppercase">
                  Details &amp; Specifications
                </span>
                <span className="inline-flex items-center gap-1 font-body text-[11px] font-bold tracking-widest text-[#5c0202] uppercase group-hover:translate-x-1.5 transition-transform duration-300">
                  EXPLORE <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Center-aligned "Explore More Spaces" action button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => {
              window.location.hash = '#facilities';
            }}
            className="inline-flex items-center gap-3 bg-[#5c0202] hover:bg-[#7a0303] text-white font-body text-xs font-semibold tracking-[0.22em] uppercase px-10 py-5 rounded-[2px] transition-all duration-300 cursor-pointer shadow-[0_12px_24px_rgba(92,2,2,0.15)] hover:shadow-[0_18px_36px_rgba(92,2,2,0.25)] hover:-translate-y-1"
          >
            <span>EXPLORE MORE SPACES</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
