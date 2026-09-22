import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onOpenBookingTab: () => void;
  currentPage: string;
}

const SPACES = [
  { label: 'Main Convention Hall', hash: '#facility/convention-hall' },
  { label: 'Grand Ballroom', hash: '#facility/grand-ballroom' },
  { label: 'Arrival Lobby', hash: '#facility/arrival-lobby' },
  { label: 'Landscaped Lawns', hash: '#facility/landscaped-lawns' },
  { label: 'VIP Lounges', hash: '#facility/vip-lounges' },
  { label: 'Guest Rooms', hash: '#facility/guest-rooms' },
  { label: 'Culinary', hash: '#facility/culinary' },
  { label: 'Hospitality', hash: '#facility/hospitality' },
];

const MORE = [
  { label: "FAQ's", hash: '#faqs' },
  { label: 'Planning Guide', hash: '#planning-guide' },
  { label: 'Request Proposal', hash: '#request-proposal' },
  { label: 'Testimonials', hash: '#testimonials' },
];

// Figma: Inter 500 16px, centered, 32px gap; dropdowns for "Our Spaces" and "More"
const NAV: { label: string; hash: string; pages: string[]; items?: { label: string; hash: string }[] }[] = [
  { label: 'Home', hash: '#home', pages: ['home'] },
  { label: 'About Us', hash: '#about', pages: ['about'] },
  { label: 'Services', hash: '#services', pages: ['services'] },
  { label: 'Events', hash: '#events', pages: ['events', 'event-detail'] },
  { label: 'Our Spaces', hash: '#facilities', pages: ['facilities', 'facility-detail'], items: SPACES },
  { label: 'Gallery', hash: '#gallery', pages: ['gallery'] },
  { label: 'More', hash: '#faqs', pages: ['faqs', 'planning-guide', 'request-proposal'], items: MORE },
];

export default function Header({ currentPage }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => () => { document.body.style.overflow = ''; }, []);

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenGroup(null);
    document.body.style.overflow = '';
  };
  const toggleMenu = () => {
    const next = !isMobileMenuOpen;
    setIsMobileMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };
  const go = (hash: string) => { closeMenu(); window.location.hash = hash; };
  const isActive = (pages: string[]) => pages.includes(currentPage);

  return (
    <>
      <nav
        id="mainNav"
        className="fixed top-0 left-0 right-0 z-50 h-[72px] lg:h-[80px] bg-white border-b border-[#5c0202]/15 shadow-sm font-body"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="relative h-full flex items-center justify-between px-5 md:px-12 lg:px-16 xl:px-24">
          <a href="#home" className="flex items-center hover:opacity-95 transition-opacity" aria-label="Shrutham Convention home">
            <Logo variant="dark" size="md" />
          </a>

          {/* Desktop nav — centered */}
          <ul className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 xl:gap-8 list-none m-0 p-2">
            {NAV.map((item) => (
              <li key={item.label} className="relative group">
                <a
                  href={item.hash}
                  className={`inline-flex items-center gap-1 text-[0.78rem] font-semibold tracking-[0.12em] uppercase whitespace-nowrap transition-colors ${
                    isActive(item.pages) ? 'text-[#5c0202]' : 'text-slate-custom/90 hover:text-[#5c0202]'
                  }`}
                  aria-haspopup={item.items ? 'menu' : undefined}
                >
                  {item.label}
                  {item.items && <ChevronDown size={11} className="transition-transform group-hover:rotate-180 duration-300" />}
                </a>
                {item.items && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 hidden group-hover:block z-50">
                    <div className="min-w-[220px] bg-white border border-[#5c0202]/15 rounded-[2px] shadow-lg py-1 divide-y divide-gray-100">
                      {item.items.map((sub) => (
                        <a key={sub.hash} href={sub.hash} className="block px-4 py-2 text-[0.7rem] font-semibold tracking-wider uppercase text-slate-custom hover:bg-[#5c0202]/5 hover:text-[#5c0202] transition-colors whitespace-nowrap">
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="btn-slide-crimson hidden lg:inline-flex items-center justify-center text-white text-[0.75rem] font-semibold tracking-[0.15em] uppercase px-5 h-[40px] rounded-[2px]"
          >
            Contact Us
          </a>

          <button
            onClick={toggleMenu}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-[2px] text-slate-custom hover:text-[#5c0202] bg-transparent border-none cursor-pointer"
            aria-label="Toggle Menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto lg:hidden font-body">
          <ul className="list-none m-0 p-0 divide-y divide-[#5c0202]/10 border-b border-[#5c0202]/10">
            {NAV.map((item) => (
              <li key={item.label}>
                {item.items ? (
                  <>
                    <button
                      onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                      className={`w-full flex items-center justify-between px-6 py-4 font-display text-2xl font-light tracking-wide bg-transparent border-none cursor-pointer ${isActive(item.pages) ? 'text-[#5c0202]' : 'text-slate-custom'}`}
                      aria-expanded={openGroup === item.label}
                    >
                      {item.label}
                      <ChevronDown size={18} className={`transition-transform ${openGroup === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {openGroup === item.label && (
                      <div className="bg-[#FCFAF5] border-t border-black/5">
                        <button onClick={() => go(item.hash)} className="w-full text-left px-10 py-3 text-[0.75rem] font-bold tracking-wider uppercase text-[#5c0202] bg-transparent border-none cursor-pointer">
                          {item.label === 'Our Spaces' ? 'View All Spaces' : 'All'}
                        </button>
                        {item.items.map((sub) => (
                          <button key={sub.hash} onClick={() => go(sub.hash)} className="w-full text-left px-10 py-3 text-[0.75rem] font-semibold tracking-wider uppercase text-slate-custom hover:text-[#5c0202] bg-transparent border-none cursor-pointer">
                            {sub.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button onClick={() => go(item.hash)} className={`w-full text-left px-6 py-4 font-display text-2xl font-light tracking-wide bg-transparent border-none cursor-pointer ${isActive(item.pages) ? 'text-[#5c0202]' : 'text-slate-custom'}`}>
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
          <div className="px-6 py-6 flex flex-col gap-3">
            <button onClick={() => go('#contact')} className="btn-slide-crimson w-full py-3 text-white text-xs font-semibold tracking-widest uppercase rounded-[2px] border-none cursor-pointer">
              Contact Us
            </button>
            <a href="tel:+919989912224" className="w-full py-3 border border-[#5c0202] text-[#5c0202] text-xs font-semibold tracking-widest uppercase rounded-[2px] inline-flex items-center justify-center gap-2">
              <Phone size={16} /> +91 99899 12224
            </a>
          </div>
        </div>
      )}
    </>
  );
}
