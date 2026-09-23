import React, { useState } from "react";
import { ArrowUpRight, Github, ExternalLink, X, BookOpen, Settings, AlertCircle, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projectsData = [
  {
    id: "attendance",
    title: "Automated Classroom Attendance System",
    subtitle: "Automated Roll Call & Sheet Management",
    summary: "An academic engineering project that explores using custom capture frames to automate attendance records and generate sheet exports.",
    tech: ["MERN Stack", "Express.js", "API Integration", "Database Design", "CSV Export", "OpenCV Integration"],
    problem: "Traditional manual roll calls in large classrooms are highly time-consuming, administrative bottlenecks, and logistically inefficient to maintain.",
    approach: "Investigated using cameras to capture classroom layout frames, applying coordinate mappings to segment student positions, and cross-referencing entries against a registered database to mark attendance.",
    architecture: "React frontend displaying dashboard stats -> Express API managing CRUD operations -> Node server worker processing logs and updating a MongoDB repository.",
    challenges: "Optimizing processing speeds to run within acceptable check-in windows and structuring relational log schemas under MongoDB.",
    learned: "Acquired deep appreciation for database schema optimizations and asynchronous task queues in Node.js backend architectures.",
    github: "https://github.com/Adarsh2059",
    live: null,
  },
  {
    id: "inclusive",
    title: "Inclusive Learning Application",
    subtitle: "Deaf & Mute Students Education Portal",
    summary: "An accessibility-centric education platform inspired by a Smart India Hackathon idea, focusing on inclusive learning materials.",
    tech: ["React.js", "Accessibility Standards", "Inclusive UX", "Tailwind CSS", "Interactive Quizzes"],
    problem: "Traditional educational software ignores deaf and mute learning paradigms, which require highly visual, sign-centric, or interactive visual structures.",
    approach: "Designed a portal utilizing semantic layouts, video lesson modules with synchronized interactive captions, and gamified progress tracking for visual learners.",
    architecture: "React single-page application communicating with an express backend, featuring optimized video rendering speeds and accessibility keyboard control routes.",
    challenges: "Tailoring the interface to satisfy Web Content Accessibility Guidelines (WCAG) AAA contrast values while maintaining a modern, engaging layout.",
    learned: "Gained significant expertise in semantic HTML, ARIA roles, and user-centric design iterations for disabled student personas.",
    github: "https://github.com/Adarsh2059",
    live: "https://example.com",
  },
  {
    id: "adhd",
    title: "ADHD / Stress Behavioral Signal Extension",
    subtitle: "Experimental Productivity Chrome Extension",
    summary: "Experimental Manifest V3 browser extension exploring attention and stress-related behavioral signals using page telemetry.",
    tech: ["Chrome Extension", "Manifest V3", "Browser Storage", "JavaScript", "DOM Telemetry"],
    problem: "Working or learning online can cause micro-stress patterns or cognitive overload that users fail to recognize until severe fatigue sets in.",
    approach: "Built a passive browser utility that maps user interaction signals (such as mouse velocities, click frequencies, and tab visibility patterns) to prompt healthy workspace breaks.",
    architecture: "Chrome Background Service Worker utilizing Manifest V3 event injection APIs, tracking focus cycles, and saving logs in chrome.storage.local.",
    challenges: "Working within the execution time limits of Manifest V3 background service workers and managing local state syncs.",
    learned: "Deepened knowledge in local browser state storage, service worker event loops, and DOM performance profiling during telemetry captures.",
    warning: "Disclaimer: This tool is strictly experimental. It does not provide medical diagnostic testing or replace clinical consultation.",
    github: "https://github.com/Adarsh2059",
    live: null,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects-list" className="relative py-24 bg-[#0a0a0f] cyber-grid overflow-hidden">
      {/* Decorative Glow */}
      <div className="glow-spot w-96 h-96 bg-primary/5 top-1/3 left-[-200px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="font-mono text-sm uppercase tracking-widest text-primary mb-3">
            // Engineering Archives
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Other Projects
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-secondary mt-4" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glow-card rounded-2xl border border-border-dark p-6 flex flex-col justify-between text-left cursor-pointer group"
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div>
                {/* Tech tag and arrow icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-wider text-secondary font-semibold uppercase">
                    {project.tech[0]} • {project.tech[1]}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-surface-dark border border-border-dark flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <h4 className="font-mono text-xs text-slate-500 mb-4">{project.subtitle}</h4>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {project.summary}
                </p>
              </div>

              {/* Technologies chips */}
              <div className="flex flex-wrap gap-1">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-surface-dark border border-border-dark text-slate-400 font-mono text-[9px]"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-0.5 rounded bg-surface-dark border border-border-dark text-slate-400 font-mono text-[9px]">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg-dark/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-surface-dark border border-border-dark w-full max-w-2xl rounded-2xl shadow-2xl relative p-6 md:p-8 overflow-y-auto max-h-[90vh] text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Banner Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary" />

              {/* Header */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white">
                    {selectedProject.title}
                  </h3>
                  <p className="font-mono text-xs text-primary mt-1">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-slate-400 hover:text-white rounded-full bg-surface-card border border-border-dark transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content Grid */}
              <div className="flex flex-col gap-6 text-sm">
                {/* Warning Alert if Project is ADHD */}
                {selectedProject.warning && (
                  <div className="flex gap-3 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20 text-yellow-400 text-xs">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>{selectedProject.warning}</span>
                  </div>
                )}

                {/* Problem Section */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                    <X className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white uppercase tracking-wider text-xs font-mono mb-1">
                      Problem Statement
                    </h5>
                    <p className="text-slate-300 leading-relaxed">{selectedProject.problem}</p>
                  </div>
                </div>

                {/* Approach Section */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white uppercase tracking-wider text-xs font-mono mb-1">
                      Proposed Approach
                    </h5>
                    <p className="text-slate-300 leading-relaxed">{selectedProject.approach}</p>
                  </div>
                </div>

                {/* Architecture Section */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white uppercase tracking-wider text-xs font-mono mb-1">
                      Architecture Flow
                    </h5>
                    <p className="text-slate-300 leading-relaxed">{selectedProject.architecture}</p>
                  </div>
                </div>

                {/* Lessons Learned Section */}
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white uppercase tracking-wider text-xs font-mono mb-1">
                      Challenges &amp; Lessons Learned
                    </h5>
                    <p className="text-slate-300 leading-relaxed">
                      <strong className="text-slate-200">Challenges:</strong> {selectedProject.challenges}
                      <br />
                      <strong className="text-slate-200 mt-2 block">Lessons:</strong> {selectedProject.learned}
                    </p>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="pt-4 border-t border-border-dark flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-surface-card border border-border-dark text-slate-300 font-mono text-[10px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions inside Modal */}
                <div className="flex gap-4 mt-2">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 rounded-full bg-surface-dark border border-border-dark hover:border-primary/40 hover:text-primary text-center text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Repository</span>
                  </a>
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2.5 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 text-center text-primary text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Explore Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
