import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Brain, GraduationCap, MapPin } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative w-full py-28 px-6 md:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-crimson tracking-widest uppercase mb-6">
          <span className="w-8 h-[1px] bg-crimson" />
          <span>01 // IDENTITY & OVERVIEW</span>
        </div>

        {/* Large Statement Typography */}
        <div className="max-w-5xl mb-16">
          <h2 className="font-display font-extrabold text-white tracking-tight leading-[1.1] uppercase"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)' }}>
            "Building at the intersection of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson to-crimson-light">
              Software
            </span>
            ,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-titanium to-titanium-muted">
              Artificial Intelligence
            </span>
            , and Human-Centered Technology."
          </h2>
        </div>

        {/* Two-Column Editorial Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <p className="font-sans text-base sm:text-lg text-titanium leading-relaxed font-light">
              {portfolioData.personal.aboutNarrative[0]}
            </p>
            <p className="font-sans text-base sm:text-lg text-titanium-muted leading-relaxed font-light">
              {portfolioData.personal.aboutNarrative[1]}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-titanium-muted">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-border bg-obsidian-100/50">
                <MapPin className="w-3.5 h-3.5 text-crimson" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-border bg-obsidian-100/50">
                <GraduationCap className="w-3.5 h-3.5 text-crimson" />
                <span>North South University (2022–Present)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-surface-border bg-obsidian-100/50">
                <Brain className="w-3.5 h-3.5 text-crimson" />
                <span>AI Track • CGPA 3.65/4.00</span>
              </div>
            </div>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="tech-card p-6 rounded-sm flex flex-col justify-between min-h-[150px]">
              <div>
                <div className="font-mono text-xs text-crimson tracking-wider uppercase mb-1.5">
                  ACADEMIC CGPA
                </div>
                <div className="font-display font-extrabold text-2xl text-white leading-tight">
                  3.65<span className="text-sm font-normal text-titanium-muted">/4.00</span>
                </div>
              </div>
              <div className="mt-2 text-xs font-mono text-titanium-muted">
                North South University B.Sc. CSE
              </div>
            </div>

            <div className="tech-card p-6 rounded-sm flex flex-col justify-between min-h-[150px]">
              <div>
                <div className="font-mono text-xs text-crimson tracking-wider uppercase mb-1.5">
                  AI SPECIALIZATION
                </div>
                <div className="font-display font-extrabold text-2xl text-white leading-tight">
                  AI TRACK
                </div>
              </div>
              <div className="mt-2 text-xs font-mono text-titanium-muted">
                Prompt Tuning & Model Training
              </div>
            </div>

            <div className="tech-card p-6 rounded-sm flex flex-col justify-between min-h-[150px]">
              <div>
                <div className="font-mono text-xs text-crimson tracking-wider uppercase mb-1.5">
                  HONORS
                </div>
                <div className="font-display font-extrabold text-2xl text-white leading-tight">
                  TA '25
                </div>
              </div>
              <div className="mt-2 text-xs font-mono text-titanium-muted">
                Dept. of Math & Physics
              </div>
            </div>

            <div className="tech-card p-6 rounded-sm flex flex-col justify-between min-h-[150px]">
              <div>
                <div className="font-mono text-xs text-crimson tracking-wider uppercase mb-1.5">
                  LINGUISTIC
                </div>
                <div className="font-display font-extrabold text-2xl text-white leading-tight">
                  BILINGUAL
                </div>
              </div>
              <div className="mt-2 text-xs font-mono text-titanium-muted">
                Native Bengali • English
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
