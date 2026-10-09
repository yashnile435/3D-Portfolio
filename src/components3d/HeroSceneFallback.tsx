import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const HeroSceneFallback: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        userSelect: 'none'
      }}
      aria-label="Interactive Developer Technology Experience"
    >
      <svg
        viewBox="0 0 500 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '85%', maxWidth: '460px', height: 'auto' }}
      >
        <defs>
          <linearGradient id="fallbackScreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color={isDark ? '#1a1829' : '#ffffff'} />
            <stop offset="100%" stop-color={isDark ? '#0f101d' : '#f1f5f9'} />
          </linearGradient>
          <linearGradient id="fallbackGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#9333ea" stop-opacity="0.4" />
            <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.1" />
          </linearGradient>
          <filter id="fGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Glow */}
        <circle cx="250" cy="200" r="140" fill="url(#fallbackGlow)" filter="url(#fGlow)" />

        {/* Pedestal Base */}
        <ellipse cx="250" cy="310" rx="160" ry="24" fill={isDark ? '#131524' : '#e2e8f0'} stroke={isDark ? '#262940' : '#cbd5e1'} stroke-width="1.5" />
        <ellipse cx="250" cy="308" rx="140" ry="18" fill="none" stroke="#a855f7" stroke-width="1" stroke-dasharray="4 4" opacity="0.6" />

        {/* Laptop Base */}
        <path d="M120 280 L380 280 L360 295 L140 295 Z" fill={isDark ? '#1a1c2b' : '#cbd5e1'} stroke={isDark ? '#2e334f' : '#94a3b8'} stroke-width="1.5" />
        <rect x="220" y="284" width="60" height="6" rx="3" fill={isDark ? '#3b4263' : '#94a3b8'} />

        {/* Laptop Screen */}
        <rect x="145" y="130" width="210" height="145" rx="10" fill={isDark ? '#12141f' : '#e2e8f0'} stroke={isDark ? '#2e334f' : '#94a3b8'} stroke-width="2" />
        <rect x="155" y="140" width="190" height="125" rx="6" fill="url(#fallbackScreen)" stroke={isDark ? '#252940' : '#cbd5e1'} stroke-width="1" />

        {/* Code Terminal Mockup inside Screen */}
        <circle cx="170" cy="154" r="3.5" fill="#ef4444" opacity="0.8" />
        <circle cx="182" cy="154" r="3.5" fill="#f59e0b" opacity="0.8" />
        <circle cx="194" cy="154" r="3.5" fill="#10b981" opacity="0.8" />

        <rect x="170" y="172" width="90" height="6" rx="3" fill="#c084fc" />
        <rect x="170" y="186" width="130" height="6" rx="3" fill="#38bdf8" />
        <rect x="185" y="200" width="100" height="6" rx="3" fill="#34d399" />
        <rect x="185" y="214" width="70" height="6" rx="3" fill={isDark ? '#a855f7' : '#7c3aed'} />
        <rect x="170" y="228" width="40" height="6" rx="3" fill="#94a3b8" />

        {/* Floating Tech Badges */}
        {/* 1. Android Badge */}
        <g transform="translate(60, 100)">
          <rect width="84" height="32" rx="16" fill={isDark ? '#0f241d' : '#ecfdf5'} stroke="#10b981" stroke-width="1.5" />
          <text x="42" y="20" fill="#10b981" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" text-anchor="middle">Android</text>
        </g>

        {/* 2. Java Badge */}
        <g transform="translate(360, 90)">
          <rect width="78" height="32" rx="16" fill={isDark ? '#261438' : '#faf5ff'} stroke="#a855f7" stroke-width="1.5" />
          <text x="39" y="20" fill="#c084fc" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" text-anchor="middle">Java 21</text>
        </g>

        {/* 3. React Badge */}
        <g transform="translate(45, 220)">
          <rect width="80" height="32" rx="16" fill={isDark ? '#0c1e2e' : '#f0f9ff'} stroke="#38bdf8" stroke-width="1.5" />
          <text x="40" y="20" fill="#38bdf8" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" text-anchor="middle">React</text>
        </g>

        {/* 4. MySQL Badge */}
        <g transform="translate(370, 230)">
          <rect width="82" height="32" rx="16" fill={isDark ? '#221e36' : '#fdf4ff'} stroke="#d946ef" stroke-width="1.5" />
          <text x="41" y="20" fill="#d946ef" font-family="'JetBrains Mono', monospace" font-size="11" font-weight="700" text-anchor="middle">MySQL</text>
        </g>
      </svg>
    </div>
  );
};
