import { Sparkles, Compass } from 'lucide-react';

export default function ThreeDSpaceView() {
  return (
    <div className="site-container px-6 md:px-12 lg:px-16 xl:px-24 py-16 text-center text-slate-custom animate-fade-in min-h-[55vh] flex flex-col justify-center items-center">
      <div className="w-16 h-16 rounded-full bg-[#5c0202]/5 border border-[#5c0202]/15 flex items-center justify-center mb-6 animate-pulse">
        <Compass size={28} className="text-[#5c0202]" />
      </div>
      <h1 className="font-display text-4xl md:text-5xl font-light text-obsidian tracking-tight mb-4">
        3D <span className="font-semibold text-[#5c0202]">Virtual Space</span>
      </h1>
      <p className="text-[#2C2824] font-normal text-sm md:text-base max-w-md mx-auto leading-relaxed mb-8">
        This space is reserved for your interactive 3D tour. Integrate your panoramic renders or Matterport walkthrough frame here.
      </p>
      <div className="w-full max-w-4xl aspect-[16/9] rounded-[12px] bg-white border border-[#5c0202]/15 shadow-sm flex flex-col items-center justify-center p-8">
        <div className="border border-dashed border-[#5c0202]/30 rounded-[8px] w-full h-full flex flex-col items-center justify-center p-6 bg-chalk/50">
          <Sparkles className="text-[#5c0202]/40 mb-3" size={24} />
          <span className="text-xs uppercase tracking-widest font-bold text-[#5c0202] font-mono mb-1">3D Space Canvas</span>
          <span className="text-[11px] text-mid/70 font-light max-w-xs text-center">
            Pristine container ready for custom 3D engines, virtual walk-through embeds, or interactive layout planners.
          </span>
        </div>
      </div>
    </div>
  );
}
