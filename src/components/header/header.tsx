"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { cn } from "@/lib/utils";
import ThemeToggle from "../theme/theme-toggle";
import { Button } from "../ui/button";
import { config } from "@/data/config";
import OnlineUsers from "../realtime/online-users";
import { GitHubStarsButton } from "../ui/shadcn-io/github-stars-button";

interface HeaderProps {
  loader?: boolean;
}

const navLinks = [
  { name: "Specialties", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Portfolio", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Header = ({ loader }: HeaderProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <header className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.02)] z-50 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_8px_16px_rgba(37,99,235,0.3)] group-hover:shadow-[0_12px_24px_rgba(37,99,235,0.4)] group-hover:-translate-y-0.5 transition-all duration-300">
            {config.author.charAt(0)}
          </div>
          <span className="text-xl font-black text-[#111827] tracking-tight">
            {config.author}
            <span className="text-[#2563eb]">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-gray-50/50 border border-gray-100 shadow-sm backdrop-blur-md">
          {navLinks.map((link, i) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative px-5 py-2.5 text-sm font-bold transition-colors z-10 ${hoveredIndex === i ? "text-[#2563eb]" : "text-gray-600"}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === i && (
                <motion.div
                  className="absolute inset-0 bg-white rounded-full shadow-sm border border-gray-100/80 -z-10"
                  layoutId="nav-pill"
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link href="#contact" className="hidden sm:block">
            <Button className="bg-gradient-to-r from-[#111827] to-[#1f2937] hover:from-[#2563eb] hover:to-[#1d4ed8] border border-gray-800 hover:border-[#2563eb] text-white font-bold px-6 h-11 rounded-full transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_rgba(37,99,235,0.3)] active:scale-95">
              Hire Me
            </Button>
          </Link>
          <ThemeToggle className="w-11 h-11 border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 active:scale-95" />
        </div>
      </div>
    </header>
  );
};

export default Header;
