import { Sparkles } from 'lucide-react';

export default function Ticker() {
  const events = [
    'Weddings & Receptions',
    'Corporate Conferences',
    'Product Launches',
    'Government Events',
    'Exhibitions & Expos',
    'MICE Events',
    'Cultural Celebrations',
    'Annual Conferences'
  ];

  // Repeat events to make it looping and continuous
  const scrollItems = [...events, ...events, ...events];

  return (
    <div className="bg-[#5c0202] h-[72px] md:h-[88px] flex items-center overflow-hidden whitespace-nowrap border-y border-red-950/10 select-none" aria-hidden="true">
      <div className="flex gap-12 w-max animate-ticker-scroll hover:[animation-play-state:paused] transition-all whitespace-nowrap">
        {scrollItems.map((item, index) => (
          <div key={index} className="flex items-center gap-10 whitespace-nowrap">
            <span className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-white font-body whitespace-nowrap">
              {item}
            </span>
            <span className="text-white/40 text-xs">
              <Sparkles size={11} className="fill-white/20 text-white/40" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
