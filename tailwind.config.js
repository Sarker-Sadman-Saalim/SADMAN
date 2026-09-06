/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#070709',
          50: '#181920',
          100: '#14151a',
          200: '#0e0f14',
          900: '#070709',
          950: '#040405',
        },
        surface: {
          DEFAULT: '#0e0f14',
          subtle: '#12141a',
          card: '#161822',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(255, 42, 75, 0.3)',
        },
        crimson: {
          DEFAULT: '#ff2a4b',
          light: '#ff4d6a',
          dark: '#d61836',
          glow: 'rgba(255, 42, 75, 0.25)',
        },
        titanium: {
          DEFAULT: '#f1f5f9',
          muted: '#94a3b8',
          subtle: '#64748b',
        }
      },
      fontFamily: {
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Unified section heading scale
        'hero': ['clamp(2.5rem, 8vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'section-xl': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'section-lg': ['clamp(1.75rem, 4vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'card-title': ['clamp(1.125rem, 2.5vw, 1.5rem)', { lineHeight: '1.2', letterSpacing: '0' }],
        'body-lg': ['clamp(0.9375rem, 1.5vw, 1.0625rem)', { lineHeight: '1.75' }],
        'body-sm': ['clamp(0.8125rem, 1.2vw, 0.9375rem)', { lineHeight: '1.7' }],
        'mono-sm': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.1em' }],
        'mono-xs': ['0.625rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
      },
      animation: {
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'fadeIn': 'fadeIn 0.3s ease forwards',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
