import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from './Logo';
import footerImg from '../assets/images/shrutham_exterior_1782196718598.jpg';

const QUICK_LINKS = [
  { label: 'About Story', href: '#about' },
  { label: 'Event Capabilities', href: '#events' },
  { label: 'Spaces & Kitchen', href: '#facilities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Travel Routes', href: '#location' },
];

const HOSTING = [
  'Weddings & Receptions',
  'AGM Corporate Reviews',
  'Exhibitions & Expos',
  'Product Unveilings',
  'Classical Recitals',
  'Private Celebrations',
];

const CONTACT = [
  { icon: MapPin, content: <>Shrutham Convention, Near Nehru ORR Exit 15,<br />Pedda Golconda, Opposite Shree Mantra Convention,<br />Sanghiguda, Hyderabad, Telangana 501218</> },
  { icon: Phone, content: <a href="tel:+919989912224" className="hover:text-[#D68B30] transition-colors">+91 99899 12224</a> },
  { icon: Mail, content: <a href="mailto:shruthamconvention@gmail.com" className="hover:text-[#D68B30] transition-colors">shruthamconvention@gmail.com</a> },
  { icon: Clock, content: 'Site Visits: 10:00 AM – 7:00 PM daily' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const link = 'text-white/90 text-xs font-semibold hover:text-[#D68B30] transition-colors';
  const heading = 'text-[10px] tracking-[0.2em] uppercase text-[#D68B30] font-bold mb-4';

  return (
    <footer className="relative overflow-hidden text-white font-body" role="contentinfo">
      {/* Figma: photo, blur 6px, 2× black 20%, gold 15% wash */}
      <img src={footerImg} alt="" aria-hidden="true" className="absolute inset-[-12px] w-[calc(100%+24px)] h-[calc(100%+24px)] object-cover blur-[6px] scale-105" />
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="absolute inset-0 bg-[rgba(214,139,48,0.15)]" aria-hidden="true" />

      <div className="relative mx-auto w-[min(100%-3rem,1351px)] pt-16 lg:pt-20 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[minmax(0,4fr)_minmax(0,2fr)_minmax(0,2fr)_minmax(0,4fr)] gap-x-10 xl:gap-x-16 gap-y-10">
          {/* Brand */}
          <div>
            <Logo variant="light" size="md" />
            <p className="mt-4 text-white/90 text-xs font-medium leading-relaxed max-w-[399px]">
              Hyderabad’s ultra-premium convention, banquet, and exhibition pavilion near Nehru Outer Ring Road Exit 15, Pedda Golconda. Hosting generational social unions, high-profile summits, MICE conferences, and classical cultural expositions.
            </p>
          </div>

          <div>
            <h4 className={heading}>Quick Links</h4>
            <ul className="list-none m-0 p-0 space-y-2">
              {QUICK_LINKS.map((l) => <li key={l.label}><a href={l.href} className={link}>{l.label}</a></li>)}
            </ul>
          </div>

          <div>
            <h4 className={`${heading} whitespace-nowrap`}>What We Host</h4>
            <ul className="list-none m-0 p-0 space-y-2">
              {HOSTING.map((h) => <li key={h}><a href="#events" className={`${link} whitespace-nowrap`}>{h}</a></li>)}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className={heading}>Inquiries &amp; Coordinates</h4>
            <ul className="list-none m-0 p-0 space-y-3.5">
              {CONTACT.map(({ icon: Icon, content }, i) => (
                <li key={i} className="flex gap-3 items-start text-white/90 text-xs font-medium leading-relaxed">
                  <Icon size={14} className="text-[#D68B30] shrink-0 mt-0.5" fill={i < 2 ? '#D68B30' : 'none'} strokeWidth={i < 2 ? 1 : 2} />
                  <span>{content}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-0 border-t border-[#D68B30]/70 mt-12 lg:mt-14 mb-8" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:pr-20 text-white/80 text-xs font-medium">
          <p className="m-0">© {year} Shrutham Convention Centre. All Rights Secured.</p>
          <div className="flex flex-wrap gap-x-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#D68B30] transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#D68B30] transition-colors">Terms of Rental</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-[#D68B30] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
