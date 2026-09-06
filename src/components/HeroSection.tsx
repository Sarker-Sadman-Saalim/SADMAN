import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowDown, Sparkles, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  scrollProgress: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ scrollProgress }) => {
  const currentFrameNumber = Math.min(
    portfolioData.animationConfig.totalFrames,
    Math.max(1, Math.round(1 + scrollProgress * (portfolioData.animationConfig.totalFrames - 1)))
  );

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-16 px-6 md:px-12 z-10 select-none pointer-events-none"
    >
      {/* Top Meta Header */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pointer-events-auto">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-surface-border bg-obsidian-100/60 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-crimson animate-pulse" />
          <span className="font-mono text-[11px] tracking-wider text-titanium-muted uppercase">
            {portfolioData.personal.availability}
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-4 font-mono text-[11px] text-titanium-muted">
          <span className="text-titanium-subtle">ACADEMIC & PROFESSIONAL:</span>
          <span className="text-titanium font-medium">North South University</span>
          <span className="text-white/20">•</span>
          <span className="text-titanium font-medium">AI Trainer</span>
        </div>
      </div>

      {/* Center Cinematic Typography */}
      <div className="max-w-7xl mx-auto w-full my-auto py-12 pointer-events-auto">
        <div className="max-w-4xl">
          {/* Track Tag */}
          <div className="flex items-center gap-2 text-crimson font-mono text-xs md:text-sm tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{portfolioData.personal.specialization}</span>
          </div>

          {/* Hero Name */}
          <h1 className="font-display font-extrabold uppercase tracking-tight text-white leading-[0.95] drop-shadow-2xl"
            style={{ fontSize: 'clamp(2.75rem, 9vw, 6.5rem)' }}>
            Sarker <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-titanium to-titanium-muted">
              Sadman Saalim
            </span>
          </h1>

          {/* Role & Specialization */}
          <p className="mt-6 font-sans text-base sm:text-lg text-titanium-muted max-w-2xl font-normal leading-relaxed">
            {portfolioData.personal.tagline}
          </p>

          {/* Interactive CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-sm bg-crimson hover:bg-crimson-light text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 shadow-lg shadow-crimson/20 hover:shadow-crimson/40 hover:-translate-y-0.5"
            >
              <span>EXPLORE WORK</span>
              <ChevronRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-sm border border-surface-border hover:border-titanium/40 bg-obsidian-200/40 hover:bg-obsidian-200/80 text-titanium font-mono text-xs tracking-widest uppercase transition-all duration-300 backdrop-blur-sm"
            >
              <span>CONNECT DIRECTLY</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Telemetry & Scroll Prompt */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pointer-events-auto">
        {/* Positioning Statement */}
        <div className="max-w-md">
          <p className="font-mono text-xs text-titanium-subtle tracking-wide uppercase leading-relaxed">
            {portfolioData.personal.positioning}
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end text-right font-mono text-[11px] text-titanium-muted">
            <span className="text-crimson font-medium">SCROLL TO DRIVE FILM</span>
            <span className="text-titanium-subtle">FRAME {String(currentFrameNumber).padStart(3, '0')} / 300 ACTIVE</span>
          </div>

          <div className="w-10 h-10 rounded-full border border-surface-border bg-obsidian-100/50 flex items-center justify-center text-titanium-muted animate-bounce">
            <ArrowDown className="w-4 h-4 text-crimson" />
          </div>
        </div>
      </div>
    </section>
  );
};
