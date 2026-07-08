import React from 'react';

interface WavyRibbonProps {
  className?: string;
  reverse?: boolean;
  opacity?: number;
  count?: number;
  spacing?: number;
}

export default function WavyRibbon({
  className = '',
  reverse = false,
  opacity = 0.42,    // Highly visible and elegant
  count = 28,        // Dense parallel strokes like custom bespoke wallpaper
  spacing = 5.5,     // Perfect proportion
}: WavyRibbonProps) {
  // Generate mathematically perfect flowing wave paths with varied amplitude for modern organic motion
  const paths = Array.from({ length: count }, (_, i) => {
    const offset = i * spacing;
    // Harmonic wave formula with a slight perspective squeeze at the middle crossover point
    return `M -150 ${160 + offset} 
            C 220 ${180 + offset * 0.9}, 380 ${-40 + offset * 1.1}, 720 ${200 + offset} 
            C 1020 ${410 + offset * 1.1}, 1280 ${30 + offset * 0.9}, 1750 ${320 + offset}`;
  });

  const gradientId = `modern-gold-gradient-${reverse ? 'rev' : 'std'}`;

  return (
    <div 
      className={`absolute left-0 right-0 pointer-events-none select-none z-0 w-full overflow-hidden h-[340px] sm:h-[480px] md:h-[640px] ${
        reverse ? 'scale-x-[-1]' : ''
      } ${className}`}
    >
      {/* Exquisite ambient radial background glow to enhance readability and beauty */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[120px] opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #E5C084 0%, transparent 70%)'
        }}
      />

      <svg
        viewBox="0 0 1600 640"
        className="w-full h-full opacity-100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Advanced multi-stop golden metallic gradient that fades out on both ends */}
          <linearGradient id={gradientId} x1="0%" y1="30%" x2="100%" y2="70%">
            <stop offset="0%" stopColor="#E5C084" stopOpacity="0.0" />
            <stop offset="15%" stopColor="#E5C084" stopOpacity="0.25" />
            <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0.80" />
            <stop offset="50%" stopColor="#D4B26F" stopOpacity="0.95" />
            <stop offset="75%" stopColor="#E5C084" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#D4B26F" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Render lines with exquisite alternating stroke widths and subtle shifts */}
        <g stroke={`url(#${gradientId})`} strokeLinecap="round" opacity={opacity}>
          {paths.map((d, index) => {
            // Alternate stroke widths (1.0px, 1.8px, 1.2px) to add dynamic 3D depth
            const strokeWidth = index % 3 === 0 ? 1.0 : index % 3 === 1 ? 2.0 : 1.4;
            // Alternating line dash arrays for select lines to give a sophisticated architectural grid vibe
            const isDashed = index % 7 === 4;
            return (
              <path 
                key={index} 
                d={d} 
                strokeWidth={strokeWidth}
                strokeDasharray={isDashed ? "3, 6" : undefined}
                className="transition-all duration-500 ease-in-out"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}


