import { useState, useEffect } from 'react';
import { Calendar, Compass } from 'lucide-react';

interface HeroProps {
  onOpenBookingTab: () => void;
}

export default function Hero({ onOpenBookingTab }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleScrollToSection = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100vh] lg:min-h-[850px] flex items-center bg-chalk overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* Zoom Background */}
      <div
        className="absolute inset-0 transition-transform duration-[8000ms] ease-out"
        style={{
          transform: isLoaded ? 'scale(1)' : 'scale(1.08)',
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.15) 100%), url('/src/assets/images/shrutham_exterior_1782196718598.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          marginRight: '0px',
          marginBottom: '7px',
          marginLeft: '0px',
          marginTop: '40px',
        }}
        role="img"
        aria-label="Premium Grand Convention Hall Interior"
      />

      {/* Vertical brand watermark text - signature design element */}
      <span
        className="absolute hidden md:inline-block right-10 top-1/2 -translate-y-1/2 rotate-90 origin-center font-display text-[0.65rem] tracking-[0.35em] text-[#5c0202] text-transform uppercase white-space-nowrap pointer-events-none z-20 font-bold"
        aria-hidden="true"
      >
        Shrutham Convention — Pedda Golconda, Hyderabad
      </span>

      {/* Hero Content - Beautiful high contrast luxury glass block */}
      <div className="relative z-10 mx-6 md:mx-12 lg:mx-20 my-20 p-8 md:p-12 lg:p-14 max-w-[780px] w-full bg-white/45 backdrop-blur-xl border border-white/60 shadow-2xl rounded-[12px] shadow-[0_30px_60px_-15px_rgba(92,2,2,0.15)]">
        {/* Page-level SEO H1 (visually hidden to avoid duplicating headers) */}
        <h1 className="sr-only">Hyderabad's Premier Convention Centre — Elegant Spaces for Every Grand Occasion</h1>
        
        <div className="flex items-center gap-4 mb-6">
          <span className="w-8 h-[2px] bg-[#5c0202] block"></span>
          <span className="text-[0.75rem] font-bold tracking-[0.25em] text-[#5c0202] uppercase font-body">
            Hyderabad's Premier Convention Centre
          </span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] text-obsidian tracking-tight mb-4">
          Hyderabad's Finest Venue
          <br />
          for Every <em className="italic text-[#5c0202] font-semibold">Grand</em> Occasion
        </h2>

        <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#5c0202] tracking-wide mb-6">
          Elegant spaces. Impeccable service. Memories that last a lifetime.
        </h3>

        <p className="font-body text-sm md:text-[1rem] text-obsidian font-medium leading-relaxed max-w-xl mb-10">
          Nestled in the heart of Pedda Golconda near Nehru ORR Exit 15, Hyderabad, Shrutham Convention brings together timeless elegance, state-of-the-art facilities with a capacity of up to 3,500 guests, and a dedicated team committed to flawless execution — from intimate gatherings to large-scale events.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
          <button
            onClick={onOpenBookingTab}
            className="btn-slide-crimson flex items-center justify-center gap-2.5 text-white font-body text-xs font-bold tracking-[0.16em] uppercase px-8 py-4 rounded-[4px] transition-all transform hover:-translate-y-[1px] duration-300 shadow-md cursor-pointer"
          >
            <Calendar size={14} /> Book Your Event
          </button>
          <button
            onClick={() => handleScrollToSection('#events')}
            className="btn-slide-outline flex items-center justify-center gap-2 font-body text-xs font-bold tracking-[0.16em] uppercase px-8 py-4 rounded-[4px] transition-all duration-300 cursor-pointer bg-[#620000] text-white hover:bg-[#800000] hover:text-white border-[#620000] shadow-sm"
          >
            <Compass size={14} /> Explore Our Spaces
          </button>
        </div>
      </div>

      {/* Hero Scroll Down Indicator */}
      <button
        onClick={() => handleScrollToSection('#about')}
        className="absolute bottom-10 right-10 hidden md:flex flex-col items-center gap-3 text-slate-custom/60 hover:text-gold transition-colors text-[0.65rem] tracking-[0.2em] font-body uppercase bg-transparent border-none cursor-pointer"
        aria-label="Scroll to About segment"
      >
        <span>Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-custom/40 to-transparent"></div>
      </button>
    </section>
  );
}
