import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs: FaqItem[] = [
    {
      q: 'What is the parking capacity at Shrutham Convention, and is valet coordination provided?',
      a: 'We feature a designated hard-paved parkway with secure parking capacity Hyderabad venue of over 1,000 cars. A professional, high-volume valet coordination service is included at our main portico for all guest drop-offs, safe parking runs, and prompt key retrieval.'
    },
    {
      q: 'What is your outside vendor policy, and do we have to choose from an approved caterers list?',
      a: 'We practice total vendor freedom. Shrutham has a flexible outside vendor policy event venue with zero hidden royalty commissions. While we can share our curated directory of approved caterers Hyderabad venue, clients are welcome to hire any vendor of their preference who complies with our safety regulations.'
    },
    {
      q: 'What is the absolute Shrutham Convention capacity for seating vs. banquet-style layouts?',
      a: 'Our grand pillarless hall is incredibly versatile. The absolute Shrutham Convention capacity supports up to 2,000 guests in a theater-style seating arrangement, or up to 3,500 guests for fluid banquet-style receptions, gourmet buffet lines, and standing dinners.'
    },
    {
      q: 'How does the power supply handle heavy dynamic staging, lighting, and sound projection?',
      a: 'Our venue FAQ Hyderabad features an advanced high-capacity power supply backed by dual-feed 500 KVA acoustic generators with automatic changeover switches, ensuring zero transition lag for concert-grade audio-visual systems and heavy climate control systems.'
    },
    {
      q: 'Do you have a policy regarding minimum guests wedding venue Hyderabad booking requirements?',
      a: 'No, we do not enforce rigid minimum guests wedding venue Hyderabad guidelines. Whether you are hosting an intimate high-profile gathering of 150 guests or a massive royal celebration of 3,000, our spaces can be scaled down or customized for your perfect layout.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-gold/15" aria-labelledby="faq-heading">
      <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#5c0202] text-white text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase font-body rounded-[2px] mb-4">
            Inquery Assistance
          </span>
          <h2 id="faq-heading" className="font-display text-3xl sm:text-4xl font-light text-obsidian tracking-tight">
            Frequently Solved Questions
          </h2>
        </div>

        <div className="space-y-4 font-body">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className="border border-gold/15 rounded-[2px] transition-colors bg-chalk/45"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex justify-between items-center bg-transparent cursor-pointer select-none focus:outline-none focus:bg-chalk"
                >
                  <span className="text-xs sm:text-sm font-semibold text-obsidian pr-4 flex items-center gap-2">
                    <span className="text-[#5c0202]">0{idx + 1}.</span> {faq.q}
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
          })}
        </div>

      </div>
    </section>
  );
}
