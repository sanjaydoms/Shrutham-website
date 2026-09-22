import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import Logo from './Logo';
import AboutLocation from './AboutLocation';
import heroImg from '../assets/images/about-hero.jpg';

/*
 * About Us — built to the Figma frame (1440 wide, 60px side margins, 1316 content).
 * Desktop values are the Figma measurements; smaller breakpoints stack.
 */

interface AboutUsPageProps {
  onInquire: () => void;
}

const C = 'mx-auto w-[min(100%-3rem,1316px)]'; // Figma content width

const u = (id: string, w = 1200) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80`;

const TEAM = [
  { name: 'Rohit Nair', role: 'Head – Event Coordination', image: u('1560250097-0b93528c311a', 900), desc: 'With years of experience in event management, Rohit ensures every event is executed with precision and care — from the first walkthrough to the final farewell.' },
  { name: 'Priya Menon', role: 'Event Manager', image: u('1573496359142-b8d87734a5a2', 900), desc: 'Priya works closely with clients to understand their needs and create memorable event experiences.' },
  { name: 'Vikram Rao', role: 'Client Relations Executive', image: u('1507003211169-0a1dd7228f2d', 900), desc: 'Vikram ensures a smooth and hassle-free experience, from initial planning to the final celebration.' },
];

const REVIEWS = [
  { name: 'Abhinav', image: u('1506794778202-cad84cf45f1d', 900), text: 'Shrutham Convention exceeded all our expectations! The venue was beautiful, the team was very professional and supportive, and everything was managed flawlessly. It made our special day truly memorable.' },
  { name: 'Meera R.', image: u('1494790108377-be9c29b29330', 900), text: "The corporate conference we hosted at Shrutham was flawless. The venue's state-of-the-art AV equipment and professional event management team made all the difference." },
  { name: 'Rajesh G.', image: u('1472099645785-5658abf4ff4e', 900), text: 'We hosted a grand exhibition for up to 3,000 guests, and the layout handled the crowd effortlessly. Ample parking space and easy access from ORR Exit 15 are huge pluses.' },
  { name: 'Sanjay & Ananya', image: u('1511795409834-ef04bbd61622', 900), text: 'Shrutham Convention exceeded all our expectations for our wedding. The pillar-free hall made the decor look absolutely majestic, and our guests had no trouble arriving from Gachibowli.' },
];

export default function AboutUsPage({ onInquire }: AboutUsPageProps) {
  const [review, setReview] = useState(0);

  useEffect(() => {
    document.title = "About Us | Shrutham Convention – Hyderabad's Top Venue";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Discover the story behind Shrutham Convention, Hyderabad's trusted event venue near ORR Exit 15. Meet our team and our vision for elegant celebrations.");
  }, []);

  const r = REVIEWS[review];

  return (
    <div className="bg-[#FCFAF5] text-slate-custom font-body">

      {/* ================= HERO (Figma: 661.5 tall, soft blurred cream band + brand mark) ================= */}
      <section className="relative h-[420px] md:h-[540px] lg:h-[661px] overflow-hidden" aria-label="Shrutham Convention">
        <img src={heroImg} alt="The signature steel spiral sculpture at the Shrutham Convention entrance" className="absolute inset-0 w-full h-full object-cover object-[center_60%]" />
        {/* Vector 2: 1884×305, blur 35px, rotate -2.17°, starts 361px into the hero */}
        <div className="absolute left-[-23%] w-[131%] h-[220px] lg:h-[305px] bottom-[-110px] lg:bottom-[-5px] bg-[#FCFAF5] blur-[24px] lg:blur-[35px] -rotate-[2.17deg]" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FCFAF5] to-transparent" aria-hidden="true" />
        {/* Brand mark sitting on the transition */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 md:bottom-8 lg:bottom-4 scale-[1.15] md:scale-[1.6] lg:scale-[2.1] origin-bottom">
          <Logo variant="dark" size="lg" />
        </div>
      </section>

      {/* ================= INTRODUCTION (Figma: image 522 @x62, gold strip; text @x633, 750 wide) ================= */}
      <section className="pt-7 pb-20 lg:pb-[88px]" aria-labelledby="about-intro-heading">
        <div className={`${C} grid grid-cols-1 lg:grid-cols-[522px_1fr] gap-10 lg:gap-[49px] items-start`}>
          <div className="relative pt-[58px] max-w-[522px]">
            <div className="absolute top-0 left-0 w-full h-[161px] bg-[#D68B30]" aria-hidden="true" />
            <img
              src={u('1511795409834-ef04bbd61622')}
              alt="Shrutham Convention grand foyer"
              className="relative w-[calc(100%-1px)] aspect-[521/555] object-cover bg-white shadow-[0_0_11px_rgba(0,0,0,0.25)]"
            />
          </div>
          <div className="lg:pt-3 lg:pr-[10px]">
            <p className="m-0 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#5c0202]">About Shrutham Convention</p>
            <h1 id="about-intro-heading" className="mt-4 mb-6 font-display text-4xl sm:text-5xl font-light text-obsidian tracking-tight leading-tight">Who We Are</h1>
            <div className="space-y-5 text-sm sm:text-base text-[#2C2824] font-light leading-relaxed">
              <p>
                Shrutham Convention is a thoughtfully designed destination for weddings, corporate events, social gatherings and more. Blending elegant architecture with modern amenities, we create the perfect setting for unforgettable experiences.
              </p>
              <p>
                Strategically located near Nehru Outer Ring Road (ORR) Exit 15, Pedda Golconda, we offer unmatched accessibility for guests travelling from across Hyderabad and beyond. Whether you are planning a grand wedding reception, a corporate conference, a milestone birthday or a cultural ceremony, our versatile spaces and expert hospitality team transform your vision into a breathtaking reality.
              </p>
              <p>
                With spacious event halls, beautiful surroundings and a dedicated team, we ensure every detail is taken care of — so you can focus on what truly matters: your special moments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="pb-20 lg:pb-[215px]" aria-labelledby="vm-heading">
        <h2 id="vm-heading" className="m-0 text-center font-display text-4xl sm:text-5xl font-light text-obsidian tracking-tight leading-tight">Vision &amp; Mission</h2>

        {/* Vision: image group @x56 (651×435, gold block right), text @x761 */}
        <div className={`${C} mt-12 lg:mt-[59px] grid grid-cols-1 lg:grid-cols-[651px_1fr] gap-10 lg:gap-[54px] items-start`}>
          <div className="relative h-[300px] sm:h-[380px] lg:h-[435px] lg:-ml-1">
            <div className="absolute top-0 right-0 lg:left-[511px] lg:right-auto w-[141px] h-full bg-[#D68B30]" aria-hidden="true" />
            <img src={u('1519225421980-715cb0215aed')} alt="Elegant reception setting at Shrutham" className="absolute left-0 top-[40px] lg:top-[63px] w-[calc(100%-54px)] lg:w-[598px] h-[calc(100%-40px)] lg:h-[372px] object-cover" />
          </div>
          <div className="lg:pt-[152px] max-w-[605px]">
            <h3 className="m-0 font-display text-3xl sm:text-4xl font-normal text-obsidian tracking-tight">Vision</h3>
            <p className="mt-4 mb-0 text-sm sm:text-base text-[#2C2824] font-light leading-relaxed">
              To be the most trusted and preferred convention and event destination, known for creating extraordinary experiences that bring people together.
            </p>
          </div>
        </div>

        {/* Mission: text @x102, image group @x707 (dark-red block left, gold-bordered image) — overlaps Vision by 34px */}
        <div className={`${C} mt-12 lg:-mt-[34px] grid grid-cols-1 lg:grid-cols-[1fr_651px] gap-10 lg:gap-[54px] items-start`}>
          <div className="order-2 lg:order-1 lg:pl-[42px] lg:pt-[177px] max-w-[605px]">
            <h3 className="m-0 font-display text-3xl sm:text-4xl font-normal text-obsidian tracking-tight">Mission</h3>
            <p className="mt-4 mb-0 text-sm sm:text-base text-[#2C2824] font-light leading-relaxed">
              To provide world-class infrastructure, exceptional service and memorable experiences for every event, while continuously raising the benchmark in hospitality and event management.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative h-[300px] sm:h-[380px] lg:h-[436px] lg:mr-5">
            <div className="absolute top-0 left-0 w-[140px] h-full bg-[#640A0A]" aria-hidden="true" />
            <img src={u('1464366400600-7168b8af9bc3')} alt="Banquet arrangement at Shrutham" className="absolute right-0 top-[40px] lg:top-[63px] w-[calc(100%-54px)] lg:w-[598px] h-[calc(100%-40px)] lg:h-[373px] object-cover border-[0.9px] border-[#D68B30]" />
          </div>
        </div>
      </section>

      {/* ================= OUR STORY + full-width visual (Figma: label, 702 heading, 1440×752 band) ================= */}
      <section aria-labelledby="story-heading">
        <p className="m-0 text-center text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-[#5c0202]">Our Story</p>
        <h2 id="story-heading" className={`${C} mt-4 mb-10 lg:mb-[107px] text-center font-display text-4xl sm:text-5xl font-light text-obsidian tracking-tight leading-tight max-w-[702px]`}>
          A Space for Every Special Story
        </h2>
        <img src={u('1519167758481-83f550bb49b3', 1800)} alt="Decorated banquet hall at Shrutham Convention" className="w-full h-[320px] md:h-[520px] lg:h-[752px] object-cover" />
      </section>

      {/* ================= TEAM (Figma: heading 585, desc 661, 3 × 420×451 r17) ================= */}
      <section className="pt-20 lg:pt-[127px]" aria-labelledby="team-heading">
        <div className={C}>
          <h2 id="team-heading" className="m-0 text-center font-display text-4xl sm:text-5xl font-light text-obsidian tracking-tight leading-tight">The People Behind Your Event</h2>
          <p className="mx-auto mt-4 mb-0 max-w-[661px] text-center text-sm sm:text-base text-[#2C2824] font-light leading-relaxed">
            Our experienced event coordination team works closely with you to plan, organise and execute every detail seamlessly.
          </p>
          <ul className="list-none m-0 p-0 mt-12 lg:mt-[90px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
            {TEAM.map((m) => (
              <li key={m.name}>
                <img src={m.image} alt={`${m.name}, ${m.role}`} loading="lazy" className="w-full aspect-[420/451] object-cover rounded-[16.875px] bg-[#D9D9D9]" />
                <h3 className="mt-6 mb-0 font-display text-2xl font-normal text-obsidian">{m.name}</h3>
                <p className="mt-1 mb-0 text-[11px] font-bold tracking-[0.18em] uppercase text-[#5c0202]">{m.role}</p>
                <p className="mt-3 mb-0 text-sm text-[#2C2824] font-light leading-relaxed">{m.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= LOCATION (full-bleed map, brand mark at the venue, photo callouts) ================= */}
      <div className="mt-20 lg:mt-[140px]">
        <AboutLocation />
      </div>

      {/* ================= TESTIMONIAL (Figma: #FFD0D0 1316×511 r34, photo 421×464 r31, 40px author, stars, 28px italic) ================= */}
      <section className="pt-20 lg:pt-[161px]" aria-labelledby="testimonial-heading">
        <div className={C}>
          <h2 id="testimonial-heading" className="m-0 text-center font-display text-4xl sm:text-5xl font-light text-obsidian tracking-tight leading-tight">What Our Happy Hosts Say</h2>
          <p className="mx-auto mt-4 mb-0 max-w-[661px] text-center text-sm sm:text-base text-[#2C2824] font-light leading-relaxed">
            Hear from the hosts who trusted Shrutham Convention with their most memorable celebrations.
          </p>

          <div className="mt-10 lg:mt-[57px] bg-[#FFD0D0] rounded-[24px] lg:rounded-[33.75px] p-5 lg:p-6 grid grid-cols-1 lg:grid-cols-[421px_1fr] gap-8 lg:gap-[54px] lg:min-h-[511px]" aria-live="polite">
            <img key={r.image} src={r.image} alt={r.name} className="w-full max-w-[421px] mx-auto lg:mx-0 aspect-[421/464] object-cover rounded-[24px] lg:rounded-[30.64px] bg-[#D9D9D9] animate-fade-in" />
            <div className="lg:pt-14 lg:pr-[28px]">
              <p className="m-0 font-display text-3xl sm:text-4xl font-normal text-obsidian">{r.name}</p>
              <div className="mt-3 flex items-center gap-[1px]" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} className="fill-[#5c0202] stroke-[#5c0202]" />)}
              </div>
              <blockquote className="mt-5 mb-0 font-display text-xl sm:text-2xl font-normal italic text-obsidian leading-relaxed">
                “{r.text}”
              </blockquote>
            </div>
          </div>

          {/* Pagination: 20.77px dots, active #5C0202 */}
          <div className="mt-10 lg:mt-[68px] flex justify-center gap-[7.8px]">
            {REVIEWS.map((rev, i) => (
              <button
                key={rev.name}
                onClick={() => setReview(i)}
                aria-label={`Show testimonial ${i + 1}`}
                aria-current={i === review}
                className={`w-[20.77px] h-[20.77px] rounded-full border-none cursor-pointer transition-colors ${i === review ? 'bg-[#5C0202]' : 'bg-[#D9D9D9] hover:bg-[#c9c9c9]'}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA (Figma: 1440×616 #5C0202, card 1155×451 r21, image 532 right) ================= */}
      <section className="mt-20 lg:mt-[170px] bg-[#5C0202] py-14 lg:py-[82px] px-6" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-[1155px] bg-[#FCFAF5] rounded-[21.375px] overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_532px] lg:min-h-[451px]">
          <div className="px-7 py-10 lg:pl-[57px] lg:pr-10 lg:pt-[82px] lg:pb-[44px]">
            <h2 id="cta-heading" className="m-0 max-w-[583px] font-display text-3xl sm:text-4xl font-light text-obsidian tracking-tight leading-tight">
              Let’s Create Something Extraordinary Together
            </h2>
            <p className="mt-4 mb-0 max-w-[543px] text-sm sm:text-base text-[#2C2824] font-light leading-relaxed">
              Whether it’s a wedding, corporate event or a special gathering, we’re here to make it memorable. Our team will walk you through availability, spaces and packages.
            </p>
            <div className="mt-8 lg:mt-[32px] flex flex-col sm:flex-row gap-4 lg:gap-[24px]">
              <button onClick={onInquire} className="btn-slide-crimson inline-flex items-center justify-center text-white font-body text-xs font-bold tracking-[0.16em] uppercase px-8 py-4 rounded-[2px] border-none cursor-pointer">
                Book Your Event
              </button>
              <a href="#facilities" className="btn-slide-outline inline-flex items-center justify-center font-body text-xs font-bold tracking-[0.16em] uppercase px-8 py-4 rounded-[2px]">
                Explore Our Spaces
              </a>
            </div>
          </div>
          <div className="relative min-h-[240px] lg:min-h-0">
            <img src={u('1519167758481-83f550bb49b3', 1200)} alt="Celebration set-up at Shrutham Convention" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Figma: 63px of page background before the footer */}
      <div className="h-10 lg:h-[63px]" aria-hidden="true" />
    </div>
  );
}
