import React from 'react';
import { Wallet, Bus, CheckCircle2 } from 'lucide-react';

const GitHubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="relative w-full py-28 px-6 md:px-12 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-crimson tracking-widest uppercase mb-4">
          <span className="w-8 h-[1px] bg-crimson" />
          <span>04 // FEATURED SYSTEMS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-tight">
              Engineered <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson to-crimson-light">
                Projects & Systems
              </span>
            </h2>
          </div>
        </div>

        {/* Project 01: E-Wallet Management System */}
        <div className="tech-card rounded-sm p-8 sm:p-12 mb-16 relative overflow-hidden border-surface-border bg-obsidian-100/90 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 font-mono text-xs text-crimson uppercase tracking-widest">
                <Wallet className="w-4 h-4" />
                <span>PROJECT // 01 • FULL STACK</span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                E-Wallet Management System
              </h3>

              <p className="font-sans text-sm sm:text-base text-titanium leading-relaxed font-light">
                A secure, responsive financial management architecture featuring user account authentication, balance tracking, and durable SQL transaction logging.
              </p>

              {/* CV Implementation Details */}
              <div className="space-y-3 font-sans text-sm text-titanium-muted">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-crimson mt-0.5 shrink-0" />
                  <span>Built a secure, responsive e-wallet with user accounts, balance tracking, and transactions.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-crimson mt-0.5 shrink-0" />
                  <span>Implemented Node.js backend with SQL integration for authentication and persistence.</span>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <span className="font-mono text-[10px] text-titanium-muted uppercase tracking-widest block mb-2">
                  TECH STACK:
                </span>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'Node.js', 'SQL'].map((tech) => (
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
                <a
                  href="https://github.com/Sarker-Sadman-Saalim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-titanium hover:text-crimson transition-colors border border-surface-border px-4 py-2 rounded-sm hover:border-crimson/40 bg-obsidian-200"
                >
                  <GitHubIcon />
                  <span>VIEW REPOSITORY</span>
                </a>
              </div>
            </div>

            {/* Right: Technical Visual Architecture Treatment */}
            <div className="lg:col-span-5 bg-obsidian-200/90 border border-surface-border p-6 rounded-sm font-mono text-xs">
              <div className="flex items-center justify-between border-b border-surface-border pb-3 mb-4 text-titanium-muted">
                <span className="text-crimson font-medium">E_WALLET_LEDGER.sql</span>
                <span className="text-[10px]">ACID COMPLIANT</span>
              </div>

              <div className="space-y-3 font-mono text-[11px] leading-relaxed text-titanium-muted">
                <div className="text-emerald-400">// Relational Schema & Security</div>
                <p className="text-titanium">
                  <span className="text-crimson">CREATE TABLE</span> users ( <br />
                  &nbsp;&nbsp;id <span className="text-blue-400">SERIAL PRIMARY KEY</span>, <br />
                  &nbsp;&nbsp;email <span className="text-amber-400">VARCHAR(255) UNIQUE</span>, <br />
                  &nbsp;&nbsp;balance <span className="text-purple-400">DECIMAL(12,2)</span>, <br />
                  &nbsp;&nbsp;auth_token <span className="text-amber-400">VARCHAR(512)</span> <br />
                  );
                </p>

                <div className="pt-2 text-emerald-400">// Transaction Flow</div>
                <div className="bg-obsidian-100 p-3 rounded border border-surface-border/50 text-[10px] space-y-1">
                  <div className="text-titanium">[API] POST /api/wallet/transfer</div>
                  <div className="text-titanium-muted">├── Verify JWT Signature</div>
                  <div className="text-titanium-muted">├── Atomic Balance Debit/Credit</div>
                  <div className="text-titanium-muted">└── Commit SQL Transaction Log</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 02: Bus Ticket Management System */}
        <div className="tech-card rounded-sm p-8 sm:p-12 relative overflow-hidden border-surface-border bg-obsidian-100/90 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 font-mono text-xs text-crimson uppercase tracking-widest">
                <Bus className="w-4 h-4" />
                <span>PROJECT // 02 • SYSTEMS PROGRAMMING</span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                Bus Ticket Management System
              </h3>

              <p className="font-sans text-sm sm:text-base text-titanium leading-relaxed font-light">
                A console-based ticketing architecture engineered in C with structured passenger record storage, dynamic seat reservation, and resilient file stream I/O.
              </p>

              {/* CV Implementation Details */}
              <div className="space-y-3 font-sans text-sm text-titanium-muted">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-crimson mt-0.5 shrink-0" />
                  <span>Created a console-based ticketing system with booking, passenger records, and seat tracking.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-crimson mt-0.5 shrink-0" />
                  <span>Used file handling in C for data storage with error checking.</span>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <span className="font-mono text-[10px] text-titanium-muted uppercase tracking-widest block mb-2">
                  TECH STACK:
                </span>
                <div className="flex flex-wrap gap-2">
                  {['C Programming', 'File I/O', 'Data Structures', 'Buffer Management'].map((tech) => (
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
                <a
                  href="https://github.com/Sarker-Sadman-Saalim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-titanium hover:text-crimson transition-colors border border-surface-border px-4 py-2 rounded-sm hover:border-crimson/40 bg-obsidian-200"
                >
                  <GitHubIcon />
                  <span>VIEW REPOSITORY</span>
                </a>
              </div>
            </div>

            {/* Right: Technical Architecture Treatment */}
            <div className="lg:col-span-5 bg-obsidian-200/90 border border-surface-border p-6 rounded-sm font-mono text-xs">
              <div className="flex items-center justify-between border-b border-surface-border pb-3 mb-4 text-titanium-muted">
                <span className="text-crimson font-medium">bus_ticketing.c</span>
                <span className="text-[10px]">C FILE I/O</span>
              </div>

              <div className="space-y-3 font-mono text-[11px] leading-relaxed text-titanium-muted">
                <div className="text-emerald-400">// Structured Disk Record</div>
                <p className="text-titanium">
                  <span className="text-crimson">typedef struct</span> &#123; <br />
                  &nbsp;&nbsp;<span className="text-blue-400">int</span> ticket_id; <br />
                  &nbsp;&nbsp;<span className="text-blue-400">char</span> passenger_name[<span className="text-purple-400">64</span>]; <br />
                  &nbsp;&nbsp;<span className="text-blue-400">int</span> seat_number; <br />
                  &nbsp;&nbsp;<span className="text-blue-400">float</span> fare; <br />
                  &#125; <span className="text-amber-400">PassengerRecord</span>;
                </p>

                <div className="pt-2 text-emerald-400">// File Stream Storage & Error Checking</div>
                <div className="bg-obsidian-100 p-3 rounded border border-surface-border/50 text-[10px] space-y-1">
                  <div className="text-titanium">FILE *fp = fopen("records.dat", "ab+");</div>
                  <div className="text-titanium-muted">if (fp == NULL) &#123; perror("I/O Error"); exit(1); &#125;</div>
                  <div className="text-titanium-muted">fwrite(&record, sizeof(PassengerRecord), 1, fp);</div>
                  <div className="text-titanium-muted">fclose(fp); // Flush & Persist</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
