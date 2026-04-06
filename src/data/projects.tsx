import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiShopify,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
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
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },

  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },

  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5 />,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3 />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  reactNative: {
    title: "React Native",
    bg: "black",
    fg: "white",
    icon: <SiReact />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: <></>,
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  shopify: {
    title: "Shopify",
    bg: "black",
    fg: "white",
    icon: <SiShopify />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  subtitle?: string;
  description?: string;
  highlights?: { title: string, text: string }[];
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "aerospace",
    category: "Industrial",
    title: "Aerospace Aluminium Alloys",
    subtitle: "Premium Glass Partition Systems",
    description: "A high-performance digital gateway for Aerospace Aluminium Alloys, India's premier manufacturer of high-precision demountable glass partition profiles. Designed for architectural excellence with advanced acoustic ratings and custom extrusion integration.",
    highlights: [
      { title: "Precision Engineering", text: "Profiles extruded to extreme tolerances, ensuring seamless installation across large-scale commercial glass projects." },
      { title: "Acoustic Excellence", text: "Optimized for executive environments with system ratings up to 52dB for superior privacy and sound insulation." },
      { title: "Scalable Infrastructure", text: "High-performance architecture supporting real-time catalog discovery for architects and contractors nationwide." },
      { title: "PAN-India Logistics", text: "Strategically located manufacturing in Navi Mumbai (Airoli) for rapid dispatch to all major urban centers." },
    ],
    src: "/assets/alu.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.ts],
    },
    live: "https://aluminium-project.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Redefining modern interiors with Aerospace. A premium industrial portal for world-class glass partition systems and sustainable architectural solutions.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "stevron",
    category: "Industrial",
    title: "STEVRON Power Tools",
    subtitle: "Industrial Power Tools Ecosystem",
    description: "A premium digital catalog and brand presence for STEVRON, engineered to showcase high-precision DC and AC power tools. Built with a full-stack Next.js and Node.js architecture for high performance and dynamic product discovery.",
    highlights: [
      { title: "Dynamic Catalog Engine", text: "Specialized routing for DC and AC power tool segments with SEO-optimized product pages." },
      { title: "High-Performance Architecture", text: "Built with Next.js and Node.js ensuring sub-second loading for industrial catalogs." },
      { title: "Immersive Branding", text: "Sleek, precision-oriented UI reflecting the 'Engineered to perform' brand philosophy." },
      { title: "Responsive Precision", text: "Flawless experience across all device types, from warehouse tablets to executive desktops." },
    ],
    src: "/assets/stevron.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.ts],
    },
    live: "https://stevron-kohl.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Experience peak precision with STEVRON. A comprehensive industrial marketplace for world-class power tools and hardware accessories.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "forever",
    category: "E-Commerce",
    title: "Forever Retail Ecosystem",
    subtitle: "Enterprise-Grade Storefront Architecture",
    description: "A production-ready retail platform engineered using high-performance Vanilla JavaScript and customized CSS3 modules. Focused on absolute architectural control, sub-second rendering, and enterprise-level semantic standards.",
    highlights: [
      { title: "Architecture Mastery", text: "Zero-dependency raw stack implementation for maximum performance and security control." },
      { title: "Production UI Standards", text: "Enterprise-level CSS modules with pixel-perfect responsive logic across all device viewports." },
      { title: "Engagement Flow Optimization", text: "Data-driven conversion funnels with ultra-smooth state transitions and dynamic DOM rendering." },
      { title: "Core Web Excellence", text: "Exemplary Lighthouse scores (100/100) across performance and accessibility categories." },
    ],
    src: "/assets/Screenshot 2026-04-04 105603.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.html, PROJECT_SKILLS.css, PROJECT_SKILLS.js],
      backend: [],
    },
    live: "https://my-forever.vercel.app/",
    get content() {
      return (
        <></>
      );
    },
  },
  {
    id: "farsan",
    category: "FMCG",
    title: "Farsan Gold Enterprise",
    subtitle: "Consumer Goods Digital Transformation",
    description: "Direct-to-consumer digital portal for a leading FMCG brand. Implementing high-concurrency cart systems and ultra-fast product discovery pipelines for a seamless professional shopping experience.",
    highlights: [
      { title: "High-Concurrency Backend", text: "Node.js powered synchronous engine for real-time inventory management and order fulfillment." },
      { title: "Advanced Interaction UX", text: "Complex GSAP-driven visual storytelling to increase brand value and consumer trust." },
      { title: "Performance Engineering", text: "React + Tailwind architecture optimized for core web vitals and mobile-first conversions." },
      { title: "Scalable Data Pipeline", text: "Robust API structure capable of handling high-traffic promotional events seamlessly." },
    ],
    src: "/assets/Screenshot 2026-04-04 105646.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.gsap],
      backend: [PROJECT_SKILLS.node],
    },
    live: "https://farsan-pro.vercel.app/",
    get content() {
      return (
        <></>
      );
    },
  },
  {
    id: "stronwell",
    category: "Industrial",
    title: "Stronwell Enterprise",
    subtitle: "Industrial Machinery & B2B Solutions",
    description: "A high-end corporate presence for industrial equipment distributors. This platform showcases advanced industrial engineering solutions with precision-based interactions and high accessibility standards for B2B stakeholders.",
    highlights: [
      { title: "Strategic B2B UI", text: "Enterprise-grade interfaces designed for clarity and rapid information lookup for procurement teams." },
      { title: "Dynamic Cataloging", text: "Sanity CMS integration enabling real-time equipment inventory updates across global territories." },
      { title: "Architectural Precision", text: "Next.js SSR implementation yielding near-perfect SEO and performance metrics for industrial visibility." },
      { title: "High-End Visual Identity", text: "Futuristic brand aesthetics utilizing Aceternity UI to reflect machine-level precision." },
    ],
    src: "/assets/Screenshot 2026-04-04 105714.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.aceternity],
      backend: [PROJECT_SKILLS.sanity],
    },
    live: "https://strone-web.vercel.app/",
    get content() {
      return (
        <></>
      );
    },
  },
  {
    id: "nursing-home",
    category: "Healthcare",
    title: "Raj Nursing Home",
    src: "/assets/Screenshot 2026-04-04 105740.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.shadcn],
      backend: [PROJECT_SKILLS.firebase],
    },
    live: "https://nursing-home-ten.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Multi-specialty hospital management and landing page. Designed to provide easy appointment booking and health service discovery for patients.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "atithi",
    category: "Hospitality",
    title: "Atithi Homestay",
    src: "/assets/Screenshot 2026-04-04 105805.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [PROJECT_SKILLS.node],
    },
    live: "https://atithi-client.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Experience comfort and luxury with Atithi Homestay. A beautiful platform for booking stays with integrated gallery and service highlights.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "hifi-travels",
    category: "Travel",
    title: "HiFi Travels",
    src: "/assets/Screenshot 2026-04-04 105929.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.reactQuery],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express],
    },
    live: "https://hifi-travells.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A comprehensive travel booking engine for flights, hotels, and travel insurance. Features modern UI components for seamless search experiences.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "dental",
    category: "Medical",
    title: "Andheri Dental Clinic",
    subtitle: "Modern Dental Clinic Website",
    description: "Developed from scratch using Frontend HTML5, CSS3, Bootstrap 5, Responsive Design, and JavaScript to ensure complete control over design and performance. Features service showcases and high conversion tools.",
    highlights: [
      { title: "Modern & Responsive Design", text: "Clean, professional interface that looks beautiful on all devices" },
      { title: "Fast Loading & Optimized", text: "Lightweight coding and optimized images ensure quick loading" },
      { title: "Professional Branding", text: "Carefully selected color palette, fonts, and icons match the clinic's image" },
      { title: "Service Showcase", text: "Detailed sections highlight dental treatments and orthodontic solutions" },
      { title: "Patient-Friendly Navigation", text: "Clear menus and call-to-action buttons guide patients effortlessly" },
      { title: "Integrated Features", text: "Appointment booking, contact forms, Google Maps integration, and SEO-friendly" },
    ],
    src: "/assets/Screenshot 2026-04-04 110016.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.shadcn],
      backend: [PROJECT_SKILLS.firebase],
    },
    live: "https://dental-landingpage.vercel.app/",
    get content() {
      return (
        <></>
      );
    },
  },
  {
    id: "cooling",
    category: "Industrial",
    title: "Cool Air System",
    src: "/assets/Screenshot 2026-04-04 110102.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [PROJECT_SKILLS.node],
    },
    live: "https://cooling-project.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            HVAC solutions website for industrial cooling systems. Professional design focusing on B2B engineering and maintenance services.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "mayfair",
    category: "Hospitality",
    title: "Mayfair Resort",
    src: "/assets/Screenshot 2026-04-04 110123.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.aceternity],
      backend: [PROJECT_SKILLS.sanity],
    },
    live: "https://my-fair-project.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Luxury retreat landing page for Mayfair Hill Resort, Darjeeling. Captures colonial charm and Himalayan serenity through beautiful imagery.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "omcas",
    category: "Services",
    title: "OMCAS Cleaning",
    src: "/assets/Screenshot 2026-04-04 110148.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.shadcn],
      backend: [PROJECT_SKILLS.node],
    },
    live: "https://one-minute-all-solution.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Premier cleaning and hygiene service platform. Offering a wide range of professional deep cleaning solutions for residential and commercial spaces.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "mechnova",
    category: "Industrial",
    title: "Mechnova Industrial",
    subtitle: "Precision Engineering & Manufacturing Portal",
    description: "Digital presence for a leading industrial machinery brand, focusing on engineering reliability and global equipment servicing. Developed to handle complex product specifications and dealer interactions.",
    highlights: [
      { title: "Industrial Catalog Engine", text: "High-performance dynamic mapping for diverse heavy-duty industrial product segments." },
      { title: "Dealer Pipeline Optimization", text: "Specialized UI flows for large-scale B2B equipment inquiries and dealer-network connectivity." },
      { title: "GSAP Performance Suite", text: "Custom animation logic to highlight machine-level precision in a professional browser context." },
      { title: "Reliable Backend Sync", text: "Node.js powered services ensuring constant data integrity for product specifications and technical data." },
    ],
    src: "/assets/Screenshot 2026-04-04 110228.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.gsap],
      backend: [PROJECT_SKILLS.node],
    },
    live: "https://mechnova.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Engineering Excellence via Mechnova. A professional industrial infrastructure for machinery distribution and technical support.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "share-market",
    category: "Education",
    title: "Share Market Academy",
    src: "/assets/Screenshot 2026-04-04 110258.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.firebase],
    },
    live: "https://sharemrkit1.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            EdTech platform for stock market training. Features course listings, investment strategies, and automated systems for consistent growth.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "school",
    category: "Education",
    title: "St. Joseph's Convent",
    src: "/assets/Screenshot 2026-04-04 110411.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.shadcn],
      backend: [PROJECT_SKILLS.node],
    },
    live: "https://school-web-zeta-eight.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Dynamic school web portal for admissions, activities, and campus updates. Designed for accessibility and easy communication.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "geo-decision",
    category: "Analytics",
    title: "GeoDecision Analytics",
    src: "/assets/Screenshot 2026-04-04 110443.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.mongo],
    },
    live: "https://geo-pro-six.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Transforming spatial data into confident decisions. Professional geospatial analysis and strategic insight platform.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
  {
    id: "maxalign",
    category: "Medical",
    title: "MaxAlign Dental",
    src: "/assets/Screenshot 2026-04-04 110508.png",
    screenshots: [],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.shadcn],
      backend: [PROJECT_SKILLS.firebase],
    },
    live: "https://maxalign-one.vercel.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">Multi-Specialty Dental Care</TypographyP>
          <TypographyP className="font-mono">
            Most trusted dental clinic in Bengaluru. Featuring a professional landing page for appointment booking, service showcases, and patient education.
          </TypographyP>
          <ProjectsLinks live={this.live} />
        </div>
      );
    },
  },
];
export default projects;
