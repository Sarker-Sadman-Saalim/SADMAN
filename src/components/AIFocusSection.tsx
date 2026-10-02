import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Radio, Languages, Terminal, CheckCircle2 } from 'lucide-react';

export const AIFocusSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const icons = [Cpu, Radio, Languages, Terminal];

  const nodeDetails = [
    {
      title: 'LLM & AI Model Evaluation',
      org: 'Pareto AI',
      tags: ['LLM Benchmarking', 'Prompt Evaluation', 'Quality Judging', 'Ground Truth', 'Failure Analysis'],
      bullets: [
        'Systematically benchmarking large language model outputs at Pareto AI — judging accuracy, alignment, and quality against ground-truth parameters across diverse task types.',
        'Analyzing edge cases where models fail to follow granular system instructions or format constraints, then designing targeted prompt corrections.',
        'Refining prompt architectures to boost factual consistency, reduce hallucination, and improve instruction adherence in frontier AI models.'
      ]
    },
    {
      title: 'Gold-Standard Audio Pipelines & Transcription QA',
      org: 'Babel Audio',
      tags: ['ASR Training', 'Gold Benchmarks', 'Silver Pipeline', 'Transcription QA', 'Audio Data'],
      bullets: [
        'At Babel Audio, managed high-throughput "Silver" and "Gold" transcription accounts, ensuring rapid data ingestion, review, and verification for speech AI training pipelines.',
        'Spearheaded "Gold" transcriptional evaluation — setting ground-truth benchmarks for automatic speech recognition (ASR) models and audio-to-text alignment quality.',
        'Reviewed and corrected AI-generated transcriptions, ensuring acoustic clarity, natural cadences, and precise data quality standards for downstream model training.'
      ]
    },
    {
      title: 'Bengali AI Data & Multilingual Speech Corpus',
      org: 'Babel Audio & Bengali AI Projects',
      tags: ['Bengali NLP', 'Bengali AI', 'Speech Synthesis', 'Voice Data', 'Native Accent'],
      bullets: [
        'Provided native-accent Bengali acoustic speech and conversational datasets to support multilingual AI development — covering voice assistants, speech synthesis, and conversational AI platforms.',
        'Contributed to emotion-based speech projects, scripted conversational audio, and natural Bengali conversation capture for voice data training and Bengali AI evaluation.',
        'Supported Bengali text annotation, Bengali document annotation, and Bengali AI output evaluation in human-in-the-loop AI workflows.'
      ]
    },
    {
      title: 'AI Quality Assurance & Project Management',
      org: 'BoxlyX',
      tags: ['AI QA', 'Data Annotation', 'Project Management', 'Human-in-the-Loop', 'Multilingual Ops'],
      bullets: [
        'At BoxlyX, oversaw AI data quality assurance for model outputs and annotation datasets — maintaining accuracy and consistency standards across text, audio, and video data projects.',
        'Managed AI data collection projects including multilingual data operations, contributor coordination, and structured human-in-the-loop evaluation pipelines.',
        'Evaluated AI-generated content for accuracy, relevance, and quality, providing structured feedback to support model improvement cycles and data benchmarking.'
      ]
    }
  ];

  return (
    <section
      id="ai-focus"
      aria-labelledby="ai-focus-heading"
      className="relative w-full py-28 px-6 md:px-12 z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Tag */}
        <div className="flex items-center gap-3 font-mono text-xs text-crimson tracking-widest uppercase mb-4" aria-hidden="true">
          <span className="w-8 h-[1px] bg-crimson" />
          <span>02 // SPECIALIZATION FOCUS</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2
              id="ai-focus-heading"
              className="font-display font-extrabold text-white uppercase tracking-tight"
              style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)', lineHeight: '1.05' }}
            >
              AI Training &amp; Evaluation<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-crimson to-crimson-light">
                Specialization Focus
              </span>
            </h2>
          </div>
          <p className="font-mono text-xs text-titanium-muted max-w-md uppercase tracking-wider">
            Verified expertise in LLM benchmarking, Bengali AI data training, audio transcription QA, AI quality assurance, and multilingual data operations.
          </p>
        </div>

        {/* Central Visual Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Nodes Selection (Left 5 cols) */}
          <div
            className="lg:col-span-5 space-y-3"
            role="tablist"
            aria-label="AI specialization areas"
          >
            {portfolioData.aiCapabilities.map((capability, idx) => {
              const Icon = icons[idx] || Cpu;
              const isSelected = activeNode === idx;

              return (
                <button
                  key={capability.title}
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`ai-panel-${idx}`}
                  id={`ai-tab-${idx}`}
                  onClick={() => setActiveNode(idx)}
                  className={`w-full text-left p-5 rounded-sm transition-all duration-300 border flex items-start gap-4 ${
                    isSelected
                      ? 'bg-obsidian-100 border-crimson shadow-lg shadow-crimson/10'
                      : 'bg-obsidian-200/40 border-surface-border hover:border-surface-border-hover hover:bg-obsidian-200/80'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-sm transition-colors ${
                      isSelected ? 'bg-crimson text-white' : 'bg-obsidian-100 text-titanium-muted'
                    }`}
                    aria-hidden="true"
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`font-mono font-semibold text-sm tracking-wide ${
                          isSelected ? 'text-white' : 'text-titanium'
                        }`}
                      >
                        {capability.title}
                      </h3>
                      {isSelected && (
                        <span className="font-mono text-[10px] text-crimson uppercase tracking-widest flex items-center gap-1" aria-label="Active">
                          <span className="w-1.5 h-1.5 rounded-full bg-crimson animate-ping" aria-hidden="true" />
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-xs text-titanium-muted mt-1 truncate">
                      {capability.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Node Inspection Terminal (Right 7 cols) */}
          <div className="lg:col-span-7">
            <div
              id={`ai-panel-${activeNode}`}
              role="tabpanel"
              aria-labelledby={`ai-tab-${activeNode}`}
              className="tech-card p-8 rounded-sm relative overflow-hidden border-surface-border bg-obsidian-100/90 backdrop-blur-md"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-surface-border/60 pb-4 mb-6">
                <div className="flex items-center gap-2 font-mono text-xs text-titanium-muted" aria-hidden="true">
                  <div className="w-2.5 h-2.5 rounded-full bg-crimson/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-titanium font-mono text-xs">capability_inspector.sys</span>
                </div>

                <span className="font-mono text-[11px] text-crimson uppercase tracking-widest">
                  SOURCE // {nodeDetails[activeNode].org}
                </span>
              </div>

              {/* Node Title & Tags */}
              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl text-white tracking-wide">
                  {nodeDetails[activeNode].title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-3" aria-label="Related skills and topics">
                  {nodeDetails[activeNode].tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2.5 py-1 rounded-sm border border-surface-border bg-obsidian-200 text-titanium-muted uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verified CV Bullets */}
              <div className="space-y-4 font-sans text-sm text-titanium leading-relaxed font-light">
                {nodeDetails[activeNode].bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-crimson mt-0.5 shrink-0" aria-hidden="true" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="mt-8 pt-4 border-t border-surface-border/60 flex items-center justify-between font-mono text-[11px] text-titanium-muted">
                <span>VERIFIED PROFESSIONAL EXPERIENCE</span>
                <span className="text-crimson font-medium">NODE 0{activeNode + 1} OF 04</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
