const config = {
  title: "Arun Verma | Full Stack Developer",
  description: {
    long: "Explore the portfolio of Arun Verma, a results-driven Full-Stack MERN Developer with hands-on experience in building scalable applications. Proficient in front-end and back-end development, API integrations, and database management. Discover my projects including E-commerce, Real-time Chat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Arun Verma, a Full Stack Developer creating scalable web applications with React, Node.js, and MongoDB.",
  },
  keywords: [
    "Arun Verma",
    "portfolio",
    "Full Stack Developer",
    "MERN Stack",
    "web development",
    "React",
    "Node.js",
    "MongoDB",
    "3D animations",
    "interactive websites",
    "web design",
    "GSAP",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Arun Verma",
  email: "arunverma759954@gmail.com",
  phone: "+91-7599595423",
  site: "https://arunverma.vercel.app",
  resumeUrl: "#",

  // for github stars button
  githubUsername: "Arunverma759954",
  githubRepo: "arun-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/arun-verma-20a3982b8/",
    instagram: "https://www.instagram.com/arunwebsolutions_/",
    facebook: "https://www.facebook.com/share/1BFrwkXjRc/",
    github: "https://github.com/Arunverma759954",
  },
};
export { config };
