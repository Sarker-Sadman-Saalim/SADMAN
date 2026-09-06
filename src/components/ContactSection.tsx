import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, ExternalLink, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative w-full py-28 px-6 md:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-crimson tracking-widest uppercase mb-4">
          <span className="w-8 h-[1px] bg-crimson" />
          <span>07 // TRANSMISSION & CONTACT</span>
        </div>

        {/* Large Statement Finale */}
        <div className="max-w-4xl mb-16">
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-tight leading-[0.95]">
            Let's Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson via-crimson-light to-white">
              Something Intelligent.
            </span>
          </h2>
          <p className="mt-6 font-sans text-base sm:text-lg text-titanium-muted max-w-xl font-light">
            Available for artificial intelligence engineering, prompt architecture, full-stack software development, and collaborative research initiatives.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Direct Communication Channels (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Email Card */}
            <div className="tech-card p-6 sm:p-8 rounded-sm border-surface-border bg-obsidian-100/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-crimson/10 border border-crimson/30 flex items-center justify-center text-crimson shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-titanium-muted uppercase tracking-wider block">
                    ELECTRONIC MAIL
                  </span>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="font-display font-bold text-lg sm:text-xl text-white hover:text-crimson transition-colors"
                  >
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(portfolioData.personal.email, 'email')}
                  className="px-4 py-2 font-mono text-xs border border-surface-border hover:border-crimson/50 rounded-sm text-titanium-muted hover:text-white transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
                </button>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-2 border border-crimson bg-crimson/10 text-crimson rounded-sm hover:bg-crimson hover:text-white transition-all"
                  title="Open mail client"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="tech-card p-6 sm:p-8 rounded-sm border-surface-border bg-obsidian-100/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-obsidian-200 border border-surface-border flex items-center justify-center text-titanium shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-titanium-muted uppercase tracking-wider block">
                    TELEPHONE / DIRECT LINE
                  </span>
                  <a
                    href={`tel:${portfolioData.personal.phone}`}
                    className="font-display font-bold text-lg sm:text-xl text-white hover:text-crimson transition-colors"
                  >
                    {portfolioData.personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => copyToClipboard(portfolioData.personal.phone, 'phone')}
                  className="px-4 py-2 font-mono text-xs border border-surface-border hover:border-crimson/50 rounded-sm text-titanium-muted hover:text-white transition-colors flex items-center gap-1.5"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedPhone ? 'COPIED' : 'COPY'}</span>
                </button>
                <a
                  href={`tel:${portfolioData.personal.phone}`}
                  className="p-2 border border-surface-border hover:border-crimson text-titanium rounded-sm hover:text-crimson transition-all"
                  title="Call number"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="tech-card p-6 sm:p-8 rounded-sm border-surface-border bg-obsidian-100/90 flex items-center gap-4">
              <div className="w-12 h-12 rounded-sm bg-obsidian-200 border border-surface-border flex items-center justify-center text-titanium shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-titanium-muted uppercase tracking-wider block">
                  GEOGRAPHIC BASE
                </span>
                <div className="font-display font-bold text-lg text-white">
                  {portfolioData.personal.location}
                </div>
                <div className="font-mono text-xs text-titanium-muted">
                  Standard Timezone: {portfolioData.personal.timezone}
                </div>
              </div>
            </div>
          </div>

          {/* Social Presence Hub (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {portfolioData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-card p-5 rounded-sm border-surface-border bg-obsidian-100/90 flex items-center justify-between group hover:border-crimson/40"
              >
                <div>
                  <span className="font-mono text-[10px] text-crimson uppercase tracking-widest block">
                    NETWORK
                  </span>
                  <div className="font-display font-bold text-base text-white group-hover:text-crimson transition-colors">
                    {social.name}
                  </div>
                  <div className="font-mono text-xs text-titanium-muted mt-0.5">
                    {social.handle}
                  </div>
                </div>

                <div className="w-8 h-8 rounded-sm border border-surface-border flex items-center justify-center text-titanium-muted group-hover:text-crimson group-hover:border-crimson/50 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
