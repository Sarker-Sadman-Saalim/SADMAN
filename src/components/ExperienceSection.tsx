import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, Calendar, Check } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [activeExp, setActiveExp] = useState<number>(0);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative w-full py-28 px-6 md:px-12 z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-crimson tracking-widest uppercase mb-4" aria-hidden="true">
          <span className="w-8 h-[1px] bg-crimson" />
          <span>03 // PROFESSIONAL TIMELINE</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2
              id="experience-heading"
              className="font-display font-extrabold text-white uppercase tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)', lineHeight: '1.05' }}
            >
              Professional Experience &amp;{' '}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson to-crimson-light">
                AI &amp; Engineering Roles
              </span>
            </h2>
          </div>
          <p className="font-mono text-xs text-titanium-muted max-w-md uppercase tracking-wider">
            Hands-on professional work in AI data training, LLM evaluation, AI quality assurance, Bengali AI data, audio transcription, and academic mentoring.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Role Selector */}
          <div className="lg:col-span-4 space-y-4" role="tablist" aria-label="Professional experience entries">
            {portfolioData.experience.map((exp, index) => {
              const isSelected = activeExp === index;
              return (
                <button
                  key={exp.role + exp.company}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`exp-panel-${index}`}
                  id={`exp-tab-${index}`}
                  onClick={() => setActiveExp(index)}
                  className={`w-full text-left p-5 rounded-sm border transition-all duration-300 relative ${
                    isSelected
                      ? 'bg-obsidian-100 border-crimson shadow-lg shadow-crimson/10'
                      : 'bg-obsidian-200/40 border-surface-border hover:border-surface-border-hover hover:bg-obsidian-200/70'
                  }`}
                >
                  {/* Status Indicator */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-crimson tracking-widest uppercase">
                      {exp.status || 'ROLE'}
                    </span>
                    <span className="font-mono text-[10px] text-titanium-muted flex items-center gap-1">
                      <Calendar className="w-3 h-3" aria-hidden="true" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Title & Company */}
                  <h3 className={`font-mono font-bold text-sm tracking-wide ${isSelected ? 'text-white' : 'text-titanium'}`}>
                    {exp.role}
                  </h3>
                  <div className="font-mono text-xs text-titanium-muted mt-0.5 flex items-center gap-2 flex-wrap">
                    <span>{exp.companyFull || exp.company}</span>
                    {exp.location && (
                      <>
                        <span className="text-white/20" aria-hidden="true">•</span>
                        <span>{exp.location}</span>
                      </>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Dossier */}
          <div className="lg:col-span-8">
            <div
              id={`exp-panel-${activeExp}`}
              role="tabpanel"
              aria-labelledby={`exp-tab-${activeExp}`}
              className="tech-card p-8 sm:p-10 rounded-sm border-surface-border bg-obsidian-100/90 backdrop-blur-md relative overflow-hidden"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-border/60 pb-6 mb-8">
                <div>
                  <div className="flex items-center gap-2 text-crimson font-mono text-xs uppercase tracking-widest mb-1">
                    <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{portfolioData.experience[activeExp].companyFull || portfolioData.experience[activeExp].company}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-wide">
                    {portfolioData.experience[activeExp].role}
                  </h3>
                </div>

                <div className="font-mono text-xs text-titanium-muted sm:text-right">
                  <div className="text-titanium font-medium">{portfolioData.experience[activeExp].period}</div>
                  <div className="text-titanium-subtle">{portfolioData.experience[activeExp].location || 'Remote'}</div>
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="space-y-4 font-sans text-sm sm:text-base text-titanium leading-relaxed font-light mb-8">
                {portfolioData.experience[activeExp].highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-5 h-5 rounded-full bg-crimson/10 border border-crimson/30 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
                      <Check className="w-3 h-3 text-crimson" />
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Technical Tags */}
              <div className="pt-6 border-t border-surface-border/60">
                <span className="font-mono text-[10px] text-titanium-muted uppercase tracking-widest block mb-3">
                  RELEVANT THEMES &amp; TECHNOLOGIES:
                </span>
                <div className="flex flex-wrap gap-2" aria-label="Skills and technologies used">
                  {portfolioData.experience[activeExp].tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1 rounded-sm border border-surface-border bg-obsidian-200 text-titanium-muted hover:text-titanium hover:border-crimson/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
