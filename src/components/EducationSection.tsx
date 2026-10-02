import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative w-full py-28 px-6 md:px-12 z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-crimson tracking-widest uppercase mb-4" aria-hidden="true">
          <span className="w-8 h-[1px] bg-crimson" />
          <span>06 // ACADEMIA &amp; RECOGNITION</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2
              id="education-heading"
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight"
            >
              Academic Background &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson to-crimson-light">
                Appointments
              </span>
            </h2>
          </div>
          <p className="font-mono text-xs text-titanium-muted max-w-md uppercase tracking-wider">
            Computer Science undergraduate at North South University, Dhaka — AI specialization track with departmental academic leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Card (7 cols) */}
          <div className="lg:col-span-7 tech-card p-8 sm:p-10 rounded-sm border-surface-border bg-obsidian-100/90 backdrop-blur-md">
            <div className="flex items-center gap-3 text-crimson font-mono text-xs uppercase tracking-widest mb-3">
              <GraduationCap className="w-4 h-4" aria-hidden="true" />
              <span>DEGREE PROGRAM</span>
            </div>

            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              {portfolioData.education.degree}
            </h3>

            <div className="mt-2 text-base text-titanium flex flex-wrap items-center gap-2">
              <span className="font-semibold">{portfolioData.education.institution}</span>
              <span className="text-white/20" aria-hidden="true">•</span>
              <span className="font-mono text-xs text-titanium-muted">{portfolioData.education.location}</span>
            </div>

            <div className="my-6 grid grid-cols-2 gap-4">
              <div className="bg-obsidian-200/60 p-4 rounded border border-surface-border">
                <div className="font-mono text-[10px] text-crimson uppercase tracking-widest mb-1">
                  CUMULATIVE GPA
                </div>
                <div className="font-display font-extrabold text-3xl text-white">
                  3.65 <span className="text-sm font-normal text-titanium-muted">/ 4.00</span>
                </div>
              </div>

              <div className="bg-obsidian-200/60 p-4 rounded border border-surface-border">
                <div className="font-mono text-[10px] text-crimson uppercase tracking-widest mb-1">
                  CONCENTRATION TRACK
                </div>
                <div className="font-display font-extrabold text-xl text-white mt-1">
                  AI Track
                </div>
                <div className="font-mono text-[10px] text-titanium-muted mt-1">
                  Artificial Intelligence
                </div>
              </div>
            </div>

            <div className="space-y-3 font-sans text-sm text-titanium-muted font-light">
              {portfolioData.education.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-crimson mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border/60 flex items-center justify-between font-mono text-xs text-titanium-muted">
              <span>TIMELINE: {portfolioData.education.period}</span>
              <span className="text-emerald-400 font-medium">IN PROGRESS</span>
            </div>
          </div>

          {/* Awards & Recognition (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {portfolioData.awards.map((award) => (
              <div
                key={award.title}
                className="tech-card p-8 rounded-sm border-surface-border bg-obsidian-100/90 backdrop-blur-md relative overflow-hidden"
              >
                <div className="flex items-center gap-2 text-crimson font-mono text-xs uppercase tracking-widest mb-2">
                  <Award className="w-4 h-4" aria-hidden="true" />
                  <span>APPOINTMENT &amp; HONORS</span>
                </div>

                <h3 className="font-display font-bold text-xl text-white">
                  {award.title}
                </h3>

                <div className="font-sans text-sm text-titanium mt-1 font-medium">
                  {award.organization}
                </div>

                <div className="font-mono text-xs text-crimson mt-0.5 mb-4">
                  Conferred: {award.year}
                </div>

                <p className="font-sans text-sm text-titanium-muted leading-relaxed font-light">
                  {award.detail}
                </p>

                <div className="mt-6 pt-4 border-t border-surface-border/60 flex items-center justify-between font-mono text-[11px] text-titanium-muted">
                  <span>DEPARTMENT OF MATH &amp; PHYSICS</span>
                  <span className="text-titanium">NORTH SOUTH UNIVERSITY</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
