import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import TrustNumbers from './components/TrustNumbers';
import AboutSection from './components/AboutSection';
import AboutStatsSection from './components/AboutStatsSection';
import OurStory from './components/OurStory';
import AboutExtended from './components/AboutExtended';
import AboutUsPage from './components/AboutUsPage';
import ServicesPage from './components/services/ServicesPage';
import EventsGrid from './components/EventsGrid';
import FacilitiesGrid from './components/FacilitiesGrid';
import BookingSystem from './components/BookingSystem';
import LocationDetails from './components/LocationDetails';
import TestimonialsSection from './components/TestimonialsSection';
import CtaSection from './components/CtaSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import EventDetailView from './components/EventDetailView';
import GalleryView from './components/GalleryView';
import VenuesView from './components/VenuesView';
import Chatbot from './components/Chatbot';
import WavyRibbon from './components/WavyRibbon';
import PlanningGuide from './components/PlanningGuide';
import RequestProposal from './components/RequestProposal';
import FaqsPage from './components/FaqsPage';
import ThreeDSpaceView from './components/ThreeDSpaceView';

export default function App() {
  const [selectedEventType, setSelectedEventType] = useState<string>('Weddings & Receptions');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Sync state cleanly with URL hash to represent separate pages but keep ALL visible in homepage
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services' | 'facilities' | 'events' | 'gallery' | 'contact' | 'event-detail' | 'facility-detail' | 'faqs' | 'planning-guide' | 'request-proposal' | '3d-space'>(() => {
    const hash = window.location.hash;
    if (hash === '#about') return 'about';
    if (hash === '#services') return 'services';
    if (hash === '#facilities') return 'facilities';
    if (hash === '#events') return 'events';
    if (hash === '#gallery') return 'gallery';
    if (hash === '#contact' || hash === '#location') return 'contact';
    if (hash === '#faqs') return 'faqs';
    if (hash === '#planning-guide') return 'planning-guide';
    if (hash === '#request-proposal') return 'request-proposal';
    if (hash === '#3d-space') return '3d-space';
    if (hash.startsWith('#event/')) return 'event-detail';
    if (hash.startsWith('#facility/')) return 'facilities';
    return 'home';
  });

  const [activeEventId, setActiveEventId] = useState<string>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#event/')) {
      return hash.replace('#event/', '');
    }
    return 'weddings';
  });

  const [activeFacilityId, setActiveFacilityId] = useState<string>(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#facility/')) {
      return hash.replace('#facility/', '');
    }
    return '';
  });

  const handleSelectEventType = (typeName: string) => {
    setSelectedEventType(typeName);
  };

  const handleOpenBookingTab = () => {
    const bTool = document.getElementById('booking-tool');
    if (bTool) {
      bTool.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If we are on another subpage, navigate to contact section first, then scroll
      window.location.hash = '#contact';
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      let targetPage: 'home' | 'about' | 'services' | 'facilities' | 'events' | 'gallery' | 'contact' | 'event-detail' | 'facility-detail' | 'faqs' | 'planning-guide' | 'request-proposal' | '3d-space' = 'home';
      let elementId = '';

      if (hash === '#about') {
        targetPage = 'about';
      } else if (hash === '#services') {
        targetPage = 'services';
      } else if (hash === '#facilities') {
        targetPage = 'facilities';
        setActiveFacilityId('');
      } else if (hash === '#events') {
        targetPage = 'events';
      } else if (hash === '#gallery') {
        targetPage = 'gallery';
      } else if (hash === '#contact' || hash === '#location') {
        targetPage = 'contact';
      } else if (hash === '#faqs') {
        targetPage = 'faqs';
      } else if (hash === '#planning-guide') {
        targetPage = 'planning-guide';
      } else if (hash === '#request-proposal') {
        targetPage = 'request-proposal';
      } else if (hash === '#3d-space') {
        targetPage = '3d-space';
      } else if (hash.startsWith('#event/')) {
        targetPage = 'event-detail';
        setActiveEventId(hash.replace('#event/', ''));
      } else if (hash.startsWith('#facility/')) {
        targetPage = 'facilities';
        setActiveFacilityId(hash.replace('#facility/', ''));
      }

      setCurrentPage(targetPage);
      if (targetPage === 'home') document.title = 'Shrutham Convention | Best Venue in Hyderabad for Events';
      if (targetPage === 'contact') document.title = 'Contact Us | Shrutham Convention, Hyderabad';

      // Scroll behavior logic:
      if (targetPage === 'home') {
        if (hash === '#about') elementId = 'about';
        else if (hash === '#facilities' || hash === '#services') elementId = 'facilities';
        else if (hash === '#events') elementId = 'events';
        else if (hash === '#gallery') elementId = 'gallery';
        else if (hash === '#location' || hash === '#contact') elementId = 'location';
        else if (hash === '#testimonials') elementId = 'testimonials';

        if (elementId) {
          setTimeout(() => {
            const el = document.getElementById(elementId);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0 });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Trigger on initial mount to align page state
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-chalk luxe-grid-bg text-slate-custom min-h-screen relative overflow-x-hidden selection:bg-[#5c0202] selection:text-white scroll-smooth pb-[76px] md:pb-0">
      {/* Premium Top Navigation header */}
      <Header onOpenBookingTab={handleOpenBookingTab} currentPage={currentPage} />

      {/* Pages Router Switch */}
      {currentPage === 'home' && (
        <main className="relative overflow-hidden animate-fade-in">
          {/* Beautiful sweeping gold ribbon waves at key points across home page length */}
          <WavyRibbon className="top-[450px] left-0" opacity={0.24} />
          <WavyRibbon className="top-[1400px] right-0" reverse opacity={0.24} />
          <WavyRibbon className="top-[2300px] left-0" opacity={0.24} />
          <WavyRibbon className="top-[3300px] right-0" reverse opacity={0.24} />
          <WavyRibbon className="bottom-[400px] left-0" opacity={0.24} />

          {/* Styled Hero Block */}
          <Hero onOpenBookingTab={handleOpenBookingTab} />

          {/* Dynamic Scrolling event categories ticker */}
          <Ticker />

          {/* Trust figures strip */}
          <TrustNumbers />

          {/* About storytelling segment */}
          <AboutSection />

          {/* Shrutham Venue Portfolio Statistics */}
          <AboutStatsSection />

          {/* Story of Shrutham World */}
          <OurStory />

          {/* Offering catalog with detailed inspector view popup */}
          <EventsGrid onSelectEventType={handleSelectEventType} />

          {/* High-accuracy Facilities selector */}
          <FacilitiesGrid />

          {/* Integrated Pricing estimate lookup and Client tour reservation dashboard */}
          <BookingSystem 
            initialEventType={selectedEventType} 
            onSelectEventType={handleSelectEventType} 
          />

          {/* Immersive Gallery Section */}
          <div id="gallery">
            <GalleryView onInquire={handleOpenBookingTab} variant="preview" />
          </div>

          {/* Distance route matrix and location iframe map */}
          <LocationDetails />

          {/* Customer recommendation reviews sheet */}
          <TestimonialsSection />
        </main>
      )}

      {currentPage === 'about' && (
        <main className="relative animate-fade-in pt-[72px] lg:pt-[80px]">
          <AboutUsPage onInquire={handleOpenBookingTab} />
        </main>
      )}

      {currentPage === 'services' && (
        <main className="relative animate-fade-in pt-[72px] lg:pt-[80px]">
          <ServicesPage />
        </main>
      )}

      {currentPage === 'facilities' && (
        <main className="relative overflow-hidden animate-fade-in pt-28 pb-10">
          <WavyRibbon className="top-[350px] left-0" opacity={0.24} />
          <VenuesView 
            initialSelectedVenueId={activeFacilityId}
            onInquire={(venueName) => {
              setSelectedEventType(venueName === 'Grand Convention Hall' ? 'Weddings & Receptions' : 'Conferences & Exhibitions');
              // Navigate to contact form
              window.location.hash = '#contact';
              setTimeout(() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }} 
          />
        </main>
      )}

      {currentPage === 'events' && (
        <main className="relative overflow-hidden animate-fade-in pt-28 pb-10">
          <WavyRibbon className="top-[350px] right-0" reverse opacity={0.24} />
          <EventsGrid onSelectEventType={handleSelectEventType} variant="list" />
          <CtaSection onSelectEventType={handleSelectEventType} />
        </main>
      )}

      {currentPage === 'gallery' && (
        <main className="relative overflow-hidden animate-fade-in pt-28 pb-10">
          <WavyRibbon className="top-[350px] left-0" opacity={0.24} />
          <GalleryView 
            onInquire={(setupTitle) => {
              window.location.hash = '#contact';
              if (setupTitle) {
                setTimeout(() => {
                  const textarea = document.querySelector('textarea[placeholder*="Interested in wedding"]') as HTMLTextAreaElement;
                  if (textarea) {
                    textarea.value = `I am interested in reserving or learning more about the layout setup: "${setupTitle}". Please provide availability and quote.`;
                  }
                }, 150);
              }
            }} 
            variant="full" 
          />
        </main>
      )}

      {currentPage === 'contact' && (
        <main className="relative overflow-hidden animate-fade-in pt-28 pb-10">
          <WavyRibbon className="top-[350px] right-0" reverse opacity={0.24} />
 
          <div className="py-20 bg-white border-b border-[#5c0202]/10">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 mb-14 text-center font-body">
              <span className="block text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#5c0202] mb-3">Get in touch</span>
              <h1 className="font-display text-4xl sm:text-5xl font-light text-obsidian tracking-tight leading-tight">Contact Us</h1>
              <p className="mt-4 text-sm text-mid font-light max-w-xl mx-auto">Check availability, schedule a guided walk-through, or ask about packages — our team replies within two hours during working hours.</p>
            </div>
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              <div className="bg-chalk p-8 md:p-12 border border-[#5c0202]/15 rounded-[2px] shadow-sm">
                <h3 className="font-display text-2xl font-light text-obsidian mb-6">Send an Inquiry</h3>
                
                {formSubmitted ? (
                   <div className="text-center py-8 animate-fade-in font-body">
                     <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#5c0202]/10 text-[#5c0202] mb-4 text-2xl">✓</div>
                     <h4 className="font-display text-xl font-normal text-obsidian mb-2">Inquiry Submitted</h4>
                     <p className="text-mid font-light text-xs max-w-sm mx-auto">
                       Thank you! Our dedicated Relationship Captain will reach out within 2 hours to walk you through availability and premium package pricing.
                     </p>
                     <button 
                       onClick={() => setFormSubmitted(false)} 
                       className="mt-6 text-[#5c0202] hover:text-[#7a0303] text-xs font-semibold uppercase tracking-wider underline cursor-pointer bg-transparent border-none"
                     >
                       Send Another Message
                     </button>
                   </div>
                ) : (
                  <form 
                    onSubmit={(e) => { 
                      e.preventDefault(); 
                      setFormSubmitted(true);
                    }} 
                    className="space-y-5 font-body text-sm"
                  >
                    <div>
                      <label className="block text-[10px] uppercase text-[#5c0202] font-semibold tracking-widest mb-1.5">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full bg-white border border-[#5c0202]/20 p-3 rounded-[2px] focus:outline-none focus:border-[#5c0202]" 
                        placeholder="Aditya Panchadarla" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase text-[#5c0202] font-semibold tracking-widest mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        className="w-full bg-white border border-[#5c0202]/20 p-3 rounded-[2px] focus:outline-none focus:border-[#5c0202]" 
                        placeholder="aditya.panchadarla@example.com" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase text-[#5c0202] font-semibold tracking-widest mb-1.5">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        className="w-full bg-white border border-[#5c0202]/20 p-3 rounded-[2px] focus:outline-none focus:border-[#5c0202]" 
                        placeholder="+91 99899 12224" 
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase text-[#5c0202] font-semibold tracking-widest mb-1.5">Inquiry Details</label>
                      <textarea 
                        rows={4} 
                        required 
                        className="w-full bg-white border border-[#5c0202]/20 p-3 rounded-[2px] focus:outline-none focus:border-[#5c0202]" 
                        placeholder="Interested in wedding availability or corporate booking package details..."
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="btn-slide-crimson w-full py-3 text-white text-xs font-bold tracking-widest uppercase rounded-[2px] cursor-pointer shadow-sm"
                    >
                      Request enquiry
                    </button>
                  </form>
                )}
              </div>

              <div className="space-y-8 font-body">
                <div>
                  <h3 className="font-display text-3xl font-light text-obsidian mb-4">Venue Headquarters</h3>
                  <p className="text-sm text-mid font-light leading-relaxed text-justify">
                    Shrutham is physically situated near the fast-access concrete service runway of the Hyderabad Outer Ring Road (ORR) Exit 15, Pedda Golconda, opposite Shree Mantra Convention in Sanghiguda. This prime location offers complete buffer noise protection while maintaining unparalleled airport and regional accessibility.
                  </p>
                </div>
                
                <div className="bg-white text-slate-custom p-8 border border-[#5c0202]/25 rounded-[2px] space-y-5 text-sm font-medium shadow-sm">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#5c0202] block mb-1">Coordinates</span>
                    <p className="leading-relaxed">Shrutham Convention, Near Nehru ORR Exit 15, Pedda Golconda, Opposite Shree Mantra Convention, Sanghiguda, Hyderabad, Telangana 501218</p>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#5c0202] block mb-1">Direct Call Concierge</span>
                    <p><a href="tel:+919989912224" className="hover:text-[#7a0303] transition-colors font-semibold text-slate-custom">+91 99899 12224</a> (Operational 10 AM to 7 PM)</p>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest font-bold text-[#5c0202] block mb-1">Electronic Mail Registry</span>
                    <p><a href="mailto:shruthamconvention@gmail.com" className="hover:text-[#7a0303] transition-colors font-semibold text-slate-custom">shruthamconvention@gmail.com</a></p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <LocationDetails />
          <FaqSection />
        </main>
      )}

      {currentPage === 'faqs' && (
        <main className="animate-fade-in pt-24 pb-10">
          <FaqsPage />
        </main>
      )}

      {currentPage === 'planning-guide' && (
        <main className="animate-fade-in pt-24 pb-10">
          <PlanningGuide />
        </main>
      )}

      {currentPage === 'request-proposal' && (
        <main className="animate-fade-in pt-24 pb-10">
          <RequestProposal />
        </main>
      )}

      {currentPage === '3d-space' && (
        <main className="animate-fade-in pt-24 pb-10">
          <ThreeDSpaceView />
        </main>
      )}

      {currentPage === 'event-detail' && (
        <main className="animate-fade-in pt-16 lg:pt-[80px]">
          <EventDetailView 
            eventId={activeEventId} 
            onBackToPage={(page) => {
              window.location.hash = page === 'home' ? '#home' : '#events';
            }}
            onSelectEventType={handleSelectEventType}
          />
        </main>
      )}

      {/* Corporate sitemap & contacts Footer */}
      <Footer />

      {/* Integrated Chatbot instead of WhatsApp */}
      <Chatbot 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
        onToggle={() => setIsChatOpen(prev => !prev)} 
      />

      {/* Sticky Quick Mobile Calls CTA */}
      <div className="md:hidden fixed bottom-1.5 left-2 right-2 z-40 bg-[#FCFAF5] border border-[#5c0202]/45 p-2 rounded-[22px] flex gap-2 shadow-2xl justify-between flex-row">
        <a
          href="tel:+919989912224"
          className="flex-1 text-center bg-[#5c0202] hover:bg-[#7a0303] text-white text-xs font-bold font-body tracking-wider uppercase py-3 rounded-full flex items-center justify-center gap-1 shadow-sm"
        >
          📞 Call Now
        </a>
        <button
          onClick={() => setIsChatOpen(true)}
          className="flex-1 text-center border-[#5c0202]/40 border bg-white text-[#5c0202] hover:text-[#7a0303] text-xs font-bold font-body tracking-wider uppercase py-3 rounded-full flex items-center justify-center gap-1 shadow-sm cursor-pointer"
        >
          💬 Ask Shruthi
        </button>
      </div>
    </div>
  );
}
