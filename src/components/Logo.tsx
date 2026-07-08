import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'color';
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

export default function Logo({
  variant = 'color',
  className = '',
  iconOnly = false,
  size = 'md',
  style,
}: LogoProps) {
  // Brand colors determined dynamically
  // Monogram Red: #5E0910
  // Monogram Gold: #DF9426
  
  const iconColor = variant === 'light' ? '#ffffff' : '#DF9426';
  const textColor = variant === 'light' ? '#ffffff' : '#5E0910';
  const subColor = variant === 'light' ? 'rgba(255,255,255,0.8)' : '#DF9426';

  const sizeClasses = {
    sm: { icon: 'h-8 w-8', text: 'text-lg', sub: 'text-[6.5px]' },
    md: { icon: 'h-10 w-10', text: 'text-2xl', sub: 'text-[8.5px]' },
    lg: { icon: 'h-16 w-16', text: 'text-4xl', sub: 'text-[11px]' },
  }[size];

  return (
    <div style={style} className={`flex items-center gap-3 select-none ${className}`}>
      
      {/* Dynamic inline SVG reproduction of the elegant Shrutham Monogram */}
      <div className={`relative shrink-0 ${sizeClasses.icon}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sweeping Elegant Curved Leaf/Pillar Loop on Left */}
          <path
            d="M 52 14
               C 34 14, 18 24, 18 48
               C 18 70, 32 82, 48 82"
            stroke={iconColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Golden Triangle Pedestal Base */}
          <path
            d="M 21 82
               L 80 82
               L 50 49
               Z"
            stroke={iconColor}
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Graceful inner spiral/diya flame */}
          <path
            d="M 50 49
               C 38 40, 42 26, 52 26
               C 62 26, 62 38, 54 44
               C 48 48, 44 38, 50 34"
            stroke={iconColor}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Core Sparkle dot inside the spiral */}
          <circle cx="51.5" cy="33.5" r="3.5" fill={iconColor} />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col justify-center leading-none">
          {/* Shrutham beautiful custom serif with Cormorant Garamond style typography */}
          <span 
            className={`font-display font-light tracking-wide ${sizeClasses.text} transition-colors duration-300`}
            style={{ color: textColor }}
          >
            Shrutham
          </span>
          {/* CONVENTIONS wide tracking subtitle */}
          <span 
            className={`font-body font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${sizeClasses.sub} mt-1`}
            style={{ color: subColor }}
          >
            CONVENTIONS
          </span>
        </div>
      )}
    </div>
  );
}
