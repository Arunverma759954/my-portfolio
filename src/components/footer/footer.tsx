import React from "react";
import Link from "next/link";
import { footer } from "./config";
import { config } from "@/data/config";
import { SiGithub, SiLinkedin, SiInstagram, SiFacebook } from "react-icons/si";
import { Mail, Phone } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0b0e14] text-white pt-24 pb-12 px-6 md:px-12 w-full mt-32 relative z-10 border-t border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Top Professional CTA */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#111827] border border-gray-800 rounded-3xl p-8 md:p-12 mb-20 gap-8 shadow-2xl shadow-blue-900/10">
          <div className="space-y-3 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black tracking-tight">Looking for an Industry-Standard Partner?</h3>
            <p className="text-gray-400 font-medium md:max-w-md">Let's discuss how we can build high-performance industrial digital systems together.</p>
          </div>
          <Link href="#contact">
             <button className="h-14 px-10 text-md font-black rounded-2xl bg-white text-[#111827] hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-lg">
                Let's Start a Project
             </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-16 border-b border-gray-900">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#2563eb] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg border border-blue-400/20">
                {config.author.charAt(0)}
              </div>
              <span className="text-2xl font-black text-white tracking-tighter italic">
                {config.author.split(" ")[0]}
                <span className="text-[#2563eb]">.</span>
              </span>
            </Link>
            <p className="text-gray-500 font-medium leading-relaxed">
              Engineering high-performance, enterprise-grade architectures with precision and 2+ years of industrial excellence.
            </p>
            <div className="flex gap-4">
              <a href={config.social.linkedin} target="_blank" className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:bg-[#2563eb] hover:border-blue-400 transition-all group">
                <SiLinkedin size={18} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href={config.social.github} target="_blank" className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:bg-[#2563eb] hover:border-blue-400 transition-all group">
                <SiGithub size={18} className="text-gray-400 group-hover:text-white" />
              </a>
              <a href={config.social.instagram} target="_blank" className="w-10 h-10 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center hover:bg-[#2563eb] hover:border-blue-400 transition-all group">
                <SiInstagram size={18} className="text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[#2563eb]">Navigation</h4>
            <nav className="flex flex-col gap-4">
               <Link href="#hero" className="text-gray-400 hover:text-white transition-colors font-bold text-md">Overview</Link>
               <Link href="#skills" className="text-gray-400 hover:text-white transition-colors font-bold text-md">Industrial Expertise</Link>
               <Link href="#experience" className="text-gray-400 hover:text-white transition-colors font-bold text-md">Professional Journey</Link>
               <Link href="#projects" className="text-gray-400 hover:text-white transition-colors font-bold text-md">Case Studies</Link>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
             <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[#2563eb]">Inquiries</h4>
             <div className="flex flex-col gap-5 text-gray-500 font-bold">
                <a href={`mailto:${config.email}`} className="hover:text-white transition-all flex flex-col gap-1">
                   <span className="text-[10px] text-gray-600 uppercase tracking-widest">Write to me</span>
                   <span>{config.email}</span>
                </a>
                <a href={`tel:${config.phone}`} className="hover:text-white transition-all flex flex-col gap-1">
                   <span className="text-[10px] text-gray-600 uppercase tracking-widest">Direct Call</span>
                   <span>{config.phone}</span>
                </a>
             </div>
          </div>

          {/* Location */}
          <div className="space-y-6">
             <h4 className="text-sm font-black uppercase tracking-[0.2em] text-[#2563eb]">Operations</h4>
             <div className="space-y-4">
                <div className="text-gray-500 font-bold leading-relaxed">
                   <p className="text-white">Noida, Uttar Pradesh</p>
                   <p>Industry Hub, NCR Area</p>
                   <p>India - Delivery Globally</p>
                </div>
                <div className="inline-flex items-center gap-2 text-[#2563eb] font-black text-xs uppercase tracking-tighter">
                   <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                   Open for New Collaborative Projects
                </div>
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 text-[10px] sm:text-xs text-gray-600 font-black uppercase tracking-[0.3em]">
          <p>© {year} {config.author}. All technical rights reserved.</p>
          <p className="mt-4 md:mt-0 italic tracking-widest">Precision Engineered • Built for Performance</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
