import { Target, Users, Compass, Eye, Shield, CheckCircle } from 'lucide-react';

export default function AboutExtended() {
  const highlights = [
    {
      icon: <Users className="text-[#5c0202]" size={24} />,
      title: 'Our Team',
      desc: 'Our team, led by Anil Kumar, brings passion, precision, and a personal touch to every event we host. We are your event partners — committed to understanding your vision, respecting your budget, and delivering results that exceed your expectations.',
    },
    {
      icon: <Compass className="text-[#5c0202]" size={24} />,
      title: 'Strategic Access',
      desc: 'Located near Nehru Outer Ring Road Exit 15, Pedda Golconda, opposite Shree Mantra Convention in Sanghiguda. We provide seamless, congestion-free travel for guests arriving from across the twin cities of Hyderabad & Secunderabad.',
    },
  ];

  return (
    <div className="bg-chalk font-body">
      
      {/* Who We Are & Story Section */}
      <section className="py-20 bg-white border-b border-[#5c0202]/15">
        <div className="site-container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#5c0202] text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase rounded-[2px] mb-4">
                Story of Shrutham World
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-light text-obsidian tracking-tight mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-xs sm:text-sm text-mid font-light leading-relaxed text-justify">
                <p>
                  Shrutham Convention was founded on the idea that in a connected yet fragmented world, hosts want more than luxury spaces. They seek seamless journeys that align with their lifestyle and celebration aspirations.
                </p>
                <p>
                  Strategically located near Nehru Outer Ring Road Exit 15, Pedda Golconda — opposite Shree Mantra Convention, in the vibrant Sanghiguda neighbourhood — we are easily accessible from across the twin cities of Hyderabad and Secunderabad, allowing your guests to bypass congested roadways and arrive effortlessly.
                </p>
                <p>
                  Our team, led by Anil Kumar, brings passion, precision, and a personal touch to every event we host. We are your event partners — committed to understanding your vision, respecting your budget, and delivering results that exceed your expectations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {highlights.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-chalk p-6 border border-[#5c0202]/10 rounded-[2px] transition-all flex gap-4 items-start shadow-sm"
                >
                  <div className="p-3 bg-[#5c0202]/5 rounded-[2px] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-normal text-obsidian mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-mid font-light leading-relaxed text-justify">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-chalk border-b border-[#5c0202]/15">
        <div className="site-container px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#5c0202] text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase rounded-[2px] mb-4">
              GUIDING PRINCIPLES
            </span>
            <h2 className="font-display text-3xl font-light text-obsidian tracking-tight">
              Our Vision &amp; Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 border border-[#5c0202]/10 rounded-[2px] shadow-sm flex gap-5 items-start">
              <div className="p-3 bg-[#5c0202]/5 rounded-[2px] shrink-0">
                <Eye className="text-[#5c0202]" size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-normal text-obsidian mb-2">Our Vision</h3>
                <p className="text-xs sm:text-sm text-mid font-light leading-relaxed text-justify">
                  To be Hyderabad's most celebrated convention and banquet destination — a place where every occasion is elevated into an extraordinary experience.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 border border-[#5c0202]/10 rounded-[2px] shadow-sm flex gap-5 items-start">
              <div className="p-3 bg-[#5c0202]/5 rounded-[2px] shrink-0">
                <Target className="text-[#5c0202]" size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-normal text-obsidian mb-2">Our Mission</h3>
                <p className="text-xs sm:text-sm text-mid font-light leading-relaxed text-justify">
                  To provide world-class event facilities, personalised service, and seamless coordination that makes every client feel valued, every guest feel welcomed, and every event feel magical.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shrutham Convention at a Glance */}
      <section className="py-20 bg-white border-b border-[#5c0202]/15">
        <div className="site-container px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 bg-[#5c0202] text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase rounded-[2px] mb-4">
              KEY METRICS
            </span>
            <h2 className="font-display text-3xl font-light text-obsidian tracking-tight">
              Shrutham Convention at a Glance
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-chalk p-6 border border-[#5c0202]/10 rounded-[2px] text-center shadow-sm">
              <span className="font-display text-4xl sm:text-5xl font-light text-[#5c0202] block mb-1">
                6+
              </span>
              <span className="text-[10px] uppercase text-slate-custom/60 tracking-wider font-semibold block">
                Event Spaces
              </span>
            </div>
            <div className="bg-chalk p-6 border border-[#5c0202]/10 rounded-[2px] text-center shadow-sm">
              <span className="font-display text-4xl sm:text-5xl font-light text-[#5c0202] block mb-1">
                1000+
              </span>
              <span className="text-[10px] uppercase text-slate-custom/60 tracking-wider font-semibold block">
                Guest Capacity
              </span>
            </div>
            <div className="bg-chalk p-6 border border-[#5c0202]/10 rounded-[2px] text-center shadow-sm">
              <span className="font-display text-4xl sm:text-5xl font-light text-[#5c0202] block mb-1">
                100%
              </span>
              <span className="text-[10px] uppercase text-slate-custom/60 tracking-wider font-semibold block">
                Personalised Service
              </span>
            </div>
            <div className="bg-chalk p-6 border border-[#5c0202]/10 rounded-[2px] text-center shadow-sm">
              <span className="font-display text-4xl sm:text-5xl font-light text-[#5c0202] block mb-1">
                24/7
              </span>
              <span className="text-[10px] uppercase text-slate-custom/60 tracking-wider font-semibold block">
                Support &amp; Coordination
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Page Closing CTA */}
      <section className="py-20 bg-chalk">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 bg-[#5c0202] text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase rounded-[2px] mb-4">
            LET'S COLLABORATE
          </span>
          <h2 className="font-display text-3xl font-light text-obsidian tracking-tight mb-4">
            Let Us Make Your Vision a Reality
          </h2>
          <p className="text-xs sm:text-sm text-mid font-light leading-relaxed max-w-xl mx-auto mb-8">
            Get in touch with our team to discuss your upcoming event. We are here to listen, plan, and deliver — every step of the way.
          </p>
          <button
            onClick={() => {
              window.location.hash = '#contact';
            }}
            className="btn-slide-crimson inline-flex items-center gap-2 px-8 py-4 text-white text-xs font-semibold tracking-widest uppercase transition-all rounded-[2px] cursor-pointer"
          >
            PLAN MY EVENT &rarr;
          </button>
        </div>
      </section>

    </div>
  );
}
