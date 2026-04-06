import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";

export default function HeroSectionMinimal() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-4xl w-full">
        <p className="text-zinc-400 text-lg mb-2">Hi, I am</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4">
          {config.author.split(" ")[0]}
          <br />
          {config.author.split(" ")[1]}
        </h1>
        <p className="text-zinc-400 text-lg mb-8">A Full Stack Web Developer</p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://drive.google.com/file/d/1MTSsUA8V7Po2AsNXT8kZ5sLOpzC8l7qm/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex items-center gap-2">
              <File size={20} />
              Resume
            </Button>
          </Link>
          <Link href="#contact">
            <Button variant="outline">Hire Me</Button>
          </Link>
          <Link href={config.social.github} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <SiGithub size={20} />
            </Button>
          </Link>
          <Link href={config.social.linkedin} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <SiLinkedin size={20} />
            </Button>
          </Link>
          <Link href={config.social.twitter} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <SiX size={20} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
