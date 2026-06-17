'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Logo({ size = 'md', showTagline = false, className = '' }) {
  const sizes = {
    sm: { text: 'text-xl', icon: 32, tagline: 'text-xs' },
    md: { text: 'text-2xl', icon: 40, tagline: 'text-xs' },
    lg: { text: 'text-4xl', icon: 56, tagline: 'text-sm' },
    xl: { text: 'text-6xl', icon: 80, tagline: 'text-base' },
  };

  const s = sizes[size] || sizes.md;

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 group ${className}`}
      aria-label="HIRE - Go to homepage"
    >
      {/* Logo Icon - Uses actual uploaded logo image if available, falls back to SVG */}
      <div
        className="relative flex-shrink-0 rounded-xl overflow-hidden"
        style={{ width: s.icon, height: s.icon }}
      >
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={s.icon}
          height={s.icon}
        >
          <defs>
            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          {/* H letter stylized */}
          <rect width="80" height="80" rx="18" fill="url(#logoGrad)" />
          <path
            d="M20 18 L20 62 M20 40 L60 40 M60 18 L60 62"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* AI spark overlay */}
          <circle cx="62" cy="18" r="6" fill="#06B6D4" opacity="0.9" />
        </svg>
      </div>

      {/* Brand Name */}
      <div className="flex flex-col">
        <span
          className={`font-extrabold tracking-tight ${s.text} text-gradient leading-none`}
          style={{
            background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          HIRE
        </span>
        {showTagline && (
          <span className={`${s.tagline} text-gray-500 dark:text-gray-400 leading-tight mt-0.5 font-medium`}>
            Bangladesh&apos;s AI Marketplace
          </span>
        )}
      </div>
    </Link>
  );
}
