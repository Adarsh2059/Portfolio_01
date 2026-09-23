import React, { useState } from "react";
import { Mail, Github, Linkedin, Copy, Check, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const emailPlaceholder = "adarsh.yadav070605@gmail.com";
  const githubPlaceholder = "https://github.com/Adarsh2059";
  const linkedinPlaceholder = "https://www.linkedin.com/in/adarsh-yadav-35b370282/";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSent(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#08080c] cyber-dots overflow-hidden">
      {/* Decorative Glow */}
      <div className="glow-spot w-96 h-96 bg-primary/5 bottom-[-150px] left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="font-mono text-sm uppercase tracking-widest text-primary mb-3">
            // Get In Touch
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Let's Connect
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-secondary mt-4" />
        </div>

        {/* Contact Container Box */}
        <div className="max-w-5xl mx-auto bg-surface-dark border border-border-dark rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary opacity-60" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-12 items-stretch">
            {/* Info Column (Left 5 Cols) */}
            <div className="md:col-span-5 flex flex-col justify-between text-left gap-8">
              <div className="flex flex-col gap-4">
                <h3 className="font-display font-bold text-2xl text-white leading-tight">
                  Let's build something meaningful.
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  I'm always interested in discussing software engineering opportunities, full-stack systems architecture, machine learning concepts, or DSA problem approaches. Drop a message!
                </p>
              </div>

              {/* Contact details */}
              <div className="flex flex-col gap-4">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-surface-card border border-border-dark group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/5 border border-primary/20 flex items-center justify-center text-primary">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-500 font-mono">EMAIL ADDRESS</span>
                      <span className="text-xs font-mono font-medium text-white truncate max-w-[180px]">
                        {emailPlaceholder}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-surface-dark border border-border-dark text-slate-400 hover:text-primary transition-colors duration-200"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Social Links Panel */}
                <div className="flex gap-3">
                  <a
                    href={githubPlaceholder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-[#0f0f14] border border-border-dark text-slate-400 hover:text-primary hover:border-primary/45 hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2 text-xs font-mono"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={linkedinPlaceholder}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-[#0f0f14] border border-border-dark text-slate-400 hover:text-primary hover:border-primary/45 hover:bg-primary/5 transition-all duration-300 flex items-center justify-center gap-2 text-xs font-mono"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column (Right 7 Cols) */}
            <div className="md:col-span-7 bg-[#0c0c11] border border-border-dark p-6 rounded-2xl flex flex-col justify-center">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[10px] text-slate-400 font-mono font-semibold tracking-wider uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter name"
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-dark border border-border-dark text-white text-xs font-mono focus:border-primary/60 focus:outline-none transition-colors duration-200"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[10px] text-slate-400 font-mono font-semibold tracking-wider uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter email"
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-dark border border-border-dark text-white text-xs font-mono focus:border-primary/60 focus:outline-none transition-colors duration-200"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-[10px] text-slate-400 font-mono font-semibold tracking-wider uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Write message..."
                    className="w-full px-4 py-2.5 rounded-lg bg-surface-dark border border-border-dark text-white text-xs font-mono focus:border-primary/60 focus:outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSent}
                  className={`w-full py-3.5 rounded-xl font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSent
                      ? "bg-emerald-500/25 border border-emerald-500/30 text-emerald-400"
                      : "bg-gradient-to-r from-primary to-secondary text-bg-dark hover:scale-101 shadow-lg hover:shadow-primary/10 active:scale-99 cursor-pointer"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 border-2 border-bg-dark border-t-transparent rounded-full animate-spin" />
                  ) : isSent ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Message Sent Successfully</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
