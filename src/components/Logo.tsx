import React from 'react';
import logo from '../assets/images/Logo.png';

interface LogoProps {
  variant?: 'light' | 'dark' | 'color';
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

// Rendered height of the lockup per size (the PNG is 816×306, monogram in the left ~25%)
const HEIGHT = { sm: 32, md: 48, lg: 64 };

export default function Logo({ variant = 'color', className = '', iconOnly = false, size = 'md', style }: LogoProps) {
  const h = HEIGHT[size];
  const tone = variant === 'light' ? 'brightness-0 invert' : '';

  if (iconOnly) {
    // Crop to the monogram (x ≈ 0.12h–0.68h of the lockup): show a 0.57h window starting 0.1h in
    return (
      <span
        role="img"
        aria-label="Shrutham"
        style={{ ...style, width: h * 0.57, height: h }}
        className={`relative inline-block overflow-hidden shrink-0 select-none ${className}`}
      >
        <img
          src={logo}
          alt=""
          draggable={false}
          className={`absolute top-0 max-w-none ${tone}`}
          style={{ height: h, left: -h * 0.1 }}
        />
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt="Shrutham Conventions"
      draggable={false}
      style={{ ...style, height: h }}
      className={`block w-auto max-w-none select-none ${tone} ${className}`}
    />
  );
}
