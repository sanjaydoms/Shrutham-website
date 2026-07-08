import React, { useState, useMemo, useEffect } from 'react';
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
  Grid,
  CheckCircle,
  Coffee,
  ShieldCheck,
  Cpu,
  Bookmark,
  Share2,
  Calendar,
  X
} from 'lucide-react';

interface VenueDetailSubpageProps {
  venueId: string;
  onBack: () => void;
  onInquire: (venueName: string) => void;
  allVenues: any[];
  onSelectOtherVenue: (venueId: string) => void;
}

interface FloorPlanMetric {
  area: string;
  theatre: string;
  classroom: string;
  roundTable: string;
  reception: string;
}

export default function VenueDetailSubpage({ 
  venueId, 
  onBack, 
  onInquire, 
  allVenues, 
  onSelectOtherVenue 
}: VenueDetailSubpageProps) {

  // Dynamic content mapping based on active venue
  const detailData = useMemo(() => {
    const data: Record<string, {
      name: string;
      title: string;
      breadcrumbName: string;
      description: string;
      heroImage: string;
      downloadUrl: string;
      specs: { label: string; value: string; icon: React.ReactNode }[];
      tabs: { id: string; label: string; metrics: FloorPlanMetric }[];
      eventsWeHost: { id: string; title: string; description: string; image: string }[];
      showcaseImages: string[];
      testimonials: { quote: string; author: string; designation: string; organisation: string; avatarUrl: string }[];
    }> = {
      'convention-hall': {
        name: 'Main Convention Hall',
        title: 'The Sovereign Convention Hall',
        breadcrumbName: 'Main Convention Hall',
        description: 'Our state-of-the-art Main Convention Hall is Hyderabad\'s newly engineered gold-benchmark destination for multi-disciplinary conventions, corporate assemblies, and international congresses. Designed columnless with 100% pillar-free structural geometry, it features high load-bearing steel rigging to support massive digital displays and laser projectors. With advanced real-time translation desks and high-density 5G coverage, it ensures flawless, high-impact events.',
        heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80',
        downloadUrl: '#download-convention-hall-pdf',
        specs: [
          { label: 'Acoustics', value: 'NRC 0.85 Certified', icon: <Cpu size={18} className="text-[#5c0202]" /> },
          { label: '6,000 Sq. m.', value: 'Total area', icon: <Layers size={18} className="text-[#5c0202]" /> },
          { label: '5,000 People', value: 'Capacity', icon: <Users size={18} className="text-[#5c0202]" /> }
        ],
        tabs: [
          { 
            id: 'conv-all', 
            label: 'Main Hall (Full)', 
            metrics: { area: '6,000', theatre: '5,000', classroom: '2,500', roundTable: '2,000', reception: '5,000' }
          },
          { 
            id: 'conv-north', 
            label: 'North Hall Partition', 
            metrics: { area: '3,000', theatre: '2,500', classroom: '1,200', roundTable: '1,000', reception: '2,500' }
          },
          { 
            id: 'conv-south', 
            label: 'South Hall Partition', 
            metrics: { area: '3,000', theatre: '2,500', classroom: '1,200', roundTable: '1,000', reception: '2,500' }
          },
        ],
        eventsWeHost: [
          {
            id: 'conventions',
            title: 'International Conventions',
            description: 'Convene academic congresses or global forums with pristine sound isolation and premium technical desks.',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
          },
          {
            id: 'corporate-summits',
            title: 'Corporate Summits',
            description: 'Provide pristine presentation rigs and multiple breakout channels for critical stakeholder meetings.',
            image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80'
          }
        ],
        showcaseImages: [
          'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
          'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=1200&q=80',
          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80'
        ],
        testimonials: [
          {
            quote: 'Executing the International Science Forum across the Main Convention Hall was an absolute success. The facilities and high-density connectivity are phenomenal.',
            author: 'DR. ARVIND RAO',
            designation: 'General Secretary',
            organisation: 'Indian Scientific Federation',
            avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80'
          }
        ]
      },
      'grand-ballroom': {
        name: 'Grand Ballroom',
        title: 'Lotus Grand Ballroom',
        breadcrumbName: 'Grand Ballroom',
        description: 'Host a statement wedding, sit-down dinner or glamorous red-carpet event at our grand and luxurious Shrutham Ballroom. Outfitted with bespoke warm-crystal chandeliers and certified acoustic-damped walls. The Ballroom can be divided into three smaller self-contained areas for more intimate functions, each supported by pristine foyer walkways.',
        heroImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&q=80',
        downloadUrl: '#download-ballroom-pdf',
        specs: [
          { label: 'Bespoke Crystal', value: 'Chandelier Styling', icon: <Sparkles size={18} className="text-[#5c0202]" /> },
          { label: '3,000 Sq. m.', value: 'Total area', icon: <Layers size={18} className="text-[#5c0202]" /> },
          { label: '3,200 People', value: 'Capacity', icon: <Users size={18} className="text-[#5c0202]" /> }
        ],
        tabs: [
          { 
            id: 'ballroom-all', 
            label: 'Lotus Ballroom (Full)', 
            metrics: { area: '3,000', theatre: '3,000', classroom: '1,500', roundTable: '1,200', reception: '3,200' }
          },
          { 
            id: 'ballroom-1', 
            label: 'Lotus Ballroom 1', 
            metrics: { area: '1,000', theatre: '1,000', classroom: '500', roundTable: '400', reception: '1,000' }
          },
          { 
            id: 'ballroom-2-3', 
            label: 'Lotus Ballroom 2 & 3', 
            metrics: { area: '2,000', theatre: '2,000', classroom: '1,000', roundTable: '800', reception: '2,200' }
          },
        ],
        eventsWeHost: [
          {
            id: 'royal-wedding',
            title: 'Royal Weddings',
            description: 'Make your wedding dreams come true under magnificent chandeliers and luxury floral stages.',
            image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80'
          },
          {
            id: 'gala-dinner',
            title: 'Award Galas',
            description: 'Host glamorous celebrity galas, award nights, high fashion runways, and international lineups.',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80'
          }
        ],
        showcaseImages: [
          'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80',
          'https://images.unsplash.com/photo-1505232458729-26417ff63cfa?w=1200&q=80',
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80'
        ],
        testimonials: [
          {
            quote: 'The acoustics, lighting rigs, and magnificent crystal chandeliers elevated our corporate dinner to a level of sheer royalty.',
            author: 'VIKRAM ADITYA',
            designation: 'Managing Director',
            organisation: 'Apex Luxury Group',
            avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&q=80'
          }
        ]
      },
      'arrival-lobby': {
        name: 'Arrival Lobby',
        title: 'Jaali Arrival Lobby',
        breadcrumbName: 'Arrival Lobby',
        description: 'First impressions set the tone for every prestigious event. Our Arrival Lobby is designed as a soaring glass-facade atrium flooded with gorgeous natural daylight and framed by intricate, custom-crafted traditional Jaali artwork. Elegant stone flooring, indoor water marvels, and generous space make this the most stunning pre-function walkway in Southern India.',
        heroImage: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&q=80',
        downloadUrl: '#download-arrival-lobby-pdf',
        specs: [
          { label: 'Jaali Façade', value: 'Pure Glass Jaali', icon: <Building size={18} className="text-[#5c0202]" /> },
          { label: '2,000 Sq. m.', value: 'Total area', icon: <Layers size={18} className="text-[#5c0202]" /> },
          { label: '1,500 People', value: 'Capacity', icon: <Users size={18} className="text-[#5c0202]" /> }
        ],
        tabs: [
          { 
            id: 'lobby-all', 
            label: 'Main Atrium', 
            metrics: { area: '2,000', theatre: '500', classroom: '200', roundTable: '300', reception: '1,500' }
          },
          { 
            id: 'lobby-west', 
            label: 'West Promenade', 
            metrics: { area: '1,000', theatre: '250', classroom: '100', roundTable: '150', reception: '750' }
          },
        ],
        eventsWeHost: [
          {
            id: 'pre-reception',
            title: 'Welcome Cocktails',
            description: 'Serve custom greeting drinks beneath 30-foot glass boundaries overlooking central landscaping gardens.',
            image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80'
          }
        ],
        showcaseImages: [
          'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80',
          'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80'
        ],
        testimonials: [
          {
            quote: 'The foyer jaali patterns and daylight atrium created the most magnificent first impression for our elite delegates.',
            author: 'MEERA SHARMA',
            designation: 'Exhibition Stylist',
            organisation: 'Vedic Heritage Council',
            avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&q=80'
          }
        ]
      },
      'landscaped-lawns': {
        name: 'Landscaped Lawns',
        title: 'Shrutham Landscaped Lawns',
        breadcrumbName: 'Landscaped Lawns',
        description: 'Celebrate under the starry skies on our pristine evergreen manicured lawns. Spanning 5,000 sq. m. and surrounded by tranquil, designer water fountains and majestic landscape lighting, the lawns offer a picturesque backdrop for premium open-air receptions, music concerts, and scenic cocktail dinners.',
        heroImage: 'https://images.unsplash.com/photo-1545232979-8bf34eb9757b?w=1600&q=80',
        downloadUrl: '#download-lawns-pdf',
        specs: [
          { label: 'Evergreen Turf', value: 'Lawn Type', icon: <Sparkles size={18} className="text-[#5c0202]" /> },
          { label: '5,000 Sq. m.', value: 'Total area', icon: <Layers size={18} className="text-[#5c0202]" /> },
          { label: '4,000 People', value: 'Capacity', icon: <Users size={18} className="text-[#5c0202]" /> }
        ],
        tabs: [
          { 
            id: 'lawn-emerald', 
            label: 'Emerald Lawn (Full)', 
            metrics: { area: '5,000', theatre: '4,000', classroom: '1,500', roundTable: '2,000', reception: '4,000' }
          }
        ],
        eventsWeHost: [
          {
            id: 'outdoor-rec',
            title: 'Outdoor Receptions',
            description: 'Celebrate your special moments in Hyderabad\'s most beautiful manicured garden settings with designer lit fountains.',
            image: 'https://images.unsplash.com/photo-1545232979-8bf34eb9757b?w=800&q=80'
          }
        ],
        showcaseImages: [
          'https://images.unsplash.com/photo-1545232979-8bf34eb9757b?w=1200&q=80'
        ],
        testimonials: [
          {
            quote: 'The scenic evening sunset on the landscaped lawns provided the most breathtaking backdrop imaginable.',
            author: 'ANANYA REDDY',
            designation: 'Event Architect',
            organisation: 'Reddy Marriages Ltd',
            avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&q=80'
          }
        ]
      },
      'vip-lounges': {
        name: 'VIP Lounges',
        title: 'Executive VIP Lounges',
        breadcrumbName: 'VIP Lounges',
        description: 'Reserved exclusively for distinguished delegates, high-society celebrities, and VVIP boards. Our VIP Lounges are a sanctuary of refined luxury, featuring premium leather upholstery, private ensuite restrooms, discrete entrance corridors, and high-security communication pipelines to ensure complete privacy.',
        heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80',
        downloadUrl: '#download-vip-pdf',
        specs: [
          { label: 'High Security', value: 'Privacy Style', icon: <ShieldCheck size={18} className="text-[#5c0202]" /> },
          { label: '800 Sq. m.', value: 'Total Area', icon: <Layers size={18} className="text-[#5c0202]" /> },
          { label: '200 People', value: 'Capacity', icon: <Users size={18} className="text-[#5c0202]" /> }
        ],
        tabs: [
          { 
            id: 'vip-royal', 
            label: 'Royal Lounge Suite', 
            metrics: { area: '400', theatre: '100', classroom: '50', roundTable: '40', reception: '100' }
          },
          { 
            id: 'vip-diplomatic', 
            label: 'Diplomatic Lounge', 
            metrics: { area: '400', theatre: '100', classroom: '50', roundTable: '40', reception: '100' }
          }
        ],
        eventsWeHost: [
          {
            id: 'vip-assemblies',
            title: 'Bilateral Assemblies',
            description: 'Provide state dignitaries with bulletproof-level privacy and private ensuite catering grids.',
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80'
          }
        ],
        showcaseImages: [
          'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80'
        ],
        testimonials: [
          {
            quote: 'A masterpiece of privacy. The C-suite board was exceptionally pleased with the custom service and private entry pipelines.',
            author: 'RAJESH GUPTA',
            designation: 'Chief of Staff',
            organisation: 'VVIP Delegation Logistics',
            avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&q=80'
          }
        ]
      },
      'guest-rooms': {
        name: 'Guest Rooms',
        title: 'Luxury Guest Rooms & Suites',
        breadcrumbName: 'Guest Rooms',
        description: 'Provide your traveling hosts, keynote delegates, or wedding family members the luxury of comfort right within the Shrutham Convention complex. Our 50 beautifully appointed suites are styled with custom local wooden textures, automated room climate controls, and high-fidelity entertainment hubs.',
        heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
        downloadUrl: '#download-rooms-pdf',
        specs: [
          { label: '50 Premium Suites', value: 'Accommodation', icon: <Coffee size={18} className="text-[#5c0202]" /> },
          { label: '1,500 Sq. m.', value: 'Total Space', icon: <Layers size={18} className="text-[#5c0202]" /> },
          { label: '150 Guests', value: 'Capacity', icon: <Users size={18} className="text-[#5c0202]" /> }
        ],
        tabs: [
          { 
            id: 'rooms-exec', 
            label: 'Executive Wing', 
            metrics: { area: '1,000', theatre: '100', classroom: '50', roundTable: '50', reception: '100' }
          }
        ],
        eventsWeHost: [
          {
            id: 'stays',
            title: 'Convenient Overnight Stays',
            description: 'Provide your core organizing committee and high-profile guests comfort without stepping outside the complex.',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'
          }
        ],
        showcaseImages: [
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80'
        ],
        testimonials: [
          {
            quote: 'Having ultra-comfortable suite bedrooms right inside the convention premises was a massive logistical relief.',
            author: 'VIKAS VARMA',
            designation: 'Wedding Host',
            organisation: 'Varma Celebrations',
            avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80'
          }
        ]
      },
      'culinary': {
        name: 'Culinary Services',
        title: 'Shrutham Culinary Excellence',
        breadcrumbName: 'Culinary',
        description: 'Our award-winning culinary production block is ISO 22000 and FSSAI certified, fully engineered with separate pure-vegetarian and non-vegetarian preparation lines. Supported by massive flash-freezers and independent supply bays, our culinary artisans curate flawless royal banquets and plated silver-service menus serving over 10,000 gourmet meals a day.',
        heroImage: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80',
        downloadUrl: '#download-culinary-pdf',
        specs: [
          { label: 'ISO 22000 FSSAI', value: 'Certification', icon: <Coffee size={18} className="text-[#5c0202]" /> },
          { label: '1,200 Sq. m.', value: 'Commercial Grid', icon: <Layers size={18} className="text-[#5c0202]" /> },
          { label: '10,000 Meals', value: 'Daily Capacity', icon: <Users size={18} className="text-[#5c0202]" /> }
        ],
        tabs: [
          { 
            id: 'cul-grand', 
            label: 'Grand Kitchen Block', 
            metrics: { area: '1,200', theatre: '10,000', classroom: '10,000', roundTable: '10,000', reception: '10,000' }
          }
        ],
        eventsWeHost: [
          {
            id: 'banquets',
            title: 'Royal Banquets',
            description: 'Serve custom curated multi-course luxury dinners orchestrated by award-winning chefs.',
            image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80'
          }
        ],
        showcaseImages: [
          'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80'
        ],
        testimonials: [
          {
            quote: 'The pure vegetarian banquet spread was an absolute sensory masterpiece. Highly professional culinary team.',
            author: 'SHYAM PRASAD',
            designation: 'Catering Chairman',
            organisation: 'Heritage Banquets South',
            avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80'
          }
        ]
      },
      'hospitality': {
        name: 'Hospitality Services',
        title: 'Elite Hospitality & Concierge',
        breadcrumbName: 'Hospitality',
        description: 'True luxury lies in attention to detail. Our hospitality suite offers dedicated personal butler arrays, multilingual guest relations executives, and experienced event curators trained in elite protocols. From coordinating airport arrivals to orchestrating perfect backstage cues, our crew ensures a seamless, world-class experience.',
        heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1600&q=80',
        downloadUrl: '#download-hospitality-pdf',
        specs: [
          { label: '1,000 Crew Limit', value: 'Staff Capacity', icon: <CheckCircle size={18} className="text-[#5c0202]" /> },
          { label: 'Personal Butler', value: 'Service Level', icon: <ShieldCheck size={18} className="text-[#5c0202]" /> },
          { label: '24/7 Helpline', value: 'Guest Support', icon: <Users size={18} className="text-[#5c0202]" /> }
        ],
        tabs: [
          { 
            id: 'hosp-desk', 
            label: 'Concierge Desk', 
            metrics: { area: '500', theatre: '1,000', classroom: '1,000', roundTable: '1,000', reception: '1,000' }
          }
        ],
        eventsWeHost: [
          {
            id: 'concierge',
            title: 'Protocol Guest Services',
            description: 'Flawlessly manage airport pickups, suite bookings, VIP registrations, and itinerary timings.',
            image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80'
          }
        ],
        showcaseImages: [
          'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80'
        ],
        testimonials: [
          {
            quote: 'The Shrutham hospitality team was incredibly accommodating, handling last-minute international delegates beautifully.',
            author: 'SARAH CHEN',
            designation: 'Summit Director',
            organisation: 'APEC Forum Logistics',
            avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&q=80'
          }
        ]
      },
      'corporate-events': {
        name: 'Corporate Events',
        title: 'Corporate Events & Forums',
        breadcrumbName: 'Corporate Events',
        description: 'Host strategic AGMs, bilateral business summits, and product offsites in high-specification tech settings. Equipped with high-density Wi-Fi networks, ceiling-mounted projectors, and certified sound isolation panels, our spaces are designed for optimal professional collaboration.',
        heroImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&q=80',
        downloadUrl: '#download-corporate-pdf',
        specs: [
          { label: 'Smart Presentation', value: 'Tech Layout', icon: <Cpu size={18} className="text-[#5c0202]" /> },
          { label: '4,000 Sq. m.', value: 'Total Area', icon: <Layers size={18} className="text-[#5c0202]" /> },
          { label: '2,500 People', value: 'Capacity', icon: <Users size={18} className="text-[#5c0202]" /> }
        ],
        tabs: [
          { 
            id: 'corp-plenary', 
            label: 'Plenary Stage', 
            metrics: { area: '4,000', theatre: '2,500', classroom: '1,200', roundTable: '1,000', reception: '2,500' }
          }
        ],
        eventsWeHost: [
          {
            id: 'agms',
            title: 'Annual General Meetings',
            description: 'Ensure secure and organized voting protocols for corporate board stakeholders.',
            image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80'
          }
        ],
        showcaseImages: [
          'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80'
        ],
        testimonials: [
          {
            quote: 'A dream corporate retreat setting. Technical helpdesk and sound isolation were perfect.',
            author: 'SAMEER DESHMUKH',
            designation: 'VP of Operations',
            organisation: 'Zenith Tech India',
            avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80'
          }
        ]
      },
      'government-events': {
        name: 'Government Events',
        title: 'Government Summits & State Forums',
        breadcrumbName: 'Government Events',
        description: 'The preferred secure venue for official government summits, state banquets, and ministerial assemblies. Outfitted with strict high-security entrances, media briefing rooms, and end-to-end communication encryption, we accommodate public delegations with complete diplomatic poise.',
        heroImage: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1600&q=80',
        downloadUrl: '#download-government-pdf',
        specs: [
          { label: 'VVIP Encrypted', value: 'Security Level', icon: <ShieldCheck size={18} className="text-[#5c0202]" /> },
          { label: '5,000 Sq. m.', value: 'Total Area', icon: <Layers size={18} className="text-[#5c0202]" /> },
          { label: '3,000 People', value: 'Capacity', icon: <Users size={18} className="text-[#5c0202]" /> }
        ],
        tabs: [
          { 
            id: 'gov-hall', 
            label: 'Diplomatic Hall', 
            metrics: { area: '5,000', theatre: '3,000', classroom: '1,500', roundTable: '1,200', reception: '3,000' }
          }
        ],
        eventsWeHost: [
          {
            id: 'summits',
            title: 'Ministerial Summits',
            description: 'Configure beautiful bilateral assembly desks supported by world-class security layouts.',
            image: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&q=80'
          }
        ],
        showcaseImages: [
          'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=1200&q=80'
        ],
        testimonials: [
          {
            quote: 'Security grids and media broadcasting blocks were managed to absolute perfection.',
            author: 'K. RAMAKRISHNAN',
            designation: 'Protocol Officer',
            organisation: 'Ministry of External Affairs',
            avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&q=80'
          }
        ]
      },
      'trade-exhibitions': {
        name: 'Trade Exhibitions',
        title: 'Trade Exhibitions & Fairs',
        breadcrumbName: 'Trade Exhibitions',
        description: 'Unmatched heavy-load pillarless halls designed for heavy machinery, automobiles, industrial goods, and trade consumer fairs. Supported by multiple high-clearance loading dock gates, under-floor utility trenches for electricity and water, and massive visitor lobbies.',
        heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
        downloadUrl: '#download-trade-pdf',
        specs: [
          { label: '100% Columnless', value: 'Pillar-Free Layout', icon: <Grid size={18} className="text-[#5c0202]" /> },
          { label: '12,000 Sq. m.', value: 'Total Area', icon: <Layers size={18} className="text-[#5c0202]" /> },
          { label: '15,000 People', value: 'Capacity', icon: <Users size={18} className="text-[#5c0202]" /> }
        ],
        tabs: [
          { 
            id: 'ex-hall-a', 
            label: 'Exhibition Hall A', 
            metrics: { area: '12,000', theatre: '15,000', classroom: '8,000', roundTable: '6,000', reception: '15,000' }
          }
        ],
        eventsWeHost: [
          {
            id: 'fairs',
            title: 'Machinery Trade Fairs',
            description: 'Support active machinery operation with state under-floor electric and plumbing utility grids.',
            image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'
          }
        ],
        showcaseImages: [
          'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80'
        ],
        testimonials: [
          {
            quote: 'Highest load capacity and pillarless flexibility. Shrutham sets the absolute standard for heavy industry shows.',
            author: 'SURESH SHARMA',
            designation: 'Exhibition Director',
            organisation: 'Auto Expo Association',
            avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80'
          }
        ]
      },
      'product-launches': {
        name: 'Product Launches',
        title: 'Immersive Product Launches',
        breadcrumbName: 'Product Launches',
        description: 'Turn your product announcements into global trends. Our spaces are built to accommodate massive overhead truss payloads for heavy digital lighting rigs, high-contrast laser projectors, and concert-grade acoustics designed to impress.',
        heroImage: 'https://images.unsplash.com/photo-1505232458729-26417ff63cfa?w=1600&q=80',
        downloadUrl: '#download-launches-pdf',
        specs: [
          { label: 'Laser Truss Rigs', value: 'Rigging Load', icon: <Cpu size={18} className="text-[#5c0202]" /> },
          { label: '2,500 Sq. m.', value: 'Launch Arena', icon: <Layers size={18} className="text-[#5c0202]" /> },
          { label: '2,000 People', value: 'Capacity', icon: <Users size={18} className="text-[#5c0202]" /> }
        ],
        tabs: [
          { 
            id: 'launch-main', 
            label: 'Main Stage', 
            metrics: { area: '2,500', theatre: '2,000', classroom: '1,000', roundTable: '800', reception: '2,000' }
          }
        ],
        eventsWeHost: [
          {
            id: 'keynotes',
            title: 'Tech Keynote Reveals',
            description: 'Deliver stunning announcements supported by custom lighting setups and high fidelity theater systems.',
            image: 'https://images.unsplash.com/photo-1505232458729-26417ff63cfa?w=800&q=80'
          }
        ],
        showcaseImages: [
          'https://images.unsplash.com/photo-1505232458729-26417ff63cfa?w=1200&q=80'
        ],
        testimonials: [
          {
            quote: 'The visual impact we achieved on launch day was stellar. The truss structural strength was brilliant.',
            author: 'NITIN KUMAR',
            designation: 'Creative Director',
            organisation: 'Vortex Motors India',
            avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&q=80'
          }
        ]
      },
      'luxury-weddings': {
        name: 'Luxury Weddings',
        title: 'Grand Shrutham Royal Weddings',
        breadcrumbName: 'Luxury Weddings',
        description: 'Where fairy tales come to life in breathtaking grandeur. From royal indoor mandapams under glistening warm chandeliers to outdoor floral stage backdrops on our manicured lawns, we craft heritage marriages with unmatched luxury and flawless culinary options.',
        heroImage: 'https://images.unsplash.com/photo-1519225495810-7512c696505a?w=1600&q=80',
        downloadUrl: '#download-weddings-pdf',
        specs: [
          { label: 'Royal Traditional', value: 'Styling Theme', icon: <Sparkles size={18} className="text-[#5c0202]" /> },
          { label: '4,500 Sq. m.', value: 'Wedding Estate', icon: <Layers size={18} className="text-[#5c0202]" /> },
          { label: '3,500 People', value: 'Capacity', icon: <Users size={18} className="text-[#5c0202]" /> }
        ],
        tabs: [
          { 
            id: 'wed-palace', 
            label: 'Palace Mandapam', 
            metrics: { area: '4,500', theatre: '3,500', classroom: '1,500', roundTable: '2,000', reception: '3,500' }
          }
        ],
        eventsWeHost: [
          {
            id: 'sangeet',
            title: 'Sangeet Nights',
            description: 'Construct majestic custom performance stages with concert acoustics and vibrant mood lighting.',
            image: 'https://images.unsplash.com/photo-1519225495810-7512c696505a?w=800&q=80'
          }
        ],
        showcaseImages: [
          'https://images.unsplash.com/photo-1519225495810-7512c696505a?w=1200&q=80'
        ],
        testimonials: [
          {
            quote: 'Our royal sangeet was magnificent. The team curated every detail to absolute luxury standard.',
            author: 'PALLAVI REDDY',
            designation: 'Bride',
            organisation: 'Reddy Marriages',
            avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&q=80'
          }
        ]
      },
      'private-celebrations': {
        name: 'Private Celebrations',
        title: 'Private Celebrations & Banquets',
        breadcrumbName: 'Private Celebrations',
        description: 'Host high-tier anniversary galas, celebrity birthdays, and intimate milestone achievements in private, beautifully customized luxury settings. Supported by a dedicated relationship manager and tailor-made menus curated by our master chefs.',
        heroImage: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1600&q=80',
        downloadUrl: '#download-celebrations-pdf',
        specs: [
          { label: 'Bespoke Ambient', value: 'Theme Styling', icon: <Sparkles size={18} className="text-[#5c0202]" /> },
          { label: '1,500 Sq. m.', value: 'Banquet Space', icon: <Layers size={18} className="text-[#5c0202]" /> },
          { label: '1,000 People', value: 'Capacity', icon: <Users size={18} className="text-[#5c0202]" /> }
        ],
        tabs: [
          { 
            id: 'cel-salon', 
            label: 'Grand Salon', 
            metrics: { area: '1,500', theatre: '1,000', classroom: '500', roundTable: '400', reception: '1,000' }
          }
        ],
        eventsWeHost: [
          {
            id: 'milestones',
            title: 'Birthday Milestones',
            description: 'Celebrate lifecycle landmarks in elegant private salons with cozy ambient details.',
            image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80'
          }
        ],
        showcaseImages: [
          'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80'
        ],
        testimonials: [
          {
            quote: 'A magnificent private dinner. The layout, flowers, and custom menu exceeded all expectations.',
            author: 'ANIL RAO',
            designation: 'Host',
            organisation: 'Rao Heritage Family',
            avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80'
          }
        ]
      }
    };
    
    return data[venueId] || data['convention-hall'];
  }, [venueId]);

  // Tab State
  const [activeTabId, setActiveTabId] = useState(detailData.tabs[0].id);

  // Set initial tab whenever the selected venue changes
  useEffect(() => {
    setActiveTabId(detailData.tabs[0].id);
    setActiveHostEventId(detailData.eventsWeHost[0]?.id || '');
    setActiveShowcaseImage(detailData.showcaseImages[0]);
    setTestimonialIdx(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [venueId, detailData]);

  const activeTabMetrics = useMemo(() => {
    return detailData.tabs.find(t => t.id === activeTabId)?.metrics || detailData.tabs[0].metrics;
  }, [activeTabId, detailData]);

  // Events We Host accordion state
  const [activeHostEventId, setActiveHostEventId] = useState(detailData.eventsWeHost[0]?.id || '');
  const activeEventData = useMemo(() => {
    return detailData.eventsWeHost.find(e => e.id === activeHostEventId) || detailData.eventsWeHost[0];
  }, [activeHostEventId, detailData]);

  // Venue Showcase Gallery state
  const [activeShowcaseImage, setActiveShowcaseImage] = useState(detailData.showcaseImages[0]);

  // Testimonial Index Slider State
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const activeTestimonial = detailData.testimonials[testimonialIdx] || detailData.testimonials[0];

  // Other venues for recommendation footer
  const filteredOtherVenues = useMemo(() => {
    return allVenues.filter(v => v.id !== venueId);
  }, [allVenues, venueId]);

  const handleDownloadPDF = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`Downloading interactive architectural blueprint & technical specification brochure PDF for: ${detailData.title}`);
  };

  return (
    <div className="bg-[#FAF9F6] text-[#2D2A26] font-sans antialiased pb-20 selection:bg-[#5c0202] selection:text-white">
      
      {/* 1. EDITORIAL BREADCRUMB INDICATOR ROW WITH AN INTEGRATED DISMISS BUTTON */}
      <div className="bg-white border-b border-gray-100 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-[11px] md:text-xs text-gray-500 tracking-wider font-medium flex items-center gap-1.5 uppercase">
            <button onClick={onBack} className="hover:text-[#5c0202] transition-colors bg-transparent border-0 cursor-pointer font-bold uppercase tracking-wider">
              Our Venues
            </button>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800 font-semibold text-[#5c0202]">{detailData.breadcrumbName} Detail Profile</span>
          </div>
          
          <button 
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[#5c0202] uppercase tracking-wider transition-colors bg-transparent border-0 cursor-pointer"
          >
            <X size={14} /> Close
          </button>
        </div>
      </div>

      {/* 2. FULL DENSITY DRAMATIC HERO BANNER */}
      <section className="relative w-full h-[320px] md:h-[480px] bg-zinc-950 overflow-hidden">
        <img 
          src={detailData.heroImage} 
          alt={detailData.title}
          className="w-full h-full object-cover opacity-85 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Floating badge cards */}
        <div className="absolute bottom-6 left-6 md:left-12 text-white max-w-4xl space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-[#5c0202] px-3 py-1.2 text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-[#FFF] rounded-[2px]">
            <Sparkles size={11} /> SHRUTHAM GOLD CERTIFIED LUXURY
          </div>
          <h1 className="font-display text-3xl md:text-6xl font-light tracking-tight text-white leading-tight">
            {detailData.title}
          </h1>
        </div>
      </section>

      {/* 3. HEADLINE DESCRIPTION & HORIZONTAL METRICS RIBBON */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
          
          {/* Left Description Block */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-3xl font-light text-gray-900 tracking-tight uppercase border-b border-gray-100 pb-3">
              Description
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed tracking-wide font-light text-justify">
              {detailData.description}
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onInquire(detailData.name)}
                className="btn-slide-crimson text-white px-8 py-3 rounded-[2px] text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow-sm"
              >
                ENQUIRE NOW
              </button>
              
              <button
                onClick={handleDownloadPDF}
                className="btn-slide-outline px-6 py-3 rounded-[2px] text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer inline-flex items-center gap-1.5"
              >
                DOWNLOAD PDF
                <Download size={13} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* Right Metrics Grid Container */}
          <div className="lg:col-span-5 bg-white border border-gray-200 p-6 md:p-8 rounded-[4px] shadow-xs space-y-6">
            <h3 className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block mb-3 border-b border-gray-100 pb-2">
              VENUE CAPACITY DETAILS
            </h3>
            
            <div className="space-y-6">
              {detailData.specs.map((spec, sIdx) => (
                <div key={sIdx} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#5c0202]/5 flex items-center justify-center shrink-0">
                    {spec.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-gray-900 tracking-tight">
                      {spec.label}
                    </h4>
                    <p className="text-gray-500 text-xs font-light uppercase tracking-widest mt-0.5">
                      {spec.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                Blueprints Certified
              </span>
              <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest flex items-center gap-1">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                ACTIVE
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. FLOOR PLAN DETAIL & CAPACITY COMPARATOR TABS */}
      <section className="bg-white border-t border-b border-gray-200 py-16 px-6 md:px-12">
        <div className="site-container space-y-12">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <div className="w-10 h-0.5 bg-[#5c0202] mx-auto mb-2" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#5c0202]">DIVISIONS ANALYSIS</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-[#0A0908] tracking-tight">
              Floor Plan & Configurations
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-light tracking-wide">
              Select division tabs below to verify exact structural layout stats and capacity variables.
            </p>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap justify-center border-b border-gray-200 gap-1 md:gap-3">
            {detailData.tabs.map((tab) => {
              const isSelected = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`px-4 py-3 text-xs md:text-sm font-semibold uppercase tracking-wider border-b-2 transition-all cursor-pointer ${
                    isSelected 
                      ? 'border-[#5c0202] text-[#5c0202] bg-gray-50/50' 
                      : 'border-transparent text-gray-500 hover:text-[#5c0202]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Graphical layout schematic rendering along with technical metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Column: Stylized Isometric Layout Wireframe Schematic */}
            <div className="lg:col-span-6 bg-[#FAF9F6] border border-gray-200 p-8 rounded-[4px] relative flex flex-col justify-between overflow-hidden min-h-[300px]">
              
              {/* Decorative Absolute Background Grid dots */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none" style={{ backgroundImage: 'radial-gradient(#2D2A26 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
              
              <div className="space-y-1 text-left relative z-10">
                <span className="text-[8px] tracking-widest uppercase font-bold text-gray-400 bg-white px-2 py-0.5 border border-gray-100 inline-block">Isometric Concept Map</span>
                <p className="text-xs font-semibold text-gray-800">{detailData.name} — Partition Scheme</p>
              </div>

              {/* Wireframe representation using custom HTML/Tailwind */}
              <div className="my-10 relative flex justify-center items-center z-10">
                <div className="w-[85%] max-w-[360px] aspect-[16/10] bg-white border-2 border-gray-300 shadow-md transform rotate-x-[50deg] rotate-z-[-25deg] flex divide-x-2 divide-dashed divide-emerald-500 select-none">
                  
                  {/* Partitions container illustrating the tab configuration dynamically */}
                  <div className={`p-4 flex-1 flex flex-col justify-between transition-colors duration-300 ${
                    activeTabId.includes('1') || activeTabId.includes('all') ? 'bg-[#5c0202]/5' : 'bg-transparent'
                  }`}>
                    <span className="text-[9px] font-bold text-gray-400 font-mono">PART 1</span>
                    <span className="self-end text-[10px] font-semibold text-[#5c0202] font-mono">60% Height</span>
                  </div>

                  <div className={`p-4 flex-1 flex flex-col justify-between transition-colors duration-300 ${
                    activeTabId.includes('2') || activeTabId.includes('all') ? 'bg-[#5c0202]/10' : 'bg-transparent'
                  }`}>
                    <span className="text-[9px] font-bold text-gray-400 font-mono">PART 2</span>
                    <span className="self-end text-[10px] font-mono text-emerald-600 font-bold">1 Gbps fiber</span>
                  </div>

                  {detailData.tabs.length > 3 && (
                    <div className={`p-4 flex-1 flex flex-col justify-between transition-colors duration-300 ${
                      activeTabId.includes('3') || activeTabId.includes('all') ? 'bg-[#5c0202]/15' : 'bg-transparent'
                    }`}>
                      <span className="text-[9px] font-bold text-gray-400 font-mono">PART 3</span>
                      <span className="self-end text-[10px] font-bold text-[#5c0202] font-mono">VIP Access</span>
                    </div>
                  )}

                </div>

                {/* Decorative floating indicators */}
                <div className="absolute top-2 left-6 bg-white/90 border border-gray-200 px-2 py-1 rounded-[2px] text-[8px] font-bold font-mono tracking-wider flex items-center gap-1 uppercase">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span> Live Layout Status
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200 flex items-center justify-between relative z-10 text-[9px] text-gray-400 font-bold tracking-widest uppercase">
                <span>SCALABLE WALL BARRIERS</span>
                <span>CERTIFIED SOUNDPROOF (RW 58)</span>
              </div>
            </div>

            {/* Right Column: Detailed Numbers Grid */}
            <div className="lg:col-span-6 bg-[#FAF9F6] border border-gray-200 p-8 rounded-[4px] flex flex-col justify-between gap-6">
              
              <div className="space-y-1">
                <span className="text-[9px] uppercase font-bold tracking-widest text-emerald-600">CAPACITY METRIC COEFFICIENTS</span>
                <h3 className="font-display text-xl sm:text-2xl font-light text-gray-900 tracking-tight uppercase">
                  {detailData.tabs.find(t => t.id === activeTabId)?.label || detailData.tabs[0].label}
                </h3>
              </div>

              {/* Grid Layout mimicking reference precisely */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Metric Cards */}
                <div className="bg-white border border-gray-200 p-4 rounded-[3px] flex items-center gap-4 shadow-2xs">
                  <div className="w-12 h-12 bg-[#5c0202]/5 flex items-center justify-center text-[#5c0202] font-bold text-xl rounded-[2px] border border-[#5c0202]/10">
                    📐
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#5c0202] font-bold">Total Area</span>
                    <p className="text-lg font-bold text-gray-950 font-mono mt-0.5">
                      {activeTabMetrics.area} <span className="text-xs font-normal text-gray-500">Sq. m.</span>
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-4 rounded-[3px] flex items-center gap-4 shadow-2xs">
                  <div className="w-12 h-12 bg-[#5c0202]/5 flex items-center justify-center text-[#5c0202] font-bold text-xl rounded-[2px] border border-[#5c0202]/10">
                    🎭
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#5c0202] font-bold">Theatre Layout</span>
                    <p className="text-lg font-bold text-gray-950 font-mono mt-0.5">
                      {activeTabMetrics.theatre} <span className="text-xs font-normal text-gray-500">People</span>
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-4 rounded-[3px] flex items-center gap-4 shadow-2xs">
                  <div className="w-12 h-12 bg-[#5c0202]/5 flex items-center justify-center text-[#5c0202] font-bold text-xl rounded-[2px] border border-[#5c0202]/10">
                    🏢
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#5c0202] font-bold">Classroom Setup</span>
                    <p className="text-lg font-bold text-gray-950 font-mono mt-0.5">
                      {activeTabMetrics.classroom} <span className="text-xs font-normal text-gray-500">People</span>
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-4 rounded-[3px] flex items-center gap-4 shadow-2xs">
                  <div className="w-12 h-12 bg-[#5c0202]/5 flex items-center justify-center text-[#5c0202] font-bold text-xl rounded-[2px] border border-[#5c0202]/10">
                    🍽️
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#5c0202] font-bold">Round-Table Dinner</span>
                    <p className="text-lg font-bold text-gray-950 font-mono mt-0.5">
                      {activeTabMetrics.roundTable} <span className="text-xs font-normal text-gray-500">People</span>
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-4 rounded-[3px] flex items-center gap-4 shadow-2xs md:col-span-2">
                  <div className="w-12 h-12 bg-[#5c0202]/5 flex items-center justify-center text-[#5c0202] font-bold text-xl rounded-[2px] border border-[#5c0202]/10">
                    👥
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#5c0202] font-bold">Reception Limit</span>
                    <p className="text-lg font-bold text-gray-950 font-mono mt-0.5">
                      {activeTabMetrics.reception} <span className="text-xs font-normal text-gray-500">Delegates capacity</span>
                    </p>
                  </div>
                </div>

              </div>

              {/* Action indicators below metrics card matching reference footer */}
              <div className="flex items-center justify-between border-t border-gray-200 pt-4 flex-wrap gap-4">
                <button 
                  onClick={handleDownloadPDF} 
                  className="text-[10px] uppercase font-bold tracking-widest text-gray-500 hover:text-[#5c0202] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  DOWNLOAD FACT SHEET 📄
                </button>
                
                <button 
                  onClick={() => onInquire(detailData.name)}
                  className="text-[10px] uppercase font-bold tracking-widest text-[#5c0202] hover:underline cursor-pointer"
                >
                  LEARN MORE ———————
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. EVENT SERVICES CARD ROW */}
      <section className="site-container px-6 md:px-12 py-20 border-b border-gray-100">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-14">
          <div className="w-10 h-0.5 bg-[#5c0202] mx-auto mb-2" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-[#0A0908] tracking-tight text-center uppercase">
            Event Services
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 font-light tracking-wide">
            Our spaces are equipped with exceptional services to help turn your event into a world-class experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Service 1: Dining */}
          <div className="bg-white border border-gray-200/80 p-8 rounded-[4px] shadow-2xs hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 bg-[#5c0202]/5 rounded-full flex items-center justify-center text-[#5c0202]">
              <Coffee size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold tracking-tight text-gray-900 uppercase">
              Dining & Culinary
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light text-justify">
              Full Segmented industrial kitchens with direct vegetative channels overseen by internationally accredited experts. We can serve gourmet sit-down receptions comfortably.
            </p>
          </div>

          {/* Service 2: Technology */}
          <div className="bg-white border border-gray-200/80 p-8 rounded-[4px] shadow-2xs hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 bg-[#5c0202]/5 rounded-full flex items-center justify-center text-[#5c0202]">
              <Cpu size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold tracking-tight text-gray-900 uppercase">
              Smart Infrastructure
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light text-justify">
              Integrated high density 5G connectivity grids, dynamic acoustics, motorized professional visual trusses, and soundproof folding spaces partition systems.
            </p>
          </div>

          {/* Service 3: Signature Experiences */}
          <div className="bg-white border border-gray-200/80 p-8 rounded-[4px] shadow-2xs hover:shadow-md transition-shadow flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 bg-[#5c0202]/5 rounded-full flex items-center justify-center text-[#5c0202]">
              <ShieldCheck size={24} />
            </div>
            <h3 className="font-display text-lg font-semibold tracking-tight text-gray-900 uppercase">
              Signature Service
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light text-justify">
              Dedicated Event Concierge and dedicated VVIP Liaison Services ensure your prestigious delegates travel, arrive, and experience with grand luxury.
            </p>
          </div>

        </div>

        <div className="text-center pt-10">
          <button 
            onClick={() => onInquire(detailData.name)}
            className="btn-slide-outline px-8 py-3 text-xs font-semibold uppercase tracking-widest rounded-[2px] transition-all cursor-pointer"
          >
            LEARN MORE
          </button>
        </div>
      </section>

      {/* 6. EVENTS WE HOST ACCORDION SPLIT */}
      <section className="site-container px-6 md:px-12 py-20 border-b border-gray-100">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-14">
          <div className="w-10 h-0.5 bg-[#5c0202] mx-auto mb-2" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-[#0A0908] tracking-tight text-center uppercase">
            Events We Host
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column Accordion selector */}
          <div className="lg:col-span-6 space-y-4">
            <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {detailData.eventsWeHost.map((ev) => {
                const isActive = activeHostEventId === ev.id;
                return (
                  <div key={ev.id} className="py-2.5">
                    <button
                       onClick={() => setActiveHostEventId(ev.id)}
                       className={`w-full text-left py-3 flex items-center justify-between font-display text-lg tracking-tight transition-all cursor-pointer ${
                        isActive ? 'text-[#5c0202] font-semibold' : 'text-gray-700 hover:text-[#5c0202]'
                      }`}
                    >
                      <span>{ev.title}</span>
                      {isActive ? <ChevronUp size={16} className="text-[#5c0202]" /> : <ChevronDown size={16} className="text-gray-400" />}
                    </button>

                    {isActive && (
                      <div className="pt-2 pb-4 space-y-4 animate-fade-in pl-1">
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-light text-justify">
                          {ev.description}
                        </p>
                        <button
                          onClick={() => onInquire(ev.title)}
                          className="btn-slide-crimson text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-[2px] cursor-pointer"
                        >
                          READ MORE
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column Visual Image display corresponding to expanded tab */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] bg-zinc-950 overflow-hidden shadow-xl border border-gray-100 rounded-[4px] group">
              <img 
                src={activeEventData.image} 
                alt={activeEventData.title} 
                className="w-full h-full object-cover opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[9px] uppercase font-bold tracking-widest bg-[#5c0202] px-2.5 py-1 rounded-[1px]">ACTIVE DIRECTORY VIEW</span>
                <p className="text-[11px] font-sans text-white/90 mt-1 uppercase tracking-widest font-bold tracking-tight font-display">{activeEventData.title}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. VENUE SHOWCASE ACCORDION GALLERY WITH THUMBNAIL STRIPE */}
      <section className="site-container px-6 md:px-12 py-20 border-b border-gray-100">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-14">
          <div className="w-10 h-0.5 bg-[#5c0202] mx-auto mb-2" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-[#0A0908] tracking-tight text-center uppercase">
            Venue Showcase
          </h2>
        </div>

        <div className="space-y-4">
          {/* Main Display Frame */}
          <div className="relative aspect-[21/9] w-full bg-zinc-950 rounded-[4px] overflow-hidden shadow-lg">
            <img 
              src={activeShowcaseImage} 
              alt="Venue interior arrangement"
              className="w-full h-full object-cover opacity-90 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Descriptive Overlay */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 flex flex-col md:flex-row md:items-end justify-between gap-4 text-white">
              <div className="max-w-xl space-y-1">
                <h3 className="font-display text-xl sm:text-2xl tracking-tight text-white uppercase">
                  {detailData.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-light">
                  Invite your guests to experience best-in-class infrastructure paired with the finest Indian hospitality at our grand {detailData.title}.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Thumbnail Stripe Grid */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-2xl mx-auto">
            {detailData.showcaseImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveShowcaseImage(img)}
                className={`relative aspect-[16/10] overflow-hidden rounded-[2px] shadow-xs cursor-pointer focus:outline-none border-2 transition-all ${
                  activeShowcaseImage === img ? 'border-[#5c0202] scale-102 shadow-md' : 'border-transparent hover:opacity-90'
                }`}
              >
                <img 
                  src={img} 
                  alt={`Thumbnail setup ${idx + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 8. ORGANISERS SPEAK EXECUTIVE TESTIMONIAL VIEW */}
      <section className="bg-slate-50 border-t border-b border-gray-100 py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          <div className="space-y-2">
            <div className="w-10 h-0.5 bg-[#5c0202] mx-auto mb-2" />
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-[#0A0908] tracking-tight uppercase">
              Organisers Speak
            </h2>
          </div>

          {/* Testimonial Panel Block with Deep Blue luxury styling */}
          <div className="bg-[#1D3B73] text-white rounded-[4px] p-6 md:p-12 shadow-xl relative text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center overflow-hidden">
            
            {/* Left Photo */}
            <div className="col-span-1 md:col-span-4 flex justify-center">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white/20 shadow-md">
                <img 
                  src={activeTestimonial.avatarUrl} 
                  alt={activeTestimonial.author}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Quote details */}
            <div className="col-span-1 md:col-span-8 space-y-4">
              <span className="text-4xl text-white/30 font-serif leading-none block">“</span>
              <p className="text-sm md:text-base leading-relaxed tracking-wide font-light text-white/95">
                {activeTestimonial.quote}
              </p>
              <div>
                <h4 className="font-display font-bold text-sm md:text-base tracking-widest text-[#FAF9F6] uppercase">
                  {activeTestimonial.author}
                </h4>
                <p className="text-xs text-white/70 font-light uppercase tracking-wider mt-0.5">
                  {activeTestimonial.designation}, {activeTestimonial.organisation}
                </p>
              </div>
            </div>

            {/* Slider navigators overlayed */}
            {detailData.testimonials.length > 1 && (
              <div className="absolute right-4 bottom-4 flex items-center gap-2">
                <button
                  onClick={() => setTestimonialIdx(prev => prev === 0 ? detailData.testimonials.length - 1 : prev - 1)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  ‹
                </button>
                <button
                  onClick={() => setTestimonialIdx(prev => prev === detailData.testimonials.length - 1 ? 0 : prev + 1)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  ›
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 9. EXPLORE OUR VENUES AT FOOTER FOR INTER-VENUE DISCOVERY */}
      <section className="site-container px-6 md:px-12 py-20">
        <div className="text-center max-w-xl mx-auto space-y-2 mb-14">
          <div className="w-10 h-0.5 bg-[#5c0202] mx-auto mb-2" />
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-[#0A0908] tracking-tight uppercase">
            Explore Our Venues
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 font-light tracking-wide">
            Didn’t find what you were looking for? Discover our full range of spaces that are future-proofed for large, small, international and state events.
          </p>
        </div>

        {/* Small discovery list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredOtherVenues.map((v) => (
            <div 
              key={v.id}
              className="bg-white border border-gray-200 rounded-[4px] overflow-hidden shadow-2xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <img src={v.image} alt={v.name} className="w-full h-full object-cover opacity-90" />
              </div>
              <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="font-display font-medium text-sm text-gray-950 uppercase tracking-tight">
                    {v.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-light line-clamp-2">
                    {v.description}
                  </p>
                </div>
                <button
                  onClick={() => onSelectOtherVenue(v.id)}
                  className="text-[10px] font-bold text-[#5c0202] tracking-widest uppercase hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  KNOW MORE <ArrowRight size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
