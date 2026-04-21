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
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
          {Object.values(SKILLS).map((skill: Skill, index: number) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05,
                ease: "easeOut"
              }}
              whileHover={{ y: -10 }}
              className="group flex flex-col items-center justify-center space-y-6"
            >
              <div 
                className="relative w-24 h-24 p-6 bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 flex items-center justify-center overflow-hidden"
                style={{ 
                  ["--hover-glow" as any]: `${skill.color}33` 
                }}
              >
                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ backgroundColor: skill.color }}
                />
                
                <Image 
                  src={skill.icon} 
                  alt={skill.label} 
                  width={64} 
                  height={64} 
                  className="relative z-10 object-contain transition-all duration-500 group-hover:scale-110"
                />
              </div>
              <div className="text-center space-y-1">
                <p className="text-[10px] font-black text-gray-400 group-hover:text-blue-600 uppercase tracking-[0.2em] transition-colors">
                  {skill.label}
                </p>
                <div 
                  className="h-1 w-0 group-hover:w-full mx-auto transition-all duration-500 rounded-full"
                  style={{ backgroundColor: skill.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
