"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/resume";
import { ExternalLink, FolderOpen } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16">
      {/* Mobile section header */}
      <div className="lg:hidden mb-8 flex items-center gap-4">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-white-tint whitespace-nowrap">
          Projects
        </h2>
        <div className="h-px flex-1 bg-navy-lighter" />
      </div>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group p-6 rounded-lg bg-navy-light border border-navy-lighter hover:border-teal/30 transition-all duration-300 hover:shadow-lg hover:shadow-teal/5 hover:-translate-y-0.5 cursor-default"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-start gap-3">
                <FolderOpen
                  size={22}
                  className="text-teal flex-shrink-0 mt-0.5 group-hover:text-teal"
                />
                <div>
                  <h3 className="text-base font-semibold text-slate-light group-hover:text-teal transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs text-teal/70 mt-0.5">{project.subtitle}</p>
                </div>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate hover:text-teal transition-colors duration-200 flex-shrink-0 mt-0.5"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>

            <p className="text-sm text-slate leading-relaxed mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-medium rounded-full bg-teal/10 text-teal"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
