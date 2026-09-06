import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'ALL SKILLS' },
    { id: 'Languages', label: 'LANGUAGES' },
    { id: 'Backend & Data', label: 'BACKEND & DATA' },
    { id: 'Web Development', label: 'WEB DEV' },
    { id: 'Artificial Intelligence', label: 'AI & PROMPT' },
    { id: 'tools', label: 'TOOLS' },
    { id: 'soft', label: 'COMMUNICATION' },
  ];

  return (
    <section id="skills" className="relative w-full py-28 px-6 md:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-crimson tracking-widest uppercase mb-4">
          <span className="w-8 h-[1px] bg-crimson" />
          <span>05 // COMPETENCIES & TOOLKIT</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display font-extrabold text-white uppercase tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)', lineHeight: '1.05' }}>
              Technical &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson to-crimson-light">
                Professional Toolkit
              </span>
            </h2>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`font-mono text-xs px-4 py-2 rounded-sm border transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-crimson border-crimson text-white shadow-lg shadow-crimson/20'
                  : 'bg-obsidian-200/50 border-surface-border text-titanium-muted hover:border-surface-border-hover hover:text-titanium'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Technical Skills */}
          {portfolioData.skills.technical
            .filter((s) => activeCategory === 'all' || s.category === activeCategory)
            .map((skill) => (
              <div
                key={skill.name}
                className="tech-card p-6 rounded-sm flex items-center justify-between border-surface-border bg-obsidian-100/70"
              >
                <div>
                  <h3 className="font-mono font-bold text-base text-white">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-xs text-titanium-muted">
                    {skill.category}
                  </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-crimson" />
              </div>
            ))}

          {/* Tools */}
          {(activeCategory === 'all' || activeCategory === 'tools') &&
            portfolioData.skills.tools.map((tool) => (
              <div
                key={tool.name}
                className="tech-card p-6 rounded-sm flex items-center justify-between border-surface-border bg-obsidian-100/70"
              >
                <div>
                  <h3 className="font-mono font-bold text-base text-white">
                    {tool.name}
                  </h3>
                  <span className="font-mono text-xs text-titanium-muted">
                    {tool.category}
                  </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-titanium-muted" />
              </div>
            ))}

          {/* Soft Skills */}
          {(activeCategory === 'all' || activeCategory === 'soft') &&
            portfolioData.skills.softSkills.map((soft) => (
              <div
                key={soft.name}
                className="tech-card p-6 rounded-sm border-surface-border bg-obsidian-100/70 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-mono font-bold text-base text-white">
                    {soft.name}
                  </h3>
                  <span className="font-mono text-[10px] text-crimson uppercase">CORE</span>
                </div>
                <p className="font-mono text-xs text-titanium-muted">
                  {soft.detail}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
