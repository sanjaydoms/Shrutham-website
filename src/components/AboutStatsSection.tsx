import { motion } from 'motion/react';
import { MapPin, Star, Users, Gem } from 'lucide-react';

export default function AboutStatsSection() {
  const usps = [
    {
      id: 'prime-location',
      title: 'Prime Location',
      text: 'Minutes from Nehru ORR Exit 15, easily accessible from all parts of Hyderabad with ample parking space.',
      icon: <MapPin className="w-8 h-8 text-[#5c0202]" />
    },
    {
      id: 'versatile-spaces',
      title: 'Versatile Event Spaces',
      text: 'From grand weddings to focused boardroom meetings — our multi-purpose halls adapt to any occasion, any size.',
      icon: <Star className="w-8 h-8 text-[#5c0202]" />
    },
    {
      id: 'event-team',
      title: 'Dedicated Event Team',
      text: 'Our experienced event coordinators ensure every element — from décor to logistics — is perfectly executed.',
      icon: <Users className="w-8 h-8 text-[#5c0202]" />
    },
    {
      id: 'premium-hospitality',
      title: 'Premium Hospitality',
      text: 'World-class amenities, VIP facilities, and attentive hospitality that leaves a lasting impression on every guest.',
      icon: <Gem className="w-8 h-8 text-[#5c0202]" />
    }
  ];

  return (
    <section 
      id="shrutham-usps" 
      className="relative z-10 py-24 bg-[#FCFAF5] border-b border-[#5c0202]/10 overflow-hidden font-body" 
      aria-label="Why Choose Shrutham Convention"
    >
      <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-[720px] mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#5c0202] text-white text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase font-body rounded-[2px] mb-4">
            The Shrutham Edge
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-light leading-[1.1] text-obsidian tracking-tight">
            Why Shrutham Convention Is Hyderabad's Most Trusted Event Venue
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, idx) => (
            <motion.div 
              key={usp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: 'easeOut' }}
              className="relative z-10 bg-white p-8 border border-[#5c0202]/10 rounded-[2px] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-full bg-[#5c0202]/5 group-hover:bg-[#5c0202]/10 transition-colors duration-300">
                  {usp.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-obsidian mb-3 group-hover:text-[#5c0202] transition-colors leading-tight">
                  {usp.title}
                </h3>
                <p className="text-sm font-normal text-[#2C2824] leading-relaxed">
                  {usp.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
