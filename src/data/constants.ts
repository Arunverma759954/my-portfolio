// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  REACT_NATIVE = "react-native",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  NPM = "npm",
  FIREBASE = "firebase",
  VERCEL = "vercel",
  SHOPIFY = "shopify",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Expertise in ES6+, asynchronous programming, and functional paradigms for high-performance web applications.",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "Advanced type systems and architectural design for scalable, maintainable, and type-safe enterprise codebases.",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Semantics, accessibility standards, and SEO optimization for modern web structures.",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Advanced CSS3, layout mastering (Flex/Grid), and performance-optimized animations.",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Component-driven architecture, state management optimization, and high-performance UI development.",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.REACT_NATIVE]: {
    id: 6,
    name: "react-native",
    label: "React Native",
    shortDescription: "Cross-platform mobile engineering for low-latency native experiences on iOS and Android.",
    color: "#61dafb",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "Modern server-side rendering, static site generation, and optimized Vercel deployments for global performance.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind",
    shortDescription: "Utility-first design systems for rapid prototyping and consistent brand UI development.",
    color: "#38bdf8",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "Scalable backend engineering using event-driven architectures and efficient I/O operations.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Express",
    shortDescription: "Production-ready RESTful APIs, robust middleware integration, and microservices architecture.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },

  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "MongoDB",
    shortDescription: "NoSQL data modeling, aggregation pipelines, and high-availability database management.",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Advanced version control workflows (GitFlow), branching strategies, and codebase maintenance.",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub",
    shortDescription: "CI/CD pipeline automation, secure repository management, and professional collaborative workflows.",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },

  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "NPM",
    shortDescription: "Efficient dependency management and professional package publishing for global architectures.",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "Rapid back-end scaling with real-time databases, secure authentication, and edge-hosting solutions.",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.SHOPIFY]: {
    id: 18,
    name: "shopify",
    label: "Shopify",
    shortDescription: "Developing enterprise-grade e-commerce storefronts with custom Liquid and App integrations.",
    color: "#95bf47",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "Global edge-network deployment, serverless functions, and instant feedback loops for modern web apps.",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Jan 2026",
    endDate: "Present",
    title: "Project Lead & Full Stack Engineer",
    company: "Industrial Global Solutions",
    description: [
      "Optimized enterprise-level server-side rendering for massive industrial product catalogs.",
      "Architected complex dynamic routing systems, increasing SEO visibility by 65%.",
      "Designed and deployed bulletproof Node.js microservices for real-world manufacturing clients.",
      "Leading cross-functional teams to deliver production-ready software with 99.9% uptime.",
    ],
    skills: [
      SkillNames.NEXTJS,
      SkillNames.TS,
      SkillNames.REACT,
      SkillNames.NODEJS,
      SkillNames.MONGODB,
      SkillNames.VERCEL,
    ],
  },
  {
    id: 2,
    startDate: "Jan 2025",
    endDate: "Dec 2025",
    title: "Software Engineer Trainee (Noida-HQ)",
    company: "Manufacturing Excellence Systems",
    description: [
      "Engineered high-precision industrial software solutions during an intensive 1-year tenure in Noida.",
      "Delivered real-world industry projects focusing on data accuracy and equipment monitoring.",
      "Developed custom internal dashboards that automated equipment inventory pipelines.",
      "Maintained professional code quality standards across the organization's industrial products.",
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.REACT_NATIVE,
      SkillNames.NODEJS,
      SkillNames.EXPRESS,
      SkillNames.MONGODB,
      SkillNames.TAILWIND,
      SkillNames.GIT,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

