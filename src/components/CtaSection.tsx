import { PhoneCall } from 'lucide-react';

interface CtaSectionProps {
  onSelectEventType: (typeName: string) => void;
}

export default function CtaSection({ onSelectEventType }: CtaSectionProps) {
  return (
    <section 
      className="relative py-24 md:py-32 overflow-hidden text-center text-obsidian bg-chalk border-t border-[#5c0202]/15" 
      aria-labelledby="cta-heading"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-6 flex justify-center">
          <span className="inline-block px-4 py-1.5 bg-[#5c0202] text-white text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase font-body rounded-[2px] mb-4">
            Secure Your Celebration
          </span>
        </div>

        <h2 id="cta-heading" className="font-display text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] text-obsidian tracking-tight mb-6">
          Your date is only
          <br />
          available until it <em className="italic text-[#5c0202] font-semibold">isn't.</em>
        </h2>

        <p className="font-body text-sm md:text-base text-[#2C2824] font-normal leading-relaxed max-w-xl mx-auto mb-10 text-center">
          We host one premium event at a time to ensure total privacy, dedicated support squad, and pristine conditions. This means highly auspicious dates book out months in advance. A guided venue walk-through takes 30 minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+919989912224"
            className="btn btn--gold cursor-pointer bg-[#5c0202] hover:bg-[#7a0303] text-white text-xs font-semibold tracking-widest uppercase px-8 py-3.5 rounded-[2px] shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 duration-200 transition-all"
          >
            Call Guest Relationship Manager
          </a>
          <button
            onClick={() => {
              const trigger = document.getElementById('chatbot-trigger');
              if (trigger) trigger.click();
            }}
            className="inline-flex items-center justify-center gap-2 border border-[#5c0202] hover:bg-[#5c0202] hover:text-white text-[#5c0202] font-body text-xs font-bold tracking-widest uppercase px-8 py-3.5 rounded-[2px] hover:-translate-y-0.5 active:translate-y-0 duration-200 transition-all cursor-pointer bg-white/50"
          >
            Ask Shruthi Assistant
          </button>
        </div>

        <p className="mt-10 text-xs font-body font-normal text-[#2C2824] tracking-wider">
          Or submit inquiries directly via email at:{' '}
          <a href="mailto:shruthamconvention@gmail.com" className="text-[#5c0202] font-normal hover:underline">
            shruthamconvention@gmail.com
          </a>
        </p>

      </div>
    </section>
  );
}
