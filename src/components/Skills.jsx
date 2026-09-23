import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "All Skills" },
  { id: "languages", label: "Languages" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "databases", label: "Databases" },
  { id: "tools", label: "Tools & Utilities" },
];

const skillItems = [
  // Languages
  { name: "C++", category: "languages", level: "Primary Language for DSA" },
  { name: "JavaScript", category: "languages", level: "Full-Stack Development" },
  { name: "Java", category: "languages", level: "Core Concepts" },
  { name: "SQL", category: "languages", level: "Database Querying" },

  // Frontend
  { name: "HTML", category: "frontend", level: "Semantic Markup" },
  { name: "CSS", category: "frontend", level: "Responsive Layouts" },
  { name: "React", category: "frontend", level: "Component Architectures" },
  { name: "Bootstrap", category: "frontend", level: "Rapid Styling" },
  { name: "Tailwind CSS", category: "frontend", level: "Utility-First Design" },

  // Backend
  { name: "Node.js", category: "backend", level: "JavaScript Runtime" },
  { name: "Express.js", category: "backend", level: "Backend REST APIs" },
  { name: "REST APIs", category: "backend", level: "Service Integration" },

  // Databases
  { name: "MongoDB", category: "databases", level: "NoSQL Database" },
  { name: "MySQL", category: "databases", level: "Relational Database" },
  { name: "PostgreSQL", category: "databases", level: "Relational Database" },

  // Tools & Utilities
  { name: "Git", category: "tools", level: "Version Control" },
  { name: "GitHub", category: "tools", level: "Collab & Deployment" },
  { name: "Postman", category: "tools", level: "API Testing" },
  { name: "Cloudinary", category: "tools", level: "Asset Management" },
];

// Helper to get category gradient styles
const getCategoryStyles = (category) => {
  switch (category) {
    case "languages":
      return {
        bg: "hover:bg-amber-500/10",
        border: "hover:border-amber-500/40",
        text: "text-amber-400",
        tagBg: "bg-amber-500/10",
      };
    case "frontend":
      return {
        bg: "hover:bg-blue-500/10",
        border: "hover:border-blue-500/40",
        text: "text-blue-400",
        tagBg: "bg-blue-500/10",
      };
    case "backend":
      return {
        bg: "hover:bg-violet-500/10",
        border: "hover:border-violet-500/40",
        text: "text-violet-400",
        tagBg: "bg-violet-500/10",
      };
    case "databases":
      return {
        bg: "hover:bg-emerald-500/10",
        border: "hover:border-emerald-500/40",
        text: "text-emerald-400",
        tagBg: "bg-emerald-500/10",
      };
    case "tools":
      return {
        bg: "hover:bg-cyan-500/10",
        border: "hover:border-cyan-500/40",
        text: "text-cyan-400",
        tagBg: "bg-cyan-500/10",
      };
    default:
      return {
        bg: "hover:bg-primary/10",
        border: "hover:border-primary/40",
        text: "text-primary",
        tagBg: "bg-primary/10",
      };
  }
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skillItems
      : skillItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="skills" className="relative py-24 bg-[#0a0a0f] cyber-grid overflow-hidden">
      {/* Decorative Glow */}
      <div className="glow-spot w-[600px] h-[600px] bg-secondary/5 -top-[200px] right-[-100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="font-mono text-sm uppercase tracking-widest text-primary mb-3">
            // Technical Stack
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Tools &amp; Capabilities
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-secondary mt-4" />
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto bg-surface-dark/50 border border-border-dark p-1.5 rounded-2xl backdrop-blur-sm">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 relative ${
                selectedCategory === cat.id ? "text-primary" : "text-slate-400 hover:text-white"
              }`}
            >
              {selectedCategory === cat.id && (
                <motion.span
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-xl"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Skill Chips Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const styles = getCategoryStyles(skill.category);
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`flex flex-col items-start text-left p-4 rounded-xl border border-border-dark bg-[#0f0f14] transition-all duration-300 ${styles.bg} ${styles.border} group`}
                >
                  <span className={`font-display font-bold text-base text-slate-100 group-hover:${styles.text} transition-colors`}>
                    {skill.name}
                  </span>
                  
                  {/* Skill Detail Indicator */}
                  <span className="text-xs text-slate-400 mt-2 font-mono leading-relaxed line-clamp-2">
                    {skill.level}
                  </span>

                  {/* Tiny Tag */}
                  <span className={`inline-block mt-3 px-2 py-0.5 rounded font-mono text-[9px] uppercase tracking-wider ${styles.tagBg} ${styles.text}`}>
                    {skill.category.replace("-", " ")}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
