import { useState, useEffect } from 'react';
import { Image, X, ZoomIn, Calendar, ArrowRight, ArrowLeft } from 'lucide-react';
import PageHeroLayout from './PageHeroLayout';

interface GalleryItem {
  id: string;
  category: 'weddings' | 'corporate' | 'banquets' | 'outdoors';
  title: string;
  description: string;
  image: string;
  alt: string;
  capacity?: string;
}

export default function GalleryView({ onInquire, variant = 'full' }: { onInquire: (setupTitle?: string) => void; variant?: 'preview' | 'full' }) {
  const [activeTab, setActiveTab] = useState<'all' | 'weddings' | 'corporate' | 'banquets' | 'outdoors'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      category: 'weddings',
      title: 'Royal Wedding Mandap Setup',
      description: 'A grand, cascading hanging rose layout styled with a 44-foot vertical headroom for a royal grand wedding reception.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&q=80',
      alt: 'mandap setup Shrutham Convention royal wedding decor Hyderabad venue reception stage',
      capacity: 'Up to 3,000 guests'
    },
    {
      id: 'g-2',
      category: 'weddings',
      title: 'Golden Chandelier Royal Stage',
      description: 'Overhead warm dimmable light structures controlled via customized digital DMX console presets for luxurious weddings.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1000&q=80',
      alt: 'royal wedding decor Hyderabad venue Shrutham Convention luxury reception hall setup',
      capacity: 'Up to 2,000 guests'
    },
    {
      id: 'g-3',
      category: 'weddings',
      title: 'Traditional Wedding Mandap',
      description: 'Exquisite custom traditional mandap styled on pristine pillarless white premium marble floors.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000&q=80',
      alt: 'mandap setup Shrutham Convention Hyderabad traditional wedding ceremony design',
      capacity: 'Up to 1,500 guests'
    },
    {
      id: 'g-4',
      category: 'weddings',
      title: 'Floral Theme Wedding Reception',
      description: 'Intricate traditional floral backdrops styled with high-contrast warm ambient spotlights.',
      image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1000&q=80',
      alt: 'royal wedding decor Hyderabad venue flower decoration stage setup luxury celebrations',
      capacity: 'Up to 2,500 guests'
    },
    {
      id: 'g-5',
      category: 'corporate',
      title: 'Summit Presentation Hall',
      description: 'State-of-the-art conference hall equipped with dual dynamic screens, presentation laser pointers, and gigabit fiber ethernet.',
      image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=1000&q=80',
      alt: 'corporate summit hall Hyderabad conference room presentation stage setups',
      capacity: 'Up to 500 delegates'
    },
    {
      id: 'g-6',
      category: 'corporate',
      title: 'Conference Stage Setup',
      description: 'Professional panel discussion setup featuring active 500 KVA acoustic-isolated power back-up systems.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1000&q=80',
      alt: 'conference stage setup venue Shrutham Convention corporate event summits',
      capacity: 'Up to 800 delegates'
    },
    {
      id: 'g-7',
      category: 'corporate',
      title: 'Keynote Executive Boardroom',
      description: 'Sound-isolated board meeting suite configured with premium ergonomic seating and motorized projector grids.',
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1000&q=80',
      alt: 'corporate summit hall Hyderabad executive boardroom board meeting setup and seating',
      capacity: 'Up to 120 executives'
    },
    {
      id: 'g-8',
      category: 'corporate',
      title: 'International Plenum & Seminars',
      description: 'Massive pillarless auditorium setup with customizable HVAC zoning and theater seating configurations.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&q=80',
      alt: 'conference stage setup venue international congress auditorium Shrutham Convention',
      capacity: 'Up to 1,200 seats'
    },
    {
      id: 'g-9',
      category: 'banquets',
      title: 'Gourmet Live Catering Stations',
      description: 'Professional FSSAI certified commercial catering layout with separate vegetarian and non-vegetarian serving corridors.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1000&q=80',
      alt: 'live catering station Shrutham banquet hall dining setup Hyderabad gourmet cooking',
      capacity: 'Up to 5,000 covers'
    },
    {
      id: 'g-10',
      category: 'banquets',
      title: 'Luxury Banquet Dining Setup',
      description: 'Five-star grand reception table styling with curated fine china, silver-plated chargers, and signature menus.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1000&q=80',
      alt: 'banquet hall dining setup Hyderabad Shrutham Convention banquet hall luxury table layout',
      capacity: 'Premium table seating'
    },
    {
      id: 'g-11',
      category: 'outdoors',
      title: 'Grand Open Air Amphitheater',
      description: 'Sleek terraced stone-paved pathways set with ambient LED uplights and integrated charging stations around garden borders.',
      image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1000&q=80',
      alt: 'open air wedding venue photos outdoor lawn event Hyderabad scenic amphitheater',
      capacity: 'Up to 3,000 guests'
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const displayItems = variant === 'preview' ? filteredItems.slice(0, 7) : filteredItems;

  // Dynamic SEO and Title tags setup
  useEffect(() => {
    if (variant === 'full') {
      document.title = "Photo Gallery | Shrutham Convention, Hyderabad's Top Venue";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 'Browse photos of Shrutham Convention Hyderabad — royal weddings, corporate summits, banquets, and lawn events. See our world-class spaces in action.');
      }
    }
  }, [variant]);

  // Keyboard navigation for the Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight' || e.key === 'Right') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % displayItems.length : null));
      } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + displayItems.length) % displayItems.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, displayItems.length]);

  const tabs: { id: typeof activeTab; label: string }[] = [
    { id: 'all', label: 'All Layouts' },
    { id: 'weddings', label: 'Royal Weddings' },
    { id: 'corporate', label: 'Corporate & Summits' },
    { id: 'banquets', label: 'Banquets & Culinary' },
    { id: 'outdoors', label: 'Amphitheaters & Lawns' }
  ];

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % displayItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + displayItems.length) % displayItems.length);
    }
  };

  return (
    <div className="bg-[#FCFAF5] font-body text-slate-custom">
      {variant === 'full' && (
        <PageHeroLayout
          title="GALLERY"
          navItems={[
            { label: 'weddings.', targetId: 'gallery-grid', active: true },
            { label: 'corporate.', targetId: 'gallery-grid' },
            { label: 'banquets.', targetId: 'gallery-grid' },
            { label: 'outdoors.', targetId: 'gallery-grid' }
          ]}
          paragraphs={[
            <>
              Browse the visual archive of Shrutham Convention, showcasing the majestic scale and exquisite details of Hyderabad's premier event destination. Explore high-resolution captures of <strong className="text-[#5c0202] font-semibold">royal weddings</strong>, corporate assemblies, state dinners, and lush garden events.
            </>,
            <>
              Each snapshot tells a story of impeccable coordination, concert-grade acoustic rigging, gourmet catering presentations, and majestic crystal chandeliers. Our venues are designed to inspire awe, providing a perfect, pillarless backdrop for high-society celebrations and executive summits alike.
            </>
          ]}
        />
      )}

      <section id="gallery-grid" className="py-20 bg-chalk font-body text-slate-custom scroll-mt-24">
        <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
          
          {/* Descriptive intro header of the section */}
          {variant !== 'full' && (
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[14px] uppercase text-[#5c0202] font-bold tracking-[0.25em] block mb-2">
                Visual Archive
              </span>
              <h1 className="font-display text-3xl sm:text-4xl font-light text-obsidian tracking-tight mb-4">
                A Glimpse Into Our World-Class Spaces
              </h1>
              <div className="h-[1px] bg-[#5c0202]/15 w-24 mx-auto mb-6" />
              <p className="text-xs sm:text-sm font-light text-mid leading-relaxed text-justify sm:text-center">
                From the grandeur of our main hall to the exclusivity of our VIP lounge, every corner of Shrutham Convention has been designed to inspire awe and provide comfort. Explore our world-class event spaces in Hyderabad, browse our grand hall photos, and view our VIP lounge gallery.
              </p>
            </div>
          )}

        {/* Tab category selectors */}
        {variant === 'full' && (
          <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-[#5c0202]/10 pb-6">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setLightboxIndex(null);
                }}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-[2px] transition-all cursor-pointer ${
                  activeTab === tab.id 
                    ? 'bg-[#620000] text-white shadow-md' 
                    : 'bg-white hover:bg-[#620000]/5 text-slate-custom border border-[#5c0202]/10 hover:border-[#5c0202]/30'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Dynamic Image Grid - Custom Bento Grid Layout matching the specified mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 md:auto-rows-[180px] lg:auto-rows-[240px] xl:auto-rows-[260px]">
          {displayItems.map((item, index) => {
            const mod = index % 7;
            let gridSpanClass = '';
            let aspectClass = '';

            switch (mod) {
              case 0: // Large Square (Top Left)
                gridSpanClass = 'md:col-span-2 md:row-span-2';
                aspectClass = 'aspect-square md:aspect-auto';
                break;
              case 1: // Vertical Rect (Top Center-Right)
                gridSpanClass = 'md:col-span-1 md:row-span-1';
                aspectClass = 'aspect-[3/4] md:aspect-auto';
                break;
              case 2: // Vertical Rect (Top Right)
                gridSpanClass = 'md:col-span-1 md:row-span-1';
                aspectClass = 'aspect-[3/4] md:aspect-auto';
                break;
              case 3: // Horizontal Rect (Middle Right)
                gridSpanClass = 'md:col-span-2 md:row-span-1';
                aspectClass = 'aspect-[16/10] md:aspect-auto';
                break;
              case 4: // Vertical Rect (Bottom Left 1)
                gridSpanClass = 'md:col-span-1 md:row-span-1';
                aspectClass = 'aspect-[3/4] md:aspect-auto';
                break;
              case 5: // Vertical Rect (Bottom Left 2)
                gridSpanClass = 'md:col-span-1 md:row-span-1';
                aspectClass = 'aspect-[3/4] md:aspect-auto';
                break;
              case 6: // Horizontal Rect (Bottom Right)
                gridSpanClass = 'md:col-span-2 md:row-span-1';
                aspectClass = 'aspect-[16/10] md:aspect-auto';
                break;
            }

            return (
              <div 
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className={`${gridSpanClass} bg-white border border-gold/15 hover:border-gold/45 rounded-[2px] overflow-hidden shadow-sm group hover:shadow-md transition-all duration-300 cursor-pointer relative flex flex-col`}
              >
                <div className={`relative overflow-hidden w-full h-full min-h-[160px] md:min-h-0 ${aspectClass} bg-[#F2EDE0] flex-1`}>
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gold-pale/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-3 bg-white/95 backdrop-blur-md rounded-full text-slate-custom border border-gold/30 scale-90 group-hover:scale-100 transition-transform duration-300 shadow-sm animate-scale-up">
                      <ZoomIn size={20} className="text-[#9B752E]" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic footer button / CTA at bottom of gallery */}
        {variant === 'preview' ? (
          <div className="mt-12 text-center">
            <button
              onClick={() => {
                window.location.hash = '#gallery';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-slide-crimson inline-flex items-center gap-3 px-8 py-4 text-white text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-[2px] cursor-pointer shadow-md hover:shadow-lg hover:-translate-y-0.5 pointer-events-auto"
            >
              View Full Archive Gallery <ArrowRight size={14} className="text-white" />
            </button>
          </div>
        ) : (
          <div className="mt-16 text-center bg-gold-pale/40 text-slate-custom p-8 md:p-12 border border-gold/25 rounded-[2px] shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent_50%)]" />
            <div className="relative z-10 max-w-xl mx-auto space-y-4">
              <h3 className="font-display text-xl sm:text-2xl font-light text-slate-custom tracking-wider">
                Ready to See These Setups Live?
              </h3>
              <p className="text-xs text-slate-custom/80 font-medium leading-relaxed">
                Every detail matters. Request custom layouts, physical scaling blueprints, and sound configurations with our chief architect in person.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    onInquire();
                    window.location.hash = '#contact';
                  }}
                  className="btn-slide-crimson inline-flex items-center gap-2 px-6 py-3 text-white text-xs font-semibold tracking-widest uppercase transition-all rounded-[2px] cursor-pointer"
                >
                  Inquire Layout Details <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Lightbox Immersive Overlay */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-[#FAF9F6]/98 z-50 flex flex-col justify-between p-4 sm:p-6 animate-fade-in text-slate-custom select-none">
          
          {/* Top Bar controls */}
          <div className="flex justify-between items-center w-full py-2 px-4 z-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-custom/75 flex items-center gap-2">
              <Image size={14} className="text-[#9B752E]" /> Capture {lightboxIndex + 1} of {displayItems.length}
            </span>
            <button 
              onClick={() => setLightboxIndex(null)}
              className="p-2 text-slate-custom hover:text-[#9B752E] transition-colors focus:outline-none cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={26} />
            </button>
          </div>

          {/* Main Visual Carousel Wrapper */}
          <div className="flex-1 flex items-center justify-between relative max-w-5xl mx-auto w-full px-4">
            
            {/* Prev Trigger */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 bottom-1/2 translate-y-1/2 sm:p-3 bg-white/90 backdrop-blur-sm hover:bg-gold-pale/40 text-slate-custom hover:text-[#9B752E] border border-gold/25 rounded-full transition-all focus:outline-none z-10 cursor-pointer shadow-sm"
              aria-label="Previous Media"
            >
              <ArrowLeft size={20} />
            </button>

            {/* Core Image Display */}
            <div className="w-full flex justify-center items-center py-6 h-full max-h-[60vh] sm:max-h-[70vh]">
              <img 
                src={displayItems[lightboxIndex].image} 
                alt={displayItems[lightboxIndex].title} 
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain rounded-[2px] border border-gold/20 shadow-lg animate-fade-in"
              />
            </div>

            {/* Next Trigger */}
            <button 
              onClick={handleNext}
              className="absolute right-0 bottom-1/2 translate-y-1/2 sm:p-3 bg-white/90 backdrop-blur-sm hover:bg-gold-pale/40 text-slate-custom hover:text-[#9B752E] border border-gold/25 rounded-full transition-all focus:outline-none z-10 cursor-pointer shadow-sm"
              aria-label="Next Media"
            >
              <ArrowRight size={20} />
            </button>

          </div>

          {/* Bottom Card text with information and dynamic Inquiry action button */}
          <div className="w-full max-w-3xl mx-auto text-center px-6 pb-6 pt-4 border-t border-gold/20 z-10 space-y-3">
            <span className="text-[10px] uppercase text-[#9B752E] font-bold tracking-widest block font-body">
              {displayItems[lightboxIndex].category} Block
            </span>
            <h3 className="font-display text-lg sm:text-xl font-light text-slate-custom tracking-wide">
              {displayItems[lightboxIndex].title}
            </h3>
            <p className="text-xs text-slate-custom/80 font-medium max-w-2xl mx-auto leading-relaxed">
              {displayItems[lightboxIndex].description}
            </p>
            {displayItems[lightboxIndex].capacity && (
              <p className="text-[10px] text-[#9B752E] uppercase tracking-widest font-semibold">
                Setup Volume Scale: {displayItems[lightboxIndex].capacity}
              </p>
            )}
            
            <div className="pt-2">
              <button 
                onClick={() => {
                  setLightboxIndex(null);
                  onInquire();
                  window.location.hash = '#contact';
                }}
                className="btn-slide-crimson px-6 py-2.5 text-white font-body text-xs font-semibold tracking-widest uppercase transition-colors rounded-[2px] cursor-pointer shadow-sm"
              >
                Reserve This Space Layout
              </button>
            </div>
          </div>

        </div>
      )}
    </section>
  </div>
  );
}
