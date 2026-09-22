import { useEffect, useRef, useState } from 'react';
import { Car, MapPin, Star, Plane, Building2, Landmark, Signpost, Route, FerrisWheel, Factory, ExternalLink } from 'lucide-react';
import Logo from './Logo';
import venueImg from '../assets/images/shrutham_exterior_1782196718598.jpg';

const MAPS_URL = 'https://maps.google.com/?q=Shrutham+Convention+Pedda+Golconda+Hyderabad';

/* ---------- real map (Esri World Street Map tiles, Web Mercator) ---------- */
const ZOOM = 11;
const TILE = 256;
const WORLD = TILE * 2 ** ZOOM;
const tileUrl = (x: number, y: number) =>
  `https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/${ZOOM}/${y}/${x}`;
const project = (lat: number, lng: number) => {
  const r = (lat * Math.PI) / 180;
  return { x: ((lng + 180) / 360) * WORLD, y: ((1 - Math.log(Math.tan(r) + 1 / Math.cos(r)) / Math.PI) / 2) * WORLD };
};
const VENUE = project(17.2456, 78.402); // Pedda Golconda, off Nehru ORR Exit 15
const img = (id: string) => `https://images.unsplash.com/photo-${id}?w=200&h=200&fit=crop&q=70`;

// dx/dy = where the callout sits relative to the venue (px @1440); the dot is at the true lat/lng
const DESTINATIONS = [
  { icon: Building2, name: 'Gachibowli & Financial District', time: '~ 30 min', lat: 17.4401, lng: 78.3489, dx: -300, dy: -290, photo: img('1486406146926-c627a92ad1ab') },
  { icon: Landmark, name: 'Jubilee Hills', time: '~ 35 min', lat: 17.4325, lng: 78.4073, dx: 240, dy: -290, photo: img('1600585154340-be6161a56a0c') },
  { icon: Plane, name: 'Rajiv Gandhi International Airport', time: '~ 15 min', lat: 17.2403, lng: 78.4294, dx: -305, dy: -70, photo: img('1436491865332-7a61a109cc05') },
  { icon: Signpost, name: 'Tukkuguda', time: '~ 10 min', lat: 17.2033, lng: 78.4917, dx: 340, dy: 30, photo: img('1465447142348-e9952c393450') },
  { icon: Route, name: 'Shamshabad', time: '~ 15 min', lat: 17.2543, lng: 78.3907, dx: -300, dy: 130, photo: img('1449824913935-59a10b8d2000') },
  { icon: FerrisWheel, name: 'Wonderla Amusement Park', time: '~ 20 min', lat: 17.1888, lng: 78.4107, dx: -40, dy: 250, photo: img('1513889961551-628c1e5e2ee9') },
  { icon: Factory, name: 'Fab City / Hardware Park', time: '~ 20 min', lat: 17.19, lng: 78.485, dx: 300, dy: 200, photo: img('1581094794329-c8112a89af12') },
];

const HIGHLIGHTS = [
  { icon: Car, title: 'Easy Access', sub: 'Well-connected by road' },
  { icon: MapPin, title: 'Central to Key Destinations', sub: 'Close to business, leisure and lifestyle hubs' },
  { icon: Star, title: 'A Convenient Choice', sub: 'Less travel time, more celebration time' },
];

const STRIP = [
  { icon: Plane, big: '15 min', small: 'from the Airport' },
  { icon: Route, big: 'Minutes from', small: 'ORR Exit 15' },
  { icon: Building2, big: 'Easy access', small: 'from across Hyderabad' },
];

function PlacePhoto({ photo, icon: Icon, name, size }: { photo: string; icon: typeof Building2; name: string; size: string }) {
  return (
    <span className={`relative inline-flex items-center justify-center rounded-full bg-white text-[#5c0202] ring-[3px] ring-white shadow-md shrink-0 overflow-hidden ${size}`}>
      <Icon size={18} strokeWidth={1.5} />
      <img src={photo} alt={name} loading="lazy" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
    </span>
  );
}

export default function AboutLocation() {
  const areaRef = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = areaRef.current;
    if (!el) return;
    setBox({ w: el.clientWidth, h: el.clientHeight }); // initial paint; RO keeps it in sync
    const ro = new ResizeObserver(([e]) => setBox({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const desktop = box.w >= 1024;
  const anchor = { x: box.w * (desktop ? 0.66 : 0.5), y: box.h * (desktop ? 0.5 : 0.3) }; // venue position in the map area
  const origin = { x: anchor.x - VENUE.x, y: anchor.y - VENUE.y };
  const scale = Math.min(1, Math.max(0.72, box.w / 1440)); // callout spread on smaller desktops

  const tiles: { x: number; y: number; left: number; top: number }[] = [];
  if (box.w) {
    const n = 2 ** ZOOM;
    for (let ty = Math.floor(-origin.y / TILE); ty <= Math.floor((box.h - origin.y) / TILE); ty++)
      for (let tx = Math.floor(-origin.x / TILE); tx <= Math.floor((box.w - origin.x) / TILE); tx++)
        tiles.push({ x: ((tx % n) + n) % n, y: ty, left: tx * TILE + origin.x, top: ty * TILE + origin.y });
  }

  const pins = DESTINATIONS.map((d) => {
    const p = project(d.lat, d.lng);
    return { ...d, dot: { x: p.x + origin.x, y: p.y + origin.y }, chip: { x: anchor.x + d.dx * scale, y: anchor.y + d.dy * scale } };
  });

  return (
    <section className="relative bg-[#FAF7F1] font-body" aria-labelledby="location-heading">
      {/* ---------- Map area: real tiles washed into the section background ---------- */}
      <div ref={areaRef} className="relative overflow-hidden">
        <div className="absolute inset-0 saturate-[0.85]" aria-hidden="true">
          {tiles.map((t) => (
            <img key={`${t.x}-${t.y}`} src={tileUrl(t.x, t.y)} alt="" draggable={false} className="absolute select-none" style={{ left: t.left, top: t.top, width: TILE, height: TILE }} />
          ))}
        </div>
        <div className="absolute inset-0 bg-[#FAF7F1]/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-[#FAF7F1]/50 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#FAF7F1] lg:via-[#FAF7F1]/80 lg:via-30% lg:to-transparent lg:to-60%" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FCFAF5] to-transparent" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#FAF7F1] to-transparent" aria-hidden="true" />

        {/* Desktop callouts — dots at true positions, photo chips spread around the venue */}
        {desktop && (
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <svg className="absolute inset-0 w-full h-full">
              {pins.map((p) => (
                <line key={p.name} x1={p.dot.x} y1={p.dot.y} x2={p.chip.x} y2={p.chip.y} stroke="#5c0202" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="3 4" />
              ))}
            </svg>
            {pins.map((p) => (
              <span key={`dot-${p.name}`} className="absolute w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5c0202] ring-[3px] ring-white shadow" style={{ left: p.dot.x, top: p.dot.y }} />
            ))}
            {pins.map(({ icon, name, time, photo, chip }) => (
              <div key={name} className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2.5 pl-1 pr-4 py-1 rounded-full bg-white/90 backdrop-blur border border-[#5c0202]/10 shadow-[0_10px_30px_-12px_rgba(10,9,8,0.35)] max-w-[250px]" style={{ left: chip.x, top: chip.y }}>
                <PlacePhoto photo={photo} icon={icon} name={name} size="w-12 h-12" />
                <span className="min-w-0">
                  <span className="block text-xs font-semibold text-obsidian leading-tight">{name}</span>
                  <span className="block text-[11px] font-bold text-[#5c0202] tabular-nums mt-0.5">{time}</span>
                </span>
              </div>
            ))}

            {/* Venue — brand mark at the centre */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center" style={{ left: anchor.x, top: anchor.y }}>
              <span className="absolute -top-14 rounded-full bg-[#5c0202] text-white text-[9px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 whitespace-nowrap shadow">Nehru ORR · Exit 15</span>
              <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#5c0202] ring-4 ring-white shadow-xl">
                <Logo iconOnly variant="light" size="md" />
              </span>
              <span className="absolute top-[4.6rem] w-56 text-center rounded-xl bg-white/90 backdrop-blur border border-[#5c0202]/10 px-3 py-2 shadow">
                <span className="block font-display text-xl text-obsidian leading-none">Shrutham Convention</span>
                <span className="block text-[11px] text-mid mt-1">Pedda Golconda, Hyderabad</span>
                <span className="block text-[10px] text-mid/70">(Near Shree Mantra Convention)</span>
              </span>
            </div>

            <p className="absolute right-10 bottom-24 font-script text-2xl text-[#B08A4A] rotate-[-6deg]">At the heart of new Hyderabad</p>
          </div>
        )}

        {desktop && (
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="absolute right-10 bottom-10 z-10 inline-flex items-center gap-2 rounded-full border border-[#5c0202]/30 bg-white/90 backdrop-blur text-[#5c0202] hover:bg-[#5c0202] hover:text-white text-[11px] font-bold tracking-[0.12em] uppercase px-5 py-2.5 transition-colors shadow-sm">
            Open in Google Maps <ExternalLink size={13} />
          </a>
        )}
        <span className="absolute left-3 bottom-1.5 z-10 text-[9px] text-mid/50">Map © Esri, HERE, Garmin, OpenStreetMap contributors</span>

        {/* Content */}
        <div className="relative site-container px-6 md:px-12 lg:px-16 xl:px-24 py-20 md:py-28 lg:min-h-[800px] grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <span className="block text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#5c0202] mb-4">A Prime Location</span>
            <h2 id="location-heading" className="font-display text-4xl sm:text-5xl font-light text-[#5c0202] tracking-tight leading-tight mb-6">
              Close to the city.
              <br />Connected to every celebration.
            </h2>
            <p className="text-sm sm:text-base text-[#2C2824] font-light leading-relaxed max-w-md mb-10">
              Shrutham Convention is strategically located at Pedda Golconda, right off Nehru ORR (Exit 15), offering seamless connectivity from the airport and across Hyderabad.
            </p>

            <ul className="grid grid-cols-3 gap-4 list-none m-0 p-0 border-y border-[#5c0202]/10 py-6">
              {HIGHLIGHTS.map(({ icon: Icon, title, sub }, i) => (
                <li key={title} className={`text-center px-2 ${i > 0 ? 'border-l border-[#5c0202]/10' : ''}`}>
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-white text-[#5c0202] shadow-sm mb-3">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <p className="text-xs font-semibold text-obsidian leading-snug mb-1">{title}</p>
                  <p className="text-[11px] text-mid/80 font-light leading-snug">{sub}</p>
                </li>
              ))}
            </ul>

            <p className="hidden lg:block mt-10 font-script text-3xl text-[#B08A4A] leading-[1.1] rotate-[-4deg] origin-left" aria-hidden="true">
              Great Celebrations
              <br />Are Closer Than You Think
            </p>
          </div>

          {/* Tablet / mobile: compact list over the washed map */}
          <div className="lg:hidden rounded-2xl border border-[#5c0202]/10 bg-white/90 backdrop-blur p-6 shadow-sm">
            <div className="flex items-start gap-3 pb-5 mb-5 border-b border-[#5c0202]/10">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#5c0202] shrink-0"><Logo iconOnly variant="light" size="sm" /></span>
              <div className="flex-1 min-w-0">
                <p className="font-display text-xl text-obsidian leading-tight">Shrutham Convention</p>
                <p className="text-xs text-mid font-light">Pedda Golconda, Hyderabad · Near Shree Mantra Convention</p>
                <span className="mt-2 inline-block rounded-full bg-[#5c0202]/[0.06] text-[#5c0202] text-[10px] font-bold tracking-[0.16em] uppercase px-2.5 py-1">Nehru ORR · Exit 15</span>
              </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 list-none m-0 p-0">
              {DESTINATIONS.map(({ icon, name, time, photo }) => (
                <li key={name} className="flex items-center gap-3 py-2.5 border-b border-[#5c0202]/[0.07]">
                  <PlacePhoto photo={photo} icon={icon} name={name} size="w-10 h-10" />
                  <span className="flex-1 text-sm text-obsidian leading-snug">{name}</span>
                  <span className="text-xs font-bold text-[#5c0202] tabular-nums whitespace-nowrap">{time}</span>
                </li>
              ))}
            </ul>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#5c0202]/30 text-[#5c0202] hover:bg-[#5c0202] hover:text-white text-[11px] font-bold tracking-[0.12em] uppercase px-5 py-2.5 transition-colors">
              Open in Google Maps <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* ---------- From city to celebration strip ---------- */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-4 relative min-h-[220px] lg:min-h-0">
          <img src={venueImg} alt="Shrutham Convention entrance at dusk" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="lg:col-span-8 bg-[#5c0202] text-white px-6 md:px-12 lg:px-16 xl:px-24 py-10 md:py-12">
          <span className="block text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-white/70 mb-6">From City to Celebration</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-0 sm:divide-x sm:divide-white/15">
            {STRIP.map(({ icon: Icon, big, small }, i) => (
              <div key={big} className={`flex items-center gap-4 ${i > 0 ? 'sm:pl-6' : ''} sm:pr-6`}>
                <Icon size={30} strokeWidth={1.25} className="text-[#E8C98A] shrink-0" />
                <p className="m-0 leading-tight">
                  <span className="block font-display text-2xl font-normal">{big}</span>
                  <span className="block text-sm text-white/80 font-light">{small}</span>
                </p>
              </div>
            ))}
            <p className="m-0 sm:col-span-3 xl:col-span-1 xl:pl-8 pt-4 sm:pt-6 xl:pt-0 border-t border-white/15 xl:border-t-0 text-sm text-white/85 font-light leading-relaxed">
              A location that brings everyone closer to what truly matters.
              <span className="block w-10 h-px bg-[#E8C98A] mt-3" aria-hidden="true" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
