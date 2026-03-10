"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";

const SECTIONS = ["about", "experience", "projects"];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "about";

      SECTIONS.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 300 <= scrollY) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-navy font-sans">
      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-24">
        <div className="lg:flex lg:gap-8">
          {/* Sticky Sidebar */}
          <Sidebar activeSection={activeSection} />

          {/* Main scrollable content */}
          <main className="pt-24 pb-32 lg:w-3/5">
            <About />
            <Experience />
            <Projects />
          </main>
        </div>
      </div>
    </div>
  );
}
