import { useState, useEffect } from 'react';

export default function TrustNumbers() {
  const stats = [
    { num: '50,000+', label: 'Sq Ft of Luxury Event Space' },
    { num: '3,500+', label: 'Total Guest Capacity' },
    { num: '12+', label: 'Flexible Configurable Zones' },
    { num: '24/7', label: 'Onsite Managed Concierge Support' }
  ];

  return (
    <section className="bg-white py-16 md:py-24 border-b border-gold/15" aria-label="Key Figures">
      <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/20 border border-gold/20 overflow-hidden rounded-[4px] shadow-sm">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-chalk p-8 md:p-10 text-center transition-all duration-300 hover:bg-white group"
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl font-light italic text-[#5c0202] mb-3 tracking-tight group-hover:scale-105 transition-transform duration-500">
                {stat.num}
              </div>
              <div className="font-body text-[0.72rem] font-medium tracking-[0.14em] text-slate-custom uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
