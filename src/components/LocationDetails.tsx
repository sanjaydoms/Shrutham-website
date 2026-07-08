import { MapPin, Compass, Car, Navigation, Sparkles } from 'lucide-react';

export default function LocationDetails() {
  return (
    <section id="location" className="py-20 md:py-28 bg-chalk text-slate-custom border-b border-[#5c0202]/15" aria-labelledby="location-heading">
      <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Column 1: Info */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#5c0202] text-white text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase font-body rounded-[2px] mb-4">
                Location
              </span>
              <h2 id="location-heading" className="font-display text-4xl sm:text-5xl font-light text-slate-custom leading-[1.15] tracking-tight mb-2">
                Conveniently Located Near ORR Exit 15
              </h2>
              <h3 className="font-display text-xl font-normal text-[#5c0202] tracking-wide mb-6">
                Accessible from All of Hyderabad
              </h3>
              <p className="font-body text-sm md:text-base text-slate-custom/90 font-light leading-relaxed mb-10 text-justify">
                Located near Nehru Outer Ring Road Exit 15, Pedda Golconda — opposite Shree Mantra Convention in the Sanghiguda neighborhood — Shrutham Convention offers congestion-free travel for guests coming from Gachibowli, Jubilee Hills, Secunderabad, and Shamshabad Airport.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.google.com/?q=Shrutham+Convention+Pedda+Golconda+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-[#5c0202] hover:text-white text-[#5c0202] border border-[#5c0202] font-body text-xs font-semibold tracking-widest uppercase px-6 py-3.5 rounded-[2px] transition-all"
              >
                <Navigation size={13} /> Get Route Directions
              </a>
              <a
                href="https://wa.me/919989912224?text=Hi,%20could%20you%20share%20the%20exact%20GPS%2520location%2520and%2520pincode%2520for%2520Shrutham%2520Convention?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#5c0202] hover:bg-[#7a0303] text-white font-body text-xs font-semibold tracking-widest uppercase px-6 py-3.5 rounded-[2px] transition-all"
              >
                Share GPS on WhatsApp
              </a>
            </div>
          </div>

          {/* Column 2: Maps iFrame with custom overlay frame */}
          <div className="relative rounded-[2px] overflow-hidden border border-[#5c0202]/30 shadow-md h-[400px] lg:h-auto min-h-[350px]">
            <iframe
              src="https://maps.google.com/maps?q=Pedda%20Golconda,%20Hyderabad,%20Telangana&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-none grayscale-[30%] contrast-[105%]"
              allowFullScreen
              loading="lazy"
              title="Shrutham Convention Centre high-resolution interactive satellite map"
              aria-label="Map demonstrating exact geometric coordinates of Shrutham Convention off Outer Ring Road Gate 15"
            />
            {/* Direct floating map trigger button */}
            <div className="absolute bottom-6 left-6">
              <a
                href="https://maps.google.com/?q=Shrutham+Convention+Pedda+Golconda+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-chalk text-obsidian px-5 py-3 shadow-2xl rounded-[2px] font-body text-[0.7rem] font-bold tracking-wider uppercase border border-[#5c0202]/20 transition-colors"
              >
                <MapPin size={12} className="text-[#5c0202]" /> Open in Google Maps
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
