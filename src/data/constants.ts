// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  NODEJS = "nodejs",
  GIT = "git",
  GITHUB = "github",
  FIREBASE = "firebase",
  LINUX = "linux",
  DOCKER = "docker",
  VERCEL = "vercel",
  // New skills
  PYTHON = "python",
  RUST = "rust",
  WEBASSEMBLY = "webassembly",
  FLUTTER = "flutter",
  DART = "dart",
  PANDAS = "pandas",
  KML = "kml",
  JUPYTER = "jupyter",
  FASTAPI = "fastapi",
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
    shortDescription: "yeeting code into the DOM since '95, no cap! 💯🚀",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription:
      "JavaScript's overachieving cousin who's always flexing 💯🔒",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "the internet's granddad,  still bussin' fr fr! 💀🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "styling with the ultimate drip, no cap 💁‍♂️🔥",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: `"use using" 
using use = useUsing("use")`,
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "Vue",
    shortDescription:
      "the chill pill for your frontend, it hits different! 🟢😌",
    color: "#41b883",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Next.js",
    shortDescription:
      "the drama queen of front-end frameworks, and we stan! 👑📜",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 8,
    name: "nodejs",
    label: "Node.js",
    shortDescription: "JavaScript said 'sike, I'm backend now', deadass! 🔙🔚",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  [SkillNames.GIT]: {
    id: 9,
    name: "git",
    label: "Git",
    shortDescription: "the code's personal bodyguard, no cap! 🕵️‍♂️🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 10,
    name: "github",
    label: "GitHub",
    shortDescription: "sliding into those pull requests, IYKYK! 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 11,
    name: "firebase",
    label: "Firebase",
    shortDescription:
      "your app's ultimate wingman, but watch out, vendor lock-in vibes! 🔥👌",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.LINUX]: {
    id: 12,
    name: "linux",
    label: "Linux",
    shortDescription: "where 'chmod 777' is the ultimate flex 🔓🙌",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 13,
    name: "docker",
    label: "Docker",
    shortDescription: "The best containerization! 🐳🔥",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 14,
    name: "vercel",
    label: "Vercel",
    shortDescription:
      "The triangle company, helps you deploy and go touch grass! 🚀🌿",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  },
  // New skills
  [SkillNames.PYTHON]: {
    id: 15,
    name: "python",
    label: "Python",
    shortDescription: "AI/ML's bestie, slithering through data like a pro! 🐍✨",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.RUST]: {
    id: 16,
    name: "rust",
    label: "Rust",
    shortDescription: "Memory safe and blazingly fast, no cap! 🦀⚡",
    color: "#DEA584",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-original.svg",
  },
  [SkillNames.WEBASSEMBLY]: {
    id: 17,
    name: "webassembly",
    label: "WebAssembly",
    shortDescription: "Running code at light speed in the browser! 💨🌐",
    color: "#654FF0",
    icon: "https://www.vectorlogo.zone/logos/webassembly/webassembly-icon.svg",
  },
  [SkillNames.FLUTTER]: {
    id: 18,
    name: "flutter",
    label: "Flutter",
    shortDescription: "One codebase, all platforms, big flexin! 📱💙",
    color: "#02569B",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  [SkillNames.DART]: {
    id: 19,
    name: "dart",
    label: "Dart",
    shortDescription: "Flutter's ride or die, built different! 🎯💨",
    color: "#0175C2",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
  },
  [SkillNames.PANDAS]: {
    id: 20,
    name: "pandas",
    label: "Pandas",
    shortDescription: "Data manipulation goat, crunching numbers fr! 🐼📊",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.KML]: {
    id: 21,
    name: "kml",
    label: "KML",
    shortDescription: "Keyhole Markup Language for geographic visualization! 🗺️📍",
    color: "#4285F4",
    icon: "https://cdn.simpleicons.org/googlemaps/4285F4",
  },
  [SkillNames.JUPYTER]: {
    id: 22,
    name: "jupyter",
    label: "Jupyter",
    shortDescription: "Data science playground, notebooks go crazy! 📓🔬",
    color: "#F37626",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  },
  [SkillNames.FASTAPI]: {
    id: 23,
    name: "fastapi",
    label: "FastAPI",
    shortDescription: "Python APIs going zoom zoom, sheesh! 🚀⚡",
    color: "#009688",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
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
    startDate: "2024",
    endDate: "Present",
    title: "Open Source Contributor",
    company: "Various Organizations",
    description: [
      "Contributing to Google DeepMind's OpenSpiel - AI game development and reinforcement learning.",
      "Contributing to RUXAILAB - Eye tracking and UX research platform using Vue.js and Firebase.",
      "Contributing to Rocket.Chat - Open source team communication platform.",
      "Contributing to WasmEdge (CNCF) - WebAssembly runtime for cloud and edge computing.",
    ],
    skills: [
      SkillNames.VUE,
      SkillNames.FIREBASE,
      SkillNames.DOCKER,
      SkillNames.GITHUB,
      SkillNames.LINUX,
      SkillNames.PYTHON,
      SkillNames.RUST,
    ],
  },
  {
    id: 2,
    startDate: "2021",
    endDate: "Present",
    title: "B.Tech in AI & Machine Learning",
    company: "University Student",
    description: [
      "Pursuing Bachelor's degree in Artificial Intelligence and Machine Learning.",
      "Building projects in AI/ML, game development, and web technologies.",
      "Active participant in open source communities and hackathons.",
      "Exploring WebAssembly, systems programming, and cloud technologies.",
    ],
    skills: [
      SkillNames.PYTHON,
      SkillNames.KML,
      SkillNames.PANDAS,
      SkillNames.JUPYTER,
      SkillNames.DOCKER,
      SkillNames.LINUX,
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
