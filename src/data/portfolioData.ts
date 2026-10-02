export interface SocialLink {
  name: string;
  url: string;
  handle?: string;
  icon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  companyFull?: string;
  location?: string;
  period: string;
  status?: string;
  highlights: string[];
  tags: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  technologies: string[];
  description: string;
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  specialization: string;
  notes?: string;
}

export interface AwardItem {
  title: string;
  organization: string;
  year: string;
  detail: string;
}

export const portfolioData = {
  personal: {
    name: "Sarker Sadman Saalim",
    shortName: "Sadman Saalim",
    role: "Computer Science & Engineering Undergraduate",
    specialization: "Artificial Intelligence Track",
    tagline: "Artificial Intelligence • AI Training • LLM Evaluation • Bengali AI Data • Software Development",
    positioning: "Building at the intersection of Software, Artificial Intelligence, and Human-Centered Technology.",
    aboutNarrative: [
      "Sarker Sadman Saalim is a Computer Science & Engineering undergraduate at North South University (Dhaka, Bangladesh), specializing in Artificial Intelligence. He brings hands-on professional experience in AI data training, LLM evaluation, Bengali AI data collection and annotation, audio transcription QA, voice AI, AI quality assurance, prompt engineering, and software development.",
      "With practical experience at Babel Audio, BoxlyX, and Pareto AI, Sarker has contributed to end-to-end AI model training pipelines — from Bengali speech corpus engineering and gold-standard transcription evaluation to LLM benchmarking, prompt architecture, and AI project management. He approaches complex computational problems with algorithmic rigor and a commitment to building robust, human-centered AI systems."
    ],
    location: "Dhaka, Bangladesh",
    timezone: "GMT+6 (Asia/Dhaka)",
    email: "sadmansaalim2001@gmail.com",
    phone: "+8801775013094",
    availability: "Available for AI & Engineering Opportunities",
  },

  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sadman-saalim-2025a8365/",
      handle: "in/sadman-saalim",
      icon: "Linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/Sarker-Sadman-Saalim",
      handle: "Sarker-Sadman-Saalim",
      icon: "Github",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/shroyon_/",
      handle: "@shroyon_",
      icon: "Instagram",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/sadmansaalim2001",
      handle: "sadmansaalim2001",
      icon: "Facebook",
    },
  ],

  experience: [
    {
      role: "AI Trainer / Audio Data Trainer",
      company: "Babel Audio",
      companyFull: "Babel Audio — AI Audio Data & Training",
      location: "Remote",
      period: "April 2025 – Present",
      status: "Current Role",
      highlights: [
        "Bengali AI data training: provided native-accent Bengali speech data to support multilingual AI model development, including voice assistants and conversational AI platforms.",
        "Audio data collection: participated in audio-only and audio+video recording projects supporting speech recognition and generative AI system training.",
        "Audio transcription & QA: managed 'Silver' and 'Gold' transcription accounts, ensuring high-throughput data processing and baseline text-to-speech alignment.",
        "Gold-standard evaluation: spearheaded 'Gold' transcriptional evaluation and validation, establishing ground-truth benchmarks required for training highly accurate speech recognition (ASR) models.",
        "Voice acting & speech data: contributed to emotion-based speech projects, scripted conversational audio, and natural Bengali conversations for AI voice and data quality workflows.",
        "Transcription quality assurance: reviewed and corrected AI-generated transcriptions to maintain data quality standards for downstream model training.",
      ],
      tags: [
        "Bengali AI",
        "Audio Data Training",
        "Speech Recognition",
        "Gold-Standard Benchmarking",
        "Transcription QA",
        "Voice Acting",
        "Multilingual AI",
        "ASR Training",
      ],
    },
    {
      role: "AI Quality Assurance / AI Evaluator / Project Manager",
      company: "BoxlyX",
      companyFull: "BoxlyX — AI Data Quality & Project Operations",
      location: "Remote",
      period: "2024 – 2025",
      status: "Completed",
      highlights: [
        "AI data quality assurance: reviewed AI model outputs and datasets to ensure annotation accuracy, consistency, and adherence to quality control standards.",
        "AI model and data evaluation: evaluated AI-generated content for accuracy, relevance, and quality across text, audio, and video data projects.",
        "Annotation and quality control: oversaw data annotation workflows and maintained quality benchmarks in human-in-the-loop AI data pipelines.",
        "Project management: coordinated AI data collection projects including multilingual data operations, audio and video data projects, and contributor-team coordination.",
        "Human-in-the-loop AI workflows: facilitated structured human evaluation pipelines to validate AI-generated outputs and support model improvement cycles.",
      ],
      tags: [
        "AI Quality Assurance",
        "AI Data Evaluation",
        "Data Annotation",
        "Project Management",
        "Multilingual Data",
        "Human-in-the-Loop AI",
        "Audio & Video Data",
        "QA Operations",
      ],
    },
    {
      role: "LLM / AI Model Evaluator & Prompt Engineer",
      company: "Pareto AI",
      companyFull: "Pareto AI — LLM Evaluation & Prompt Engineering",
      location: "Remote",
      period: "Aug 2024 – Aug 2025",
      status: "Completed",
      highlights: [
        "LLM evaluation: systematically benchmarked large language model outputs, judging response accuracy, quality, and alignment with ground-truth parameters.",
        "Prompt engineering: designed, tested, and refined prompts to improve instruction adherence and reduce hallucination in frontier language models.",
        "Model benchmarking: compared and evaluated prompt-response pairs to identify which produced accurate versus inaccurate outputs across various task types.",
        "Failure analysis: identified weaknesses and edge cases where models failed to follow granular instructions or format constraints, then developed targeted prompt corrections.",
        "AI model testing: contributed to systematic testing pipelines for evaluating AI model performance and calibrating output quality across benchmarks.",
      ],
      tags: [
        "LLM Evaluation",
        "Prompt Engineering",
        "Model Benchmarking",
        "Prompt Evaluation",
        "Output Quality Judging",
        "Instruction Tuning",
        "AI Model Testing",
        "Failure Analysis",
      ],
    },
    {
      role: "Teaching Assistant",
      company: "North South University",
      companyFull: "North South University — Department of Math & Physics",
      location: "Dhaka, Bangladesh",
      period: "September 2024 – Present",
      status: "Academic Appointment",
      highlights: [
        "Assisted with coursework, grading, and student mentoring in programming and mathematics.",
        "Guided students in programming, problem-solving, and algorithmic logic across undergraduate cohorts.",
      ],
      tags: [
        "Academic Mentorship",
        "Algorithmic Logic",
        "Programming Principles",
        "Student Guidance",
      ],
    },
  ] as ExperienceItem[],

  aiCapabilities: [
    {
      title: "LLM & Model Evaluation",
      subtitle: "Prompt Benchmarking & Quality Assessment",
      description: "Comprehensive benchmarking of prompts and qualitative assessment of model outputs against ground-truth parameters, optimizing error rates for nuanced instructions.",
      metrics: "Benchmarked Output Quality",
      icon: "Cpu",
    },
    {
      title: "Gold-Standard Audio Pipelines",
      subtitle: "Ground-Truth Speech Benchmarks",
      description: "Spearheaded 'Gold' transcriptional evaluation and validation, establishing rigorous baseline benchmarks for automatic speech recognition (ASR) training.",
      metrics: "Silver & Gold Workflows",
      icon: "Radio",
    },
    {
      title: "Bengali AI & Multilingual Speech",
      subtitle: "Native Bengali Acoustic & Text Data",
      description: "Engineered authentic Bengali acoustic speech and conversational datasets to advance multilingual speech synthesis, voice assistants, and LLM voice agents. Native Bengali speaker contributing to Bengali NLP and AI data ecosystems.",
      metrics: "Native Accent Synthesis",
      icon: "Languages",
    },
    {
      title: "Prompt Architecture & Alignment",
      subtitle: "Instruction Design & Failure Recovery",
      description: "Designed targeted prompt strategies and failure recovery pipelines for complex tasks where frontier models failed to adhere to strict constraints.",
      metrics: "High Accuracy Rate",
      icon: "Terminal",
    },
  ],

  projects: [
    {
      id: "e-wallet",
      title: "E-Wallet Management System",
      category: "Full Stack & Financial Systems",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "SQL"],
      description: "A secure, responsive digital wallet platform engineered with robust transaction management, real-time balance tracking, and authenticated ledger persistence. Built to demonstrate full-stack web development with a relational SQL backend and ACID-compliant transaction logic.",
      highlights: [
        "Built a responsive e-wallet interface with multi-user account separation, live balance verification, and audit-ready transaction logging.",
        "Architected an asynchronous Node.js backend integrating relational SQL queries for encrypted credential authentication and ACID-compliant transaction persistence.",
        "Implemented rigorous client-side and server-side validation to guard against race conditions and invalid transfers.",
      ],
      githubUrl: "https://github.com/Sarker-Sadman-Saalim",
    },
    {
      id: "bus-ticket",
      title: "Bus Ticket Service Management System",
      category: "Systems Programming & File Storage",
      technologies: ["C Programming", "File I/O", "Data Structures"],
      description: "A high-performance console-based ticketing architecture built in C, featuring dynamic booking, seat tracking matrices, and durable file-based data persistence. Demonstrates low-level memory management, structured data design, and robust error handling in systems programming.",
      highlights: [
        "Created an interactive terminal ticketing engine handling seat reservations, route allocations, and passenger registries.",
        "Utilized structured low-level C file handling for disk persistence with robust error checking, buffer management, and corruption prevention.",
        "Designed memory-efficient data representations to manage bus occupancy and passenger query lookups instantly.",
      ],
      githubUrl: "https://github.com/Sarker-Sadman-Saalim",
    },
    {
      id: "cpu-design",
      title: "20-Bit Single-Cycle CPU",
      category: "Computer Architecture & Hardware Design",
      technologies: ["Digital Logic Design", "Computer Architecture", "Assembly"],
      description: "Designed and implemented a 20-bit single-cycle CPU architecture from first principles, covering instruction fetch, decode, execute, memory access, and write-back stages. Demonstrates deep understanding of computer organization and low-level hardware design.",
      highlights: [
        "Architected a complete 20-bit single-cycle datapath covering all major pipeline stages.",
        "Designed instruction sets, control unit logic, and ALU components to execute arithmetic, logic, and control-flow instructions.",
        "Applied principles of computer organization to demonstrate how high-level operations map to hardware-level execution.",
      ],
      githubUrl: "https://github.com/Sarker-Sadman-Saalim",
    },
    {
      id: "xai-obesity",
      title: "Explainable ML Framework for Obesity Prediction",
      category: "Explainable AI & Machine Learning Research",
      technologies: ["Python", "Machine Learning", "XGBoost", "SHAP", "LIME", "Explainable AI"],
      description: "An Explainable AI (XAI) research project developing an interpretable machine learning framework for obesity prediction and personalized lifestyle guidance. Uses SHAP and LIME to make model decisions transparent and actionable for non-expert users.",
      highlights: [
        "Built an XGBoost-based classification model for obesity risk prediction with strong accuracy across multiple lifestyle and biometric features.",
        "Integrated SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations) to provide granular, human-readable feature importance for individual predictions.",
        "Designed a personalized guidance output layer that translates model explanations into actionable lifestyle recommendations.",
        "Applied Explainable AI principles to bridge the gap between machine learning model performance and real-world clinical interpretability.",
      ],
      githubUrl: "https://github.com/Sarker-Sadman-Saalim",
    },
  ] as ProjectItem[],

  skills: {
    technical: [
      // Programming Languages
      { name: "Python", category: "Languages" },
      { name: "C", category: "Languages" },
      { name: "C++", category: "Languages" },
      { name: "Java", category: "Languages" },
      { name: "JavaScript", category: "Languages" },
      // Backend & Data
      { name: "Node.js", category: "Backend & Data" },
      { name: "SQL", category: "Backend & Data" },
      // Web Development
      { name: "HTML", category: "Web Development" },
      { name: "CSS", category: "Web Development" },
      { name: "Web Development", category: "Web Development" },
      // Artificial Intelligence
      { name: "Machine Learning", category: "Artificial Intelligence" },
      { name: "Deep Learning", category: "Artificial Intelligence" },
      { name: "LLM Evaluation", category: "Artificial Intelligence" },
      { name: "Prompt Engineering", category: "Artificial Intelligence" },
      { name: "Explainable AI (XAI)", category: "Artificial Intelligence" },
      { name: "RAG (Retrieval-Augmented Generation)", category: "Artificial Intelligence" },
      // AI Data & Evaluation
      { name: "AI Data Training", category: "AI Data & Evaluation" },
      { name: "Data Annotation", category: "AI Data & Evaluation" },
      { name: "AI Model Evaluation", category: "AI Data & Evaluation" },
      { name: "AI Quality Assurance", category: "AI Data & Evaluation" },
      { name: "Transcription QA", category: "AI Data & Evaluation" },
      { name: "Human Evaluation", category: "AI Data & Evaluation" },
      // Voice & Audio AI
      { name: "Audio Transcription", category: "Voice & Audio AI" },
      { name: "Voice Data Collection", category: "Voice & Audio AI" },
      { name: "Voice Acting", category: "Voice & Audio AI" },
      { name: "Bengali Speech Data", category: "Voice & Audio AI" },
      { name: "ASR Training", category: "Voice & Audio AI" },
    ],
    tools: [
      { name: "Git", category: "Version Control" },
      { name: "GitHub", category: "Collaboration" },
      { name: "VS Code", category: "Environment" },
      { name: "MS Office", category: "Productivity" },
    ],
    softSkills: [
      { name: "Problem-solving", detail: "Algorithmic thinking and systematic debugging" },
      { name: "Project Management", detail: "AI data project coordination and team operations" },
      { name: "Teamwork", detail: "Collaborative academic research and cross-functional team delivery" },
      { name: "Bilingual", detail: "Fluent in Bengali (Native) and English (Professional)" },
    ],
  },

  education: {
    degree: "B.Sc. in Computer Science & Engineering (CSE)",
    institution: "North South University",
    location: "Dhaka, Bangladesh",
    period: "2022 – Present",
    cgpa: "3.65 / 4.00",
    specialization: "Artificial Intelligence Track",
    highlights: [
      "Rigorous curriculum spanning Algorithms, Data Structures, Database Systems, Software Engineering, Computer Architecture, and Artificial Intelligence Track.",
      "Maintained a strong academic standing with a 3.65 / 4.00 CGPA while serving in academic leadership as a Teaching Assistant in the Department of Math & Physics.",
    ]
  },

  awards: [
    {
      title: "Appointed Teaching Assistant",
      organization: "Department of Math and Physics, North South University",
      year: "2025",
      detail: "Selected for academic excellence and mastery in mathematical and programming concepts to mentor undergraduate cohorts and support departmental coursework at North South University.",
    }
  ],

  animationConfig: {
    totalFrames: 300,
    framePathPrefix: "/frames/ezgif-frame-",
    frameExtension: ".png",
    aspectRatio: 720 / 1280,
    naturalWidth: 720,
    naturalHeight: 1280,
  }
};
