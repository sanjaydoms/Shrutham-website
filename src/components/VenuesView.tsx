import React, { useState, useMemo } from 'react';
import VenueDetailSubpage from './VenueDetailSubpage';
import TestimonialsSection from './TestimonialsSection';
import PageHeroLayout from './PageHeroLayout';
import { 
  Building, 
  Users, 
  Maximize2, 
  Download, 
  Info, 
  ChevronDown, 
  ChevronUp, 
  ChevronRight,
  ArrowRight, 
  Sparkles, 
  Layers, 
  HelpCircle, 
  Grid 
} from 'lucide-react';

interface VenuesViewProps {
  onInquire: (venueName: string) => void;
  initialSelectedVenueId?: string;
}

interface Venue {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  capacity: number;
  areaSqM: number;
  specs: {
    label: string;
    value: string;
    icon: string;
  }[];
  factsheetUrl: string;
}

export default function VenuesView({ onInquire, initialSelectedVenueId }: VenuesViewProps) {
  // State for showing dynamic detailed internal page
  const [selectedVenueId, setSelectedVenueId] = useState<string | null>(initialSelectedVenueId || null);

  React.useEffect(() => {
    if (initialSelectedVenueId) {
      setSelectedVenueId(initialSelectedVenueId);
    } else {
      setSelectedVenueId(null);
    }
  }, [initialSelectedVenueId]);

  React.useEffect(() => {
    if (!selectedVenueId) {
      document.title = "Our Spaces & Venues | Shrutham Convention, Hyderabad";
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', "Explore all venues at Shrutham Convention, Hyderabad — from the pillarless Main Convention Hall to the Grand Ballroom. 32,000 sq.m. of premium event space.");
    }
  }, [selectedVenueId]);

  // Navigation breadcrumb click helper
  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '#home';
  };

  // State for dynamic filters
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [peopleLimit, setPeopleLimit] = useState<number>(10);
  const [sortType, setSortType] = useState<string>('default');

  // Interactive drop-down opening states for custom filters
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  // Active Slideshow frame index for top destination banner
  const [heroSlideIdx, setHeroSlideIdx] = useState(0);

  // Selected Active Event Type for "Plan your Next Big Event" section
  const [activeEventType, setActiveEventType] = useState<string>('trade-shows');

  // FAQ Expanded indices mapping
  const [expandedFAQIdx, setExpandedFAQIdx] = useState<number | null>(0);

  // Hardcoded premium venues data mimicking the exact spec of Jio World Centre for Shrutham
  const venuesList: Venue[] = [
    {
      id: 'convention-hall',
      name: 'Main Convention Hall',
      description: 'Host mega-conferences, corporate annual meetings, and international summits in Hyderabad\'s most advanced pillarless arena. Featuring dynamic soundproof partitions and elite digital AV integrations.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&q=80',
      category: 'spaces',
      capacity: 5000,
      areaSqM: 6000,
      specs: [
        { label: 'Acoustics', value: 'NRC 0.85 Certified', icon: '🔊' },
        { label: 'Total area', value: '6,000 Sq. m.', icon: '📐' },
        { label: 'Capacity', value: '5,000 Pax', icon: '👥' }
      ],
      factsheetUrl: '#convention-hall-factsheet'
    },
    {
      id: 'grand-ballroom',
      name: 'Grand Ballroom',
      description: 'The crowning jewel of Shrutham. Ideal for premium award ceremonies, red-carpet pageants, and high-tier banquets. Outfitted with majestic warm-crystal chandeliers and magnificent high-clearance ceilings.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000&q=80',
      category: 'spaces',
      capacity: 3200,
      areaSqM: 3000,
      specs: [
        { label: 'Chandelier Styling', value: 'Bespoke Crystal', icon: '👑' },
        { label: 'Total area', value: '3,000 Sq. m.', icon: '📐' },
        { label: 'Capacity', value: '3,200 Pax', icon: '👥' }
      ],
      factsheetUrl: '#grand-ballroom-factsheet'
    },
    {
      id: 'arrival-lobby',
      name: 'Arrival Lobby',
      description: 'First impressions redesigned. A soaring glass-facade atrium flooded with natural daylight and decorated with intricate traditional Jaali patterns, welcoming guests in absolute style.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80',
      category: 'spaces',
      capacity: 1500,
      areaSqM: 2000,
      specs: [
        { label: 'Façade', value: 'Pure Glass Jaali', icon: '🏛️' },
        { label: 'Total area', value: '2,000 Sq. m.', icon: '📐' },
        { label: 'Capacity', value: '1,500 Pax', icon: '👥' }
      ],
      factsheetUrl: '#arrival-lobby-factsheet'
    },
    {
      id: 'landscaped-lawns',
      name: 'Landscaped Lawns',
      description: 'Breathtaking open-air evergreen lawns perfect for starry night receptions, musical concerts, and exquisite outdoor wedding ceremonies surrounded by elegant water features.',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1000&q=80',
      category: 'spaces',
      capacity: 4000,
      areaSqM: 5000,
      specs: [
        { label: 'Lawn Type', value: 'Evergreen Turf', icon: '🌿' },
        { label: 'Total area', value: '5,000 Sq. m.', icon: '📐' },
        { label: 'Capacity', value: '4,000 Pax', icon: '👥' }
      ],
      factsheetUrl: '#landscaped-lawns-factsheet'
    },
    {
      id: 'vip-lounges',
      name: 'VIP Lounges',
      description: 'Reserved for distinguished delegates, celebrities, and VIP panels. Offers refined comfort, plush furnishings, private restrooms, and discrete security protocol entries.',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&q=80',
      category: 'spaces',
      capacity: 200,
      areaSqM: 800,
      specs: [
        { label: 'Privacy', value: 'High Security', icon: '🛡️' },
        { label: 'Total area', value: '800 Sq. m.', icon: '📐' },
        { label: 'Capacity', value: '200 Pax', icon: '👥' }
      ],
      factsheetUrl: '#vip-lounges-factsheet'
    },
    {
      id: 'guest-rooms',
      name: 'Guest Rooms',
      description: 'Five-star accommodation for traveling hosts, family members, or keynote speakers. Beautifully appointed suites right within the convention complex for premium convenience.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1000&q=80',
      category: 'spaces',
      capacity: 150,
      areaSqM: 1500,
      specs: [
        { label: 'Rooms Available', value: '50 Luxury Suites', icon: '🛎️' },
        { label: 'Total area', value: '1,500 Sq. m.', icon: '📐' },
        { label: 'Capacity', value: '150 Guests', icon: '👥' }
      ],
      factsheetUrl: '#guest-rooms-factsheet'
    },
    {
      id: 'culinary',
      name: 'Culinary Services',
      description: 'Our world-class commercial kitchen is capable of serving over 10,000 plated gourmet meals per day. Features independent vegetarian and non-vegetarian preparation lines.',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1000&q=80',
      category: 'services',
      capacity: 10000,
      areaSqM: 1200,
      specs: [
        { label: 'Certification', value: 'ISO 22000 FSSAI', icon: '🍽️' },
        { label: 'Total area', value: '1,200 Sq. m.', icon: '📐' },
        { label: 'Serving Capacity', value: '10,000 Meals/Day', icon: '👥' }
      ],
      factsheetUrl: '#culinary-factsheet'
    },
    {
      id: 'hospitality',
      name: 'Hospitality Services',
      description: 'A dedicated team of experienced guest relation executives, event curators, and hospitality staff trained to manage high-society guest experiences flawlessly.',
      image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1000&q=80',
      category: 'services',
      capacity: 1000,
      areaSqM: 500,
      specs: [
        { label: 'Staffing Range', value: 'Up to 1,000 Crew', icon: '🤝' },
        { label: 'Support Style', value: 'Personal Butler', icon: '👔' },
        { label: 'Dedicated Desk', value: '24/7 Helpline', icon: '📞' }
      ],
      factsheetUrl: '#hospitality-factsheet'
    },
    {
      id: 'corporate-events',
      name: 'Corporate Events',
      description: 'Host strategic AGMs, seminars, company offsites, and board retreats in modern, high-tech configurations supported by 1 Gbps direct fiber lines and custom lighting.',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1000&q=80',
      category: 'events',
      capacity: 2500,
      areaSqM: 4000,
      specs: [
        { label: 'Tech Setup', value: 'Smart Presentation', icon: '💻' },
        { label: 'Total area', value: '4,000 Sq. m.', icon: '📐' },
        { label: 'Capacity', value: '2,500 Pax', icon: '👥' }
      ],
      factsheetUrl: '#corporate-events-factsheet'
    },
    {
      id: 'government-events',
      name: 'Government Events',
      description: 'The preferred secure venue for high-security bilateral assemblies, diplomatic summits, and ministerial forums requiring strict communication encryption and protocol security.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1000&q=80',
      category: 'events',
      capacity: 3000,
      areaSqM: 5000,
      specs: [
        { label: 'Security Level', value: 'VVIP Encrypted', icon: '🛡️' },
        { label: 'Total area', value: '5,000 Sq. m.', icon: '📐' },
        { label: 'Capacity', value: '3,000 Pax', icon: '👥' }
      ],
      factsheetUrl: '#government-events-factsheet'
    },
    {
      id: 'trade-exhibitions',
      name: 'Trade Exhibitions',
      description: 'Massive, heavy floor-load bearing pillarless spaces designed specifically to host national trade shows, auto expos, machinery exhibitions, and global product bazaars.',
      image: 'https://images.unsplash.com/photo-1565034946487-077786996e27?w=1000&q=80',
      category: 'events',
      capacity: 15000,
      areaSqM: 12000,
      specs: [
        { label: 'Pillar-Free', value: '100% Columnless', icon: '🏟️' },
        { label: 'Total area', value: '12,000 Sq. m.', icon: '📐' },
        { label: 'Capacity', value: '15,000 Pax', icon: '👥' }
      ],
      factsheetUrl: '#trade-exhibitions-factsheet'
    },
    {
      id: 'product-launches',
      name: 'Product Launches',
      description: 'Make a bold statement with state-of-the-art stage trusses, laser projections, and immersive surround sound structures engineered to launch your innovations to the world.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1000&q=80',
      category: 'events',
      capacity: 2000,
      areaSqM: 2500,
      specs: [
        { label: 'Laser Rigging', value: 'Up to 15 Tonnes', icon: '⚡' },
        { label: 'Total area', value: '2,500 Sq. m.', icon: '📐' },
        { label: 'Capacity', value: '2,000 Pax', icon: '👥' }
      ],
      factsheetUrl: '#product-launches-factsheet'
    },
    {
      id: 'luxury-weddings',
      name: 'Luxury Weddings',
      description: 'Transform your marriage celebration into an unforgettable royal fairy tale. Choose from majestic indoor mandaps to breathtaking floral landscaped evening functions.',
      image: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=1000&q=80',
      category: 'events',
      capacity: 3500,
      areaSqM: 4500,
      specs: [
        { label: 'Theme Styling', value: 'Royal Traditional', icon: '🌸' },
        { label: 'Total area', value: '4,500 Sq. m.', icon: '📐' },
        { label: 'Capacity', value: '3,500 Pax', icon: '👥' }
      ],
      factsheetUrl: '#luxury-weddings-factsheet'
    },
    {
      id: 'private-celebrations',
      name: 'Private Celebrations',
      description: 'Intimate celebrity birthday galas, private silver anniversaries, or high-tier family milestones curated in discrete, highly personalized banquet configurations.',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1000&q=80',
      category: 'events',
      capacity: 1000,
      areaSqM: 1500,
      specs: [
        { label: 'Styling Accent', value: 'Bespoke Ambient', icon: '✨' },
        { label: 'Total area', value: '1,500 Sq. m.', icon: '📐' },
        { label: 'Capacity', value: '1,000 Pax', icon: '👥' }
      ],
      factsheetUrl: '#private-celebrations-factsheet'
    }
  ];

  // Slide images for the hero section
  const heroSlides = [
    {
      title: 'One Destination. Limitless Possibilities.',
      description: 'Choose from a range of sophisticated, technologically advanced spaces to host exceptional events. Spread over 32,000 sq. m., Shrutham Convention Centre houses world-class venues that can be tailored to business, leisure, entertainment or grand celebratory events.',
      image: 'https://images.unsplash.com/photo-1505232458729-26417ff63cfa?w=1000&q=80'
    },
    {
      title: 'Majestic Pillarless Halls',
      description: 'Engineered entirely column-free to remove all visual boundaries. Our high load-bearing steel rigging can take up to 15-tonnes of high-tech digital displays, laser projectors, and concert wave sound systems with pure structural ease.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1000&q=80'
    },
    {
      title: 'Flawless Culinary Innovation',
      description: 'Our FSSAI high-speed service block includes segregations for pure vegetarian culinary production, equipped with state of the art walk-in flash-freezers and independent loading bays for peak luxury dinners.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1000&q=80'
    }
  ];

  // Filtering list based on Category and Capacity Limit
  const filteredAndSortedVenues = useMemo(() => {
    let list = [...venuesList];
    
    // Filter by Category
    if (selectedCategory !== 'all') {
      list = list.filter(v => v.category === selectedCategory);
    }

    // Filter by Capacity Limit
    list = list.filter(v => v.capacity >= peopleLimit);

    // Sort by type
    if (sortType === 'capacity-asc') {
      list.sort((a, b) => a.capacity - b.capacity);
    } else if (sortType === 'capacity-desc') {
      list.sort((a, b) => b.capacity - a.capacity);
    } else if (sortType === 'area-desc') {
      list.sort((a, b) => b.areaSqM - a.areaSqM);
    }

    return list;
  }, [venuesList, selectedCategory, peopleLimit, sortType]);

  // Event Planner types
  const eventTypes = [
    {
      id: 'trade-shows',
      title: 'Trade Shows or Exhibitions',
      description: 'Ideas and ambitions come to life at our venues that offer the latest technology and unmatched service. Give your exhibitors and visitors an experience to remember, with every event you host at Shrutham.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
    },
    {
      id: 'conventions',
      title: 'Conventions or Conferences',
      description: 'Convene elite scientific, corporate or social assemblies in fully soundproof arenas with multiple layout variations, real-time translations support, and fail-safe 1Gbps dedicated backup fibers.',
      image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80'
    },
    {
      id: 'weddings',
      title: 'Statement Weddings',
      description: 'From majestic mandaps on our lush evergreen foyer lawns to breathtaking royal grand receptions for thousands, let your legacy marriage unfold against Hyderabad’s finest scenic marvels.',
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80'
    },
    {
      id: 'social-events',
      title: 'Social Events',
      description: 'Intimate celebrity galas, art exhibitions, designer fashion runways or milestone family banquets. We present state alignment and custom lighting rigs for elite private settings.',
      image: 'https://images.unsplash.com/photo-1505232458729-26417ff63cfa?w=800&q=80'
    },
    {
      id: 'artistic',
      title: 'Artistic Performances',
      description: 'Perfect audio acoustics with high clear-height staging arrays. Shrutham Convention supports high-profile musical symphonies and theatrical dramas beautifully.',
      image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=800&q=80'
    },
    {
      id: 'sporting',
      title: 'Indoor Sporting Events',
      description: 'Our massive flat-slab floor, high structural ceilings, and high load capacity are tailor-made to host table tennis championships, badminton matches, and custom digital esports finals.',
      image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&q=80'
    },
    {
      id: 'meetings',
      title: 'Meetings',
      description: 'Bi-lateral summits and corporate workshops. Outfitted with luxury executive desks, built-in dynamic presentation screens, and state-of-the-art climate control systems.',
      image: 'https://images.unsplash.com/photo-1556761175-b204652a9116?w=800&q=80'
    }
  ];

  const activeEventData = eventTypes.find(e => e.id === activeEventType) || eventTypes[0];

  // Dynamic FAQs mock mimicking Jio World Centre
  const faqs = [
    {
      id: 1,
      question: 'What is the address of Shrutham Convention Centre?',
      answer: 'Shrutham Convention Centre is prime-located nearby the Nehru ORR Exit 15, Pedda Golconda, Sanghiguda, Hyderabad, Telangana, India. This offers elite congestion-free high-speed travel straight for both international arrivals and central business hotels.'
    },
    {
      id: 2,
      question: 'What is Shrutham Convention Centre?',
      answer: 'Shrutham is Hyderabad’s newly engineered gold-benchmark destination for multi-disciplinary conventions, luxury weddings, business meets, and heavy industrial exhibitions. It brings world-class architectural standards of pillarless geometry, certified acoustic isolation, and elite FSSAI-perfect kitchen operations.'
    },
    {
      id: 3,
      question: 'How do I reach Shrutham Convention Centre?',
      answer: 'Our location is directly connected through the Nehru ORR Exit 15, Pedda Golconda, Sanghiguda, making it a comfortable 22-minute drive from Rajiv Gandhi International Airport. We support a dedicated multi-tier underground visitor parking lot accommodating over 2,500 premium vehicles, with integrated fast EV charging bays.'
    },
    {
      id: 4,
      question: 'What are the different types of events Shrutham Convention Centre can host?',
      answer: 'Due to our ultra-versatile pillarless layout configurations, we confidently host Trade Fairs, Mega Exhibitions, Academic Congresses, International Corporate AGMs, Grand Musical Concerts, Sports Championships, and high-tier Royal Marriage celebratory events.'
    },
    {
      id: 5,
      question: 'Do you offer shuttles to the nearest airport or luxury partner hotels?',
      answer: 'Yes, Shrutham operates a designated direct VVIP shuttle caravan protocol to and from central airport terminals and Hyderabad’s top five-star partner hotels, allowing stress-free travel for high-net-worth delegates.'
    }
  ];

  // Action helper when factsheet download is requested
  const handleDownloadFactsheet = (venue: string, e: React.MouseEvent) => {
    e.preventDefault();
    alert(`Downloading Technical Fact Sheet and Architectural Blueprint PDF for: ${venue}`);
  };

  if (selectedVenueId) {
    return (
      <VenueDetailSubpage 
        venueId={selectedVenueId}
        onBack={() => {
          setSelectedVenueId(null);
          window.location.hash = '#facilities';
        }}
        onInquire={onInquire}
        allVenues={venuesList}
        onSelectOtherVenue={(vId) => {
          setSelectedVenueId(vId);
          window.location.hash = `#facility/${vId}`;
        }}
      />
    );
  }

  return (
    <div id="venues-mockup-root" className="bg-[#FAF9F6] text-[#2D2A26] font-sans antialiased pb-20 selection:bg-[#5c0202] selection:text-white">
      {/* Swiss-style typographic Hero Section */}
      <PageHeroLayout
        title="OUR SPACES"
        navItems={[
          { label: 'convention hall.', targetId: 'convention-hall', active: true },
          { label: 'grand ballroom.', targetId: 'grand-ballroom' },
          { label: 'arrival lobby.', targetId: 'arrival-lobby' },
          { label: 'gala lawns.', targetId: 'landscaped-lawns' }
        ]}
        paragraphs={[
          <>
            Shrutham Convention hosts an elite portfolio of multi-disciplinary venues engineered to accommodate exhibitions, corporate summits, and grand sangeets. Designed over a vast <strong className="text-[#5c0202] font-semibold">32,000 square meter</strong> campus near Nehru ORR Exit 15, Hyderabad, our pillarless architectural layout provides absolute visual freedom and infinite structural versatility.
          </>,
          <>
            From the monumental scale of our <strong className="text-[#5c0202] font-semibold">Main Convention Hall</strong> seating up to <strong className="text-[#5c0202] font-semibold">5,000 delegates</strong>, to the intricate crystal chandeliers of the Grand Ballroom, and the lush evergreen turf of our Gala Lawns, every corner of Shrutham is optimized with high clear-height ceilings and concert-grade acoustic panels.
          </>
        ]}
      />

      {/* 3. EXPLORE OUR VENUES & THE CORE INTERACTIVE FILTER PANEL */}
      <section id="exploreOurVenuesSection" className="site-container px-6 md:px-12 pt-12">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="w-10 h-0.5 bg-[#5c0202] mx-auto mb-2" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-[#0A0908] tracking-tight">
            Explore Our Venues
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-light tracking-wide">
            Hosting an event? Explore our range of versatile spaces.
          </p>
        </div>

        {/* Interactive Premium Filter Bar matching reference image precisely */}
        <div className="bg-white border border-gray-200 p-4 rounded-[4px] shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-6 font-body">
          {/* 1. Spaces Dropdown */}
          <div className="relative w-full md:w-auto shrink-0 z-20">
            <span className="block text-[8px] uppercase tracking-widest font-bold text-gray-400 mb-1">SPACES</span>
            <button 
              onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
              className="w-full md:w-48 bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-[2px] text-xs font-semibold text-gray-700 hover:border-[#5c0202] transition-colors flex items-center justify-between cursor-pointer"
            >
              <span className="capitalize">
                {selectedCategory === 'all' && 'All Our Spaces'}
                {selectedCategory === 'spaces' && 'Venue Spaces'}
                {selectedCategory === 'services' && 'Custom Services'}
                {selectedCategory === 'events' && 'Elite Events'}
              </span>
              <ChevronDown size={14} className="text-gray-400" />
            </button>
            {isCategoryDropdownOpen && (
              <div className="absolute left-0 mt-1 w-full md:w-48 bg-white border border-gray-200 rounded-[2px] shadow-lg z-30 divide-y divide-gray-100 py-1 text-xs text-gray-700 animate-fade-in font-semibold">
                {[
                  { id: 'all', label: 'All Our Spaces' },
                  { id: 'spaces', label: 'Venue Spaces' },
                  { id: 'services', label: 'Custom Services' },
                  { id: 'events', label: 'Elite Events' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setIsCategoryDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 hover:bg-[#5c0202]/5 hover:text-[#5c0202] cursor-pointer block ${selectedCategory === cat.id ? 'text-[#5c0202] bg-[#5c0202]/5' : ''}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* 2. People range slider */}
          <div className="w-full flex-1 max-w-md relative z-10">
            <div className="flex justify-between text-[10px] md:text-xs font-bold text-[#5c0202] tracking-wider mb-2 uppercase">
              <span>PEOPLE</span>
              <span className="font-mono font-bold text-xs bg-[#5c0202]/5 px-2 py-0.5 rounded-sm">{peopleLimit.toLocaleString()} Pax and above</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-gray-400 font-bold">10</span>
              <input 
                type="range"
                min={10}
                max={16500}
                step={50}
                value={peopleLimit}
                onChange={(e) => setPeopleLimit(Number(e.target.value))}
                className="w-full accent-[#5c0202] h-1 bg-gray-200 rounded-lg cursor-pointer appearance-none"
              />
              <span className="text-[10px] text-gray-400 font-bold">16,500</span>
            </div>
          </div>

          {/* 3. Sort type dropdown */}
          <div className="relative w-full md:w-auto shrink-0 z-20">
            <span className="block text-[8px] uppercase tracking-widest font-bold text-gray-400 mb-1">SORT TYPE</span>
            <button 
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className="w-full md:w-48 bg-gray-50 border border-gray-200 px-4 py-2.5 rounded-[2px] text-xs font-semibold text-gray-700 hover:border-[#5c0202] transition-colors flex items-center justify-between cursor-pointer"
            >
              <span>
                {sortType === 'default' && 'Default Order'}
                {sortType === 'capacity-asc' && 'Capacity: Low to High'}
                {sortType === 'capacity-desc' && 'Capacity: High to Low'}
                {sortType === 'area-desc' && 'Total Area: Largest'}
              </span>
              <ChevronDown size={14} className="text-gray-400" />
            </button>
            {isSortDropdownOpen && (
              <div className="absolute right-0 mt-1 w-full md:w-48 bg-white border border-gray-200 rounded-[2px] shadow-lg z-30 divide-y divide-gray-100 py-1 text-xs text-gray-700 animate-fade-in font-semibold">
                {[
                  { id: 'default', label: 'Default Order' },
                  { id: 'capacity-asc', label: 'Capacity: Low to High' },
                  { id: 'capacity-desc', label: 'Capacity: High to Low' },
                  { id: 'area-desc', label: 'Total Area: Largest' }
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSortType(s.id);
                      setIsSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 hover:bg-[#5c0202]/5 hover:text-[#5c0202] cursor-pointer block ${sortType === s.id ? 'text-[#5c0202] bg-[#5c0202]/5' : ''}`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 4. THE CORE VENUES LISTING */}
        <div id="venuesCustomList" className="space-y-8">
          {filteredAndSortedVenues.length > 0 ? (
            filteredAndSortedVenues.map((venue) => (
              <div 
                id={venue.id}
                key={venue.id}
                className="bg-[#FAF9F6] border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300 rounded-[4px] grid grid-cols-1 lg:grid-cols-12 scroll-mt-24"
              >
                {/* Left side: Premium structured photo */}
                <div className="lg:col-span-5 relative min-h-[250px] lg:min-h-[auto] overflow-hidden">
                  <img 
                    src={venue.image} 
                    alt={venue.name} 
                    className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Right side: Fully-aligned Details block matching Jio specification layout precisely */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  
                  <div className="space-y-3">
                    <h3 className="font-display text-2xl font-normal text-obsidian tracking-tight leading-tight uppercase">
                      {venue.name}
                    </h3>
                    <p className="text-[#2C2824] text-sm font-normal leading-relaxed">
                      {venue.description}
                    </p>
                  </div>

                  {/* Ribbon of Key Specs with matching metrics layout */}
                  <div className="grid grid-cols-3 gap-2.5 py-4 border-t border-b border-gray-100">
                    {venue.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="space-y-1 text-left">
                        <div className="flex items-center gap-1 text-gray-400">
                          <span className="text-sm">{spec.icon}</span>
                          <span className="text-[10px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400">{spec.label}</span>
                        </div>
                        <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-gray-950 block">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Quick outline Buttons matching Jio exactly */}
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => {
                        setSelectedVenueId(venue.id);
                        window.location.hash = `#facility/${venue.id}`;
                      }}
                      className="btn-slide-outline px-5 py-2 rounded-[2px] text-[10px] sm:text-xs font-semibold uppercase tracking-widest cursor-pointer"
                    >
                      KNOW MORE
                    </button>
                    
                    <button
                      onClick={(e) => handleDownloadFactsheet(venue.name, e)}
                      className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-[#5c0202] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      DOWNLOAD FACT SHEET
                      <Download size={13} strokeWidth={2.5} />
                    </button>
                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 bg-white border border-gray-100 rounded-[4px] space-y-3">
              <Info size={32} className="text-[#5c0202] mx-auto opacity-70" />
              <p className="text-gray-500 font-light text-sm">
                No venues match the selected filter combination (Pax/Category).
              </p>
              <button 
                onClick={() => {
                  setSelectedCategory('all');
                  setPeopleLimit(10);
                }}
                className="text-xs uppercase font-bold tracking-widest text-[#5c0202] hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <div className="py-12 border-t border-gray-100 bg-white">
        <TestimonialsSection />
      </div>

      {/* 6. FAQS ACCORDION SECTION */}
      <section id="faqsSection" className="max-w-4xl mx-auto px-6 md:px-12 py-20 border-t border-gray-100">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#5c0202] text-white text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase font-body rounded-[2px] mb-4">
            Venue Operations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-light text-obsidian tracking-tight">
            Frequently Solved Questions
          </h2>
        </div>

        {/* Dynamic Expandable FAQ Stack */}
        <div className="space-y-4 font-body max-w-3xl mx-auto text-left">
          {faqs.map((faq, fIdx) => {
            const isOpen = expandedFAQIdx === fIdx;
            return (
              <div 
                key={faq.id} 
                className="border border-gold/15 rounded-[2px] transition-colors bg-chalk/45 hover:bg-white text-left"
              >
                <button
                  onClick={() => setExpandedFAQIdx(isOpen ? null : fIdx)}
                  className="w-full text-left p-5 flex justify-between items-center bg-transparent cursor-pointer select-none focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-semibold text-obsidian pr-4 flex items-center gap-2">
                    <span className="text-[#5c0202] font-mono font-bold">0{fIdx + 1}.</span> {faq.question}
                  </span>
                  <span className="text-[#5c0202] shrink-0">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-mid leading-relaxed text-justify border-t border-gold/5 animate-fade-in font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Elegant VIEW ALL Button at bottom */}
        <div className="text-center pt-8">
          <button 
            onClick={() => {
              window.location.hash = '#faqs';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#5c0202] hover:text-[#7a0303] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            VIEW ALL FAQs
            <ArrowRight size={13} />
          </button>
        </div>
      </section>

      {/* LANDINGGO-INSPIRED BANNER CTA SECTION */}
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
                  onClick={() => {
                    onInquire("General Inquiry");
                    setTimeout(() => {
                      const contactForm = document.getElementById('contact');
                      if (contactForm) {
                        contactForm.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 200);
                  }}
                  className="bg-[#5c0202] hover:bg-[#7a0303] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-[8px] transition-all cursor-pointer shadow-md hover:-translate-y-0.5 inline-flex items-center justify-center"
                >
                  Book Your Venue
                </button>
                <button
                  onClick={() => {
                    onInquire("Site Visit Request");
                    setTimeout(() => {
                      const contactForm = document.getElementById('contact');
                      if (contactForm) {
                        contactForm.scrollIntoView({ behavior: 'smooth' });
                      }
                    }, 200);
                  }}
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
