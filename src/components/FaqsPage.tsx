import { useState, useEffect } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, Search, MessageCircle, FileText, Info } from 'lucide-react';

interface FaqItem {
  id: number;
  q: string;
  a: string;
  category: 'logistics' | 'vendors' | 'capacity' | 'pricing';
}

export default function FaqsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // Dynamic SEO and Title tags setup
  useEffect(() => {
    document.title = "FAQs & Support | Shrutham Convention, Hyderabad Venue";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Get quick answers on logistics, vendors, capacity, and pricing at Shrutham Convention, Hyderabad. Can't find your answer? Our concierge team is on call.");
    }
  }, []);

  const faqs: FaqItem[] = [
    {
      id: 1,
      category: 'logistics',
      q: 'What is the parking capacity at Shrutham Convention, and is valet coordination provided?',
      a: 'We feature a designated hard-paved parkway with secure parking capacity Hyderabad venue of over 1,000 cars. A professional, high-volume valet coordination service is included at our main portico for all guest drop-offs, safe parking runs, and prompt key retrieval.'
    },
    {
      id: 2,
      category: 'logistics',
      q: 'What is the venue load-in timing and setup access hours for external production crews?',
      a: 'To ensure a stress-free event planning questions process, our standard venue load-in timing starts 24 hours prior to the event launch. Extended setup access hours can be requested via our logistics team for complex theatrical lighting, dynamic trussing, or floral installations.'
    },
    {
      id: 3,
      category: 'logistics',
      q: 'How does the power supply handle heavy dynamic staging, lighting, and sound projection?',
      a: 'Our venue FAQ Hyderabad features an advanced high-capacity power supply backed by dual-feed 500 KVA acoustic generators with automatic changeover switches, ensuring zero transition lag for concert-grade audio-visual systems and heavy climate control systems.'
    },
    {
      id: 4,
      category: 'vendors',
      q: 'What is your outside vendor policy, and do we have to choose from an approved caterers list?',
      a: 'We practice total vendor freedom. Shrutham has a flexible outside vendor policy event venue with zero hidden royalty commissions. While we can share our curated directory of approved caterers Hyderabad venue, clients are welcome to hire any vendor of their preference who complies with our safety regulations.'
    },
    {
      id: 5,
      category: 'vendors',
      q: 'What are the décor partner rules and insurance compliance policies?',
      a: 'All external decor partners must adhere to basic safety and structure guidelines. They are required to submit structural designs for high-elevation trusses and hold standard public liability insurance to coordinate work during setup access hours.'
    },
    {
      id: 6,
      category: 'capacity',
      q: 'What is the absolute Shrutham Convention capacity for seating vs. banquet-style layouts?',
      a: 'Our grand pillarless hall is incredibly versatile. The absolute Shrutham Convention capacity supports up to 2,000 guests in a theater-style seating arrangement, or up to 3,500 guests for fluid banquet-style receptions, gourmet buffet lines, and standing dinners.'
    },
    {
      id: 7,
      category: 'capacity',
      q: 'Do you have a policy regarding minimum guests wedding venue Hyderabad booking requirements?',
      a: 'No, we do not enforce rigid minimum guests wedding venue Hyderabad guidelines. Whether you are hosting an intimate high-profile gathering of 150 guests or a massive royal celebration of 3,000, our spaces can be scaled down or customized for your perfect layout.'
    },
    {
      id: 8,
      category: 'pricing',
      q: 'How does Shrutham Convention pricing compare, and what is included in the event hall rental rates?',
      a: 'Our event hall rental rates are highly transparent. Base Shrutham Convention pricing includes centralized climate control, pristine housekeeping, pre-event setup access hours, basic ambient illumination, and access to three luxury VIP suites. There are no hidden utility surcharges.'
    },
    {
      id: 9,
      category: 'pricing',
      q: 'What is the deposit policy, and how does it affect the total wedding venue cost Hyderabad?',
      a: 'To secure your desired date, a 50% reservation deposit is required. The remaining balance is due 30 days prior to the event. This upfront schedule helps locked-in clients budget clearly for their entire wedding venue cost Hyderabad without unexpected surprises.'
    }
  ];

  const filteredFaqs = faqs.filter(item => {
    const matchesSearch = item.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.a.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categoryLabel = (cat: string) => {
    if (cat === 'all') return 'All Questions';
    if (cat === 'logistics') return 'Logistics';
    if (cat === 'vendors') return 'Vendors';
    if (cat === 'capacity') return 'Capacity';
    if (cat === 'pricing') return 'Pricing';
    return cat;
  };

  return (
    <div className="bg-[#FCFAF5] min-h-screen text-slate-custom font-body py-12 md:py-20 animate-fade-in">
      <div className="site-container px-6 md:px-12">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-[10px] uppercase text-[#5c0202] font-semibold tracking-widest block mb-2">
            Resolution Knowledge Base
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-light text-[#2D2A26] tracking-wide mb-4">
            Frequently Solved Questions
          </h1>
          <div className="h-[2px] w-16 bg-[#5c0202] mx-auto my-4" />
          <p className="text-xs sm:text-[14px] text-slate-custom/75 font-light leading-relaxed">
            Quick, reliable resolutions for caterers, technical directors, brides, grooms, and corporate delegates planning luxury celebrations at Shrutham.
          </p>
        </div>

        {/* Search & Category Filter Section */}
        <div className="max-w-3xl mx-auto mb-12 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gold/50" size={18} />
            <input 
              type="text"
              placeholder="Search specific questions (e.g., catering, capacity, valet...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gold/15 pl-12 pr-4 py-3.5 rounded-[2px] focus:outline-none focus:border-[#5c0202] text-xs sm:text-sm font-light text-obsidian shadow-xs"
            />
          </div>

          <div className="flex flex-wrap gap-2.5 justify-center">
            {['all', 'logistics', 'vendors', 'capacity', 'pricing'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIdx(null);
                }}
                className={`px-4 py-2 text-[10px] font-semibold uppercase tracking-wider rounded-[2px] transition-all cursor-pointer border focus:outline-none ${
                  activeCategory === cat 
                    ? 'bg-[#5c0202] text-white border-transparent' 
                    : 'bg-white border-gold/10 text-slate-custom hover:border-[#5c0202]'
                }`}
              >
                {categoryLabel(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIdx === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="border border-gold/15 rounded-[2px] transition-all bg-chalk/45 hover:bg-white text-left"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : faq.id)}
                    className="w-full text-left p-5 flex justify-between items-center bg-transparent cursor-pointer select-none focus:outline-none"
                  >
                    <span className="text-xs sm:text-sm font-semibold text-obsidian pr-4 flex items-center gap-3">
                      <span className="text-[#5c0202] font-mono font-bold text-xs">0{idx + 1}.</span> {faq.q}
                    </span>
                    <span className="text-[#5c0202] hover:text-[#7a0303] shrink-0">
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-mid leading-relaxed text-justify border-t border-gold/5 animate-fade-in font-light">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-white border border-gold/10 rounded-[2px]">
              <Info className="text-[#5c0202] mx-auto mb-3" size={24} />
              <p className="text-xs font-light text-slate-custom/60">No matched results found. Try search keywords like "caterers" or "valet".</p>
            </div>
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="max-w-3xl mx-auto mt-16 bg-white border border-[#5c0202]/15 p-6 md:p-8 rounded-[2px] text-center">
          <MessageCircle className="text-[#5c0202] mx-auto mb-3" size={24} />
          <h2 className="font-display text-2xl font-light text-obsidian mb-2">Still Have Queries?</h2>
          <p className="text-xs text-slate-custom/60 mb-5 max-w-md mx-auto leading-relaxed">
            Our luxury concierge team is available to help map out custom electrical, structural, and vendor compliance guidelines.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a 
              href="tel:+919989912224"
              className="inline-flex items-center gap-2 bg-[#5c0202] hover:bg-[#7a0303] text-white text-[10px] font-bold tracking-widest uppercase px-5 py-3 rounded-[2px] transition-all"
            >
              Call Manager Now
            </a>
            <a 
              href="#request-proposal"
              className="inline-flex items-center gap-2 border border-[#5c0202] text-[#5c0202] hover:bg-[#5c0202]/5 text-[10px] font-bold tracking-widest uppercase px-5 py-3 rounded-[2px] transition-all"
            >
              Request Custom Proposal
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
