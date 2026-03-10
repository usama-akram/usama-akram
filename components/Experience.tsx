"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/resume";
import { ArrowUpRight } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="mb-32 scroll-mt-16">
      {/* Mobile section header */}
      <div className="lg:hidden mb-8 flex items-center gap-4">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-white-tint whitespace-nowrap">
          Experience
        </h2>
        <div className="h-px flex-1 bg-navy-lighter" />
      </div>

      <div className="space-y-2">
        {experience.map((job, i) => (
          <motion.div
            key={job.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="group relative grid sm:grid-cols-8 gap-4 p-4 rounded-lg transition-all duration-300 hover:bg-navy-light hover:shadow-lg"
          >
            {/* Date */}
            <div className="sm:col-span-2 pt-0.5">
              <span className="text-xs font-semibold tracking-wide uppercase text-slate-dark whitespace-nowrap">
                {job.period}
              </span>
            </div>

            {/* Content */}
            <div className="sm:col-span-6">
              <h3 className="text-base font-semibold text-slate-light group-hover:text-teal transition-colors duration-200 mb-0.5 flex items-center gap-1">
                {job.role}
                <span className="text-slate-dark">·</span>
                {job.url ? (
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 hover:text-teal"
                  >
                    {job.company}
                    <ArrowUpRight size={14} className="opacity-60" />
                  </a>
                ) : (
                  <span>{job.company}</span>
                )}
              </h3>

              <ul className="mt-2.5 space-y-1.5">
                {job.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-2 text-sm text-slate leading-relaxed">
                    <span className="text-teal mt-1 flex-shrink-0 text-xs">▹</span>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-teal/10 text-teal"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
