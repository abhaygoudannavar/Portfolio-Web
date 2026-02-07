"use client";
import React, { useEffect, useState } from "react";
import {
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
  FaVuejs,
} from "react-icons/fa6";
import {
  RiFirebaseFill,
  RiNextjsFill,
} from "react-icons/ri";
import {
  SiDart,
  SiFlutter,
  SiFastapi,
  SiJupyter,
  SiKeras,
  SiPandas,
  SiRust,
  SiTypescript,
  SiVercel,
  SiVscodium,
  SiWebassembly,
  SiJavascript,
} from "react-icons/si";
import { TbTerminal2 } from "react-icons/tb";

// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "abhaysgoudnvr@gmail.com",
    href: "mailto:abhaysgoudnvr@gmail.com",
    icon: <FaEnvelope height={"50px"} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/abhay-goudannavar-a88a01381/",
    content: "/abhay-goudannavar",
    icon: <FaLinkedin height={"50px"} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/abhaygoudannavar",
    content: "/abhaygoudannavar",
    icon: <FaGithub height={"50px"} />,
  },
];

const TOOLS = [
  {
    name: "Python",
    content: "Versatile programming language for AI/ML, scripting, and backend development",
    icon: <FaPython size={"50px"} color={"#3776AB"} />,
    color: "#3776AB",
  },
  {
    name: "Rust",
    content: "Systems programming language focused on safety, speed, and concurrency",
    icon: <SiRust size={"50px"} color={"#DEA584"} />,
    color: "#DEA584",
  },
  {
    name: "WebAssembly",
    content: "Binary instruction format for stack-based virtual machines, enabling high-performance web apps",
    icon: <SiWebassembly size={"50px"} color={"#654FF0"} />,
    color: "#654FF0",
  },
  {
    name: "Flutter",
    content: "Google's UI toolkit for building natively compiled mobile, web, and desktop apps",
    icon: <SiFlutter size={"50px"} color={"#02569B"} />,
    color: "#02569B",
  },
  {
    name: "Dart",
    content: "Client-optimized programming language for fast apps on any platform",
    icon: <SiDart size={"50px"} color={"#0175C2"} />,
    color: "#0175C2",
  },
  {
    name: "Pandas",
    content: "Python library for data manipulation and analysis with powerful data structures",
    icon: <SiPandas size={"50px"} color={"#150458"} />,
    color: "#150458",
  },
  {
    name: "Keras/ML",
    content: "Deep learning library for building and training neural networks in Python",
    icon: <SiKeras size={"50px"} color={"#D00000"} />,
    color: "#D00000",
  },
  {
    name: "Jupyter",
    content: "Interactive computing environment for data science and machine learning experiments",
    icon: <SiJupyter size={"50px"} color={"#F37626"} />,
    color: "#F37626",
  },
  {
    name: "FastAPI",
    content: "Modern, fast Python web framework for building APIs with automatic docs",
    icon: <SiFastapi size={"50px"} color={"#009688"} />,
    color: "#009688",
  },
  {
    name: "JavaScript",
    content: "High-level, interpreted programming language for web development",
    icon: <SiJavascript size={"50px"} color={"#f0db4f"} />,
    color: "#f0db4f",
  },
  {
    name: "TypeScript",
    content: "Typed superset of JavaScript that compiles to plain JavaScript",
    icon: <SiTypescript size={"50px"} color={"#007acc"} />,
    color: "#007acc",
  },
  {
    name: "React.js",
    content: "JavaScript library for building user interfaces with component-based architecture",
    icon: <FaReact size={"50px"} color="#61dafb" />,
    color: "#61dafb",
  },
  {
    name: "Vue.js",
    content: "Progressive JavaScript framework for building user interfaces",
    icon: <FaVuejs size={"50px"} color="#41b883" />,
    color: "#41b883",
  },
  {
    name: "Next.js",
    content: "React framework for production with server-side rendering and static generation",
    icon: <RiNextjsFill size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Node.js",
    content: "JavaScript runtime for building scalable server-side applications",
    icon: <FaNodeJs size={"50px"} color="#6cc24a" />,
    color: "#6cc24a",
  },
  {
    name: "Docker",
    content: "Platform for developing, shipping, and running applications in containers",
    icon: <FaDocker size={"50px"} color="#2496ed" />,
    color: "#2496ed",
  },
  {
    name: "Firebase",
    content: "Google's platform for building mobile and web applications with backend services",
    icon: <RiFirebaseFill size={"50px"} color="#FFCA28" />,
    color: "#FFCA28",
  },
  {
    name: "Git",
    content: "Distributed version control system for tracking code changes",
    icon: <FaGit size={"50px"} color="#f05032" />,
    color: "#f05032",
  },
  {
    name: "GitHub",
    content: "Platform for version control and collaboration on open source projects",
    icon: <FaGithub size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "VS Code",
    content: "Lightweight but powerful source code editor with extensions ecosystem",
    icon: <SiVscodium size={"50px"} color="#007acc" />,
    color: "#007acc",
  },
  {
    name: "Linux",
    content: "Open-source operating system for development and server environments",
    icon: <FaLinux size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Terminal",
    content: "Command-line interface for powerful system interaction and automation",
    icon: <TbTerminal2 size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "Vercel",
    content: "Platform for frontend frameworks and static sites, optimized for Next.js",
    icon: <SiVercel size={"50px"} color="#fff" />,
    color: "#000000",
  },
  {
    name: "HTML",
    content: "Standard markup language for creating web pages and applications",
    icon: <FaHtml5 size={"50px"} color="#e34c26" />,
    color: "#e34c26",
  },
  {
    name: "CSS",
    content: "Style sheet language for describing the presentation of web documents",
    icon: <FaCss3 size={"50px"} color="#563d7c" />,
    color: "#563d7c",
  },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-4 lg:p-10 w-[100px] md:w-[150px] lg:w-[200px] aspect-square  bg-zinc-800"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl">Abhay Goudannavar</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Open Source Enthusiast
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md "
                      href={link.href}
                    >
                      <div className="w-8">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm">{link.name}</div>
                        <div className="text-xs text-zinc-500">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-[500px]">
          <div
            className="p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-10 lg:md-20">About me</h1>
            <p className="mb-10 text-roboto">
              Hey there! I&apos;m Abhay, an Open Source Enthusiast, AI/ML Developer,
              and Game Developer. I&apos;m passionate about contributing to meaningful
              open source projects and building innovative solutions with AI.
              My journey includes contributing to Google DeepMind&apos;s OpenSpiel,
              RUXAILAB, Rocket.Chat, and WasmEdge.
            </p>
            <p className="mb-10">
              When I&apos;m not coding, you can find me exploring new open source
              projects, learning about WebAssembly and systems programming, or
              working on AI/ML experiments.
            </p>
            <h1 className="text-3xl mb-10 lg:md-20">Stuff I use</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px]"></p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {TOOLS.reverse().map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        key={tool.name}
                        className="w-fit p-2 border-[.5px] border-zinc-600 rounded-md"
                      >
                        {tool.icon}
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
