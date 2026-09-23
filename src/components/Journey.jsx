import React from "react";
import { GraduationCap, Award, Brain, Rocket, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const timelineEvents = [
  {
    year: "2023",
    title: "B.Tech CSE Initialization",
    institution: "VIT Bhopal University",
    description: "Started B.Tech in Computer Science & Engineering. Solidified basic programming principles, logical algorithms, and academic methodologies.",
    icon: GraduationCap,
    glow: "shadow-blue-500/10",
    textGlow: "text-blue-400",
  },
  {
    year: "2024",
    title: "Expanding Core Computer Science",
    institution: "VIT Bhopal University",
    description: "Built foundational knowledge in object-oriented programming, data structures, relational databases (SQL), and web design layouts.",
    icon: Code2,
    glow: "shadow-violet-500/10",
    textGlow: "text-violet-400",
  },
  {
    year: "2025",
    title: "Applied Systems & AI/ML",
    institution: "Project Focus",
    description: "Explored AI/ML pipelines, custom browser extensions (Manifest V3), media parsing, and advanced Javascript backend routing architectures.",
    icon: Brain,
    glow: "shadow-amber-500/10",
    textGlow: "text-amber-400",
  },
  {
    year: "2026",
    title: "Full-Stack Platforms & Flagships",
    institution: "Active Development",
    description: "Engineered MediBridge (Healthcare scheduling & Gemini AI follow-up suite) & HireFlow-AI recruitment screening platform, solved distributed slot concurrency, practiced robust DSA C++ patterns, and prepared for software engineering opportunities.",
    icon: Rocket,
    glow: "shadow-primary/10",
    textGlow: "text-primary",
  },
  {
    year: "2027",
    title: "Engineering Graduation",
    institution: "Industry Target",
    description: "Targeting graduation in B.Tech CSE (9.16 current CGPA) and scaling engineering impact with product-level development and optimization challenges.",
    icon: Award,
    glow: "shadow-emerald-500/10",
    textGlow: "text-emerald-400",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="relative py-24 bg-[#08080c] cyber-dots overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="glow-spot w-82 h-82 bg-secondary/5 bottom-0 right-[-100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-20">
          <span className="font-mono text-sm uppercase tracking-widest text-primary mb-3">
            // Engineering Milestone Timeline
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Academic Journey
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-secondary mt-4" />
        </div>

        {/* Timeline Line & Cards Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central bar (hidden on mobile, left-aligned) */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-[1px] bg-gradient-to-b from-primary via-secondary to-border-dark" />

          {/* Timeline Nodes Grid */}
          <div className="flex flex-col gap-12 md:gap-16">
            {timelineEvents.map((event, idx) => {
              const Icon = event.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={event.year}
                  className={`flex flex-col md:flex-row items-start relative w-full ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Glowing Node Marker on central line */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-[9.5px] top-1.5 z-20 w-5 h-5 rounded-full bg-[#0c0c11] border border-secondary flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>

                  {/* Cards */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 15 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 18 }}
                    className={`pl-12 md:pl-0 w-full md:w-[45%] text-left glow-card p-6 rounded-2xl border border-border-dark bg-[#0f0f14] ${event.glow} group`}
                  >
                    {/* Event Year */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-display font-bold text-xl md:text-2xl ${event.textGlow}`}>
                        {event.year}
                      </span>
                      <div className="p-2 rounded-lg bg-surface-dark border border-border-dark text-slate-400 group-hover:text-primary transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-base md:text-lg text-white group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <h4 className="font-mono text-xs text-slate-500 mb-3 uppercase tracking-wide">
                      {event.institution}
                    </h4>
                    <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
