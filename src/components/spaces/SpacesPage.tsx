import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowLeft, Plus } from 'lucide-react';
import './spaces.css';

/**
 * Our Spaces page — the design delivered as shrutham.zip (2), ported from its standalone Vite
 * app. Not carried over: the zip's Navbar, Footer and CustomCursor (the site has its own), and
 * InteractiveSpaceMatch (present in the zip's components but not used by its SpacesPage).
 * Links: the zip used bare `#` placeholders; here every card and call to action goes to the
 * matching existing page (#facility/…, #request-proposal, #contact).
 */

const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

const CATEGORIES = ['Weddings', 'Corporate', 'Social', 'Government', 'Exhibitions', 'Celebrations'];
const GUEST_RANGES = ['< 100', '100–300', '300–500', '500+'];

const SPACE_CARDS = [
  { col: 'left', title: 'Grand Ballroom', tags: 'Weddings · Corporate · Social', capacity: '800', img: u('photo-1464366400600-7168b8af9bc3', 1000), height: 550, href: '#facility/grand-ballroom' },
  { col: 'left', title: 'Exhibitions', tags: 'Art · Showcases', capacity: '200', img: u('photo-1531058020387-3be344556be6', 1000), height: 450, href: '#facility/convention-hall' },
  { col: 'right', title: 'Corporate', tags: 'Meetings · Conferences', capacity: '50', img: u('photo-1517502884422-41eaead166d4', 1000), height: 450, href: '#facility/vip-lounges' },
  { col: 'right', title: 'Convention Hall', tags: 'Government · Exhibitions', capacity: '1200', img: u('photo-1519750157634-b6d493a0f77c', 1000), height: 600, href: '#facility/convention-hall' },
];

const TESTIMONIALS = [
  { quote: 'The space transformed exactly the way we imagined. Every detail was flawless.', name: 'Ananya & Rohit', img: u('photo-1522673607200-164d1b6ce486', 1000) },
  { quote: 'An incredible venue for our annual conference. The facilities were state-of-the-art.', name: 'Tech Forward Inc.', img: u('photo-1573496359142-b8d87734a5a2', 1000) },
  { quote: 'Our guests were blown away by the elegance of the Grand Ballroom. A night to remember.', name: 'Sarah & Michael', img: u('photo-1515934751635-c81c6bc9a2d8', 1000) },
  { quote: 'Perfect setting for our brand launch. The layout offered incredible versatility.', name: 'Aura Cosmetics', img: u('photo-1534528741775-53994a69daeb', 1000) },
];

const FAQS = [
  'What capacity does each space accommodate?',
  'Can I customise the venue setup?',
  'Do you provide catering?',
  'Can I visit the space before booking?',
  'What facilities are included?',
];
const FAQ_ANSWER = 'Our team will work with you to understand your specific requirements and ensure the space meets all your needs.';

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

function SpacesHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  return (
    <header className="spaces-hero">
      <div className="spaces-hero-content">
        <span className="eyebrow">Our Spaces</span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Spaces Made for the Moment
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.3 }}>
          From intimate gatherings to grand occasions, discover spaces designed around your event.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.6 }}>
          <button className="explore-link" onClick={() => document.getElementById('discover')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            Explore Spaces ↓
          </button>
        </motion.div>
      </div>
      <div className="spaces-hero-img-wrapper">
        <motion.img style={{ y }} src={u('photo-1519167758481-83f550bb49b3', 2000)} alt="Grand venue interior" />
      </div>
    </header>
  );
}

function SpaceFinderNav() {
  const [category, setCategory] = useState('Weddings');
  const [guests, setGuests] = useState('300–500');
  return (
    <section id="discover" className="space-finder-section section-padding-small">
      <div className="container">
        <h2 className="serif-heading text-center" style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', marginBottom: '2.5rem' }}>
          What are you planning?
        </h2>
        <div className="finder-categories">
          {CATEGORIES.map((c) => (
            <button key={c} className={`finder-btn ${category === c ? 'active' : ''}`} aria-pressed={category === c} onClick={() => setCategory(c)}>
              {c}
            </button>
          ))}
        </div>
        <div className="finder-filters text-center">
          <span className="filter-label">Guest Count:</span>
          {GUEST_RANGES.map((g) => (
            <button key={g} className={`filter-chip ${guests === g ? 'active' : ''}`} aria-pressed={guests === g} onClick={() => setGuests(g)}>
              {g}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedSpace() {
  return (
    <section className="featured-space-section">
      <div className="container">
        <motion.div className="featured-wrapper" {...reveal()}>
          <img src={u('photo-1464366400600-7168b8af9bc3', 2000)} alt="Grand Ballroom" className="featured-img" loading="lazy" />
          <div className="featured-card">
            <span className="eyebrow">Featured Space</span>
            <h3 className="serif-heading">Grand Ballroom</h3>
            <p className="featured-meta">800 Guests &nbsp;|&nbsp; 12,000 sq.ft</p>
            <a href="#facility/grand-ballroom" className="explore-link">Explore Space <ArrowRight size={14} /></a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Rendered via a plain call rather than <SpaceCard key=… />: this project has no @types/react,
// so `key` on a typed component would be checked as a normal prop.
const spaceCard = (card: (typeof SPACE_CARDS)[number]) => (
  <a
    key={card.title + card.col}
    className="space-card"
    href={card.href}
    style={{ backgroundImage: `url('${card.img}')`, height: card.height }}
    aria-label={`${card.title} — explore space`}
  >
    <div className="space-card-overlay" />
    <div className="space-card-content">
      <h3 className="serif-heading light">{card.title}</h3>
      <p className="space-tags">{card.tags}</p>
      <p className="space-capacity">Up to {card.capacity} guests</p>
      <span className="explore-btn">Explore <ArrowRight size={14} style={{ marginLeft: 8 }} /></span>
    </div>
  </a>
);

function ExploreAllSpaces() {
  return (
    <section className="explore-all-section">
      <div className="container">
        <div className="asymmetric-grid">
          <div className="grid-col-left">
            {SPACE_CARDS.filter((c) => c.col === 'left').map(spaceCard)}
          </div>
          <div className="grid-col-right">
            {SPACE_CARDS.filter((c) => c.col === 'right').map(spaceCard)}
          </div>
        </div>
      </div>
    </section>
  );
}

function SpaceStories() {
  return (
    <section className="space-stories-section">
      <div className="story-block">
        <div className="story-content text-center">
          <span className="eyebrow">For Grand Celebrations</span>
          <p className="story-desc">Spaces that transform from intimate ceremonies to spectacular celebrations.</p>
        </div>
        <img src={u('photo-1511285560929-80b456fea0bc', 2000)} alt="Wedding celebration" className="story-hero-img" loading="lazy" />
        <div className="story-card-overlay">
          <span className="eyebrow light">Weddings</span>
          <h3 className="serif-heading light">Designed for unforgettable<br />celebrations.</h3>
          <a href="#event/weddings" className="explore-link light">Explore Wedding Spaces →</a>
        </div>
      </div>

      <div className="story-block reverse-story">
        <div className="container story-split">
          <motion.div className="story-text" {...reveal()}>
            <span className="eyebrow">Corporate</span>
            <h3 className="serif-heading">Meet. Connect.<br />Celebrate.</h3>
          </motion.div>
          <motion.div className="story-img" {...reveal(0.2)}>
            <img src={u('photo-1542744173-8e7e53415bb0', 1000)} alt="Corporate event setup" loading="lazy" />
          </motion.div>
        </div>
      </div>

      <div className="story-block">
        <div className="container story-split">
          <motion.div className="story-text" {...reveal()}>
            <span className="eyebrow">Social</span>
            <h3 className="serif-heading">For moments worth<br />gathering for.</h3>
          </motion.div>
          <motion.div className="story-img" {...reveal(0.2)}>
            <img src={u('photo-1511795409834-ef04bbd61622', 1000)} alt="Social celebration" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SpacesGallery() {
  return (
    <section className="spaces-gallery-section">
      <div className="container">
        <h2 className="serif-heading text-center">Our Spaces in Detail</h2>
        <div className="immersive-gallery">
          <div className="gallery-row-1">
            <div className="gal-img img-portrait">
              <img src={u('photo-1478146896981-b80fe463b330', 800)} alt="Venue detail" loading="lazy" />
            </div>
            <div className="gal-img img-landscape">
              <img src={u('photo-1519225421980-715cb0215aed', 1200)} alt="Wide view of the venue" loading="lazy" />
            </div>
          </div>
          <div className="gallery-row-2">
            <div className="gal-img img-full">
              <img src={u('photo-1511795409834-ef04bbd61622', 1600)} alt="Event setup" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpacesTestimonial() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  const pad = (n: number) => String(n).padStart(2, '0');
  return (
    <section className="spaces-testimonial-section">
      <div className="container">
        <div className="testimonial-split">
          <div className="testimonial-left">
            <span className="eyebrow">Stories From Our Guests</span>
            <div className="testimonial-content" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
                  <h2 className="serif-heading quote">“{t.quote}”</h2>
                  <p className="client-name">— {t.name}</p>
                </motion.div>
              </AnimatePresence>
              <div className="testimonial-controls">
                <span className="testi-count">{pad(i + 1)} / {pad(TESTIMONIALS.length)}</span>
                <div className="arrows">
                  <button onClick={() => setI((p) => (p === 0 ? TESTIMONIALS.length - 1 : p - 1))} aria-label="Previous story"><ArrowLeft size={20} /></button>
                  <button onClick={() => setI((p) => (p + 1) % TESTIMONIALS.length)} aria-label="Next story"><ArrowRight size={20} /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-right">
            <AnimatePresence mode="wait">
              <motion.img key={i} src={t.img} alt={t.name} className="testimonial-photo" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.5 }} />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpacesFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="spaces-faq-section">
      <div className="container max-w-3xl">
        <h2 className="serif-heading">Frequently Asked Questions</h2>
        <div className="minimal-faq">
          {FAQS.map((q, i) => (
            <div key={q} className="minimal-faq-item">
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span>{q}</span>
                <Plus size={18} style={{ transform: open === i ? 'rotate(45deg)' : 'none', transition: '0.3s', flexShrink: 0 }} />
              </button>
              {open === i && (
                <div className="minimal-faq-answer">
                  <p>{FAQ_ANSWER}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpacesCTA() {
  return (
    <section className="spaces-cta-section">
      <div className="cta-full-image">
        <img src={u('photo-1542744173-8e7e53415bb0', 2000)} alt="Shrutham venue" loading="lazy" />
        <div className="cta-full-overlay">
          <div className="container text-center">
            <h2 className="serif-heading light">Let's Find Your Space</h2>
            <p className="light-p">Tell us about your occasion and we'll help you find the right setting.</p>
            <a href="#request-proposal" className="light-btn">Plan Your Event <ArrowRight size={14} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SpacesPage() {
  useEffect(() => {
    document.title = 'Our Spaces & Venues | Shrutham Convention, Hyderabad';
  }, []);

  return (
    <div className="spaces-page">
      <SpacesHero />
      <SpaceFinderNav />
      <FeaturedSpace />
      <ExploreAllSpaces />
      <SpaceStories />
      <SpacesGallery />
      <SpacesTestimonial />
      <SpacesFAQ />
      <SpacesCTA />
    </div>
  );
}
