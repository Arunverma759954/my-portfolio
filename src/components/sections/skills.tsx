import Image from "next/image";
import { Skill, SKILLS } from "@/data/constants";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <SectionWrapper id="skills" className="bg-[#F8FAFC] py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-24 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight">
            Industrial <span className="text-[#2563eb]">Expertise</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl font-medium">
            Engineering high-performance industrial solutions with a specialized enterprise-grade technology stack.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12">
          {Object.values(SKILLS).map((skill: Skill, index: number) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="group flex flex-col items-center justify-center space-y-6"
            >
              <div className="relative w-24 h-24 p-6 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 transform group-hover:scale-110 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] flex items-center justify-center">
                <Image 
                  src={skill.icon} 
                  alt={skill.label} 
                  width={64} 
                  height={64} 
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-xs font-black text-gray-400 group-hover:text-[#2563eb] uppercase tracking-[0.2em] transition-colors">
                {skill.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
