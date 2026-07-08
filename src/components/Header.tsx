import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onOpenBookingTab: () => void;
  currentPage: string;
}

export default function Header({ onOpenBookingTab, currentPage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSpacesOpen, setIsMobileSpacesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileLinkClick = (hashId: string) => {
    setIsMobileMenuOpen(false);
    setIsMobileSpacesOpen(false);
    document.body.style.overflow = '';
    window.location.hash = hashId;
  };

  return (
    <>
      <nav
        id="mainNav"
        style={{ marginBottom: '0px' }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 xl:px-24 flex items-center justify-between transition-all duration-300 bg-white border-b border-[#5c0202]/15 shadow-sm ${
          isScrolled || isMobileMenuOpen || currentPage !== 'home'
            ? 'py-3'
            : 'py-4'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="hover:opacity-95 transition-opacity flex items-center"
        >
          <Logo
            variant="dark"
            size="md"
            style={{ marginBottom: '5px', paddingTop: '4px', marginTop: '0px' }}
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex flex-row flex-nowrap items-center gap-4 lg:gap-6 xl:gap-8 list-none mb-0">
          <li>
            <a
              href="#home"
              className={`text-[0.78rem] font-semibold tracking-[0.12em] uppercase transition-colors whitespace-nowrap ${
                currentPage === 'home' ? 'text-[#5c0202]' : 'text-slate-custom/90 hover:text-[#5c0202]'
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`text-[0.78rem] font-semibold tracking-[0.12em] uppercase transition-colors whitespace-nowrap ${
                currentPage === 'about' ? 'text-[#5c0202]' : 'text-slate-custom/90 hover:text-[#5c0202]'
              }`}
            >
              About us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`text-[0.78rem] font-semibold tracking-[0.12em] uppercase transition-colors whitespace-nowrap ${
                currentPage === 'services' && window.location.hash !== '#facilities' ? 'text-[#5c0202]' : 'text-slate-custom/90 hover:text-[#5c0202]'
              }`}
            >
              services
            </a>
          </li>
          <li>
            <a
              href="#events"
              className={`text-[0.78rem] font-semibold tracking-[0.12em] uppercase transition-colors whitespace-nowrap ${
                currentPage === 'events' ? 'text-[#5c0202]' : 'text-slate-custom/90 hover:text-[#5c0202]'
              }`}
            >
              events
            </a>
          </li>
          <li className="relative group">
            <button
              id="our-spaces-dropdown"
              onClick={() => { window.location.hash = '#facilities'; }}
              className={`text-[0.78rem] font-semibold tracking-[0.12em] uppercase transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-none py-1 focus:outline-none whitespace-nowrap ${
                currentPage === 'facility-detail' || window.location.hash === '#facilities' ? 'text-[#5c0202]' : 'text-slate-custom/90 hover:text-[#5c0202]'
              }`}
            >
              Our Spaces
              <ChevronDown size={11} className="transition-transform group-hover:rotate-180 duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 hidden group-hover:block z-50">
              <div className="bg-white border border-[#5c0202]/15 rounded-[2px] shadow-lg py-1 divide-y divide-gray-100">
                <a
                  href="#facility/convention-hall"
                  className="block px-4 py-2 text-[0.7rem] font-semibold tracking-wider uppercase text-slate-custom hover:bg-[#5c0202]/5 hover:text-[#5c0202] transition-colors decoration-transparent"
                >
                  Main Convention Hall
                </a>
                <a
                  href="#facility/grand-ballroom"
                  className="block px-4 py-2 text-[0.7rem] font-semibold tracking-wider uppercase text-slate-custom hover:bg-[#5c0202]/5 hover:text-[#5c0202] transition-colors decoration-transparent"
                >
                  Grand Ballroom
                </a>
                <a
                  href="#facility/arrival-lobby"
                  className="block px-4 py-2 text-[0.7rem] font-semibold tracking-wider uppercase text-slate-custom hover:bg-[#5c0202]/5 hover:text-[#5c0202] transition-colors decoration-transparent"
                >
                  Arrival Lobby
                </a>
                <a
                  href="#facility/landscaped-lawns"
                  className="block px-4 py-2 text-[0.7rem] font-semibold tracking-wider uppercase text-slate-custom hover:bg-[#5c0202]/5 hover:text-[#5c0202] transition-colors decoration-transparent"
                >
                  Landscaped Lawns
                </a>
                <a
                  href="#facility/vip-lounges"
                  className="block px-4 py-2 text-[0.7rem] font-semibold tracking-wider uppercase text-slate-custom hover:bg-[#5c0202]/5 hover:text-[#5c0202] transition-colors decoration-transparent"
                >
                  VIP Lounges
                </a>
                <a
                  href="#facility/guest-rooms"
                  className="block px-4 py-2 text-[0.7rem] font-semibold tracking-wider uppercase text-slate-custom hover:bg-[#5c0202]/5 hover:text-[#5c0202] transition-colors decoration-transparent"
                >
                  Guest Rooms
                </a>
                <a
                  href="#facility/culinary"
                  className="block px-4 py-2 text-[0.7rem] font-semibold tracking-wider uppercase text-slate-custom hover:bg-[#5c0202]/5 hover:text-[#5c0202] transition-colors decoration-transparent"
                >
                  Culinary
                </a>
                <a
                  href="#facility/hospitality"
                  className="block px-4 py-2 text-[0.7rem] font-semibold tracking-wider uppercase text-slate-custom hover:bg-[#5c0202]/5 hover:text-[#5c0202] transition-colors decoration-transparent"
                >
                  Hospitality
                </a>
              </div>
            </div>
          </li>
          <li>
            <a
              href="#gallery"
              className={`text-[0.78rem] font-semibold tracking-[0.12em] uppercase transition-colors whitespace-nowrap ${
                currentPage === 'gallery' ? 'text-[#5c0202]' : 'text-slate-custom/90 hover:text-[#5c0202]'
              }`}
            >
              gallery
            </a>
          </li>
          <li className="relative group">
            <button
              className={`text-[0.78rem] font-semibold tracking-[0.12em] uppercase transition-colors flex items-center gap-1 cursor-pointer bg-transparent border-none py-1 focus:outline-none whitespace-nowrap ${
                ['faqs', 'planning-guide', 'request-proposal'].includes(currentPage) || window.location.hash === '#testimonials' ? 'text-[#5c0202]' : 'text-slate-custom/90 hover:text-[#5c0202]'
              }`}
            >
              more
              <ChevronDown size={11} className="transition-transform group-hover:rotate-180 duration-300" />
            </button>
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 pt-2 hidden group-hover:block z-50">
              <div className="bg-white border border-[#5c0202]/15 rounded-[2px] shadow-lg py-1 divide-y divide-gray-100">
                <a
                  href="#faqs"
                  className="block px-4 py-2.5 text-[0.7rem] font-semibold tracking-wider uppercase text-slate-custom hover:bg-[#5c0202]/5 hover:text-[#5c0202] transition-colors decoration-transparent"
                >
                  FAQ's
                </a>
                <a
                  href="#planning-guide"
                  className="block px-4 py-2.5 text-[0.7rem] font-semibold tracking-wider uppercase text-slate-custom hover:bg-[#5c0202]/5 hover:text-[#5c0202] transition-colors decoration-transparent"
                >
                  Planning Guide
                </a>
                <a
                  href="#request-proposal"
                  className="block px-4 py-2.5 text-[0.7rem] font-semibold tracking-wider uppercase text-slate-custom hover:bg-[#5c0202]/5 hover:text-[#5c0202] transition-colors decoration-transparent"
                >
                  Request Proposal
                </a>
                <a
                  href="#testimonials"
                  className="block px-4 py-2.5 text-[0.7rem] font-semibold tracking-wider uppercase text-slate-custom hover:bg-[#5c0202]/5 hover:text-[#5c0202] transition-colors decoration-transparent"
                >
                  Testimonials
                </a>
              </div>
            </div>
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#contact"
            className="btn-slide-outline text-[0.75rem] font-semibold tracking-[0.15em] uppercase px-5 h-[40px] rounded-[2px] text-center flex items-center justify-center cursor-pointer decoration-transparent transition-all"
          >
            Contact Us
          </a>
          <a
            href="#3d-space"
            className="btn-slide-crimson cursor-pointer text-white text-[0.75rem] font-semibold tracking-[0.15em] uppercase px-5 h-[40px] rounded-[2px] flex items-center justify-center border border-transparent transition-all decoration-transparent"
          >
            3D Space
          </a>
        </div>

        {/* Responsive Mobile Toggle */}
        <button
          onClick={() => {
            const nextState = !isMobileMenuOpen;
            setIsMobileMenuOpen(nextState);
            document.body.style.overflow = nextState ? 'hidden' : '';
          }}
          className="md:hidden text-slate-custom hover:text-[#5c0202] transition-colors focus:outline-none"
          aria-label="Toggle Menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile nav overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-gold-pale/98 z-40 overflow-y-auto px-6 py-12 flex flex-col items-center gap-6">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.body.style.overflow = '';
            }}
            className="absolute top-6 right-6 text-slate-custom hover:text-[#5c0202]"
          >
            <X size={28} />
          </button>
          
          <button
            onClick={() => handleMobileLinkClick('#home')}
            className={`font-display text-2xl font-light tracking-widest transition-colors bg-transparent border-none cursor-pointer ${
              currentPage === 'home' ? 'text-[#5c0202]' : 'text-slate-custom hover:text-[#5c0202]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleMobileLinkClick('#about')}
            className={`font-display text-2xl font-light tracking-widest transition-colors bg-transparent border-none cursor-pointer ${
              currentPage === 'about' ? 'text-[#5c0202]' : 'text-slate-custom hover:text-[#5c0202]'
            }`}
          >
            About us
          </button>
          <button
            onClick={() => handleMobileLinkClick('#services')}
            className={`font-display text-2xl font-light tracking-widest transition-colors bg-transparent border-none cursor-pointer ${
              currentPage === 'services' && window.location.hash !== '#facilities' ? 'text-[#5c0202]' : 'text-slate-custom hover:text-[#5c0202]'
            }`}
          >
            services
          </button>
          <button
            onClick={() => handleMobileLinkClick('#events')}
            className={`font-display text-2xl font-light tracking-widest transition-colors bg-transparent border-none cursor-pointer ${
              currentPage === 'events' ? 'text-[#5c0202]' : 'text-slate-custom hover:text-[#5c0202]'
            }`}
          >
            events
          </button>
          <div className="flex flex-col items-center">
            <button
              onClick={() => setIsMobileSpacesOpen(!isMobileSpacesOpen)}
              className={`font-display text-2xl font-light tracking-widest transition-colors bg-transparent border-none cursor-pointer flex items-center gap-2 ${
                window.location.hash === '#facilities' || currentPage === 'facility-detail' ? 'text-[#5c0202]' : 'text-slate-custom hover:text-[#5c0202]'
              }`}
            >
              our spaces
              <ChevronDown size={18} className={`transition-transform duration-300 ${isMobileSpacesOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileSpacesOpen && (
              <div className="flex flex-col items-center gap-2.5 mt-2 bg-[#5c0202]/5 py-3 px-6 rounded-[2px] w-full max-w-[260px] border border-[#5c0202]/10">
                <button
                  onClick={() => handleMobileLinkClick('#facilities')}
                  className="text-[0.75rem] font-bold tracking-wider text-[#5c0202] uppercase bg-transparent border-none cursor-pointer py-1.5 border-b border-[#5c0202]/10 w-full text-center mb-1"
                >
                  View All Spaces
                </button>
                <button
                  onClick={() => handleMobileLinkClick('#facility/convention-hall')}
                  className="text-[0.75rem] font-semibold tracking-wider text-slate-custom hover:text-[#5c0202] uppercase bg-transparent border-none cursor-pointer py-1"
                >
                  Main Convention Hall
                </button>
                <button
                  onClick={() => handleMobileLinkClick('#facility/grand-ballroom')}
                  className="text-[0.75rem] font-semibold tracking-wider text-slate-custom hover:text-[#5c0202] uppercase bg-transparent border-none cursor-pointer py-1"
                >
                  Grand Ballroom
                </button>
                <button
                  onClick={() => handleMobileLinkClick('#facility/arrival-lobby')}
                  className="text-[0.75rem] font-semibold tracking-wider text-slate-custom hover:text-[#5c0202] uppercase bg-transparent border-none cursor-pointer py-1"
                >
                  Arrival Lobby
                </button>
                <button
                  onClick={() => handleMobileLinkClick('#facility/landscaped-lawns')}
                  className="text-[0.75rem] font-semibold tracking-wider text-slate-custom hover:text-[#5c0202] uppercase bg-transparent border-none cursor-pointer py-1"
                >
                  Landscaped Lawns
                </button>
                <button
                  onClick={() => handleMobileLinkClick('#facility/vip-lounges')}
                  className="text-[0.75rem] font-semibold tracking-wider text-slate-custom hover:text-[#5c0202] uppercase bg-transparent border-none cursor-pointer py-1"
                >
                  VIP Lounges
                </button>
                <button
                  onClick={() => handleMobileLinkClick('#facility/guest-rooms')}
                  className="text-[0.75rem] font-semibold tracking-wider text-slate-custom hover:text-[#5c0202] uppercase bg-transparent border-none cursor-pointer py-1"
                >
                  Guest Rooms
                </button>
                <button
                  onClick={() => handleMobileLinkClick('#facility/culinary')}
                  className="text-[0.75rem] font-semibold tracking-wider text-slate-custom hover:text-[#5c0202] uppercase bg-transparent border-none cursor-pointer py-1"
                >
                  Culinary
                </button>
                <button
                  onClick={() => handleMobileLinkClick('#facility/hospitality')}
                  className="text-[0.75rem] font-semibold tracking-wider text-slate-custom hover:text-[#5c0202] uppercase bg-transparent border-none cursor-pointer py-1"
                >
                  Hospitality
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => handleMobileLinkClick('#gallery')}
            className={`font-display text-2xl font-light tracking-widest transition-colors bg-transparent border-none cursor-pointer ${
              currentPage === 'gallery' ? 'text-[#5c0202]' : 'text-slate-custom hover:text-[#5c0202]'
            }`}
          >
            gallery
          </button>
          <button
            onClick={() => handleMobileLinkClick('#faqs')}
            className={`font-display text-2xl font-light tracking-widest transition-colors bg-transparent border-none cursor-pointer ${
              currentPage === 'faqs' ? 'text-[#5c0202]' : 'text-slate-custom hover:text-[#5c0202]'
            }`}
          >
            FAQ's
          </button>
          <button
            onClick={() => handleMobileLinkClick('#planning-guide')}
            className={`font-display text-2xl font-light tracking-widest transition-colors bg-transparent border-none cursor-pointer ${
              currentPage === 'planning-guide' ? 'text-[#5c0202]' : 'text-slate-custom hover:text-[#5c0202]'
            }`}
          >
            Planning Guide
          </button>
          <button
            onClick={() => handleMobileLinkClick('#request-proposal')}
            className={`font-display text-2xl font-light tracking-widest transition-colors bg-transparent border-none cursor-pointer ${
              currentPage === 'request-proposal' ? 'text-[#5c0202]' : 'text-slate-custom hover:text-[#5c0202]'
            }`}
          >
            Request Proposal
          </button>
          <button
            onClick={() => handleMobileLinkClick('#testimonials')}
            className={`font-display text-2xl font-light tracking-widest transition-colors bg-transparent border-none cursor-pointer ${
              window.location.hash === '#testimonials' ? 'text-[#5c0202]' : 'text-slate-custom hover:text-[#5c0202]'
            }`}
          >
            Testimonials
          </button>

          <div className="flex flex-col gap-4 mt-6 w-11/12 max-w-xs justify-center items-center">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = '';
                window.location.hash = '#3d-space';
              }}
              className="w-full text-center py-3 bg-[#5c0202] hover:bg-[#7a0303] text-white text-xs font-semibold tracking-widest uppercase rounded-[2px]"
            >
              3D Space
            </button>
            <a
              href="tel:+91998912224"
              className="w-full text-center py-3 border border-[#5c0202] text-[#5c0202] text-xs font-semibold tracking-widest uppercase rounded-[2px] flex items-center justify-center gap-2"
            >
              <Phone size={14} /> Call Manager
            </a>
          </div>
        </div>
      )}
    </>
  );
}
