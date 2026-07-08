import { useEffect } from 'react';
import { ArrowLeft, Users, Calendar, MapPin, CheckCircle, Quote, Lightbulb, Shield, Sparkles, ChevronRight } from 'lucide-react';
import { EventCategory } from '../types';

interface EventDetailViewProps {
  eventId: string;
  onBackToPage: (page: 'home' | 'events') => void;
  onSelectEventType: (typeName: string) => void;
}

export default function EventDetailView({ eventId, onBackToPage, onSelectEventType }: EventDetailViewProps) {
  
  const categoriesExtendedData: Record<string, {
    id: string;
    name: string;
    subtitle: string;
    icon: string;
    image: string;
    desc: string;
    maxCapacity: string;
    suitableSpaces: string;
    extendedStory: string;
    quote: string;
    quoteAuthor: string;
    keySpecs: string[];
    technicalHighlights: { title: string; desc: string }[];
    bookingAdvise: string;
  }> = {
    weddings: {
      id: 'weddings',
      name: 'Weddings & Receptions',
      subtitle: 'A Royal Union Crafted in Timeless Architecture',
      icon: '💍',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
      desc: 'Generational functions executed with absolute perfection. Includes dynamic stage systems, majestic entryways, and premium dining layouts.',
      maxCapacity: '3,500 Guests',
      suitableSpaces: 'Grand Orchid Ballroom + Garden Lawns',
      extendedStory: 'A wedding is not merely a social ceremony; it is a permanent historical milestone for your family. Shrutham Convention’s grand unpartitioned dome provides the physical scale needed to support massive aesthetic dreams. Constructed with an elegant 44-foot vertical ceiling height, there are no layout constraints for high-hanging cascading stage florals, multi-tier custom mandaps, or immersive indoor drone photography. With complete aero-acoustic insulation, your vows will stay pristine without flight path frequency disruptions.',
      quote: 'The design must rise to the sheer emotional scale of the memories. We worked with Shrutham to create a suspended floral canopy weighing over 3 tonnes, and the structural rigging processed it without a single tremor.',
      quoteAuthor: 'Ananya Deshmukh, Lead Wedding Scenographer',
      keySpecs: [
        '5 Dedicated Dressing/Makeup Studios equipped with daybeds & dedicated washrooms.',
        'East-Facing Vastu gate locations to channel positive early energy flows.',
        'High-voltage dedicated power bus lines for spectacular stage lighting arrays.',
        '6-Lane parallel VIP entry roads to prevent guest lineup congestion.'
      ],
      technicalHighlights: [
        { title: 'Pre-Event Mock Setup', desc: 'Book a complementary 2-hour slot 10 days before the wedding to program your lighting designs and run sound tests with your decorator.' },
        { title: 'Separate Culinary Wings', desc: 'Separated pure-vegetarian preparation zones ensuring full compliance with family religious priorities.' },
        { title: 'The Bermuda Lawn Deck', desc: '25,000 sq ft of imported natural lawn grass perfect for open-air evening reception mocktails and fireworks.' }
      ],
      bookingAdvise: 'Due to peak wedding lagna dates, we heavily recommend initiating booking coordinates at least 6 to 9 months in advance. Weekend slots during peak winter months clear rapidly.'
    },
    corporate: {
      id: 'corporate',
      name: 'Corporate Conferences',
      subtitle: 'Where Visionaries Shape Tomorrow’s Landscapes',
      icon: '🏢',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80',
      desc: 'High-profile summits, AGM boards, panel seminars, and tech talks styled with modern projection facilities and fast reliable internet.',
      maxCapacity: '1,500 Delegates',
      suitableSpaces: 'Apex Conference Center + West Wing',
      extendedStory: 'In high-stakes corporate execution, mistakes are unacceptable. Shrutham Convention provides a bulletproof modern platform engineered specifically for seamless executive assemblies. Featuring clean HEPA-filtered climate zones, your board delegates stay comfortable. The space supports a dual sync redundant Volvo power ring to ensure multi-kilowatt servers, active presentation displays, and international video streams stay operational even during severe natural seasonal fluctuations.',
      quote: 'Running our Annual Tech Congress at Shrutham let us stream 4K live feeds to 12 countries simultaneously over their redundant fiber pipelines without a single frame-drop.',
      quoteAuthor: 'Satish Rao, VP Operations, Vertex Global',
      keySpecs: [
        'Enterprise-grade 1 Gbps redundant multi-fiber commercial wifi network.',
        'Integrated ultra-bright Christie 4K laser projector with JBL array sync.',
        'Spacious pre-function breakout lobbies perfect for networking lunches.',
        'Soundproof conference partition systems to split rooms cleanly.'
      ],
      technicalHighlights: [
        { title: 'Silent Stage Backplane', desc: 'Advanced vibration isolation structures preventing service vehicle sounds from echoing onto the speaker microphone grid.' },
        { title: 'Press Desk Routing', desc: 'Dedicated XLR audio split consoles on the floor for regional media houses to capture clean audio streams.' },
        { title: 'Executive Holding Rooms', desc: 'Fully separate executive suites with high-security locks, conference tables, and private entryways.' }
      ],
      bookingAdvise: 'Premium corporate events scheduled on Tuesdays, Wednesdays, or Thursdays are eligible for significant venue rental pricing discounts. Inquire with our Relationship Captain.'
    },
    exhibitions: {
      id: 'exhibitions',
      name: 'Exhibitions & MICE',
      subtitle: 'High-Span Multi-Functional Trade and Industry Arenas',
      icon: '🏛️',
      image: 'https://images.unsplash.com/photo-1561489396-888724a1543d?w=1200&q=80',
      desc: 'Massive column-free spaces suitable for customized heavy-duty stall layouts, dynamic machinery expos, and global trade summits.',
      maxCapacity: '2,500 Attendees',
      suitableSpaces: 'Grand Hall (Fully Unpartitioned)',
      extendedStory: 'Optimizing high-traffic attendee density requires dynamic architectural ventilation, multiple entrance coordinates, and deep structural payload capacity. Shrutham’s central 30,000 sq ft hall is designed entirely column-free, meaning exhibitors have total freedom of alignment without blind spots. Dedicated loading runways allow double-axle freight trucks to deliver structural elements right onto the exhibit floor. Massive overhead power junctions eliminate messy surface cabling.',
      quote: 'We host our heavy machinery expo at Shrutham because their floor load capacity easily handles our 12-tonne industrial printing systems without cracking the marble slabs.',
      quoteAuthor: 'Nikhil Mehta, Chairman, Telangana Printing Association',
      keySpecs: [
        'Reinforced heavy-duty floor load structure accommodating heavy display logistics.',
        'Overhead 3-phase high-current electrical boxes distributed on an 8m grid.',
        '6 Massive dock entrances for quick simultaneous stall construction.',
        'Engineered airflow recycling with 6 complete fresh-air exchanges per hour.'
      ],
      technicalHighlights: [
        { title: 'Forklift Compatibility', desc: 'Double-reinforced entrances with zero threshold ramps, allowing smooth internal forklift movement.' },
        { title: 'Dynamic Signage Array', desc: 'Custom network-controlled LED display panels at strategic floor points for sponsor highlights.' },
        { title: 'Exhibitor Office Hubs', desc: 'Mezzanine-level operations offices overlook the exhibition floor for real-time manager checks.' }
      ],
      bookingAdvise: 'Trade expos require significant setup times. Ask about our special multi-day packages which offer complimentary load-in and load-out days.'
    },
    gov: {
      id: 'gov',
      name: 'Government & Institutional',
      subtitle: 'Protocol-Compliant High-Security Assemblies',
      icon: '🎖️',
      image: 'https://images.unsplash.com/photo-1431540015161-0bf868a20407?w=1200&q=80',
      desc: 'Protocol-ready state summits with dedicated green rooms, separated secure entry-exits, and high security VIP suites.',
      maxCapacity: '2,000 Seats',
      suitableSpaces: 'Grand Hall Zone 1 & 2',
      extendedStory: 'Managing regional and sovereign government events requires deep respect for protocol security, timeline precision, and strict access parameters. At Shrutham, we have worked with regional security details to establish dedicated VIP arrival pathways completely separated from general participant alignments. From soundproofed and encrypted briefing rooms to high-level secure communications, the facility stands as Hyderabad’s most secure public event landmark.',
      quote: 'The level of protocol discipline demonstrated by Shrutham’s marshal staff during the bilateral summit was pristine. The secure entryway functioned flawlessly.',
      quoteAuthor: 'Special Protocol Director, State Hospitality Board',
      keySpecs: [
        'Multi-tiered secure perimeter checkpoints with dedicated security cabins.',
        'Blast-dampened VIP hosting lounge with direct backstage passage.',
        'Independent heavy logistics tunnel for catering and service staff.',
        'Encrypted network channels protecting sensitive broadcast lines.'
      ],
      technicalHighlights: [
        { title: 'Biometric Corridor Prep', desc: 'Secure lock corridors to deploy quick biometric scanners or high-throughput metal detectors.' },
        { title: 'Independent backup airlines', desc: 'Separate HVAC isolation coordinates for VIP suites to ensure clean local air circulation.' },
        { title: 'Bespoke Press Briefing Enclave', desc: 'A separate 150-seat theater zone designed for quick post-event press meets with broadcast uplinks.' }
      ],
      bookingAdvise: 'Institutional schedules often require official booking directives and custom payment clearances. We have a dedicated State Liaison Officer to expedite these.'
    },
    launches: {
      id: 'launches',
      name: 'Product Launches',
      subtitle: 'Dramatic High-Impact Brand Keynotes and Reveals',
      icon: '🚀',
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=1200&q=80',
      desc: 'Dramatic unveilings requiring top-tier acoustics, extreme high-power distribution lines, and spectacular high-contrast custom sets.',
      maxCapacity: '1,200 Seats',
      suitableSpaces: 'Grand Hall Zone 3 + Lawn Foyer',
      extendedStory: 'A spectacular brand reveal relies heavily on dramatic lighting, flawless theater acoustics, and grand sensory surprises. Shrutham’s high-clearance trusses can bear up to 15 tonnes of suspended sound arrays, dynamic linear lasers, and moving screens. High-speed vehicles can be driven directly onto the main stage via our heavy freight gates, making vehicle product launches simple to execute with maximum flourish. The venue is fully dark-skinned to block external light leaks.',
      quote: 'We unveiled our premium electric SUV here. Driving the car directly from the backstage tunnel onto a rotating platform was a logistical dream.',
      quoteAuthor: 'Vikram Grover, Country Director, Atlas Motors',
      keySpecs: [
        '15-Tonne structural truss load capacity allowing suspended cars or heavy screens.',
        'Complete blackout capability with specialized light-dampening panels.',
        'High-voltage raw power connections (up to 400 KVA) on the active floor.',
        'Heavy-duty stage vehicle ramps with dynamic rotating turntable coordinates.'
      ],
      technicalHighlights: [
        { title: 'The Laser Grid Axis', desc: 'Specially engineered ceiling rig alignment points allowing complex 3D laser projections over delegates.' },
        { title: 'Brand Visibility Corridor', desc: 'Dedicated billboard frames on the ORR Exit frontage visible to thousands of passing vehicles.' },
        { title: 'Signature Cocktail Lounge', desc: 'Transition delegates seamlessly from the keynote reveal to an elegant open-air beverage reception.' }
      ],
      bookingAdvise: 'Launch productions typically involve elaborate technical setups. We offer 24/7 custom venue access during setup days for technical crews.'
    },
    cultural: {
      id: 'cultural',
      name: 'Cultural Celebrations',
      subtitle: 'Preserving Creative Heritage on Legendary Stages',
      icon: '🎭',
      image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=1200&q=80',
      desc: 'Traditional festivals, legendary concert recitals, music award shows, and vibrant stage plays with customized backstage infrastructure.',
      maxCapacity: '3,500 Capacity',
      suitableSpaces: 'Orchid Stage & Arena Seats',
      extendedStory: 'Preserving our cultural history demands acoustic warmth and expansive viewing horizons. Shrutham’s hall has been mapped using acoustic simulators to ensure sound travels evenly from the main stage to the very last row. The natural wood stage construction provides rich resonant depth for classical sitar performance, vocal recitals, or high-energy theater scripts. Large backstage transition spaces easily house up to 150 performers simultaneously with deep wardrobe facilities.',
      quote: 'The acoustic balance in Shrutham’s Grand Hall is incredible. Sitar and tabla notes maintained pristine clarity without returning echoes.',
      quoteAuthor: 'Pt. Hari Prasad Sharma, Renowned Classical Musician',
      keySpecs: [
        'Natural resonance wooden stage flooring dampening heavy dance impacts.',
        'Substantial dressing green room wings designed for rapid costume changes.',
        'Perfect line-of-sight seating alignment with tiered mezzanine options.',
        'High-frequency wireless mic compatibility with zero spectrum interference.'
      ],
      technicalHighlights: [
        { title: 'Reverb Modulation', desc: 'Adjustable heavy wall drapes to optimize sound resonance depending on classical vs modern concerts.' },
        { title: 'Performer F&B Lounge', desc: 'A separate dining room for artists and crews away from public coordinates.' },
        { title: 'Backstage Wardrobe Stations', desc: 'Equipped with custom high-color-rendering daylight mirrors and professional steamers.' }
      ],
      bookingAdvise: 'Cultural festival seasons correspond heavily with traditional calendars. We advise securing dates blockages early in partnership with regional art bodies.'
    },
    edu: {
      id: 'edu',
      name: 'Educational Institutions',
      subtitle: 'Nurturing and Celebrating Next-Generation Foundations',
      icon: '🎓',
      image: 'https://images.unsplash.com/photo-1525920980461-f4e91f111812?w=1200&q=80',
      desc: 'Academic convocation ceremonies, grand celebratory annual days, competitive exhibitions, the principal seminars and award functions.',
      maxCapacity: '2,000 Delegates',
      suitableSpaces: 'Grand Hall Split-Zones',
      extendedStory: 'Graduation days and institutional showcase events require streamlined student marshalling, large physical seating capacities, and high-power vocal projection. Shrutham provides a highly secure and structured venue which makes managing crowd logistics simple. Our ample outer driveway easily processes up to 40 major institutional buses simultaneously, keeping student transitions structured and safe from expressway traffic hazards.',
      quote: 'Managing a crowd of 2,000 students and parents is stressful, but Shrutham’s spacious staging and professional floor marshals made our 25th Convocation a smooth affair.',
      quoteAuthor: 'Dr. Vasudha Chari, Vice Chancellor, Telangana Tech University',
      keySpecs: [
        'Dedicated student queue staging zones inside the air-conditioned lobbies.',
        'Highly optimized sound system designed specifically for clear vocal presentations.',
        'Convenient parking layouts to separate bus arrivals from general family cars.',
        'Sturdy high-volume main stage steps to ensure quick student group photographs.'
      ],
      technicalHighlights: [
        { title: 'Institutional Tariffs', desc: 'Special direct institutional subsidies and package rates customized for academic institutions.' },
        { title: 'Live Stream Hubs', desc: 'Secure direct stream setups for institutional web channels to broadcast events to long-distance families.' },
        { title: 'Sponsor Stall Layouts', desc: 'Pre-function spaces configured to align up to 25 university career or exhibition stalls.' }
      ],
      bookingAdvise: 'Peak graduation season aligns with April, May, and June. Institutional bookings are eligible for standard service tax benefits subject to government guidelines.'
    },
    social: {
      id: 'social',
      name: 'Social & Family Events',
      subtitle: 'Elegant Milestones Shared in Intimate Radiance',
      icon: '🥂',
      image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=1200&q=80',
      desc: 'Beautiful customized engagement ceremonies, milestone anniversaries, birthday dinners, and celebratory community dinners.',
      maxCapacity: '600 Guests',
      suitableSpaces: 'West Foyer + Landscaped Courtyard',
      extendedStory: 'Not every beautiful gathering requires a 30,000 sq ft grand ballroom. For engagements, birthday milestones, and close-knit family reunions, Shrutham’s West Foyer paired with the landscaped Bermuda courtyard offers an elegant, high-contrast, intimate experience. Guests can flow easily from customized indoor buffet setups to open-air evening cocktails under romantic fairy-lit networks. Our chef partnerships craft customized multi-generation menus perfectly suited for fine-dining requirements.',
      quote: 'We held my parents’ 50th Anniversary dinner here. The level of personal warmth from the dining staff match the sheer elegance of the garden courtyard.',
      quoteAuthor: 'Harish Panchadarla, Family Trustee',
      keySpecs: [
        'Flexible space flow connecting indoor air-conditioned foyers to outside green turf.',
        'Warm ambient hanging lamps paired with custom table candlelight arrays.',
        'Isolated private dining layouts optimal for fine-tasting family menus.',
        'Child-safe play segments and highly accessible facilities for elderly grandparents.'
      ],
      technicalHighlights: [
        { title: 'Memory Corridor Setup', desc: 'A dedicated 50-foot custom hallway structure to hang historical family photographs with custom spot lighting.' },
        { title: 'Custom Mixology Services', desc: 'Elegant marble-clad mobile bars setup on the lawn for customized seasonal family beverage programs.' },
        { title: 'Stellar Floral Alignments', desc: 'Collaborative designs featuring local jasmine and imported roses coordinated with regional design leads.' }
      ],
      bookingAdvise: 'Intimate social events have flexible timeline options. Monsoons call for seamless indoor transitions, which we handle automatically with backup foyers.'
    }
  };

  const relatedMap: Record<string, string[]> = {
    weddings: ['social', 'cultural', 'edu'],
    corporate: ['exhibitions', 'launches', 'gov'],
    exhibitions: ['corporate', 'launches', 'gov'],
    gov: ['corporate', 'exhibitions', 'edu'],
    launches: ['corporate', 'exhibitions', 'cultural'],
    cultural: ['social', 'weddings', 'edu'],
    edu: ['corporate', 'cultural', 'gov'],
    social: ['weddings', 'cultural', 'edu']
  };

  const relatedKeys = relatedMap[eventId] || ['weddings', 'corporate', 'exhibitions'];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [eventId]);

  const selectedData = categoriesExtendedData[eventId] || categoriesExtendedData.weddings;

  return (
    <div className="bg-chalk font-body text-slate-custom min-h-screen">
      {/* 1. Hero Block with Back Navigation Button */}
      <div 
        className="w-full h-80 sm:h-96 md:h-[450px] bg-cover bg-center relative flex items-end"
        style={{ backgroundImage: `url('${selectedData.image}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2824] via-[#2C2824]/40 to-transparent" />
        
        {/* Back Button Floated Top */}
        <div className="absolute top-6 left-6 md:left-12 z-10">
          <button 
            onClick={() => onBackToPage('home')}
            className="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-md text-slate-custom hover:text-[#9B752E] border border-gold/30 hover:border-gold/70 rounded-[2px] text-xs font-bold tracking-wider uppercase transition-all cursor-pointer shadow-sm"
          >
            <ArrowLeft size={14} className="text-[#9B752E]" /> Back to Home
          </button>
        </div>

        <div className="max-w-6xl mx-auto w-full px-6 md:px-12 pb-10 relative z-10 text-center flex flex-col items-center justify-center">
          <span className="text-3xl sm:text-4xl md:text-5xl mb-3 block animate-bounce duration-1000">
            {selectedData.icon}
          </span>
          <span 
            className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-white uppercase block border-2 border-[#5c0202] text-center"
            style={{
              backgroundColor: '#600000',
              marginLeft: '0px',
              paddingLeft: '0px',
              marginRight: '0px',
              marginBottom: '0px',
              paddingTop: '0px',
            }}
          >
            DEDICATED EVENT CLASSIFICATION
          </span>
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-wide leading-none">
            {selectedData.name}
          </h1>
          <p className="text-xs sm:text-sm font-medium text-white/90 max-w-xl mt-3 uppercase tracking-wider">
            {selectedData.subtitle}
          </p>
        </div>
      </div>

      {/* 2. Main content area: Grid of descriptions and key metrics */}
      <section className="py-16 md:py-24 max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main narrative block */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-[10px] uppercase text-gold font-semibold tracking-widest block mb-2">
                THE NARRATIVE ARCHITECTURE
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-light text-obsidian tracking-tight leading-tight">
                Designed for Flawless Experiences
              </h2>
              <div className="h-[1px] bg-gold/25 w-16 my-4" />
              <p className="text-sm sm:text-base font-light text-mid leading-relaxed text-justify">
                {selectedData.extendedStory}
              </p>
            </div>

            {/* Testimonial Quote */}
            <div className="bg-white p-6 md:p-8 border-l-4 border-gold rounded-[2px] shadow-sm relative overflow-hidden">
              <span className="absolute -top-10 -right-4 font-serif text-[120px] text-gold/10 leading-none">“</span>
              <Quote className="text-gold mb-3" size={20} />
              <p className="text-xs sm:text-sm italic font-light text-obsidian/90 z-10 relative leading-relaxed text-justify">
                {selectedData.quote}
              </p>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-gold block mt-4 font-body">
                — {selectedData.quoteAuthor}
              </span>
            </div>

            {/* Technical Highlights Grid */}
            <div>
              <span className="text-[10px] uppercase text-gold font-semibold tracking-widest block mb-6">
                OPERATIONAL ASSURANCES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {selectedData.technicalHighlights.map((tech, tIdx) => (
                  <div key={tIdx} className="bg-white p-5 border border-gold/10 rounded-[2px]">
                    <div className="p-2 bg-gold/5 rounded-[2px] w-fit mb-3">
                      <Sparkles size={14} className="text-gold" />
                    </div>
                    <h4 className="font-display text-sm font-medium text-obsidian mb-1.5">{tech.title}</h4>
                    <p className="text-[11px] text-mid font-light leading-relaxed text-left">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar metrics list & details card */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Metrics card */}
            <div className="bg-white text-slate-custom p-8 border border-gold/25 rounded-[2px] shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-2xl rounded-full" />
              
              <h3 className="font-display text-lg font-semibold text-slate-custom mb-4 flex items-center gap-2">
                <span className="text-[#9B752E]">●</span> Event Blueprint Summary
              </h3>
              
              <div className="h-[1px] bg-gold/15 w-full my-4" />

              <div className="space-y-5 font-body">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-slate-custom/60 block font-semibold">PHYSICAL CAPACITY RESILIENCE</span>
                  <p className="text-lg font-bold text-[#9B752E] mt-0.5 flex items-center gap-2">
                    <Users size={16} /> {selectedData.maxCapacity}
                  </p>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-slate-custom/60 block font-semibold">ALIGNED VENUE SPACES</span>
                  <p className="text-lg font-bold text-[#9B752E] mt-0.5 flex items-center gap-2">
                    <MapPin size={16} /> {selectedData.suitableSpaces}
                  </p>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-slate-custom/60 block font-semibold">VIP RECONNAISSANCE PASS</span>
                  <p className="text-lg font-bold text-[#9B752E] mt-0.5 flex items-center gap-2">
                    <Shield size={16} /> High Security VIP Suites included
                  </p>
                </div>
              </div>

              <div className="h-[1px] bg-gold/15 w-full my-5" />

              <div className="space-y-3.5">
                <span className="text-[9px] uppercase tracking-widest text-slate-custom/60 block font-body font-semibold">STRUTHAM SPECIAL PRIVILEGES</span>
                {selectedData.keySpecs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex items-start gap-2.5 text-xs font-medium text-slate-custom/85">
                    <CheckCircle className="text-[#9B752E] mt-0.5 shrink-0" size={13} />
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Advisory / Booking Note */}
            <div className="bg-gold/5 p-6 border-l-2 border-gold rounded-[2px] space-y-3">
              <div className="flex items-center gap-2">
                <Lightbulb className="text-gold" size={16} />
                <span className="font-display text-xs font-bold text-obsidian tracking-wider uppercase font-body">
                  Planning Consultation
                </span>
              </div>
              <p className="text-xs text-mid font-light leading-relaxed text-justify">
                {selectedData.bookingAdvise}
              </p>
              
              <button 
                onClick={() => {
                  onSelectEventType(selectedData.name);
                  // Navigate to booking system on Home
                  const bookTool = document.getElementById('booking-tool');
                  if (bookTool) {
                    bookTool.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onBackToPage('home');
                    setTimeout(() => {
                      const bookToolHome = document.getElementById('booking-tool');
                      if (bookToolHome) bookToolHome.scrollIntoView({ behavior: 'smooth' });
                    }, 150);
                  }
                }}
                className="w-full mt-3 py-2.5 bg-[#9B752E] hover:bg-[#B38F4D] text-white text-xs font-semibold tracking-widest uppercase transition-all rounded-[2px] cursor-pointer text-center font-body block shadow-sm"
              >
                Inquire Coordinates
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Related Events Section */}
      <section className="bg-white border-t border-[#5c0202]/10 py-16 md:py-20 font-body">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[10px] uppercase text-[#5c0202] font-semibold tracking-widest block mb-2">
              Explore More Options
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-light text-[#2D2A26] tracking-wide">
              Related Event Portfolios
            </h3>
            <div className="h-[2px] w-12 bg-[#5c0202] mx-auto my-3" />
            <p className="text-xs sm:text-[13px] text-slate-custom/75 font-light leading-relaxed">
              Discover other world-class spheres of gathering at Shrutham Convention, fully customized to meet your specific hospitality and technical protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedKeys.map((key) => {
              const relData = categoriesExtendedData[key];
              if (!relData) return null;
              return (
                <div 
                  key={key}
                  className="bg-[#FCFAF5] border border-gold/15 rounded-[4px] overflow-hidden group hover:border-[#5c0202]/30 transition-all duration-300 flex flex-col justify-between shadow-xs"
                >
                  <div>
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-[16/10] bg-[#1a1715] border-b border-gold/10">
                      <img 
                        src={relData.image} 
                        alt={relData.name} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#5c0202] text-gold text-[8px] tracking-[0.2em] font-bold uppercase px-2 py-1 rounded-[1px] shadow-md border border-gold/20">
                        {relData.icon} {key.toUpperCase()}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2">
                      <h4 className="font-display text-base font-medium text-[#2D2A26] tracking-tight group-hover:text-[#5c0202] transition-colors duration-300">
                        {relData.name}
                      </h4>
                      <p className="text-[11px] text-slate-custom/80 font-light leading-relaxed line-clamp-3">
                        {relData.desc}
                      </p>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => {
                        window.location.hash = `#event/${key}`;
                        onSelectEventType(relData.name);
                      }}
                      className="w-full inline-flex items-center justify-center gap-1.5 border border-gold/30 group-hover:border-[#5c0202] hover:bg-gold/5 text-[#2D2A26] hover:text-[#5c0202] py-2 text-[10px] font-bold tracking-widest uppercase rounded-[2px] transition-all duration-300 cursor-pointer"
                    >
                      Read More <ChevronRight size={10} className="stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Deep detail booking prompt banner */}
      <section className="bg-gold-pale/40 text-slate-custom py-16 border-t border-b border-gold/15 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.04),transparent_50% tracking-wide)]" />
        <div className="max-w-2xl mx-auto px-6 relative z-10 space-y-6">
          <span className="text-[10px] uppercase text-[#9B752E] font-semibold tracking-widest block font-body">
            READY TO CO-CREATE
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-slate-custom tracking-widest">
            Reserve Your Calendar
          </h2>
          <p className="text-xs sm:text-sm text-slate-custom/80 font-medium leading-relaxed font-body">
            Let us align your layout architectures, gourmet culinary designs, and audio synchronization schedules. Our Relationship Captain is ready.
          </p>
          <div className="flex gap-4 justify-center flex-col sm:flex-row pt-2 font-body">
            <button 
              onClick={() => {
                onSelectEventType(selectedData.name);
                onBackToPage('home');
                setTimeout(() => {
                  const bTool = document.getElementById('booking-tool');
                  if (bTool) bTool.scrollIntoView({ behavior: 'smooth' });
                }, 150);
              }}
              className="px-6 py-3 bg-[#9B752E] hover:bg-[#B38F4D] text-white text-xs font-semibold tracking-widest uppercase rounded-[2px] cursor-pointer shadow-sm"
            >
              Verify Availability
            </button>
            <a 
              href="mailto:events@shruthamconvention.com"
              className="px-6 py-3 border border-gold/40 hover:border-gold hover:text-[#9B752E] text-slate-custom text-xs font-semibold tracking-widest uppercase rounded-[2px] transition-all flex items-center justify-center bg-white/50"
            >
              Email Relationship Captain
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
