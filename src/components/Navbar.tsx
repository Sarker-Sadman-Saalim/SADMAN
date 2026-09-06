import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  currentFrame: number;
}

export const Navbar: React.FC<NavbarProps> = ({ currentFrame }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dhakaTime, setDhakaTime] = useState('');

  // Clock in Dhaka (GMT+6)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Dhaka',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(now);
      setDhakaTime(timeStr);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'AI FOCUS', href: '#ai-focus' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'EDUCATION', href: '#education' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-obsidian/85 backdrop-blur-md border-b border-surface-border py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Name on Left */}
        <a
          href="#hero"
          className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-crimson rounded-sm"
          aria-label="Back to top"
        >
          <div className="w-8 h-8 rounded-sm bg-obsidian-100 border border-surface-border flex items-center justify-center text-crimson group-hover:border-crimson/50 transition-colors">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="font-mono font-bold text-sm tracking-wider uppercase text-titanium block group-hover:text-crimson transition-colors">
              {portfolioData.personal.name}
            </span>
            <span className="font-mono text-[10px] text-titanium-muted tracking-widest block uppercase">
              AI • CSE • North South University
            </span>
          </div>
        </a>

        {/* Center Live Telemetry (Desktop Only) */}
        <div className="hidden lg:flex items-center gap-6 font-mono text-[11px] text-titanium-muted border border-surface-border bg-obsidian-200/50 px-4 py-1.5 rounded-full">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-titanium-muted">DHAKA {dhakaTime} UTC+6</span>
          </div>
          <span className="text-white/20">|</span>
          <div className="flex items-center gap-1.5">
            <span className="text-crimson font-semibold">FRAME</span>
            <span className="text-titanium">{String(currentFrame).padStart(3, '0')}</span>
            <span className="text-titanium-muted">/ 300</span>
          </div>
        </div>

        {/* Right Navigation (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6 font-mono text-xs tracking-widest text-titanium-muted" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-crimson transition-colors relative py-1 focus:outline-none focus-visible:text-crimson"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-md border border-surface-border text-titanium hover:text-crimson transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-900 border-b border-surface-border px-6 py-8">
          <nav className="flex flex-col gap-5 font-mono text-sm tracking-widest text-titanium-muted">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-crimson transition-colors py-1 flex items-center justify-between border-b border-surface-border/40"
              >
                <span>{link.label}</span>
                <span className="text-[10px] text-crimson">→</span>
              </a>
            ))}
          </nav>
          <div className="mt-6 pt-4 border-t border-surface-border flex items-center justify-between font-mono text-xs text-titanium-muted">
            <span>DHAKA {dhakaTime}</span>
            <span className="text-crimson">FRAME {String(currentFrame).padStart(3, '0')}</span>
          </div>
        </div>
      )}
    </header>
  );
};
