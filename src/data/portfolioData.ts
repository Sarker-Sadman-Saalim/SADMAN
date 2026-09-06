export interface SocialLink {
  name: string;
  url: string;
  handle?: string;
  icon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
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
    tagline: "Artificial Intelligence • Software Development • AI Training • Prompt Engineering",
    positioning: "Building at the intersection of Software, Artificial Intelligence, and Human-Centered Technology.",
    aboutNarrative: [
      "Computer Science undergraduate focused on Artificial Intelligence, software development, and prompt engineering.",
      "I build practical systems and evaluate AI models, with a focus on clear data, useful products, and reliable results."
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
      role: "AI Trainer",
      company: "AI Training & Model Evaluation",
      location: "Remote",
      period: "April 2025 – Present",
      status: "Current Role",
      highlights: [
        "Train and evaluate AI models using structured audio, text, and conversational data.",
        "Manage silver and gold transcription workflows for speech recognition benchmarks.",
        "Contribute native Bengali speech data to multilingual AI systems."
      ],
      tags: [
        "Speech Recognition",
        "Generative AI",
        "Gold-Standard Benchmarking",
        "Silver & Gold Pipelines",
        "Multilingual Bengali AI",
        "Audio Evaluation"
      ],
    },
    {
      role: "Prompt Engineer",
      company: "Pareto AI",
      location: "Remote",
      period: "Aug 2024 – Aug 2025",
      status: "Completed",
      highlights: [
        "Benchmarked prompts and evaluated LLM output quality.",
        "Improved instructions for difficult tasks and model failure cases."
      ],
      tags: [
        "Prompt Engineering",
        "LLM Evaluation",
        "Prompt Benchmarking",
        "Output Quality Judging",
        "Instruction Tuning"
      ],
    },
    {
      role: "Teaching Assistant",
      company: "North South University",
      location: "Dhaka, Bangladesh",
      period: "September 2024 – Present",
      status: "Academic Appointment",
      highlights: [
        "Support coursework, grading, and student mentoring in programming and mathematics.",
        "Guide students through problem-solving and algorithmic logic."
      ],
      tags: [
        "Academic Mentorship",
        "Algorithmic Logic",
        "Programming Principles",
        "Student Guidance"
      ],
    },
  ] as ExperienceItem[],

  aiCapabilities: [
    {
      title: "LLM & Model Evaluation",
      subtitle: "Prompt Benchmarking & Quality Assessment",
      description: "Benchmark prompts and assess model outputs against clear quality criteria.",
      metrics: "Benchmarked Output Quality",
      icon: "Cpu",
    },
    {
      title: "Gold-Standard Audio Pipelines",
      subtitle: "Ground-Truth Speech Benchmarks",
      description: "Validate gold transcription data for speech recognition training.",
      metrics: "Silver & Gold Workflows",
      icon: "Radio",
    },
    {
      title: "Multilingual Speech Corpus",
      subtitle: "Native Bengali Acoustic & Text Data",
      description: "Create Bengali speech and conversational data for multilingual AI.",
      metrics: "Native Accent Synthesis",
      icon: "Languages",
    },
    {
      title: "Prompt Architecture & Alignment",
      subtitle: "Instruction Design & Failure Recovery",
      description: "Design prompts that improve instruction following on complex tasks.",
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
      description: "A full-stack wallet for accounts, balances, and transaction records.",
      highlights: [
        "Built account, balance, and transaction features.",
        "Connected a Node.js backend to SQL storage."
      ],
      githubUrl: "https://github.com/Sarker-Sadman-Saalim",
    },
    {
      id: "bus-ticket",
      title: "Bus Ticket Management System",
      category: "Systems Programming & File Storage",
      technologies: ["C Programming", "File I/O", "Data Structures"],
      description: "A C console app for booking, seat tracking, and file storage.",
      highlights: [
        "Implemented booking, passenger records, and seat tracking.",
        "Used structured file I/O with error checking."
      ],
      githubUrl: "https://github.com/Sarker-Sadman-Saalim",
    },
  ] as ProjectItem[],

  skills: {
    technical: [
      { name: "C", category: "Languages" },
      { name: "C++", category: "Languages" },
      { name: "Java", category: "Languages" },
      { name: "Python", category: "Languages" },
      { name: "JavaScript", category: "Languages" },
      { name: "Node.js", category: "Backend & Data" },
      { name: "SQL", category: "Backend & Data" },
      { name: "HTML", category: "Web Development" },
      { name: "CSS", category: "Web Development" },
      { name: "Web Dev", category: "Web Development" },
      { name: "AI/ML Basics", category: "Artificial Intelligence" },
      { name: "Prompt Engineering", category: "Artificial Intelligence" },
    ],
    tools: [
      { name: "Git", category: "Version Control" },
      { name: "GitHub", category: "Collaboration" },
      { name: "VS Code", category: "Environment" },
      { name: "MS Office", category: "Productivity" },
    ],
    softSkills: [
      { name: "Problem-solving", detail: "Algorithmic thinking and systematic debugging" },
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
      "Focus areas include algorithms, data, software engineering, and AI.",
      "Maintaining a 3.65 / 4.00 CGPA while working as a Teaching Assistant."
    ]
  },

  awards: [
    {
      title: "Appointed Teaching Assistant",
      organization: "Department of Math and Physics, North South University",
      year: "2025",
      detail: "Supports undergraduate coursework, programming, and mathematics."
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
