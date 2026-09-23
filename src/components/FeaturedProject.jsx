import React, { useState } from "react";
import { ExternalLink, Github, Code2, Cpu, UserCheck, ShieldCheck, FileText, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const pipelineSteps = [
  { label: "Candidate", icon: UserCheck },
  { label: "Job Discovery", icon: Code2 },
  { label: "Application", icon: FileText },
  { label: "Resume Processing", icon: FileText },
  { label: "ATS / AI Analysis", icon: Cpu },
  { label: "Recruiter Workflow", icon: ShieldCheck },
  { label: "Interview Process", icon: UserCheck },
];

export default function FeaturedProject() {
  const [activeTab, setActiveTab] = useState("recruiter");

  return (
    <section id="projects" className="relative py-24 bg-[#08080c] cyber-dots overflow-hidden">
      {/* Glow Spots */}
      <div className="glow-spot w-[500px] h-[500px] bg-primary/10 bottom-[-100px] right-[-100px]" />
      <div className="glow-spot w-[500px] h-[500px] bg-secondary/5 top-[-100px] left-[-100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="font-mono text-sm uppercase tracking-widest text-primary mb-3">
            // Flagship Project
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Featured Project
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-secondary mt-4" />
        </div>

        {/* Cinematic Main Container */}
        <div className="w-full bg-surface-dark border border-border-dark rounded-2xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 items-stretch">
            {/* Info Column (Left 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between items-start text-left gap-6">
              <div className="flex flex-col gap-3">
                <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
                  MERN Stack + AI Screening
                </span>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-white">
                  HireFlow-AI
                </h3>
                <h4 className="text-primary font-medium text-sm md:text-base font-mono">
                  AI Resume Screening &amp; Interview Platform
                </h4>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mt-2">
                  HireFlow-AI is a full-stack recruitment platform designed to streamline the hiring workflow by combining job management, applications, resume processing, ATS-oriented analysis, and interview workflows into a unified system.
                </p>
              </div>

              {/* Technical Capabilities List */}
              <div className="w-full flex flex-col gap-2.5">
                <h5 className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                  Key Capabilities
                </h5>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-400">
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Role-Based Workflows
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Job Search &amp; Sorting
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Resume PDF Parsing
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    ATS Match Analysis
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    JWT Authentication
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Cloudinary Storage
                  </li>
                </ul>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5">
                {["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "Cloudinary", "REST APIs", "JWT"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-surface-card border border-border-dark text-slate-300 font-mono text-[10px] tracking-wide"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3.5 w-full sm:w-auto">
                <a
                  href="https://github.com/Adarsh2059"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-btn px-5 py-2.5 rounded-full bg-surface-dark border border-border-dark text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4 text-primary" />
                  <span>GitHub</span>
                </a>
                <a
                  href="#projects"
                  className="px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Live</span>
                </a>
                <button
                  onClick={() => handleScrollTo("projects-list")}
                  className="text-xs text-slate-400 hover:text-white font-semibold transition-colors flex items-center justify-center gap-1 py-2"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Dashboard Mockup Column (Right 7 Cols) */}
            <div className="lg:col-span-7 flex flex-col bg-[#0c0c11] border border-border-dark rounded-xl overflow-hidden shadow-inner">
              {/* Browser bar */}
              <div className="px-4 py-2 bg-[#08080b] border-b border-border-dark flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block" />
                </div>
                <div className="flex-1 bg-surface-dark border border-border-dark px-3 py-0.5 rounded text-[10px] text-slate-500 font-mono flex items-center justify-between">
                  <span>https://hireflow-ai.app/dashboard</span>
                  <span className="text-[8px] px-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded">
                    SECURED
                  </span>
                </div>
              </div>

              {/* Interface Simulator */}
              <div className="p-4 flex-1 flex flex-col gap-4 text-left font-sans text-xs">
                {/* Dashboard Tabs */}
                <div className="flex border-b border-border-dark">
                  <button
                    onClick={() => setActiveTab("recruiter")}
                    className={`pb-2 px-3 font-semibold font-mono tracking-wide ${
                      activeTab === "recruiter"
                        ? "text-primary border-b-2 border-primary"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    Recruiter Console
                  </button>
                  <button
                    onClick={() => setActiveTab("candidate")}
                    className={`pb-2 px-3 font-semibold font-mono tracking-wide ${
                      activeTab === "candidate"
                        ? "text-secondary border-b-2 border-secondary"
                        : "text-slate-500 hover:text-slate-300"
                    }`}
                  >
                    Candidate Discovery
                  </button>
                </div>

                {/* Dashboard Tab Content */}
                {activeTab === "recruiter" ? (
                  <div className="flex flex-col gap-3.5 flex-1 justify-center">
                    {/* Active Job Stats */}
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-[#121217] border border-border-dark p-2 rounded">
                        <div className="text-[10px] text-slate-500">Active Postings</div>
                        <div className="text-sm font-bold text-white mt-0.5">4</div>
                      </div>
                      <div className="bg-[#121217] border border-border-dark p-2 rounded">
                        <div className="text-[10px] text-slate-500">Candidates</div>
                        <div className="text-sm font-bold text-white mt-0.5">18</div>
                      </div>
                      <div className="bg-[#121217] border border-border-dark p-2 rounded">
                        <div className="text-[10px] text-slate-500">ATS Processed</div>
                        <div className="text-sm font-bold text-primary mt-0.5">100%</div>
                      </div>
                    </div>

                    {/* Candidate Screen Queue Simulator */}
                    <div className="bg-[#121217] border border-border-dark rounded overflow-hidden">
                      <div className="bg-surface-dark px-3 py-1.5 border-b border-border-dark font-mono text-[9px] text-slate-400 uppercase tracking-wide">
                        Real-time AI Match Queue
                      </div>
                      <div className="divide-y divide-border-dark">
                        <div className="p-2.5 flex items-center justify-between hover:bg-[#161620] transition-colors">
                          <div className="flex flex-col">
                            <span className="font-semibold text-white">Adarsh Yadav</span>
                            <span className="text-[9px] text-slate-500 font-mono">B.Tech CSE | React, Node, C++</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded text-[9px] font-mono">
                              94% Match
                            </span>
                            <span className="px-1.5 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded text-[9px]">
                              Review Sent
                            </span>
                          </div>
                        </div>
                        <div className="p-2.5 flex items-center justify-between hover:bg-[#161620] transition-colors">
                          <div className="flex flex-col">
                            <span className="font-semibold text-slate-300">Rohan Mehta</span>
                            <span className="text-[9px] text-slate-500 font-mono">React Native Dev | Mobile Specialist</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-1.5 py-0.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 rounded text-[9px] font-mono">
                              78% Match
                            </span>
                            <span className="px-1.5 py-0.5 bg-slate-800 border border-border-dark text-slate-400 rounded text-[9px]">
                              In Review
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 flex-1 justify-center">
                    {/* Candidate Search Tool */}
                    <div className="flex gap-2">
                      <div className="flex-1 bg-[#121217] border border-border-dark px-2.5 py-1.5 rounded text-slate-400 font-mono text-[10px]">
                        Query: <span className="text-white">Software Engineer React</span>
                      </div>
                      <button className="bg-primary/20 border border-primary/30 text-primary px-3 rounded font-mono font-bold text-[10px]">
                        SEARCH
                      </button>
                    </div>

                    {/* Job Details Card */}
                    <div className="bg-[#121217] border border-border-dark p-3 rounded flex flex-col gap-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="font-semibold text-white text-xs">Full-Stack Engineer (AI Team)</div>
                          <div className="text-[10px] text-slate-500">HireFlow Tech Inc. • Remote</div>
                        </div>
                        <span className="px-1.5 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded text-[8px] font-mono">
                          ACTIVE
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-relaxed">
                        Looking for developers skilled in JavaScript, Node.js backend integration, and React frontends. Familiarity with AI tools is a plus.
                      </p>
                      <div className="flex items-center justify-between mt-2 pt-2 border-t border-border-dark/60">
                        <span className="text-[9px] text-slate-500 font-mono">Posted 2d ago</span>
                        <button className="bg-secondary/20 border border-secondary/30 text-secondary px-2.5 py-1 rounded text-[9px] font-bold tracking-wide">
                          APPLIED
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Visual Pipeline Flow Chart (Below) */}
        <div className="mt-16 w-full flex flex-col gap-4 items-center">
          <h5 className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">
            Recruitment Processing Pipeline
          </h5>
          <div className="w-full overflow-x-auto pb-4">
            <div className="flex items-center justify-between min-w-[700px] max-w-5xl mx-auto px-4">
              {pipelineSteps.map((step, idx) => {
                const StepIcon = step.icon;
                return (
                  <React.Fragment key={idx}>
                    {/* Pipeline Node */}
                    <div className="flex flex-col items-center gap-2 group/node">
                      <div className="w-12 h-12 rounded-full bg-surface-dark border border-border-dark text-slate-400 group-hover/node:border-primary/60 group-hover/node:text-primary group-hover/node:shadow-[0_0_15px_rgba(0,240,255,0.15)] flex items-center justify-center transition-all duration-300">
                        <StepIcon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[9px] text-slate-400 group-hover/node:text-primary transition-colors tracking-wide">
                        {step.label}
                      </span>
                    </div>

                    {/* Connecting arrow, skip on last node */}
                    {idx < pipelineSteps.length - 1 && (
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-border-dark via-primary/30 to-border-dark mx-2 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Navigation helper
const handleScrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};
