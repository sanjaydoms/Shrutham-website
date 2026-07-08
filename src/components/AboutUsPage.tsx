import React, { useEffect, useState } from 'react';
import { 
  Users, 
  MapPin, 
  Compass, 
  Eye, 
  Target, 
  Sparkles, 
  Check, 
  MessageSquare, 
  Clock, 
  ArrowRight,
  ShieldCheck,
  Briefcase,
  Heart
} from 'lucide-react';
import TestimonialsSection from './TestimonialsSection';
import PageHeroLayout from './PageHeroLayout';

interface AboutUsPageProps {
  onInquire: () => void;
}

export default function AboutUsPage({ onInquire }: AboutUsPageProps) {
  // Page-Level SEO handling
  useEffect(() => {
    document.title = "About Us | Shrutham Convention – Hyderabad's Top Venue";
    
    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Discover the story behind Shrutham Convention, Hyderabad's trusted event venue near ORR Exit 15. Meet our team and our vision for elegant celebrations.");
  }, []);

  const uSpBlocks = [
    {
      id: 'prime-location',
      title: 'Prime Location & Accessibility',
      desc: 'Situated minutes from Nehru ORR Exit 15, allowing guests from Gachibowli, Secunderabad, and Jubilee Hills to arrive via continuous high-speed transit while avoiding congested residential roadways. Supported by structured parking for over 2,000 cars and elite valet teams.',
      icon: <MapPin className="w-5 h-5 text-current" />
    },
    {
      id: 'versatile-spaces',
      title: 'Versatile, Multi-Scale Layouts',
      desc: 'From majestic weddings for thousands to focused executive boardroom assemblies — our pillar-free halls adapt dynamically. Engineered with NRC 0.85 soundproof panels and flexible configurations to guarantee perfect sightlines and crystal-clear acoustics.',
      icon: <Sparkles className="w-5 h-5 text-current" />
    },
    {
      id: 'event-team',
      title: 'Dedicated, Single-Point Coordination',
      desc: 'Every booking is paired with a professional event relations specialist. We handle digital 3D space layouts, custom decor coordination, security protocol management, and strict minute-by-minute itinerary tracking, giving you absolute peace of mind.',
      icon: <Users className="w-5 h-5 text-current" />
    },
    {
      id: 'premium-hospitality',
      title: 'Elite Amenities & Premium Facilities',
      desc: 'Featuring 5-star standard overnight suites for hosts, specialized bridal green-rooms, separate veg/non-veg master kitchens, and around-the-clock butler support, delivering an unmatched premium experience for you and your guests.',
      icon: <ShieldCheck className="w-5 h-5 text-current" />
    }
  ];

  const teamRoles = [
    {
      name: 'Anil Kumar',
      role: 'Founder & Managing Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      bio: 'With over two decades of leadership in premium real estate development and high-society hospitality in Telangana, Anil founded Shrutham Convention to redefine the twin cities\' landmark hosting spaces. His vision combines architectural scale with flawless, concierge-driven coordination.'
    },
    {
      name: 'Radhika Sastry',
      role: 'Director of Event Relations & Success',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
      bio: 'Radhika manages direct client coordination and local designer partnerships. Her team translates your layout ideas into custom 3D floor plans and coordinates seamless backstage operations.'
    },
    {
      name: 'Chef K. Ranganadhan',
      role: 'Executive banquet captain & culinary lead',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&auto=format&fit=crop&q=80',
      bio: 'Chef Ranganadhan oversees our FSSAI-certified separate prep kitchens, curating customizable silver-service regional delicacies and royal multi-cuisine menus for up to 10,000 guests daily.'
    }
  ];

  const metrics = [
    { value: '6+', label: 'Event Spaces' },
    { value: '1,000+', label: 'Guest Capacity' },
    { value: '100%', label: 'Personalised Service' },
    { value: '24/7', label: 'Support & Coordination' }
  ];

  return (
    <div className="bg-[#FCFAF5] font-body text-slate-custom">
         {/* SECTION 1 — THE SHRUTHAM STANDARD (Swiss-style typographic Hero) */}
      <PageHeroLayout
        title="ABOUT US"
        navItems={[
          { label: 'about us.', targetId: 'shrutham-edge', active: true },
          { label: 'our values.', targetId: 'our-values' },
          { label: 'our team.', targetId: 'our-team' }
        ]}
        paragraphs={[
          <>
            Shrutham Convention, the premier gold-standard hospitality destination in <strong className="text-[#5c0202] font-semibold">Hyderabad</strong>, was established in <strong className="text-[#5c0202] font-semibold">2023</strong> by real estate visionary <strong className="text-[#5c0202] font-semibold">Anil Kumar</strong> following his extensive experience in crafting premium commercial infrastructures. Strategically located directly off the <strong className="text-[#5c0202] font-semibold">Nehru Outer Ring Road (ORR) Exit 15</strong>, Shrutham offers seamless access, premium hospitality, and absolute grand-scale hosting solutions for royal weddings, corporate congresses, and global summits.
          </>,
          <>
            Engineered entirely on the architectural tenets of pure pillarless geometry, Shrutham spans over <strong className="text-[#5c0202] font-semibold">32,000 square meters</strong> of versatile indoor and outdoor arenas. With integrated <strong className="text-[#5c0202] font-semibold">NRC 0.85</strong> sound isolation panels, high load-bearing roof rigging up to <strong className="text-[#5c0202] font-semibold">15 tonnes</strong>, and state-of-the-art separate veg/non-veg master kitchens, we elevate traditional Indian warmth into flawless, zero-error execution.
          </>
        ]}
      />


      {/* PANORAMIC VISUAL BANNER — PLACED ABOVE THE SHRUTHAM EDGE */}
      <section className="w-full bg-[#FCFAF5] border-b border-[#5c0202]/10 py-6">
        <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="relative aspect-[21/8] min-h-[250px] w-full rounded-[4px] overflow-hidden border border-[#5c0202]/15 shadow-xl bg-chalk group">
            <img 
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=80" 
              alt="Panoramic view of Shrutham Grand Convention Hall Setup" 
              className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            {/* Ambient vignette and darkening shadow gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* 1. THE SHRUTHAM EDGE (Why Choose Us) */}
      <section id="shrutham-edge" className="py-20 md:py-28 bg-[#FCFAF5] border-b border-[#5c0202]/10 scroll-mt-24">
        <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase text-[#5c0202] font-bold tracking-[0.2em] block mb-2 font-mono">
              The Shrutham Edge
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-obsidian tracking-tight mb-4">
              Why Shrutham Convention Is Hyderabad's Most Trusted Event Venue
            </h2>
            <div className="h-[1px] bg-[#5c0202]/20 w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {uSpBlocks.map((usp) => (
              <div 
                key={usp.id} 
                className="bg-white p-8 border border-[#5c0202]/10 rounded-[4px] shadow-sm hover:shadow-md transition-all group duration-300"
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3.5 bg-[#5c0202]/5 rounded-[4px] shrink-0 text-[#5c0202] group-hover:bg-[#5c0202] group-hover:text-white transition-all duration-300">
                    {usp.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-lg font-medium text-obsidian group-hover:text-[#5c0202] transition-colors">
                      {usp.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2C2824] leading-relaxed font-light text-justify">
                      {usp.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section id="who-we-are" className="py-20 md:py-28 bg-white border-b border-[#5c0202]/10 scroll-mt-24">
        <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative z-10 rounded-[4px] overflow-hidden border border-[#5c0202]/15 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&auto=format&fit=crop&q=80" 
                  alt="Elegant table arrangements and royal chandeliers at Shrutham Ballroom"
                  className="w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-[#5c0202]/5 rounded-full blur-2xl -z-10" />
            </div>

            {/* Story Details Column */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <span className="text-xs uppercase text-[#5c0202] font-semibold tracking-widest block font-mono">
                Established With Purpose
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-obsidian tracking-tight leading-tight">
                Who We Are
              </h2>
              <div className="w-12 h-0.5 bg-[#5c0202]" />

              <div className="space-y-4 text-xs sm:text-sm text-[#2C2824] font-light leading-relaxed text-justify">
                <p>
                  Shrutham Convention is Hyderabad's premier destination for celebrations, corporate gatherings, and social events. Located strategically near Nehru Outer Ring Road Exit 15, Pedda Golconda — opposite Shree Mantra Convention, in the vibrant Sanghiguda neighbourhood — we are easily accessible from across the twin cities of Hyderabad and Secunderabad.
                </p>
                <p>
                  Founded with a singular vision — to create a venue where elegance meets efficiency — Shrutham Convention has grown into one of Hyderabad's most sought-after event spaces. Our team, led by Anil Kumar, brings passion, precision, and a personal touch to every event we host.
                </p>
                <p>
                  We are not just a venue. We are your event partners — committed to understanding your vision, respecting your budget, and delivering results that exceed your expectations.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR VISION & MISSION */}
      <section id="our-values" className="py-20 md:py-28 bg-[#FCFAF5] border-b border-[#5c0202]/10 scroll-mt-24">
        <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase text-[#5c0202] font-bold tracking-[0.2em] block mb-2 font-mono">
              Guiding Principles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-obsidian tracking-tight mb-4">
              Our Vision &amp; Mission
            </h2>
            <div className="h-[1px] bg-[#5c0202]/20 w-24 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Vision */}
            <div className="bg-white p-8 md:p-10 border border-[#5c0202]/10 rounded-[6px] shadow-xs flex gap-5 items-start">
              <div className="p-3 bg-[#5c0202]/5 rounded-[4px] shrink-0 text-[#5c0202]">
                <Eye size={24} />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-xl font-medium text-obsidian">Our Vision</h3>
                <p className="text-xs sm:text-sm text-[#2C2824] leading-relaxed font-light text-justify">
                  To be Hyderabad's most celebrated convention and banquet destination — a place where every occasion is elevated into an extraordinary experience.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 md:p-10 border border-[#5c0202]/10 rounded-[6px] shadow-xs flex gap-5 items-start">
              <div className="p-3 bg-[#5c0202]/5 rounded-[4px] shrink-0 text-[#5c0202]">
                <Target size={24} />
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-xl font-medium text-obsidian">Our Mission</h3>
                <p className="text-xs sm:text-sm text-[#2C2824] leading-relaxed font-light text-justify">
                  To provide world-class event facilities, personalised service, and seamless coordination that makes every client feel valued, every guest feel welcomed, and every event feel magical.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. KEY METRICS */}
      <section className="py-20 md:py-24 bg-white border-b border-[#5c0202]/10">
        <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase text-[#5c0202] font-bold tracking-[0.2em] block mb-2 font-mono">
              Key Metrics
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-light text-obsidian tracking-tight mb-4">
              Shrutham Convention at a Glance
            </h2>
            <div className="h-[1px] bg-[#5c0202]/20 w-16 mx-auto" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {metrics.map((m, idx) => (
              <div 
                key={idx} 
                className="bg-[#FCFAF5] p-6 md:p-8 border border-[#5c0202]/10 rounded-[4px] text-center shadow-xs"
              >
                <span className="font-display text-3xl sm:text-4xl md:text-5xl font-light text-[#5c0202] block mb-2 font-semibold">
                  {m.value}
                </span>
                <span className="text-[10px] sm:text-xs uppercase text-obsidian/75 tracking-wider font-semibold block">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. OUR HOSPITALITY LEADERS */}
      <section id="our-team" className="py-20 md:py-28 bg-[#FCFAF5] border-[#5c0202]/10 border-b scroll-mt-24">
        <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase text-[#5c0202] font-bold tracking-[0.2em] block mb-2 font-mono">
              Our Hospitality Leaders
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-light text-obsidian tracking-tight mb-4">
              Our Event Coordination Team
            </h2>
            <div className="h-[1px] bg-[#5c0202]/20 w-24 mx-auto mb-4" />
            <p className="text-xs sm:text-sm font-light text-mid max-w-lg mx-auto">
              Our dedicated professionals bring decades of industry expertise, assuring bespoke attention to your guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamRoles.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-[#5c0202]/10 rounded-[6px] shadow-xs overflow-hidden flex flex-col hover:shadow-md transition-shadow"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-chalk border-b border-[#5c0202]/5">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#5c0202] text-white text-[9px] font-bold tracking-widest px-2.5 py-1 rounded-[2px] uppercase font-mono">
                    {idx === 0 ? 'Founder' : 'Expert Coordinator'}
                  </div>
                </div>
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-lg font-medium text-obsidian">{member.name}</h3>
                    <p className="text-[10px] uppercase tracking-wider text-gold font-semibold font-mono mb-3">{member.role}</p>
                    <p className="text-xs text-[#2C2824] leading-relaxed font-light text-justify">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LOCATION AND CONNECTIVITY */}
      <section className="py-20 md:py-28 bg-white border-b border-[#5c0202]/10">
        <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase text-[#5c0202] font-semibold tracking-widest block font-mono">
                Location &amp; Connectivity
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-light text-obsidian tracking-tight leading-tight">
                Strategic Access
              </h3>
              <p className="text-sm text-[#2C2824] leading-relaxed font-light text-justify">
                Located near Nehru Outer Ring Road Exit 15, Pedda Golconda, opposite Shree Mantra Convention in Sanghiguda. We provide seamless, congestion-free travel for guests arriving from across the twin cities of Hyderabad &amp; Secunderabad.
              </p>
            </div>

            <div className="lg:col-span-6">
              {/* Styled iframe Map embedding */}
              <div className="w-full h-[360px] md:h-[420px] rounded-[6px] overflow-hidden border border-[#5c0202]/15 shadow-md">
                <iframe 
                  title="Shrutham Convention Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3811.4589090623347!2d78.4907409!3d17.201659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbc3542471f0ff%3A0xc3959955743b1716!2sShrutham%20Convention!5e0!3m2!1sen!2sin!4v1700000000000" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 7. TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 8 — LET'S COLLABORATE (CTA Band) */}
      <section className="py-20 md:py-28 bg-[#8280f2] flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="w-full max-w-[1200px] bg-white rounded-[24px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Content Side */}
            <div className="p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col justify-center text-left space-y-6">
              <span className="text-[#4f46e5] font-semibold text-xs sm:text-sm tracking-wide block font-sans">
                Ready to Transform Your Next Event?
              </span>
              
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#111111] tracking-tight leading-tight">
                Take the Next Step Toward Your Grand Celebration
              </h2>
              
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light">
                Discover how Shrutham Convention's majestic spaces, elite culinary curations, and meticulous event coordination come together to turn your vision into an unforgettable masterpiece.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={onInquire}
                  className="bg-[#5c0202] hover:bg-[#7a0303] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-[8px] transition-all cursor-pointer shadow-md hover:-translate-y-0.5 inline-flex items-center justify-center"
                >
                  Book Your Venue
                </button>
                <button
                  onClick={onInquire}
                  className="border border-gray-200 hover:border-gray-300 text-gray-700 hover:text-black text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-[8px] transition-all cursor-pointer hover:bg-gray-50 inline-flex items-center justify-center"
                >
                  Schedule a Site Visit
                </button>
              </div>
            </div>

            {/* Right Image Side */}
            <div className="relative min-h-[300px] lg:min-h-full overflow-hidden bg-gray-50">
              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&auto=format&fit=crop&q=80"
                alt="Shrutham Convention Luxury Banquet"
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Soft overlay gradient to match the elegant tone */}
              <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
