const config = {
  title: "Abhay Goudannavar | Open Source Enthusiast",
  description: {
    long: "Explore the portfolio of Abhay, an Open Source Enthusiast, AI/ML Developer, and Game Developer. Contributing to projects like Google DeepMind's OpenSpiel, RUXAILAB, Rocket.Chat, and WasmEdge. Let's build something amazing together!",
    short:
      "Discover the portfolio of Abhay, an Open Source Enthusiast creating innovative projects in AI/ML and game development.",
  },
  keywords: [
    "Abhay Goudannavar",
    "portfolio",
    "open source",
    "AI developer",
    "ML developer",
    "game developer",
    "Vue.js",
    "Firebase",
    "Python",
    "GitHub Actions",
    "WebAssembly",
    "RUXAILAB",
    "OpenSpiel",
    "Rocket.Chat",
    "WasmEdge",
  ],
  author: "Abhay Goudannavar",
  email: "abhaysgoudnvr@gmail.com",
  site: "https://abhaygoudannavar.vercel.app",

  // for github stars button
  githubUsername: "abhaygoudannavar",
  githubRepo: "Portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/abhay-goudannavar-a88a01381/",
    instagram: "https://www.instagram.com/abhaysgoudannavar/",
    github: "https://github.com/abhaygoudannavar",
  },
};
export { config };
