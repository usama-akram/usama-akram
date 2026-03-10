"use client";

import { personal } from "@/data/resume";
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

interface SidebarProps {
  activeSection: string;
}

export default function Sidebar({ activeSection }: SidebarProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-2/5 lg:flex-shrink-0 flex flex-col justify-between py-24">
      <div>
        {/* Identity */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white-tint tracking-tight mb-2">
            {personal.name}
          </h1>
          <h2 className="text-xl font-medium text-teal mb-4">
            {personal.title}
          </h2>
          <p className="text-slate text-sm leading-relaxed max-w-xs">
            {personal.tagline}
          </p>
          <div className="flex items-center gap-1.5 mt-4 text-slate-dark text-xs">
            <MapPin size={12} />
            <span>{personal.location}</span>
          </div>
        </div>

        {/* Nav — desktop only */}
        <nav className="hidden lg:block">
          <ul className="space-y-1">
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`group flex items-center gap-4 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                    activeSection === id
                      ? "text-white-tint"
                      : "text-slate hover:text-slate-light"
                  }`}
                >
                  <span
                    className={`block h-px transition-all duration-300 ${
                      activeSection === id
                        ? "w-16 bg-teal"
                        : "w-8 bg-slate group-hover:w-16 group-hover:bg-slate-light"
                    }`}
                  />
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Resume download */}
      <a
        href="/resume.pdf"
        download="Muhammad_Usama_Akram_Resume.pdf"
        className="mt-10 lg:mt-8 inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold tracking-widest uppercase text-teal border border-teal/40 rounded hover:bg-teal/10 transition-colors duration-200 w-fit"
      >
        <Download size={14} />
        Resume
      </a>

      {/* Social links */}
      <div className="flex items-center gap-5 mt-6 lg:mt-6">
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-teal transition-colors duration-200"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate hover:text-teal transition-colors duration-200"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="text-slate hover:text-teal transition-colors duration-200"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>
    </aside>
  );
}
