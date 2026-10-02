import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Wallet, Bus, Cpu, Brain, CheckCircle2 } from 'lucide-react';

const GitHubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const projectIcons: Record<string, React.FC<{ className?: string }>> = {
  'e-wallet': Wallet,
  'bus-ticket': Bus,
  'cpu-design': Cpu,
  'xai-obesity': Brain,
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative w-full py-28 px-6 md:px-12 z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-crimson tracking-widest uppercase mb-4" aria-hidden="true">
          <span className="w-8 h-[1px] bg-crimson" />
          <span>04 // FEATURED SYSTEMS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2
              id="projects-heading"
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight"
            >
              Engineered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson to-crimson-light">
                Projects &amp; Systems
              </span>
            </h2>
          </div>
          <p className="font-mono text-xs text-titanium-muted max-w-md uppercase tracking-wider">
            Software engineering, AI/ML research, and systems programming projects — from explainable machine learning to low-level CPU architecture.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {portfolioData.projects.map((project, projectIndex) => {
            const IconComponent = projectIcons[project.id] || Cpu;
            return (
              <article
                key={project.id}
                aria-labelledby={`project-title-${project.id}`}
                className="tech-card rounded-sm p-8 sm:p-12 relative overflow-hidden border-surface-border bg-obsidian-100/90 backdrop-blur-md"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Left Content */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3 font-mono text-xs text-crimson uppercase tracking-widest">
                      <IconComponent className="w-4 h-4" aria-hidden="true" />
                      <span>PROJECT // {String(projectIndex + 1).padStart(2, '0')} • {project.category.toUpperCase()}</span>
                    </div>

                    <h3
                      id={`project-title-${project.id}`}
                      className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
                    >
                      {project.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-titanium leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Implementation Details */}
                    <div className="space-y-3 font-sans text-sm text-titanium-muted">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-crimson mt-0.5 shrink-0" aria-hidden="true" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div>
                      <span className="font-mono text-[10px] text-titanium-muted uppercase tracking-widest block mb-2">
                        TECH STACK:
                      </span>
                      <div className="flex flex-wrap gap-2" aria-label={`Technologies used in ${project.title}`}>
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="font-mono text-xs px-3 py-1 rounded-sm border border-surface-border bg-obsidian-200 text-titanium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="pt-2 flex items-center gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} source code on GitHub`}
                          className="inline-flex items-center gap-2 font-mono text-xs text-titanium hover:text-crimson transition-colors border border-surface-border px-4 py-2 rounded-sm hover:border-crimson/40 bg-obsidian-200"
                        >
                          <GitHubIcon />
                          <span>VIEW REPOSITORY</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live demo of ${project.title}`}
                          className="inline-flex items-center gap-2 font-mono text-xs text-crimson hover:text-white transition-colors border border-crimson/40 px-4 py-2 rounded-sm hover:border-crimson bg-crimson/10"
                        >
                          <span>LIVE DEMO</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right: Technical Architecture Visual */}
                  <div className="lg:col-span-5 bg-obsidian-200/90 border border-surface-border p-6 rounded-sm font-mono text-xs" aria-hidden="true">
                    <div className="flex items-center justify-between border-b border-surface-border pb-3 mb-4 text-titanium-muted">
                      <span className="text-crimson font-medium">{project.id.replace('-', '_')}.sys</span>
                      <span className="text-[10px]">{project.category.split(' ')[0].toUpperCase()}</span>
                    </div>

                    <div className="space-y-2 font-mono text-[11px] leading-relaxed text-titanium-muted">
                      <div className="text-emerald-400">// {project.title}</div>
                      <div className="text-titanium-muted">Category: {project.category}</div>
                      <div className="mt-3 bg-obsidian-100 p-3 rounded border border-surface-border/50 text-[10px] space-y-1">
                        {project.highlights.slice(0, 3).map((h, i) => (
                          <div key={i} className="text-titanium-muted">
                            {i === 0 ? '├──' : i === project.highlights.slice(0, 3).length - 1 ? '└──' : '├──'} {h.substring(0, 60)}{h.length > 60 ? '...' : ''}
                          </div>
                        ))}
                      </div>
                      <div className="pt-2 flex flex-wrap gap-1">
                        {project.technologies.slice(0, 3).map((t) => (
                          <span key={t} className="text-amber-400">[{t}]</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
