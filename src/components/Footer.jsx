import React from "react";
import { Github, Linkedin, Mail, FileText, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-bg-dark border-t border-border-dark py-12 md:py-16 overflow-hidden">
      {/* Decorative Glow Spot */}
      <div className="glow-spot w-72 h-72 bg-secondary/10 -bottom-24 -left-24" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <a href="#home" className="font-display font-bold text-2xl text-white tracking-wide">
            Adarsh<span className="text-primary"> Yadav</span>
          </a>
          <p className="text-slate-400 font-mono text-sm">"Building. Learning. Solving."</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/Adarsh2059"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-surface-dark border border-border-dark text-slate-400 hover:text-primary hover:border-primary/40 hover:scale-115 transition-all duration-300"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/adarsh-yadav-35b370282/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-surface-dark border border-border-dark text-slate-400 hover:text-primary hover:border-primary/40 hover:scale-115 transition-all duration-300"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:adarsh.yadav070605@gmail.com"
            className="p-2.5 rounded-full bg-surface-dark border border-border-dark text-slate-400 hover:text-primary hover:border-primary/40 hover:scale-115 transition-all duration-300"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="/Adarsh_yadav_Resume(N).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-surface-dark border border-border-dark text-slate-400 hover:text-primary hover:border-primary/40 hover:scale-115 transition-all duration-300"
            title="Resume"
          >
            <FileText className="w-5 h-5" />
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-surface-dark border border-border-dark text-slate-400 hover:text-primary hover:border-primary/40 hover:scale-110 active:scale-95 transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          <p className="text-xs text-slate-500 font-mono">
            &copy; 2026 Adarsh Yadav. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
