"use client";

import { motion } from "framer-motion";
import { skills, personal, experience } from "@/data/resume";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="mb-32 scroll-mt-16">
      {/* Mobile section header */}
      <div className="lg:hidden mb-8 flex items-center gap-4">
        <h2 className="text-xs font-semibold tracking-widest uppercase text-white-tint whitespace-nowrap">
          About
        </h2>
        <div className="h-px flex-1 bg-navy-lighter" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="space-y-4 text-slate leading-relaxed"
      >
        <motion.p variants={fadeUp}>
          I&apos;m a fullstack JavaScript engineer with{" "}
          <span className="text-slate-light font-medium">
            {personal.experienceYears}+ years of experience
          </span>{" "}
          building production-grade web applications. I specialize in
          backend-heavy systems — microservices, real-time architectures,
          payment integrations, and API design — while being equally comfortable
          on the frontend with{" "}
          <span className="text-slate-light font-medium">React.js</span>.
        </motion.p>

        <motion.p variants={fadeUp}>
          Currently at{" "}
          <a
            href={experience[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:underline underline-offset-4"
          >
            {experience[0].company}
          </a>{" "}
          as a {experience[0].role}, I&apos;m leading development on a
          multi-tenant SaaS security platform — building complex contract
          workflows and integrating third-party services like HubSpot and Nylas.
        </motion.p>

        <motion.p variants={fadeUp}>
          I&apos;ve shipped products across fintech (BNPL), blockchain wallets,
          real-time car auction platforms, and e-commerce — always with a focus
          on clean architecture, performance, and shipping things that work in
          the real world.
        </motion.p>

        <motion.p variants={fadeUp}>
          Outside of work, I&apos;m a foodie, traveller, and table tennis
          enthusiast based in Lahore, Pakistan.
        </motion.p>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 space-y-5"
      >
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-slate-dark mb-2.5">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-navy-light text-teal border border-teal/20 hover:border-teal/50 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
