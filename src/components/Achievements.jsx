import React from "react";
import { Award, Trophy, Users, Target } from "lucide-react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Dr. G. Viswanathan Coding Challenge",
    description: "Cleared the prestigious university-wide coding challenge conducted across participating students, demonstrating algorithmic accuracy, speed, and problem-solving excellence.",
    badge: "University Challenge",
    icon: Trophy,
  },
  {
    title: "Smart India Hackathon 2024",
    description: "Selected for the Internal Round of Smart India Hackathon (SIH) 2024, formulating high-impact software solutions for real-world national problems.",
    badge: "National Hackathon",
    icon: Award,
  },
  {
    title: "Zelestra × AWS ML Ascend Challenge (2nd Ed.)",
    description: "Led a cross-functional engineering team to a Top 5% finish among hundreds of competitors, designing and deploying applied machine learning pipelines.",
    badge: "Top 5% Finalist",
    icon: Target,
  },
  {
    title: "VITBMUN Diplomacy & Leadership",
    description: "Active delegate in Model United Nations, cultivating structured debate, communication, rapid consensus building, and diplomatic negotiation skills.",
    badge: "Leadership & Debate",
    icon: Users,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 bg-[#08080c] cyber-dots overflow-hidden">
      {/* Decorative Glow */}
      <div className="glow-spot w-80 h-80 bg-secondary/5 top-1/2 left-[-150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <span className="font-mono text-sm uppercase tracking-widest text-primary mb-3">
            // Milestones &amp; Honors
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Key Achievements
          </h2>
          <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-secondary mt-4" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
                className="glow-card p-6 rounded-2xl border border-border-dark bg-[#0f0f14] text-left flex gap-5 group"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-surface-dark border border-border-dark text-slate-400 group-hover:text-primary group-hover:border-primary/40 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary font-mono text-[9px] uppercase tracking-wider font-semibold">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
