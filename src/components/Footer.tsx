import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F5F2EB] border-t border-gold/25 text-slate-custom/80 pt-20 pb-8 font-body" role="contentinfo">
      <div className="site-container px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-16 pb-16 border-b border-gold/15">
        
        {/* Brand Segment */}
        <div className="lg:col-span-4 space-y-4">
          <div className="text-slate-custom">
            <Logo variant="dark" size="lg" />
          </div>
          <p className="text-xs font-medium leading-relaxed text-justify pr-4 text-slate-custom/90">
            Hyderabad’s ultra-premium convention, banquet, and exhibition pavilion near Nehru Outer Ring Road Exit 15, Pedda Golconda. Hosting generational social unions, high-profile summits, MICE conferences, and classical cultural expositions.
          </p>
        </div>

        {/* Directory links */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#5c0202] font-bold">Quick Directory</h4>
          <ul className="space-y-2 list-none p-0 text-xs font-semibold">
            <li><a href="#about" className="hover:text-gold text-slate-custom/80 transition-colors">About Story</a></li>
            <li><a href="#events" className="hover:text-gold text-slate-custom/80 transition-colors">Event Capabilities</a></li>
            <li><a href="#facilities" className="hover:text-gold text-slate-custom/80 transition-colors">Spaces &amp; Kitchen</a></li>
            <li><a href="#gallery" className="hover:text-gold text-slate-custom/80 transition-colors">Layout Gallery</a></li>
            <li><a href="#location" className="hover:text-gold text-slate-custom/80 transition-colors">Travel Routes</a></li>
            <li><a href="#booking-tool" className="hover:text-gold text-slate-custom/80 transition-colors">Check Pricing</a></li>
          </ul>
        </div>

        {/* Offerings list */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#5c0202] font-bold">What We Host</h4>
          <ul className="space-y-2 list-none p-0 text-xs font-semibold">
            <li><a href="#events" className="hover:text-gold text-slate-custom/80 transition-colors">Weddings &amp; Receptions</a></li>
            <li><a href="#events" className="hover:text-gold text-slate-custom/80 transition-colors">AGM Corporate Reviews</a></li>
            <li><a href="#events" className="hover:text-gold text-slate-custom/80 transition-colors">Exhibitions &amp; Expos</a></li>
            <li><a href="#events" className="hover:text-gold text-slate-custom/80 transition-colors">Product Unveilings</a></li>
            <li><a href="#events" className="hover:text-gold text-slate-custom/80 transition-colors">Classical Recitals</a></li>
          </ul>
        </div>

        {/* Contact info card */}
        <div className="lg:col-span-4 space-y-4">
          <h4 className="text-[10px] tracking-[0.2em] uppercase text-[#5c0202] font-bold">Inquiries &amp; Coordinates</h4>
          <div className="space-y-3.5 text-xs font-medium text-slate-custom/90">
            
            <div className="flex gap-3 items-start">
              <MapPin size={14} className="text-[#9B752E] shrink-0 mt-0.5" />
              <div className="leading-tight text-slate-custom">
                Shrutham Convention, Near Nehru ORR Exit 15,<br />
                Pedda Golconda, Opposite Shree Mantra Convention,<br />
                Sanghiguda, Hyderabad, Telangana 501218
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Phone size={14} className="text-[#9B752E] shrink-0" />
              <a href="tel:+919989912224" className="hover:text-gold font-semibold text-slate-custom transition-colors">
                +91 99899 12224
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <Mail size={14} className="text-[#9B752E] shrink-0" />
              <a href="mailto:shruthamconvention@gmail.com" className="hover:text-gold text-slate-custom transition-colors">
                shruthamconvention@gmail.com
              </a>
            </div>

            <div className="flex gap-3 items-center text-slate-custom/80">
              <Clock size={14} className="text-[#9B752E] shrink-0" />
              <span>Site Visits: 10:00 AM – 7:00 PM daily</span>
            </div>

          </div>
        </div>

      </div>

      <div className="site-container px-6 md:px-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs font-medium gap-4 transition-all text-slate-custom/60">
        <div>
          © {currentYear} Shrutham Convention Centre. Pedda Golconda, Hyderabad, Telangana. All Rights Secured.
        </div>
        <div className="flex gap-6">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold transition-colors">Terms of Rental</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-gold transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
