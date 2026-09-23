import React from "react";
import { FileText, Download, Sparkles } from "lucide-react";

export default function ResumeCTA() {
  const handleViewResume = () => {
    window.open("/Adarsh_yadav_Resume(N).pdf", "_blank");
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Adarsh_yadav_Resume(N).pdf";
    link.download = "Adarsh_yadav_Resume(N).pdf";
    link.click();
  };

  return (
    <section id="resume" className="relative py-20 bg-[#0a0a0f] cyber-grid overflow-hidden">
      {/* Decorative Glow */}
      <div className="glow-spot w-72 h-72 bg-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-surface-dark to-[#121218] border border-border-dark p-8 md:p-12 rounded-3xl shadow-2xl relative text-center flex flex-col items-center gap-6 group">
          {/* Top subtle glow line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary opacity-60 rounded-t-3xl" />

          <div className="w-12 h-12 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
            <FileText className="w-6 h-6" />
          </div>

          <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
            Want the complete picture?
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
            Explore my resume for a concise overview of my academic background (VIT Bhopal CSE '27), full-stack project pipelines (HireFlow-AI), algorithms practice, and tech stack details.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
            <button
              onClick={handleViewResume}
              className="glow-btn w-full sm:w-auto px-8 py-3 rounded-full bg-surface-dark border border-border-dark text-white text-sm font-semibold tracking-wider uppercase hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span>View Resume</span>
            </button>

            <button
              onClick={handleDownloadResume}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 text-primary text-sm font-semibold tracking-wider uppercase transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
