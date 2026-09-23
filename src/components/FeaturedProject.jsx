import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Code2,
  Cpu,
  UserCheck,
  ShieldCheck,
  FileText,
  ArrowRight,
  Stethoscope,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Activity,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const hireflowPipeline = [
  { label: "Candidate", icon: UserCheck },
  { label: "Job Discovery", icon: Code2 },
  { label: "Application", icon: FileText },
  { label: "Resume Processing", icon: FileText },
  { label: "ATS / AI Analysis", icon: Cpu },
  { label: "Recruiter Workflow", icon: ShieldCheck },
  { label: "Interview Process", icon: UserCheck },
];

const medibridgePipeline = [
  { label: "Doctor Discovery", icon: Stethoscope },
  { label: "Availability Engine", icon: Clock },
  { label: "Slot Hold (TTL)", icon: ShieldCheck },
  { label: "Symptoms & Booking", icon: FileText },
  { label: "Gemini Pre-Visit AI", icon: Sparkles },
  { label: "Doctor Consultation", icon: UserCheck },
  { label: "Calendar Sync & Reminders", icon: Calendar },
];

export default function FeaturedProject() {
  const [activeProject, setActiveProject] = useState("medibridge"); // "medibridge" | "hireflow"
  const [mediTab, setMediTab] = useState("doctor_ai"); // "doctor_ai" | "slot_hold" | "post_visit"
  const [hireflowTab, setHireflowTab] = useState("recruiter"); // "recruiter" | "candidate"

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative py-24 bg-[#08080c] cyber-dots overflow-hidden">
      {/* Glow Spots */}
      <div className="glow-spot w-[500px] h-[500px] bg-primary/10 bottom-[-100px] right-[-100px]" />
      <div className="glow-spot w-[500px] h-[500px] bg-secondary/5 top-[-100px] left-[-100px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12">
          <span className="font-mono text-sm uppercase tracking-widest text-primary mb-3">
            // Flagship Architecture
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Featured Full-Stack Platforms
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-secondary mt-4" />

          {/* Dual Flagship Switcher */}
          <div className="mt-8 flex items-center p-1.5 rounded-2xl bg-surface-dark/80 border border-border-dark backdrop-blur-md gap-2">
            <button
              onClick={() => setActiveProject("medibridge")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-300 relative ${
                activeProject === "medibridge"
                  ? "text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {activeProject === "medibridge" && (
                <motion.div
                  layoutId="activeFlagshipBg"
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 rounded-xl"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              <Stethoscope className="w-4 h-4 text-primary relative z-10" />
              <span className="relative z-10">MediBridge</span>
              <span className="relative z-10 hidden sm:inline-flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Demo
              </span>
            </button>

            <button
              onClick={() => setActiveProject("hireflow")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-semibold transition-all duration-300 relative ${
                activeProject === "hireflow"
                  ? "text-white shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {activeProject === "hireflow" && (
                <motion.div
                  layoutId="activeFlagshipBg"
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 rounded-xl"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              <Cpu className="w-4 h-4 text-secondary relative z-10" />
              <span className="relative z-10">HireFlow-AI</span>
            </button>
          </div>
        </div>

        {/* Cinematic Main Container */}
        <AnimatePresence mode="wait">
          {activeProject === "medibridge" ? (
            <motion.div
              key="medibridge-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full bg-surface-dark border border-border-dark rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-emerald-400 to-secondary" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 items-stretch">
                {/* Info Column (Left 5 Cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between items-start text-left gap-6">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
                        MERN Stack + Google Gemini AI + Calendar API
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-3xl md:text-4xl text-white flex items-center gap-3">
                      <span>MediBridge</span>
                    </h3>
                    <h4 className="text-primary font-medium text-sm md:text-base font-mono">
                      Healthcare Scheduling &amp; AI Follow-up Platform
                    </h4>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mt-2">
                      MediBridge is a full-stack healthcare platform connecting patients, doctors, and administrators. It solves scheduling race conditions with a layered double-booking prevention engine, temporary slot holds, Gemini-powered pre-visit symptom evaluation, post-visit plain-English summaries, and resilient Google Calendar synchronization.
                    </p>
                  </div>

                  {/* Technical Capabilities List */}
                  <div className="w-full flex flex-col gap-2.5">
                    <h5 className="font-mono text-xs font-semibold text-white tracking-wider uppercase">
                      Key Capabilities
                    </h5>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-400">
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Role-Based (Patient / Dr / Admin)
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        Double-Booking Prevention
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        10-Min TTL Slot Hold
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Gemini Pre-Visit Triage
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Post-Visit AI Summaries
                      </li>
                      <li className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        Google Calendar OAuth Sync
                      </li>
                    </ul>
                  </div>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "React",
                      "Node.js",
                      "Express.js",
                      "MongoDB Atlas",
                      "Google Gemini API",
                      "Google Calendar API",
                      "JWT Auth",
                      "Vite",
                      "Nodemailer",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-surface-card border border-border-dark text-slate-300 font-mono text-[10px] tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-3.5 w-full sm:w-auto">
                    <a
                      href="https://medi-bridge-eight.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-full bg-primary text-bg-dark font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-primary/90 shadow-[0_0_20px_rgba(0,240,255,0.25)] transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Production Demo</span>
                    </a>
                    <a
                      href="https://github.com/Adarsh2059/MediBridge"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn px-5 py-2.5 rounded-full bg-surface-dark border border-border-dark text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4 text-primary" />
                      <span>GitHub Code</span>
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
                    <div className="flex-1 bg-surface-dark border border-border-dark px-3 py-0.5 rounded text-[10px] text-slate-400 font-mono flex items-center justify-between">
                      <span className="truncate">https://medi-bridge-eight.vercel.app/portal</span>
                      <span className="text-[8px] px-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded font-semibold">
                        HEALTHCARE SECURED
                      </span>
                    </div>
                  </div>

                  {/* Interface Simulator */}
                  <div className="p-4 flex-1 flex flex-col gap-4 text-left font-sans text-xs">
                    {/* Simulator Navigation Tabs */}
                    <div className="flex border-b border-border-dark overflow-x-auto">
                      <button
                        onClick={() => setMediTab("doctor_ai")}
                        className={`pb-2 px-3 font-semibold font-mono tracking-wide whitespace-nowrap ${
                          mediTab === "doctor_ai"
                            ? "text-primary border-b-2 border-primary"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
                      >
                        Doctor &amp; Gemini AI Triage
                      </button>
                      <button
                        onClick={() => setMediTab("slot_hold")}
                        className={`pb-2 px-3 font-semibold font-mono tracking-wide whitespace-nowrap ${
                          mediTab === "slot_hold"
                            ? "text-secondary border-b-2 border-secondary"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
                      >
                        Patient Slot Hold Engine
                      </button>
                      <button
                        onClick={() => setMediTab("post_visit")}
                        className={`pb-2 px-3 font-semibold font-mono tracking-wide whitespace-nowrap ${
                          mediTab === "post_visit"
                            ? "text-emerald-400 border-b-2 border-emerald-400"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
                      >
                        Post-Visit &amp; Calendar
                      </button>
                    </div>

                    {/* Tab 1: Doctor Console & Gemini Pre-Visit AI */}
                    {mediTab === "doctor_ai" && (
                      <div className="flex flex-col gap-3.5 flex-1 justify-center animate-fadeIn">
                        {/* Doctor Queue Summary */}
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-[#121217] border border-border-dark p-2 rounded">
                            <div className="text-[10px] text-slate-500">Scheduled Today</div>
                            <div className="text-sm font-bold text-white mt-0.5">8 Patients</div>
                          </div>
                          <div className="bg-[#121217] border border-border-dark p-2 rounded">
                            <div className="text-[10px] text-slate-500">Pre-Visit AI Assessed</div>
                            <div className="text-sm font-bold text-primary mt-0.5">100% Complete</div>
                          </div>
                          <div className="bg-[#121217] border border-border-dark p-2 rounded">
                            <div className="text-[10px] text-slate-500">Google Calendar</div>
                            <div className="text-sm font-bold text-emerald-400 mt-0.5">In Sync</div>
                          </div>
                        </div>

                        {/* Real-Time Gemini Pre-Visit Assessment Card */}
                        <div className="bg-[#121217] border border-border-dark rounded-lg overflow-hidden">
                          <div className="bg-surface-dark px-3 py-1.5 border-b border-border-dark flex items-center justify-between font-mono text-[9px] text-slate-400 uppercase tracking-wide">
                            <div className="flex items-center gap-1.5 text-primary font-semibold">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Gemini 1.5 Pre-Visit Clinical Triaging</span>
                            </div>
                            <span className="px-1.5 py-0.5 rounded bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[8px]">
                              Urgency: Medium
                            </span>
                          </div>

                          <div className="p-3 flex flex-col gap-2.5">
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="font-semibold text-white">Rahul Verma (Age 28)</span>
                                <span className="text-[10px] text-slate-500 font-mono ml-2">Slot: 10:30 AM</span>
                              </div>
                              <span className="text-[9px] text-slate-400 font-mono">Dr. Ananya Sharma (Cardiology)</span>
                            </div>

                            <div className="p-2 rounded bg-[#09090d] border border-border-dark/60 text-slate-300 text-[11px] leading-relaxed">
                              <strong className="text-slate-400 font-mono text-[10px] uppercase">Chief Complaint:</strong>{" "}
                              Patient reports persistent morning migraines for 4 days with mild light sensitivity and fatigue.
                            </div>

                            <div className="flex flex-col gap-1">
                              <span className="font-mono text-[9px] text-secondary font-semibold uppercase tracking-wider">
                                Suggested Doctor Inquiries (Generated by AI):
                              </span>
                              <ul className="text-[10px] text-slate-400 list-disc list-inside space-y-0.5">
                                <li>Does caffeine or screen time trigger migraine spikes?</li>
                                <li>Any blurred vision, nausea, or localized throbbing sensation?</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab 2: Patient Slot Hold Concurrency Engine */}
                    {mediTab === "slot_hold" && (
                      <div className="flex flex-col gap-3 flex-1 justify-center animate-fadeIn">
                        {/* Active Slot Hold Notification */}
                        <div className="flex items-center justify-between p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-emerald-400">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 animate-spin text-emerald-400" />
                            <span className="font-mono text-[11px] font-semibold">
                              Temporary Slot Hold Active: 09:42 remaining
                            </span>
                          </div>
                          <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[9px]">
                            LOCKED
                          </span>
                        </div>

                        {/* Booking Details Card */}
                        <div className="bg-[#121217] border border-border-dark p-3.5 rounded-lg flex flex-col gap-2.5">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-semibold text-white text-xs">
                                Dr. Ananya Sharma • MD, DM Cardiology
                              </div>
                              <div className="text-[10px] text-slate-500 font-mono">
                                Date: Today | Slot: 10:30 AM - 11:00 AM
                              </div>
                            </div>
                            <span className="px-2 py-0.5 bg-primary/10 border border-primary/20 text-primary rounded text-[9px] font-mono font-bold">
                              ₹800 Fee
                            </span>
                          </div>

                          <div className="flex flex-col gap-1">
                            <label className="text-[9px] font-mono text-slate-400 uppercase">
                              Patient Symptoms (Passed to Gemini AI):
                            </label>
                            <div className="px-2.5 py-1.5 rounded bg-[#09090d] border border-border-dark text-slate-300 text-[10px] font-mono">
                              Frequent morning headaches and eye strain after laptop work
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-border-dark/60">
                            <span className="text-[9px] text-slate-500 font-mono">
                              DB Uniqueness Guard: active
                            </span>
                            <button className="px-3 py-1 rounded bg-gradient-to-r from-primary to-secondary text-bg-dark font-bold text-[9px] tracking-wider uppercase">
                              Confirm &amp; Book
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Post-Visit Summary & Google Calendar Sync */}
                    {mediTab === "post_visit" && (
                      <div className="flex flex-col gap-3 flex-1 justify-center animate-fadeIn">
                        {/* Google Calendar Sync Status */}
                        <div className="flex items-center justify-between p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-400" />
                            <span className="font-mono text-[10px]">
                              Google Calendar Synced (Event #mb_0918)
                            </span>
                          </div>
                          <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-200 font-mono text-[8px]">
                            OAUTH 2.0 CONNECTED
                          </span>
                        </div>

                        {/* Consultation Comparison */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[10px]">
                          <div className="bg-[#121217] border border-border-dark p-2.5 rounded flex flex-col gap-1">
                            <span className="font-mono text-[9px] text-slate-500 uppercase font-semibold">
                              Doctor Clinical Notes (Authoritative):
                            </span>
                            <p className="text-slate-300 font-mono text-[10px] leading-relaxed">
                              Rx: Naproxen 250mg PO BID p.c. x 5d. Ergonomic screen breaks mandatory. Review in 7d if cephalalgia persists.
                            </p>
                          </div>

                          <div className="bg-[#121217] border border-primary/20 p-2.5 rounded flex flex-col gap-1">
                            <span className="font-mono text-[9px] text-primary uppercase font-semibold flex items-center gap-1">
                              <Sparkles className="w-3 h-3" />
                              Gemini Plain-English Summary:
                            </span>
                            <p className="text-slate-200 text-[10px] leading-relaxed">
                              Take Naproxen twice daily after meals for 5 days. Take regular breaks from screens, stay hydrated, and return for review if headaches continue.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="hireflow-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full bg-surface-dark border border-border-dark rounded-2xl overflow-hidden shadow-2xl relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary to-secondary" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-10 items-stretch">
                {/* Info Column (Left 5 Cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between items-start text-left gap-6">
                  <div className="flex flex-col gap-3">
                    <span className="font-mono text-xs uppercase tracking-wider text-secondary font-semibold">
                      MERN Stack + Gemini AI Screening
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
                      href="https://github.com/Adarsh2059/HireFlow-AI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-btn px-5 py-2.5 rounded-full bg-surface-dark border border-border-dark text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <Github className="w-4 h-4 text-primary" />
                      <span>GitHub</span>
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
                        onClick={() => setHireflowTab("recruiter")}
                        className={`pb-2 px-3 font-semibold font-mono tracking-wide ${
                          hireflowTab === "recruiter"
                            ? "text-primary border-b-2 border-primary"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
                      >
                        Recruiter Console
                      </button>
                      <button
                        onClick={() => setHireflowTab("candidate")}
                        className={`pb-2 px-3 font-semibold font-mono tracking-wide ${
                          hireflowTab === "candidate"
                            ? "text-secondary border-b-2 border-secondary"
                            : "text-slate-500 hover:text-slate-300"
                        }`}
                      >
                        Candidate Discovery
                      </button>
                    </div>

                    {/* Dashboard Tab Content */}
                    {hireflowTab === "recruiter" ? (
                      <div className="flex flex-col gap-3.5 flex-1 justify-center animate-fadeIn">
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
                      <div className="flex flex-col gap-3 flex-1 justify-center animate-fadeIn">
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
            </motion.div>
          )}
        </AnimatePresence>

        {/* Visual Pipeline Flow Chart (Below) */}
        <div className="mt-16 w-full flex flex-col gap-4 items-center">
          <h5 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">
            {activeProject === "medibridge"
              ? "MediBridge End-to-End Clinical & Concurrency Lifecycle"
              : "HireFlow-AI Recruitment Processing Pipeline"}
          </h5>
          <div className="w-full overflow-x-auto pb-4">
            <div className="flex items-center justify-between min-w-[750px] max-w-5xl mx-auto px-4">
              {(activeProject === "medibridge" ? medibridgePipeline : hireflowPipeline).map(
                (step, idx, arr) => {
                  const StepIcon = step.icon;
                  return (
                    <React.Fragment key={idx}>
                      {/* Pipeline Node */}
                      <div className="flex flex-col items-center gap-2 group/node">
                        <div className="w-12 h-12 rounded-full bg-surface-dark border border-border-dark text-slate-400 group-hover/node:border-primary/60 group-hover/node:text-primary group-hover/node:shadow-[0_0_15px_rgba(0,240,255,0.15)] flex items-center justify-center transition-all duration-300">
                          <StepIcon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-[9px] text-slate-400 group-hover/node:text-primary transition-colors tracking-wide max-w-[90px] text-center">
                          {step.label}
                        </span>
                      </div>

                      {/* Connecting arrow, skip on last node */}
                      {idx < arr.length - 1 && (
                        <div className="flex-1 h-[1px] bg-gradient-to-r from-border-dark via-primary/30 to-border-dark mx-2 relative">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary/40 animate-pulse" />
                        </div>
                      )}
                    </React.Fragment>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
