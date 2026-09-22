import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import './events.css';

/**
 * Events page — the design delivered as shrutham.zip (2), ported from its standalone Vite app.
 * Not carried over: the zip's Navbar, Footer and CustomCursor (the site has its own).
 * Links: the zip used in-page anchors (#corporate, #weddings …) and bare `#` placeholders.
 * Here the hash IS the router, so category links scroll to their section and every call to
 * action goes to the existing #request-proposal / #contact / #event/... pages.
 */

const u = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'social', label: 'Social' },
  { id: 'government', label: 'Government' },
  { id: 'exhibitions', label: 'Exhibitions + Launches' },
];

const WAYS = [
  { id: '01', name: 'Corporate', target: 'corporate', img: u('photo-1542744173-8e7e53415bb0', 1500) },
  { id: '02', name: 'Weddings', target: 'weddings', img: u('photo-1511285560929-80b456fea0bc', 1500) },
  { id: '03', name: 'Social', target: 'social', img: u('photo-1511795409834-ef04bbd61622', 1500) },
  { id: '04', name: 'Government', target: 'government', img: u('photo-1587825140708-dfaf72ae4b04', 1500) },
  { id: '05', name: 'Exhibitions + Launches', target: 'exhibitions', img: u('photo-1492684223066-81342ee5ff30', 1500) },
];

const EXPERIENCE = [
  { n: '01', title: 'The Space', text: 'Flexible environments tailored to your needs.' },
  { n: '02', title: 'The People', text: 'Dedicated professionals ensuring flawless execution.' },
  { n: '03', title: 'The Experience', text: 'Unforgettable moments that leave a lasting impression.' },
];

const PHOTOS = [
  { id: 1, type: 'Wedding', img: u('photo-1519225421980-715cb0215aed', 600) },
  { id: 2, type: 'Corporate', img: u('photo-1542744173-8e7e53415bb0', 600) },
  { id: 3, type: 'Social', img: u('photo-1511795409834-ef04bbd61622', 600) },
  { id: 4, type: 'Launch', img: u('photo-1492684223066-81342ee5ff30', 600) },
  { id: 5, type: 'Wedding', img: u('photo-1511285560929-80b456fea0bc', 600) },
  { id: 6, type: 'Corporate', img: u('photo-1540575467063-178a50c2df87', 600) },
];

const SPECTRUM = [
  { cls: 'n1', label: ['Private', 'Celebration'] },
  { cls: 'n2', label: ['Social'] },
  { cls: 'n3', label: ['Corporate'] },
  { cls: 'n4', label: ['Government', 'Exhibition'] },
];

// In-page scroll — the site hash is the router, so we never write to location.hash here
const scrollTo = (id: string) => {
  const el = id === 'all' ? document.querySelector('.events-page .category-nav') : document.getElementById(id);
  el?.scrollIntoView({ behavior: 'smooth', block: id === 'all' ? 'start' : 'start' });
};

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

function EventsHero() {
  return (
    <header className="events-hero">
      <div className="hero-split">
        <div className="split-left">
          <motion.img initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} src={u('photo-1519225421980-715cb0215aed', 1000)} alt="Wedding celebration at Shrutham" />
        </div>
        <div className="split-right">
          <motion.img initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }} src={u('photo-1540575467063-178a50c2df87', 1000)} alt="Corporate event at Shrutham" />
        </div>
      </div>
      <div className="events-hero-content text-center">
        <span className="eyebrow light">Events at Shrutham</span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
          Gather.<br />Celebrate.<br />Make It Matter.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
          From intimate celebrations to large-scale gatherings, every occasion finds its own expression at Shrutham.
        </motion.p>
        <motion.button className="explore-link light" onClick={() => scrollTo('corporate')} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
          ↓ Explore Events
        </motion.button>
      </div>
    </header>
  );
}

function CategoryNav() {
  const [active, setActive] = useState('all');
  return (
    <nav className="category-nav" aria-label="Event categories">
      <div className="container">
        <ul>
          {CATEGORIES.map((c) => (
            <li key={c.id}>
              <button className={active === c.id ? 'active' : ''} aria-current={active === c.id} onClick={() => { setActive(c.id); scrollTo(c.id); }}>
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function Corporate() {
  return (
    <section id="corporate" className="event-section corporate-section section-padding">
      <div className="bg-number" aria-hidden="true">01<br />CORPORATE</div>
      <div className="container corporate-grid">
        <motion.div className="corporate-content" {...reveal()}>
          <h2>Where ideas meet<br />the right setting.</h2>
          <ul className="event-list">
            {['Conferences', 'Meetings', 'Seminars', 'Corporate Gatherings'].map((i) => <li key={i}>{i}</li>)}
          </ul>
        </motion.div>
        <motion.div className="corporate-image" {...reveal(0.2)}>
          <img src={u('photo-1542744173-8e7e53415bb0', 1000)} alt="Corporate gathering" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
}

function Weddings() {
  return (
    <section id="weddings" className="event-section weddings-section">
      <div className="weddings-image">
        <img src={u('photo-1511285560929-80b456fea0bc', 2000)} alt="Wedding celebration" loading="lazy" />
        <div className="weddings-overlay">
          <div className="container text-center">
            <span className="eyebrow light">Weddings</span>
            <h2>Where every detail<br />becomes a memory.</h2>
            <a href="#event/weddings" className="explore-link light">Discover →</a>
          </div>
        </div>
      </div>
      <div className="weddings-footer text-center section-padding-small">
        <p>From intimate ceremonies to grand celebrations, create a wedding experience that feels uniquely yours.</p>
        <a href="#event/weddings" className="tiny-link">View Wedding Possibilities →</a>
      </div>
    </section>
  );
}

function Social() {
  const imgs = [
    { cls: 'item-1', src: u('photo-1511795409834-ef04bbd61622', 800), alt: 'Social gathering' },
    { cls: 'item-2', src: u('photo-1517457373958-b7bdd4587205', 800), alt: 'Celebration table setting' },
    { cls: 'item-3', src: u('photo-1519671482749-fd09be7ccebf', 800), alt: 'Guests celebrating' },
  ];
  return (
    <section id="social" className="event-section social-section section-padding">
      <div className="container">
        <motion.div className="social-header text-center" {...reveal()}>
          <span className="eyebrow">Social</span>
          <h2>Moments worth gathering for.</h2>
        </motion.div>
        <div className="masonry-grid">
          {imgs.map((i) => (
            <motion.div key={i.cls} className={`masonry-item ${i.cls}`} {...reveal(0.1)}>
              <img src={i.src} alt={i.alt} loading="lazy" />
            </motion.div>
          ))}
        </div>
        <div className="social-labels text-center">
          {['Birthdays', 'Anniversaries', 'Milestones', 'Private Celebrations', 'Family Gatherings'].map((l) => <span key={l}>{l}</span>)}
        </div>
      </div>
    </section>
  );
}

function Government() {
  return (
    <section id="government" className="event-section government-section section-padding">
      <div className="container gov-grid">
        <motion.div className="gov-content" {...reveal()}>
          <span className="section-num">04</span>
          <span className="eyebrow">Government</span>
          <h2>Events designed<br />with clarity,<br />protocol &amp; precision.</h2>
          <a href="#request-proposal" className="explore-link">Explore →</a>
          <ul className="event-list gov-list">
            {['Official Gatherings', 'Conferences', 'Institutional Events', 'Public Programs'].map((i) => <li key={i}>{i}</li>)}
          </ul>
        </motion.div>
        <motion.div className="gov-image" {...reveal(0.2)}>
          <img src={u('photo-1517502884422-41eaead166d4', 1000)} alt="Structured institutional event" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
}

function Exhibitions() {
  return (
    <section id="exhibitions" className="event-section exhibitions-section section-padding">
      <div className="exhibitions-container">
        <h2 className="exhibitions-title">
          EXHIBITIONS<br /><span className="plus">+</span><br />LAUNCHES
        </h2>
        <motion.div className="exhibitions-image-wrapper" {...reveal()}>
          <img src={u('photo-1492684223066-81342ee5ff30', 1500)} alt="Exhibition space" loading="lazy" />
          <div className="floating-card">
            <h4>BRAND / PRODUCT<br />LAUNCH</h4>
          </div>
        </motion.div>
      </div>
      <div className="container text-center section-padding-small">
        <p style={{ maxWidth: 640, margin: '0 auto' }}>
          Spaces designed to introduce, showcase and create impact — from exhibitions and brand activations to product launches.
        </p>
      </div>
    </section>
  );
}

function FiveWaysToGather() {
  const [hovered, setHovered] = useState<string | null>(null);
  return (
    <section className="five-ways-section section-padding">
      {WAYS.map((w) => (
        <div key={w.id} className="five-ways-bg" style={{ backgroundImage: `url(${w.img})`, opacity: hovered === w.id ? 1 : 0 }} aria-hidden="true" />
      ))}
      <div className="five-ways-overlay" style={{ opacity: hovered ? 0.7 : 1 }} aria-hidden="true" />
      <div className="container five-ways-inner">
        <h2 className="five-ways-heading">Five Ways to Gather</h2>
        <div className="five-ways-list">
          {WAYS.map((w) => (
            <button
              key={w.id}
              className={`five-ways-item ${hovered === w.id ? 'active' : ''}`}
              onMouseEnter={() => setHovered(w.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(w.id)}
              onBlur={() => setHovered(null)}
              onClick={() => scrollTo(w.target)}
            >
              <span className="way-id">{w.id}</span>
              <span className="way-name">{w.name}</span>
              <span className="way-arrow" aria-hidden="true">→</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventScale() {
  return (
    <section className="event-scale-section section-padding">
      <div className="container text-center">
        <motion.h2 {...reveal()}>From intimate moments to large gatherings.</motion.h2>
        <div className="spectrum-container">
          <div className="spectrum-labels">
            <span>Intimate</span>
            <span>Large Scale</span>
          </div>
          <div className="spectrum-line">
            {SPECTRUM.map((s) => (
              <div key={s.cls} className={`spectrum-node ${s.cls}`}>
                <div className="node-line" />
                <span>{s.label[0]}{s.label[1] && <><br />{s.label[1]}</>}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EventExperience() {
  return (
    <section className="event-experience-section section-padding">
      <div className="container">
        <motion.div className="exp-header text-center" {...reveal()}>
          <h2>One Venue.<br />Many Stories.</h2>
        </motion.div>
        <div className="exp-numbers-grid">
          {EXPERIENCE.map((e) => (
            <div className="exp-item" key={e.n} tabIndex={0}>
              <span className="exp-num">{e.n}</span>
              <h3>{e.title}</h3>
              <p className="exp-reveal">{e.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventPhotoWall() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
  return (
    <section ref={ref} className="photo-wall-section section-padding" aria-label="Event photographs">
      <motion.div className="photo-wall-track" style={{ x }}>
        {PHOTOS.map((p) => (
          <div key={p.id} className="photo-wall-item">
            <img src={p.img} alt={p.type} loading="lazy" />
            <span className="photo-label">{p.type}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

function EventsCTA() {
  return (
    <section className="events-cta-section section-padding">
      <div className="container">
        <motion.div className="events-cta-box" {...reveal()}>
          <h2>YOUR EVENT<br />DESERVES ITS OWN<br />STORY.</h2>
          <div className="cta-img-wrapper">
            <img src={u('photo-1522771739844-6a9f6d5f14af', 800)} alt="Shrutham architecture" loading="lazy" />
          </div>
          <a href="#request-proposal" className="btn-primary">Plan With Us</a>
        </motion.div>
        <p className="text-center events-cta-note">Tell us what you're planning. We'll help you bring it together at Shrutham.</p>
      </div>
    </section>
  );
}

export default function EventsPage() {
  useEffect(() => {
    document.title = 'Event Types & Portfolios | Shrutham Convention Hyderabad';
  }, []);

  return (
    <div className="events-page">
      <EventsHero />
      <CategoryNav />
      <Corporate />
      <Weddings />
      <Social />
      <Government />
      <Exhibitions />
      <FiveWaysToGather />
      <EventScale />
      <EventExperience />
      <EventPhotoWall />
      <EventsCTA />
    </div>
  );
}
