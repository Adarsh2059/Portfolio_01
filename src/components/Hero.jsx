import React from "react";
import { ArrowRight, FileDown, Terminal as TerminalIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  // Navigation helper
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid"
    >
      {/* Dynamic ambient lights */}
      <div className="glow-spot w-[500px] h-[500px] bg-primary/10 top-[-100px] right-[-50px]" />
      <div className="glow-spot w-[500px] h-[500px] bg-secondary/10 bottom-[-100px] left-[-50px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Column: Wording & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
          {/* Availability Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-primary font-mono text-sm font-medium tracking-wide shadow-[0_0_15px_rgba(0,240,255,0.05)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Open to Software Engineering Opportunities
          </motion.div>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight"
          >
            I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">intelligent software</span> that solves real problems.
          </motion.h1>

          {/* Hero Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Computer Science & Engineering student at{" "}
            <span className="text-white font-medium">VIT Bhopal University</span>, focused on full-stack development, software engineering systems, and DSA problem solving.
          </motion.p>

          {/* Actions & Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mt-2"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-8 py-3.5 rounded-full font-semibold bg-gradient-to-r from-primary to-secondary text-bg-dark hover:scale-103 active:scale-97 shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => handleScrollTo("contact")}
              className="glow-btn px-8 py-3.5 rounded-full font-semibold bg-surface-dark border border-border-dark text-white hover:text-primary transition-all duration-300 flex items-center justify-center"
            >
              Let's Connect
            </button>

            <a
              href="/Adarsh_yadav_Resume(N).pdf"
              download="Adarsh_yadav_Resume(N).pdf"
              className="font-mono text-sm text-slate-400 hover:text-primary transition-colors flex items-center justify-center gap-1.5 py-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Interactive simulated terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <div className="w-full max-w-[480px] bg-[#0c0c10] border border-border-dark rounded-xl shadow-2xl overflow-hidden relative group/terminal">
            {/* Terminal Glow Line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary opacity-70" />

            {/* Terminal Header Bar */}
            <div className="px-4 py-3 bg-[#08080a] border-b border-border-dark flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
              </div>
              <div className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-primary" />
                <span>bash - adarsh@vitbhopal</span>
              </div>
              <div className="w-12" /> {/* spacer to balance */}
            </div>

            {/* Terminal Content Screen */}
            <div className="p-6 font-mono text-left text-sm leading-relaxed overflow-x-auto select-all">
              {/* Line 1 */}
              <div className="flex gap-2 text-slate-400">
                <span className="text-primary font-bold">&gt;</span>
                <span className="text-white">whoami</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="pl-4 mt-1 text-slate-300 flex flex-col gap-1 border-l border-primary/20"
              >
                <div>
                  <span className="text-secondary font-semibold">Name:</span> Adarsh Yadav
                </div>
                <div>
                  <span className="text-secondary font-semibold">University:</span> VIT Bhopal (B.Tech CSE '27)
                </div>
                <div>
                  <span className="text-secondary font-semibold">Roles:</span> Full-Stack Developer | Problem Solver
                </div>
                <div>
                  <span className="text-secondary font-semibold">Focus:</span> DSA Practitioner
                </div>
              </motion.div>

              {/* Line 2 */}
              <div className="flex gap-2 mt-5 text-slate-400">
                <span className="text-primary font-bold">&gt;</span>
                <span className="text-white">currently_building</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.4 }}
                className="pl-4 mt-1 text-slate-300 flex flex-col gap-0.5 border-l border-secondary/20"
              >
                <div className="text-primary font-medium">HireFlow-AI</div>
                <div className="text-xs text-slate-400 italic">
                  AI Resume Screening &amp; Interview Platform
                </div>
              </motion.div>

              {/* Line 3 */}
              <div className="flex gap-2 mt-5 text-slate-400">
                <span className="text-primary font-bold">&gt;</span>
                <span className="text-white">stack</span>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.4 }}
                className="pl-4 mt-1 text-slate-300 border-l border-primary/20"
              >
                <span className="text-primary/90">C++</span> •{" "}
                <span className="text-white">JavaScript</span> •{" "}
                <span className="text-primary/90">React</span> •{" "}
                <span className="text-white">Node.js</span> •{" "}
                <span className="text-primary/90">MongoDB</span>
              </motion.div>

              {/* Cursor Blinking Line */}
              <div className="flex gap-2 mt-4 text-slate-400">
                <span className="text-primary font-bold">&gt;</span>
                <span className="w-2.5 h-4 bg-primary cursor-blink inline-block" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
