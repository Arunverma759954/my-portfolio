import { EXPERIENCE, SkillNames, SKILLS } from "@/data/constants";
import { SectionHeader } from "./section-header";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  return (
    <SectionWrapper id="experience" className="bg-white py-32 relative z-10">
       <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#111827] tracking-tight">
            Professional <span className="text-[#2563eb]">Journey</span>
          </h2>
          <p className="text-base md:text-lg text-gray-500 max-w-2xl font-medium">
            Companies I've worked with and the value I've delivered.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12 relative">
          {/* Vertical Timeline Rail */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-600/20 via-blue-600/40 to-blue-600/20 hidden md:block -translate-x-1/2 rounded-full" />

          {EXPERIENCE.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline Indicator Node */}
              <div className="absolute left-8 md:left-1/2 top-10 w-6 h-6 bg-white border-4 border-blue-600 rounded-full z-10 -translate-x-1/2 hidden md:flex items-center justify-center shadow-lg shadow-blue-200">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
              </div>

              <ExperienceCard experience={exp} index={index} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: (typeof EXPERIENCE)[0];
  index: number;
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className={cn(
        "flex w-full md:w-[45%] flex-col",
        isEven ? "md:mr-auto" : "md:ml-auto"
      )}
      viewport={{ once: true }}
    >
      <Card
        className={cn(
          "bg-white/80 backdrop-blur-md border border-gray-100/50",
          "shadow-[0_20px_50px_-12px_rgba(37,99,235,0.08)] hover:shadow-[0_40px_80px_-15px_rgba(37,99,235,0.12)]",
          "transition-all duration-500 rounded-3xl overflow-hidden group border-t-4 border-t-blue-600"
        )}
      >
        <CardHeader className="pb-4 pt-8 px-8">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between items-start">
              <Badge className="bg-blue-600/10 text-blue-700 border-none px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                {experience.startDate} — {experience.endDate}
              </Badge>
            </div>
            
            <div className="space-y-1">
              <CardTitle className="text-2xl font-black text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">
                {experience.title}
              </CardTitle>
              <div className="text-sm font-bold text-gray-500 uppercase tracking-[0.15em]">
                {experience.company}
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-8 px-8 pb-10">
          <ul className="space-y-4">
            {experience.description.map((point, i) => (
              <li key={i} className="flex gap-4 group/item">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-600/30 group-hover/item:bg-blue-600 group-hover/item:scale-125 transition-all shrink-0" />
                <p className="text-gray-600 text-[15px] leading-relaxed font-medium">{point}</p>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2.5 pt-4 border-t border-gray-100">
            {experience.skills.map((skillName) => {
              const skill = SKILLS[skillName as SkillNames];
              return (
                <div
                  key={skillName}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gray-50 border border-gray-100 text-[10px] font-black text-gray-700 uppercase tracking-wider group/skill hover:bg-white hover:border-blue-200 transition-all cursor-default"
                >
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="w-3.5 h-3.5 object-contain"
                  />
                  {skill.label}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;
