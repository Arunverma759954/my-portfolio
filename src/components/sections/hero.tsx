import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin } from "lucide-react";
import { usePreloader } from "../preloader";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className="relative w-full min-h-[90vh] flex flex-col justify-center pt-24 pb-20 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto px-6 w-full">
        {/* Left: Strategic Content */}
        <div className="flex flex-col items-start text-left space-y-10 z-10 w-full lg:pr-8">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-gray-200 text-[#111827] text-xs font-black uppercase tracking-widest shadow-[0_2px_10px_rgba(0,0,0,0.04)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563eb]"></span>
                </span>
                Senior Tech Partner & Software Engineer
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.4, type: "spring", stiffness: 90 }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] leading-[1.2] tracking-tight"
            >
              Crafting <br />
              <span className="text-[#2563eb]">World-Class</span> <br />
              Digital Experiences.
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.6, type: "spring", stiffness: 90 }}
          >
            <div className="space-y-6 max-w-xl">
              <p className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                With <span className="text-[#2563eb] font-bold">2+ Years of Industrial Excellence</span> in Noida and abroad, I engineer high-performance, enterprise-grade architectures using <span className="text-[#2563eb] font-bold">MERN</span> and <span className="text-[#2563eb] font-bold">Next.js</span>, bringing precision to complex industrial web systems.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                {[
                  "Modern Architecture",
                  "Performance-First",
                  "Scalable Solutions",
                  "Elegant UI/UX"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-colors group">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <svg className="w-3 h-3 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-black text-gray-700 tracking-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
            className="flex flex-wrap gap-5 pt-4"
          >
            <Link href="#contact">
              <Button size="lg" className="h-14 px-8 text-md text-white font-black rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_12px_25px_rgba(37,99,235,0.4)] hover:-translate-y-1 transition-all group">
                Start a Conversation
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <Link href={config.social.github} target="_blank">
                <Button variant="outline" size="icon" className="w-14 h-14 rounded-2xl border-gray-200 bg-white hover:bg-gray-50 hover:text-[#2563eb] hover:border-gray-300 shadow-sm transition-all hover:-translate-y-1">
                  <SiGithub size={24} />
                </Button>
              </Link>
              <Link href={config.social.linkedin} target="_blank">
                <Button variant="outline" size="icon" className="w-14 h-14 rounded-2xl border-gray-200 bg-white hover:bg-gray-50 hover:text-[#2563eb] hover:border-gray-300 shadow-sm transition-all hover:-translate-y-1">
                  <SiLinkedin size={24} />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right: Modern Professional Graphic */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80 }}
          className="relative hidden lg:block w-full h-[500px]"
        >
           <div className="absolute inset-0 bg-[#2563eb]/20 blur-[120px] rounded-full animate-pulse" />
           <div className="relative z-10 w-full h-full flex items-center justify-center animate-float">
              
              <div className="w-full max-w-lg aspect-[4/3] rounded-2xl bg-[#0d1117] border border-gray-800 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col relative group">
                 {/* Mac Header */}
                 <div className="h-10 bg-[#161b22] border-b border-gray-800 flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                       <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                       <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                       <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <div className="mx-auto px-4 py-1 rounded bg-[#0d1117] text-gray-400 text-[10px] sm:text-xs font-mono border border-gray-800">
                       components/Hero.tsx
                    </div>
                 </div>
                 
                 {/* Code Area */}
                 <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-gray-300 leading-relaxed overflow-hidden relative flex-1">
                    <div className="flex">
                       <div className="flex flex-col text-gray-600 pr-4 select-none border-r border-gray-800 mr-4">
                          <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span>
                       </div>
                       <div>
                          <span className="text-[#ff7b72]">import</span> React <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'react'</span>;<br/>
                          <span className="text-[#ff7b72]">import</span> {'{'} motion {'}'} <span className="text-[#ff7b72]">from</span> <span className="text-[#a5d6ff]">'framer-motion'</span>;<br/><br/>
                          <span className="text-[#ff7b72]">export default function</span> <span className="text-[#d2a8ff]">HeroSection</span>() {'{'} <br/>
                          &nbsp;&nbsp;<span className="text-[#ff7b72]">return</span> ( <br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">&lt;</span><span className="text-[#79c0ff]">main</span> <span className="text-[#a5d6ff]">className</span>=<span className="text-[#a5d6ff]">"flex min-h-screen"</span><span className="text-gray-500">&gt;</span> <br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">&lt;</span><span className="text-[#79c0ff]">motion.div</span> <br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">initial</span>={'{'}<span className="text-[#79c0ff]">0</span>{'}'} <br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#a5d6ff]">animate</span>={'{'}<span className="text-[#79c0ff]">1</span>{'}'} <br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">&gt;</span> <br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">&lt;</span><span className="text-[#79c0ff]">h1</span><span className="text-gray-500">&gt;</span><span className="text-white font-bold">Arun Verma</span><span className="text-gray-500">&lt;/</span><span className="text-[#79c0ff]">h1</span><span className="text-gray-500">&gt;</span> <br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">&lt;/</span><span className="text-[#79c0ff]">motion.div</span><span className="text-gray-500">&gt;</span> <br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">&lt;/</span><span className="text-[#79c0ff]">main</span><span className="text-gray-500">&gt;</span> <br/>
                          &nbsp;&nbsp;); <br/>
                          {'}'} <br/>
                          <motion.div 
                            animate={{ opacity: [1, 0, 1] }} 
                            transition={{ repeat: Infinity, duration: 1 }}
                            className="inline-block w-2.5 h-4 bg-blue-500 ml-1 translate-y-1"
                          />
                       </div>
                    </div>
                 </div>
                 
                 {/* Floating Badges */}
                 <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-6 top-1/4 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-xl"
                  >
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
                          <img src="https://cdn.worldvectorlogo.com/logos/next-js.svg" className="w-6 h-6 object-contain" alt="Next.js" />
                       </div>
                       <div>
                          <p className="text-[10px] text-gray-400 font-bold uppercase">Framework</p>
                          <p className="text-sm text-white font-bold">Next.js</p>
                       </div>
                    </div>
                 </motion.div>

                 <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -left-6 bottom-1/4 bg-blue-600/90 backdrop-blur-md p-3 rounded-2xl border border-blue-500 shadow-xl shadow-blue-500/30"
                  >
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-full bg-[#282c34] flex items-center justify-center overflow-hidden">
                          <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" className="w-7 h-7 object-contain" alt="React" />
                       </div>
                       <div className="leading-tight">
                          <p className="text-blue-200 text-[10px] font-bold uppercase tracking-wider">Library</p>
                          <p className="text-white text-sm font-bold">React JS</p>
                       </div>
                    </div>
                 </motion.div>
                 
                 <motion.div 
                   animate={{ y: [0, -5, 0] }}
                   transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                   className="absolute -bottom-8 -right-2 w-36 h-36 bg-white border border-blue-100 shadow-2xl p-5 flex flex-col justify-center transform rotate-3 rounded-[2rem] border-b-8 border-b-blue-600"
                 >
                    <p className="text-[10px] uppercase font-black text-gray-400 tracking-tighter">Performance</p>
                    <p className="text-4xl font-black text-[#111827]">99<span className="text-blue-600 text-xl">%</span></p>
                    <div className="h-2 w-full bg-gray-100 rounded-full mt-3 overflow-hidden">
                       <div className="h-full w-[99%] bg-blue-600 rounded-full" />
                    </div>
                 </motion.div>
              </div>
           </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};


export default HeroSection;
