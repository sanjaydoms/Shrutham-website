import { Fragment, useEffect, useState, type MouseEvent } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Plus } from 'lucide-react';
import './services.css';

/**
 * Services page — the design delivered as shrutham.zip, ported from its standalone Vite app.
 * Not carried over: the zip's Navbar, Footer and CustomCursor (the site has its own header and
 * footer; a page-scoped cursor would flicker at page boundaries).
 * Links: the zip used in-page anchors (#catering, #planning …). Here the hash is the router, so
 * service links scroll to their grid tile instead, and the CTAs go to the existing
 * #request-proposal / #contact pages.
 */

const unsplash = (id: string, w: number) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=80&w=${w}`;

const SERVICES = [
  { id: 'catering', n: '01', title: 'Catering', size: 'bento-large', img: 'photo-1555244162-803834f70033', text: 'Flavours made for celebration. From traditional favourites to thoughtfully curated menus.' },
  { id: 'decor', n: '02', title: 'Décor', size: 'bento-wide', img: 'photo-1519225421980-715cb0215aed', text: 'Spaces transformed around your story. Every detail thoughtfully composed.' },
  { id: 'transport', n: '03', title: 'Transport', size: 'bento-square', img: 'photo-1533558701576-23c65e0272fb', text: 'Seamless arrivals. Comfortable departures.' },
  { id: 'planning', n: '04', title: 'Planning', size: 'bento-square', img: 'photo-1515005886638-b76b3cb863b1', text: 'We handle the details. You celebrate.' },
  { id: 'audio', n: '05', title: 'Audio', size: 'bento-wide', img: 'photo-1516450360452-9312f5e86fc7', text: 'Every word heard. Every moment felt.' },
];

const PROCESS = [
  { n: '01', title: ['TELL US', 'YOUR VISION'], text: 'Tell us about your occasion, guests and ideas.' },
  { n: '02', title: ['WE CURATE', 'THE DETAILS'], text: 'Services and details are tailored around your celebration.' },
  { n: '03', title: ['WE COORDINATE', 'EVERYTHING'], text: 'Our team brings the moving pieces together.' },
  { n: '04', title: ['YOU', 'CELEBRATE'], text: 'Enjoy the occasion while the details are taken care of.' },
];

const FAQS = [
  { q: 'Do you provide complete event planning?', a: 'Yes, our team can handle everything from conceptualization to execution, ensuring every detail aligns with your vision.' },
  { q: 'Can services be customized for our event?', a: 'Absolutely. Every celebration is unique, and all our services can be tailored to match your specific requirements, themes, and preferences.' },
  { q: 'Can we choose our own catering team?', a: 'Yes, while we offer exceptional in-house catering, you have the flexibility to bring in external caterers of your choice.' },
  { q: 'Can Shrutham coordinate guest transportation?', a: 'Yes, we can arrange and coordinate seamless guest arrivals and departures to ensure a smooth logistical experience.' },
  { q: 'Do you provide audio support for performances?', a: 'We provide comprehensive audio solutions including sound systems, wireless microphones, and technical support for any type of performance.' },
];

// In-page scroll without touching the hash (the hash is the site router)
const scrollTo = (id: string) => (e: MouseEvent) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

function ServicesHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  return (
    <header className="hero">
      <motion.div className="hero-bg" style={{ y }}>
        <img src={unsplash('photo-1511285560929-80b456fea0bc', 2000)} alt="Elegant wedding celebration" />
        <div className="overlay" />
      </motion.div>
      <div className="hero-content">
        <motion.span className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          Our Services
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}>
          Everything Your Celebration Needs,<br />Thoughtfully Taken Care Of.
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.7 }}>
          From the first idea to the final celebration, our services bring every detail together with care, precision and elegance.
        </motion.p>
        <motion.a href="#request-proposal" className="btn-primary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Plan Your Event <ArrowRight className="arrow" size={16} />
        </motion.a>
      </div>
    </header>
  );
}

function Intro() {
  return (
    <section className="intro section-padding">
      <div className="container intro-grid">
        <div className="intro-left">
          <motion.h2 initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            One celebration.<br />Every detail, connected.
          </motion.h2>
        </div>
        <div className="intro-right">
          <motion.p initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            Great celebrations feel effortless. Behind them is thoughtful planning, beautiful details and seamless coordination. Shrutham brings the essential elements of your event together so you can stay present for what truly matters.
          </motion.p>
        </div>
      </div>
      <div className="container">
        <hr className="thin-line" />
        <motion.nav className="service-links" aria-label="Services" {...reveal(0.4)}>
          {SERVICES.map((s, i) => (
            <Fragment key={s.id}>
              {i > 0 && <span className="dot" aria-hidden="true">·</span>}
              <a href={`#${s.id}`} onClick={scrollTo(`svc-${s.id}`)}>{s.title}</a>
            </Fragment>
          ))}
        </motion.nav>
      </div>
    </section>
  );
}

function BentoServices() {
  return (
    <section className="services-bento container section-padding" id="services-grid">
      <motion.div
        className="bento-grid"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {SERVICES.map((s) => (
          <motion.a
            key={s.id}
            id={`svc-${s.id}`}
            href="#request-proposal"
            className={`bento-item ${s.size}`}
            style={{ backgroundImage: `url('${unsplash(s.img, 1000)}')` }}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } } }}
            whileHover={{ scale: s.size === 'bento-square' ? 0.96 : 0.98 }}
            aria-label={`${s.title} — enquire`}
          >
            <div className="bento-overlay" />
            <div className="bento-content">
              <span className="bento-number">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="explore-btn">Explore <ArrowRight className="arrow" size={14} style={{ marginLeft: 4 }} /></span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

function Process() {
  return (
    <section className="process-section container section-padding">
      <h2 className="text-center process-heading">From Vision to Celebration</h2>
      <div className="process-grid">
        {PROCESS.map((p, i) => (
          <Fragment key={p.n}>
            {i > 0 && <div className="process-divider" aria-hidden="true" />}
            <div className="process-step">
              <div className="step-num">{p.n}</div>
              <h5>{p.title[0]}<br />{p.title[1]}</h5>
              <p>{p.text}</p>
            </div>
          </Fragment>
        ))}
      </div>
    </section>
  );
}

function EmotionalBreak() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.3, 1], [1, 1.1]);
  return (
    <section className="emotional-break">
      <motion.div className="break-bg" style={{ scale }}>
        <img src={unsplash('photo-1511795409834-ef04bbd61622', 2000)} alt="Joyful celebration moments" />
      </motion.div>
      <div className="break-content">
        <motion.h2 {...reveal()}>The best celebrations feel effortless.</motion.h2>
        <motion.p {...reveal(0.2)}>That's what thoughtful service is for.</motion.p>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="faq-section container section-padding">
      <h2 className="faq-heading">Services — FAQ</h2>
      <div className="faq-list">
        {FAQS.map((f, i) => (
          <div className="faq-item" key={f.q}>
            <button className={`faq-question ${open === i ? 'active' : ''}`} onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
              <span>{f.q}</span>
              <motion.span className="plus-icon" animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.3 }}>
                <Plus size={24} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                  <p>{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="final-cta">
      <div className="cta-bg">
        <img src={unsplash('photo-1464366400600-7168b8af9bc3', 2000)} alt="Beautiful empty venue space ready for celebration" />
        <div className="cta-overlay" />
      </div>
      <div className="cta-content container text-center">
        <motion.span className="eyebrow light" {...reveal()}>Your Celebration Starts Here</motion.span>
        <motion.h2 {...reveal(0.2)}>Let's Create Something<br />Worth Remembering.</motion.h2>
        <motion.div className="cta-buttons" {...reveal(0.4)}>
          <a href="#request-proposal" className="btn-primary">Plan Your Event</a>
          <a href="#contact" className="btn-outline light">Contact Shrutham</a>
        </motion.div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  useEffect(() => {
    document.title = "Event Services | Shrutham Convention, Hyderabad's Top Venue";
  }, []);

  return (
    <div className="services-page">
      <ServicesHero />
      <Intro />
      <BentoServices />
      <Process />
      <EmotionalBreak />
      <FAQ />
      <FinalCta />
    </div>
  );
}
