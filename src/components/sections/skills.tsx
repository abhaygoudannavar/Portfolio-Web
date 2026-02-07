"use client";
import { motion } from "framer-motion";
import { SKILLS } from "@/data/constants";
import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import { useState } from "react";

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const skills = Object.values(SKILLS);

  return (
    <SectionWrapper id="skills" className="w-full min-h-screen py-20">
      <SectionHeader id='skills' title="Tech Stack" desc="Technologies I work with" />
      
      <div className="max-w-6xl mx-auto px-4 mt-16">
        {/* Skills Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group relative"
              style={{ zIndex: hoveredSkill === skill.name ? 50 : 1 }}
            >
              <div 
                className="aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-3 transition-all duration-300 cursor-pointer border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
                style={{
                  boxShadow: hoveredSkill === skill.name ? `0 0 30px ${skill.color}30` : undefined,
                }}
              >
                {/* Icon */}
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={skill.icon} 
                    alt={skill.label}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                {/* Label */}
                <span className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                  {skill.label}
                </span>
              </div>

              {/* Popup Tooltip */}
              {hoveredSkill === skill.name && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 p-4 rounded-xl border border-border/50 shadow-2xl pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(20,20,30,0.95) 100%)`,
                    boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${skill.color}20`,
                  }}
                >
                  {/* Arrow */}
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-4 h-4 rotate-45 border-r border-b border-border/50"
                    style={{ background: 'rgba(20,20,30,0.95)' }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3 pb-3 border-b border-white/10">
                      <div 
                        className="w-10 h-10 rounded-lg p-2 flex items-center justify-center"
                        style={{ background: `${skill.color}20` }}
                      >
                        <img 
                          src={skill.icon} 
                          alt={skill.label}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <h4 className="text-lg font-bold text-white">{skill.label}</h4>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {skill.shortDescription}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Featured Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-sm md:text-base">
            Passionate about <span className="text-primary font-semibold">AI/ML</span>, 
            <span className="text-primary font-semibold"> Open Source</span>, and 
            <span className="text-primary font-semibold"> Systems Programming</span>
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
