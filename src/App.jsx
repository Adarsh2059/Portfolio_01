import React from "react";
import CursorEffect from "./components/CursorEffect";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import FeaturedProject from "./components/FeaturedProject";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import DSAPractice from "./components/DSAPractice";
import Achievements from "./components/Achievements";
import ResumeCTA from "./components/ResumeCTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-bg-dark text-slate-200 selection:bg-primary/30 selection:text-white">
      {/* Global Noise Overlay */}
      <div className="noise-overlay" />

      {/* Advanced Interaction Utilities */}
      <CursorEffect />
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <Projects />
        <Journey />
        <DSAPractice />
        <Achievements />
        <ResumeCTA />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
