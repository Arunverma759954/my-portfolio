"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { FloatingDock } from "../ui/floating-dock";
import Link from "next/link";
import { Button } from "../ui/button";

import SmoothScroll from "../smooth-scroll";
import projects, { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { SectionHeader } from "./section-header";

import SectionWrapper from "../ui/section-wrapper";

const ProjectsSection = () => {
  return (
    <SectionWrapper id="projects" className="bg-[#F1F5F9] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-24 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight">
            Case <span className="text-[#2563eb]">Studies</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl font-medium">
            A selection of high-impact industrial projects engineered for scale and performance.
          </p>
        </motion.div>
        
        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
    >
      <Modal>
      <ModalTrigger className="w-full text-left bg-transparent block group/card">
        <div className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} rounded-[2rem] border border-gray-100 bg-white hover:bg-white transition-all duration-500 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] group-hover/card:border-blue-100`}>
          <div className="md:w-1/2 p-4 pb-0 md:pb-4 overflow-hidden relative group">
            <Image
              src={project.src}
              alt={project.title}
              width={800}
              height={550}
              className="w-full h-full object-cover rounded-2xl border border-gray-50 transition-transform duration-700 group-hover/card:scale-[1.03]"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#2563eb] bg-blue-50 px-4 py-1.5 rounded-full">
                  {project.category}
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] leading-tight group-hover/card:text-[#2563eb] transition-colors tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed line-clamp-2 mt-2">
                {project.description || "Developed using modern web technologies to ensure a scalable architecture, flawless design, and optimal user engagement."}
              </p>
              <div className="flex flex-wrap gap-2 pt-3">
                 {project.skills?.frontend?.slice(0, 4).map((s, i) => (
                   <span key={`card-f-${i}`} className="px-2.5 py-1 bg-blue-50/80 text-[#2563eb] text-[10px] md:text-xs font-black rounded-md border border-blue-100 uppercase tracking-wider">{s.title}</span>
                 ))}
                 {project.skills?.backend?.slice(0, 3).map((s, i) => (
                   <span key={`card-b-${i}`} className="px-2.5 py-1 bg-gray-50 text-gray-600 text-[10px] md:text-xs font-black rounded-md border border-gray-200 uppercase tracking-wider">{s.title}</span>
                 ))}
              </div>
            </div>
            
            <div className="flex items-center text-sm font-black text-[#2563eb] uppercase tracking-tighter transition-all">
               Analyze Project
              <span className="ml-2 group-hover/card:translate-x-2 transition-transform">→</span>
            </div>
          </div>
        </div>
      </ModalTrigger>
      <ModalBody className="md:max-w-4xl max-h-[90vh] overflow-auto">
        <ModalContent>
          <ProjectContents project={project} />
        </ModalContent>
        <ModalFooter className="gap-4">
          <Link href={project.live} target="_blank" className="w-full sm:w-auto">
            <Button className="w-full">
              Launch Live Application
            </Button>
          </Link>
        </ModalFooter>
      </ModalBody>
    </Modal>
  </motion.div>
  );
};
export default ProjectsSection;

const ProjectContents = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 w-full bg-white text-[#111827]">
      {/* Left Column: Content */}
      <div className="flex-1 flex flex-col space-y-6 lg:max-w-md">
        <div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">{project.title}</h2>
          <p className="text-[#2563eb] text-lg font-bold mt-2">{project.subtitle || project.category}</p>
        </div>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
          {project.description || "Developed from scratch to ensure complete control over design and performance, optimizing user engagement."}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2">
           {project.skills.frontend?.map((s, i) => (
             <span key={`f-${i}`} className="px-3 py-1.5 bg-blue-50 text-[#2563eb] text-xs font-bold rounded-lg border border-blue-100 uppercase tracking-wider">{s.title}</span>
           ))}
           {project.skills.backend?.map((s, i) => (
             <span key={`b-${i}`} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg border border-gray-200 uppercase tracking-wider">{s.title}</span>
           ))}
        </div>

        <div className="h-px w-full bg-gray-100 my-2" />

        {/* Key Highlights */}
        <div className="space-y-4">
          <h3 className="text-lg font-black tracking-tight text-gray-900">Key Highlights:</h3>
          <ul className="space-y-3">
             {(project.highlights || [
               { title: "Modern & Responsive Design", text: "Clean, professional interface that looks beautiful on all devices." },
               { title: "Fast Loading & Optimized", text: "Lightweight coding and optimized images ensure lightning quick loading." },
               { title: "Professional Branding", text: "Carefully selected aesthetics matched exactly to the client's image." },
               { title: "Integrated Features", text: "Interactive UI, reliable routing, and high conversion optimization." },
             ]).map((hl, i) => (
               <li key={i} className="flex gap-3 text-sm group">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <span className="font-bold text-gray-800">{hl.title}</span> <span className="text-gray-500">— {hl.text}</span>
                  </div>
               </li>
             ))}
          </ul>
        </div>
      </div>

      {/* Right Column: Imagery */}
      <div className="flex-1 space-y-6 flex flex-col justify-center">
         <div className="relative w-full aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden border border-gray-100 bg-gray-50 shadow-xl shadow-gray-200/50 group">
           <Image 
             src={project.src}
             alt={project.title}
             fill
             className="object-cover object-top transition-transform duration-[2s] group-hover:scale-[1.05]"
           />
           <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
         </div>
      </div>
    </div>
  );
};
