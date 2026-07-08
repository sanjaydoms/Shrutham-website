import { BookOpen } from 'lucide-react';

export default function OurStory() {
  return (
    <section 
      id="our-story" 
      className="py-24 bg-white border-b border-[#5c0202]/10 font-body"
      aria-labelledby="story-heading"
    >
      <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#5c0202]/5 px-4 py-1.5 rounded-full border border-[#5c0202]/10">
            <BookOpen size={14} className="text-[#5c0202]" />
            <span className="text-[10px] uppercase tracking-widest font-bold text-[#5c0202] font-mono">Our Heritage</span>
          </div>
          
          <h2 id="story-heading" className="font-display text-4xl sm:text-5xl font-light text-obsidian tracking-tight leading-tight">
            Story of <span className="font-semibold text-[#5c0202]">Shrutham World</span>
          </h2>
          
          <div className="w-12 h-[2px] bg-[#5c0202] mx-auto my-6" />
          
          <p className="text-base sm:text-lg text-[#2C2824] font-light leading-relaxed max-w-2xl mx-auto italic">
            "Shrutham Convention was founded on the idea that in a connected yet fragmented world, hosts want more than luxury spaces. They seek seamless journeys that align with their lifestyle and celebration aspirations."
          </p>
        </div>
      </div>
    </section>
  );
}
