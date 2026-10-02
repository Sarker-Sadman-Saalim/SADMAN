import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative w-full border-t border-surface-border bg-obsidian-950 py-12 px-6 md:px-12 z-10 text-titanium-muted"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left branding */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-sm bg-obsidian-100 border border-surface-border flex items-center justify-center text-crimson" aria-hidden="true">
            <Terminal className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="font-display font-bold text-sm tracking-wider uppercase text-white block">
              {portfolioData.personal.name}
            </span>
            <span className="font-mono text-[10px] text-titanium-subtle">
              &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED • NORTH SOUTH UNIVERSITY CSE
            </span>
          </div>
        </div>

        {/* Center note */}
        <div className="font-mono text-[11px] text-titanium-subtle text-center" aria-hidden="true">
          SCROLL-DRIVEN CINEMATIC ARCHITECTURE • 300 CANVASES • 60 FPS
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 font-mono text-xs text-titanium hover:text-crimson transition-colors border border-surface-border px-4 py-2 rounded-sm hover:border-crimson/40 bg-obsidian-100"
          aria-label="Scroll back to top of page"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-crimson" aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
};
