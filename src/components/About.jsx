import React from "react";
import { Cpu, Code, BookOpen, Layers } from "lucide-react";
import { motion } from "framer-motion";

const panels = [
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "Building scalable web applications using modern JavaScript technologies (MERN Stack) and secure, performant backend REST APIs.",
    color: "from-blue-500/20 to-cyan-500/5",
    borderColor: "hover:border-blue-500/30",
    glowColor: "shadow-blue-500/10",
  },
  {
    icon: Cpu,
    title: "Software Architecture",
    description: "Designing robust server-side routing, data schemas, API integrations, and secure authentication flows for clean web platforms.",
    color: "from-violet-500/20 to-purple-500/5",
    borderColor: "hover:border-violet-500/30",
    glowColor: "shadow-violet-500/10",
  },
  {
    icon: Code,
    title: "Problem Solving",
    description: "Consistent DSA practice using C++ with focus on algorithms, data structures, optimization, and writeup-level debugging of complex problems.",
    color: "from-emerald-500/20 to-teal-500/5",
    borderColor: "hover:border-emerald-500/30",
    glowColor: "shadow-emerald-500/10",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Experimenting with new web frameworks, browser extensions, browser capabilities (Manifest V3), and turning ideas into active repositories.",
    color: "from-amber-500/20 to-orange-500/5",
    borderColor: "hover:border-amber-500/30",
    glowColor: "shadow-amber-500/10",
  },
];

export default function About() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="about" className="relative py-24 bg-[#08080b] cyber-dots overflow-hidden">
      {/* Decorative Blur Ambient */}
      <div className="glow-spot w-96 h-96 bg-primary/5 top-1/2 left-[-100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-16">
          <span className="font-mono text-sm uppercase tracking-widest text-primary mb-3">
            // Who I Am
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
            Engineering with curiosity. Building with purpose.
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl leading-relaxed">
            I am a B.Tech Computer Science &amp; Engineering student at{" "}
            <span className="text-white font-medium">VIT Bhopal University</span> (B.Tech '27) with an academic record of{" "}
            <span className="text-primary font-semibold font-mono">9.16 CGPA</span>. Passionate about software development, I enjoy building robust systems and performant interfaces, striving to write clean, optimized code for practical problems.
          </p>
        </div>

        {/* 4 Interactive Mini Panels */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {panels.map((panel, idx) => {
            const Icon = panel.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`glow-card flex flex-col md:flex-row gap-5 p-6 rounded-xl border border-border-dark bg-gradient-to-br ${panel.color} transition-all duration-300 ${panel.borderColor} hover:shadow-lg ${panel.glowColor} group`}
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-surface-dark border border-border-dark text-slate-300 group-hover:text-primary group-hover:border-primary/30 transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-start text-left gap-2">
                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-primary transition-colors">
                    {panel.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {panel.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
