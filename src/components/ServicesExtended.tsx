import React, { useEffect } from 'react';
import { Check, Sparkles, Utensils, Music, ShieldCheck, PenTool, Car } from 'lucide-react';
import PageHeroLayout from './PageHeroLayout';

const iconMap: Record<string, React.ReactNode> = {
  catering: <Utensils className="w-5 h-5 text-[#5c0202]" />,
  av: <Music className="w-5 h-5 text-[#5c0202]" />,
  curator: <ShieldCheck className="w-5 h-5 text-[#5c0202]" />,
  branding: <PenTool className="w-5 h-5 text-[#5c0202]" />,
  logistics: <Car className="w-5 h-5 text-[#5c0202]" />,
};

export default function ServicesExtended() {
  // Page-Level SEO handling
  useEffect(() => {
    document.title = "Event Services | Shrutham Convention, Hyderabad's Top Venue";
    
    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Explore Shrutham Convention's event services in Hyderabad — bespoke catering, AV production, event planning, décor, and VIP valet & logistics. Enquire now.");
  }, []);

  const servicesList = [
    {
      id: 'catering',
      title: 'Bespoke Gourmet Catering',
      subtitle: 'Gastronomy Executed Flawlessly',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1200&auto=format&fit=crop&q=80',
      imageAlt: 'Live catering station at Shrutham Convention Hyderabad banquet',
      desc: 'Our FSSAI-certified, state-of-the-art commercial culinary facility is capable of executing up to 10,000 multi-cuisine covers daily. Under the guidance of master chefs, we offer customizable silver-service banquets, fine dining plated courses, and dynamic live stations. We maintain completely isolated, independent preparation lines for vegetarian and non-vegetarian menus.',
      features: [
        'Segregated veg and non-veg culinary stations',
        'Traditional regional, authentic royal, and international menus',
        'Custom interactive live carving and dessert stations',
        'Artisanal mixology bar and high-tea curations',
        'Certified premium silver-platter table service protocols'
      ]
    },
    {
      id: 'av',
      title: 'Acoustic & Audio-Visual Production',
      subtitle: 'Immersive Sensory Systems',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&auto=format&fit=crop&q=80',
      imageAlt: 'Ultra-HD LED stage lighting setup Shrutham Convention',
      desc: 'Achieve concert-grade auditory clarity and visual impact. Shrutham\'s spaces are engineered with NRC 0.85 soundproofing panels and dynamic digital AV backbones. We provide integrated Ultra-HD LED walls, automated ambient color washes, customizable intelligent staging, and a dedicated team of sound and light engineers to run your event.',
      features: [
        'State-of-the-art line array acoustic sound systems',
        'High-density indoor and outdoor LED screen walls',
        'Automated DMX-controlled theater and event lighting',
        'Symmetrical rigging points with elite weight capacities',
        'Real-time multi-angle broadcasting and recording'
      ]
    },
    {
      id: 'curator',
      title: 'Elite Event Curatorship & Planning',
      subtitle: 'Seamless High-Society Support',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&auto=format&fit=crop&q=80',
      imageAlt: 'Sophisticated event coordinators managing a premium dinner reception',
      desc: 'Every milestone event at Shrutham is assigned a dedicated Event Manager who acts as a single point of coordination. From aligning vendors to mapping out precise minute-by-minute itineraries, our staff is trained to deliver impeccable high-society hospitality with absolute zero-error execution.',
      features: [
        'Dedicated senior event relations specialist',
        'Comprehensive 3D space-layout digital mapping',
        'Discrete high-profile security and protocol handling',
        'Seamless backstage and talent green-room management',
        'Customizable VIP welcoming and concierge staff'
      ]
    },
    {
      id: 'branding',
      title: 'Production, Décor & Creative Branding',
      subtitle: 'Crafting Exquisite Visual Identities',
      image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1200&auto=format&fit=crop&q=80',
      imageAlt: 'Floral wedding backdrop décor Shrutham Convention Hyderabad',
      desc: 'Make a definitive statement. Our creative production partners specialize in transforming Shrutham\'s blank-canvas areas into high-concept experiences. From intricate traditional hand-crafted floral backdrops for weddings to sleek, minimal corporate exhibitions and dynamic branded media-walls.',
      features: [
        'Custom structural build setups and exhibition stalls',
        'Curated floral arrangements and thematic floral sculptures',
        'High-contrast corporate entrance branding and media arches',
        'Custom fabric draping and bespoke lounge setups',
        'Dedicated on-site signage and interactive digital screens'
      ]
    },
    {
      id: 'logistics',
      title: 'Valet, Transport & VIP Logistics',
      subtitle: 'Grand Arrivals. Safe Transitions.',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=1200&auto=format&fit=crop&q=80',
      imageAlt: 'Luxury premium sedans lined up outside the grand entrance valet bay',
      desc: 'Ensure guest arrivals are graceful and secure. Shrutham offers structured multi-level parking accommodating over 2,000 cars, complete with professional valet systems. We feature discrete private VIP drop-off lanes, secure green-rooms with direct back-alley transfers, and exclusive helipad-to-door access.',
      features: [
        'Multi-level secure parking for over 2,000 vehicles',
        'Professional, rapid high-capacity valet service team',
        'Dedicated secure VIP drop-off bays and access points',
        'Luxury chauffeur-driven golf carts for green transport',
        'Seamless coordination with local transport and shuttle systems'
      ]
    }
  ];

  return (
    <div className="bg-[#FCFAF5] font-body text-slate-custom">
      
      {/* Swiss-style Typographic Hero Section */}
      <PageHeroLayout
        title="SERVICES"
        navItems={[
          { label: 'catering.', targetId: 'catering', active: true },
          { label: 'audio-visual.', targetId: 'av' },
          { label: 'planning.', targetId: 'curator' },
          { label: 'décor.', targetId: 'branding' },
          { label: 'logistics.', targetId: 'logistics' }
        ]}
        paragraphs={[
          <>
            Shrutham Convention provides a complete suite of elite services to guarantee seamless orchestration for high-society affairs. Supported by our certified in-house experts and strategic premium partners, we offer <strong className="text-[#5c0202] font-semibold">bespoke gourmet catering</strong>, concert-grade acoustic engineering, ultra-high-definition visual displays, and high-capacity secure logistics. Every movement is handled with absolute professional precision.
          </>,
          <>
            From FSSAI-certified master kitchens capable of executing up to <strong className="text-[#5c0202] font-semibold">10,000 covers daily</strong> with strictly segregated vegetarian and non-vegetarian preparation streams, to DMX-controlled intelligent stage lighting rigs, Shrutham ensures zero operational lag. Our dedicated client managers operate under strict SLAs to manage vendor integrations, live telemetry broadcasting, and custom VIP concierge services.
          </>
        ]}
      />

      {/* Services List with Elegant Panels */}
      <section className="py-20 md:py-28 border-b border-[#5c0202]/10 relative overflow-hidden bg-white">
        
        {/* Background decorative elements */}
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-radial from-[#5c0202]/3 to-transparent rounded-full pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-radial from-[#5c0202]/2 to-transparent rounded-full pointer-events-none" />

        <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">

          <div className="space-y-24 lg:space-y-32">
            {servicesList.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  id={service.id}
                  key={service.id} 
                  className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center scroll-mt-24 ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image Frame Column */}
                  <div className="w-full lg:w-[48%] shrink-0">
                    <div className="relative group overflow-hidden rounded-[8px] border border-[#5c0202]/15 shadow-xl bg-chalk">
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={service.image} 
                        alt={service.imageAlt}
                        referrerPolicy="no-referrer"
                        className="w-full aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      {/* Accent corner border frame */}
                      <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#5c0202] opacity-70" />
                      <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#5c0202] opacity-70" />
                    </div>
                  </div>

                  {/* Information Details Column */}
                  <div className="w-full lg:w-[52%] space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#5c0202]/5 border border-[#5c0202]/10 flex items-center justify-center shadow-xs">
                          {iconMap[service.id]}
                        </div>
                        <div>
                          <span className="font-mono text-[9px] text-[#5c0202] font-bold tracking-widest bg-[#5c0202]/5 px-2.5 py-0.5 rounded-[2px] uppercase">
                            Service 0{idx + 1}
                          </span>
                          <span className="text-xs text-gold font-semibold uppercase tracking-wider block mt-0.5 font-sans">
                            {service.subtitle}
                          </span>
                        </div>
                      </div>
                      
                      <h2 className="font-display text-2xl sm:text-3.5xl font-light text-obsidian tracking-tight leading-tight">
                        {service.title}
                      </h2>
                      <p className="text-sm text-[#2C2824] leading-relaxed font-normal text-justify">
                        {service.desc}
                      </p>
                    </div>

                    {/* Features checklist inside a luxury paper board */}
                    <div className="bg-white/95 border border-[#5c0202]/10 p-6 rounded-[6px] shadow-sm">
                      <h3 className="text-[9px] uppercase text-[#5c0202] font-bold tracking-widest mb-4 font-mono">
                        Included Capabilities &amp; Standards
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2.5 text-xs font-light text-obsidian">
                            <span className="bg-[#5c0202]/5 p-0.5 rounded text-[#5c0202] mt-0.5 shrink-0">
                              <Check className="stroke-[3]" size={10} />
                            </span>
                            <span className="leading-normal">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Closing CTA */}
      <section className="py-24 bg-white border-b border-[#5c0202]/10 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#5c0202] text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase rounded-[2px] mb-5">
            Secure Your Preferred Date
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-obsidian tracking-tight mb-4">
            Ready to Begin Planning Your Dream Event?
          </h2>
          <p className="text-xs sm:text-sm text-mid font-light leading-relaxed max-w-xl mx-auto mb-8">
            Contact our experienced curators to check availability, schedule a personalized site tour, or receive a comprehensive custom-tailored quote.
          </p>
          <button
            onClick={() => {
              const el = document.getElementById('booking-tool');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-[#5c0202] hover:bg-[#7a0303] text-white font-body text-xs font-semibold tracking-widest uppercase px-8 py-4 rounded-[2px] transition-all cursor-pointer shadow-md hover:-translate-y-0.5"
          >
            Inquire About Services &amp; Spaces &rarr;
          </button>
        </div>
      </section>

    </div>
  );
}
