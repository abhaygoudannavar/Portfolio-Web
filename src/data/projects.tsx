import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiDocker,
  SiFirebase,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiRust,
  SiCplusplus,
  SiGithubactions,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  rust: {
    title: "Rust",
    bg: "black",
    fg: "white",
    icon: <SiRust />,
  },
  cpp: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus />,
  },
  githubActions: {
    title: "GitHub Actions",
    bg: "black",
    fg: "white",
    icon: <SiGithubactions />,
  },
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    id: "ruxailab",
    category: "Open Source",
    title: "RUXAILAB",
    src: "/assets/projects-screenshots/ruxailab/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.vue,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.python,
      ],
    },
    live: "https://ruxailab.com/",
    github: "https://github.com/ruxailab/RUXAILAB",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Remote User Experience AI Lab
          </TypographyP>
          <TypographyP className="font-mono">
            RUXAILAB is an innovative platform for conducting remote usability testing
            and UX research. As a contributor, I worked on various features including
            the eye-tracking module and UI/UX improvements.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">My Contributions</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Contributed to the eye-tracking feature for enhanced user behavior analysis
            </li>
            <li className="font-mono">
              Fixed UI/UX issues and improved overall user experience
            </li>
            <li className="font-mono">
              Worked on performance optimizations using Vue.js and Firebase
            </li>
            <li className="font-mono">
              Collaborated with international team of researchers and developers
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with Vue.js for the frontend, Firebase for backend services,
            and integrated Python for AI/ML-powered eye tracking analysis.
          </p>
        </div>
      );
    },
  },
  {
    id: "openspiel",
    category: "Open Source",
    title: "OpenSpiel (Google DeepMind)",
    src: "/assets/projects-screenshots/openspiel/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.cpp,
        PROJECT_SKILLS.python,
      ],
    },
    github: "https://github.com/google-deepmind/open_spiel",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Google DeepMind&apos;s Game AI Framework
          </TypographyP>
          <TypographyP className="font-mono">
            OpenSpiel is a collection of environments and algorithms for research
            in general reinforcement learning and search/planning in games.
            Maintained by Google DeepMind, it&apos;s used for cutting-edge AI research.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">My Contributions</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Contributed to AI game development and reinforcement learning modules
            </li>
            <li className="font-mono">
              Worked on C++ and Python implementations for game algorithms
            </li>
            <li className="font-mono">
              Collaborated with Google DeepMind researchers on game theory implementations
            </li>
            <li className="font-mono">
              Improved documentation and code quality
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            OpenSpiel is used by researchers worldwide for developing and testing
            game-playing AI algorithms. Contributing to this project has deepened
            my understanding of reinforcement learning and game theory.
          </p>
        </div>
      );
    },
  },
  {
    id: "rocketchat",
    category: "Open Source",
    title: "Rocket.Chat",
    src: "/assets/projects-screenshots/rocketchat/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.ts,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.docker,
      ],
    },
    live: "https://rocket.chat/",
    github: "https://github.com/RocketChat/Rocket.Chat",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Open Source Team Communication Platform
          </TypographyP>
          <TypographyP className="font-mono">
            Rocket.Chat is a free and open-source team chat collaboration platform
            that allows users to communicate securely in real-time across devices.
            It&apos;s an alternative to Slack with millions of users worldwide.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">My Contributions</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Fixed bugs and improved code quality in the React/TypeScript codebase
            </li>
            <li className="font-mono">
              Contributed to UI improvements and user experience enhancements
            </li>
            <li className="font-mono">
              Worked on Docker configurations for better deployment
            </li>
            <li className="font-mono">
              Participated in code reviews and community discussions
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Scale</TypographyH3>
          <p className="font-mono mb-2">
            Rocket.Chat has over 12 million users and is used by organizations
            like the US Navy, Deutsche Bahn, and universities worldwide.
            Contributing to this project taught me how to work on large-scale applications.
          </p>
        </div>
      );
    },
  },
  {
    id: "wasmedge",
    category: "Open Source",
    title: "WasmEdge (CNCF)",
    src: "/assets/projects-screenshots/wasmedge/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.rust,
        PROJECT_SKILLS.cpp,
        PROJECT_SKILLS.githubActions,
      ],
    },
    live: "https://wasmedge.org/",
    github: "https://github.com/WasmEdge/WasmEdge",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Cloud Native WebAssembly Runtime
          </TypographyP>
          <TypographyP className="font-mono">
            WasmEdge is a lightweight, high-performance, and extensible WebAssembly
            runtime. It&apos;s part of the Cloud Native Computing Foundation (CNCF)
            and is used for cloud-native and edge computing applications.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">My Contributions</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Contributed to the WebAssembly runtime improvements
            </li>
            <li className="font-mono">
              Worked on GitHub Actions and CI/CD workflows
            </li>
            <li className="font-mono">
              Improved build processes and documentation
            </li>
            <li className="font-mono">
              Explored Rust and systems programming concepts
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Why WebAssembly?</TypographyH3>
          <p className="font-mono mb-2">
            WebAssembly enables running code at near-native speed across different
            platforms. WasmEdge brings this power to cloud and edge environments,
            making it perfect for serverless and IoT applications.
          </p>
        </div>
      );
    },
  },
  {
    id: "sustainable-food-tracker",
    category: "Personal Project",
    title: "Sustainable Food Tracker",
    src: "/assets/projects-screenshots/foodtracker/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.vue,
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.firebase,
        PROJECT_SKILLS.python,
      ],
    },
    github: "https://github.com/abhaygoudannavar/sustainable-food-tracker",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Track Your Food&apos;s Environmental Impact
          </TypographyP>
          <TypographyP className="font-mono">
            A personal project aimed at helping users make more sustainable food
            choices by tracking the environmental impact of their meals. It calculates
            carbon footprint, water usage, and provides eco-friendly alternatives.
          </TypographyP>
          <ProjectsLinks repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              Track carbon footprint of your daily meals
            </li>
            <li className="font-mono">
              Get suggestions for more sustainable food alternatives
            </li>
            <li className="font-mono">
              Visualize your environmental impact over time
            </li>
            <li className="font-mono">
              Educational resources about sustainable eating
            </li>
          </ul>
          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with Vue.js for a responsive frontend, Firebase for real-time
            data storage, and Python for calculating environmental metrics using
            publicly available datasets.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    live: "https://abhaygoudannavar.vercel.app",
    github: "https://github.com/abhaygoudannavar/Portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Welcome to my digital playground, where creativity meets code.
            This portfolio showcases my journey as an open source enthusiast,
            AI/ML developer, and game developer.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            What You&apos;ll Find Here
          </TypographyH3>
          <ul className="list-disc ml-6">
            <li className="font-mono">
              My open source contributions to major projects
            </li>
            <li className="font-mono">
              Personal projects in AI/ML and game development
            </li>
            <li className="font-mono">
              My skills and tech stack
            </li>
            <li className="font-mono">
              Ways to connect and collaborate
            </li>
          </ul>
          <p className="font-mono mb-2 mt-8 text-center">
            Built with Next.js, TypeScript, Framer Motion, and lots of ☕
          </p>
        </div>
      );
    },
  },
];

export default projects;
