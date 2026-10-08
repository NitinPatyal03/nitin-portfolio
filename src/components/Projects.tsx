import { motion } from "motion/react";
import codeMindImage from "../assets/projects/codemind-ai-dashboard.png";
import arogyaAIImage from "../assets/projects/arogyaai-dashboard.png";
import cyberShieldImage from "../assets/projects/cybershield-dashboard.png";
import creditGuardImage from "../assets/projects/creditguard-dashboard.png";
import ecommerceImage from "../assets/projects/ecommerce-dashboard.png";

import {
  ArrowUpRight,
  ShieldCheck,
  BrainCircuit,
  ShoppingCart,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "CodeMind AI",
    subtitle: "AI-Powered Developer Platform",

    description:
      "An AI-powered developer platform designed to assist developers with coding, problem solving and software development workflows through an intelligent AI interface.",

    icon: BrainCircuit,
    image: codeMindImage,

    technologies: [
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "AI / LLM",
      "REST API",
    ],

    github:
      "https://github.com/NitinPatyal03/codemind-ai-frontend",

    live:
      "https://codemind-ai-platform.netlify.app/",

    featured: true,
  },

  {
    title: "CyberShield",
    subtitle: "Web & Network Security Dashboard",

    description:
      "A security platform for scanning and monitoring websites, analyzing vulnerabilities, tracking security scores and visualizing security risks through an interactive dashboard.",

    icon: ShieldCheck,
    image: cyberShieldImage,

    technologies: [
      "React",
      "TypeScript",
      "ASP.NET Core",
      "SQL Server",
      "REST API",
      "Cybersecurity",
    ],

    github:
      "https://github.com/NitinPatyal03/CyberShield",

    live:
      "https://cyber-shield-lac-rho.vercel.app/",

    featured: false,
  },

  {
  title: "CreditGuard",
  subtitle: "AI-Powered Credit Risk Prediction Platform",

  description:
    "An AI-powered credit risk prediction platform that uses data preprocessing, feature engineering, machine learning model tuning and optimized classification thresholds to improve credit risk assessment.",

  icon: BrainCircuit,
  image: creditGuardImage,

  technologies: [
    "Python",
    "Pandas",
    "Scikit-learn",
    "FastAPI",
    "React",
    "Machine Learning",
  ],

  github:
    "https://github.com/NitinPatyal03/CreditGuard",

  live:
    "https://creditguard-analytics.netlify.app/",

  featured: false,
},

  {
    title: "ArogyaAI",
    subtitle: "AI-Powered Healthcare Assistant",

    description:
      "An intelligent healthcare platform featuring disease prediction, AI assistance, health monitoring, appointments, medicine reminders and prescription OCR.",

    icon: BrainCircuit,
    image: arogyaAIImage,

    technologies: [
      "React",
      "Python",
      "Flask",
      "MongoDB",
      "Machine Learning",
      "Gemini AI",
    ],

    github:
      "https://github.com/NitinPatyal03/ArogyaAI-",

    live:
      "https://arogyaaiv2.netlify.app/",

    featured: false,
  },

  {
    title: "E-Commerce Platform",
    subtitle: "Full Stack Shopping Application",

    description:
      "A full-stack e-commerce platform featuring user authentication, product and content management, shopping cart functionality, order management and role-based administration.",

    icon: ShoppingCart,
    image: ecommerceImage,

    technologies: [
      "ASP.NET Core",
      "C#",
      "SQL Server",
      "Identity",
      "Entity Framework Core",
      "REST API",
    ],

    github:
      "https://github.com/NitinPatyal03/Ecomm_Project_0854",

    live: "",

    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden
                 py-16 sm:py-20 lg:py-24"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute
                   left-[-200px] top-1/3
                   h-[320px] w-[320px]
                   rounded-full bg-blue-600/[0.05]
                   blur-[110px]
                   sm:h-[400px] sm:w-[400px]
                   lg:h-[500px] lg:w-[500px]
                   lg:blur-[150px]"
      />

      <div
        className="relative z-10 mx-auto
                   w-full max-w-7xl
                   px-4 sm:px-6 lg:px-8"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p
            className="mb-3 text-xs font-semibold
                       uppercase tracking-[0.2em]
                       text-blue-400
                       sm:text-sm
                       sm:tracking-[0.25em]"
          >
            What I've Built
          </p>

          <h2
            className="text-3xl font-bold text-white
                       sm:text-4xl md:text-5xl"
          >
            Featured{" "}
            <span
              className="bg-gradient-to-r
                         from-blue-400 to-purple-500
                         bg-clip-text text-transparent"
            >
              Projects
            </span>
          </h2>

          <p
            className="mx-auto mt-4 max-w-2xl
                       text-sm leading-7 text-gray-400
                       sm:mt-5 sm:text-base"
          >
            A selection of projects demonstrating my work across
            full-stack development, artificial intelligence and
            cybersecurity.
          </p>
        </motion.div>

        {/* Projects */}
        <div
          className="mt-10 grid gap-5
                     sm:mt-12 sm:gap-6
                     lg:mt-14 lg:grid-cols-2
                     lg:gap-7"
        >
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -5 }}
                className={`group relative overflow-hidden
                            rounded-2xl border
                            bg-white/[0.025]
                            backdrop-blur-xl
                            transition
                            sm:rounded-3xl
                  ${
                    project.featured
                      ? "border-blue-500/30 lg:col-span-2"
                      : "border-white/10 hover:border-blue-500/30"
                  }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div
                    className="absolute right-3 top-3
                               z-20 rounded-full
                               border border-blue-500/30
                               bg-[#050816]/80
                               px-3 py-1.5
                               text-[9px] font-semibold
                               text-blue-300
                               backdrop-blur-md
                               sm:right-5 sm:top-5
                               sm:px-4 sm:py-2
                               sm:text-xs"
                  >
                    ⭐ FLAGSHIP PROJECT
                  </div>
                )}

                <div
                  className={`grid ${
                    project.featured
                      ? "lg:grid-cols-[1.1fr_1fr]"
                      : ""
                  }`}
                >
                  {/* Visual */}
                  <div
                    className={`relative overflow-hidden
                      ${
                        project.featured
                          ? `
                            h-[210px]
                            border-b border-white/10
                            sm:h-[300px]
                            md:h-[340px]
                            lg:h-auto
                            lg:min-h-[390px]
                            lg:border-b-0
                            lg:border-r
                            lg:border-white/10
                          `
                          : `
                            h-[210px]
                            border-b border-white/10
                            sm:h-[260px]
                            md:h-[280px]
                          `
                      }`}
                  >
                    {project.image ? (
                      <>
                        <img
                          src={project.image}
                          alt={`${project.title} project interface`}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0
                                     h-full w-full
                                     object-cover object-top
                                     transition-transform
                                     duration-500
                                     group-hover:scale-[1.03]"
                        />

                        <div
                          className="pointer-events-none
                                     absolute inset-0
                                     bg-gradient-to-t
                                     from-[#050816]/25
                                     via-transparent
                                     to-transparent"
                        />
                      </>
                    ) : (
                      <div
                        className="flex h-full min-h-[210px]
                                   items-center justify-center
                                   bg-gradient-to-br
                                   from-blue-500/[0.08]
                                   to-purple-500/[0.08]"
                      >
                        <div
                          className="absolute h-36 w-36
                                     rounded-full
                                     bg-blue-500/10
                                     blur-3xl
                                     sm:h-48 sm:w-48"
                        />

                        <div
                          className="relative flex
                                     h-24 w-24
                                     items-center justify-center
                                     rounded-2xl border
                                     border-blue-500/30
                                     bg-[#080d1c]
                                     text-blue-400
                                     shadow-[0_0_60px_rgba(59,130,246,0.15)]
                                     sm:h-28 sm:w-28
                                     sm:rounded-3xl"
                        >
                          <Icon
                            className="h-11 w-11
                                       sm:h-[52px]
                                       sm:w-[52px]"
                            strokeWidth={1.3}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Information */}
                  <div
                    className="flex min-w-0
                               flex-col p-5
                               sm:p-7
                               md:p-8
                               lg:p-10"
                  >
                    <p
                      className="text-xs font-medium
                                 leading-5 text-blue-400
                                 sm:text-sm"
                    >
                      {project.subtitle}
                    </p>

                    <h3
                      className="mt-2 text-xl
                                 font-bold text-white
                                 sm:text-2xl
                                 md:text-3xl"
                    >
                      {project.title}
                    </h3>

                    <p
                      className="mt-4 text-sm
                                 leading-7 text-gray-400
                                 sm:mt-5
                                 sm:text-base"
                    >
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div
                      className="mt-5 flex flex-wrap
                                 gap-1.5 sm:mt-6
                                 sm:gap-2"
                    >
                      {project.technologies.map(
                        (tech) => (
                          <span
                            key={tech}
                            className="rounded-full
                                       border
                                       border-white/10
                                       bg-white/[0.04]
                                       px-2.5 py-1.5
                                       text-[10px]
                                       text-gray-300
                                       sm:px-3
                                       sm:text-xs"
                          >
                            {tech}
                          </span>
                        )
                      )}
                    </div>

                    {/* Buttons */}
                    <div
                      className="mt-auto flex
                                 flex-col gap-3
                                 pt-6
                                 sm:flex-row
                                 sm:flex-wrap
                                 sm:pt-8"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex w-full
                                   items-center
                                   justify-center gap-2
                                   rounded-xl border
                                   border-white/10
                                   bg-white/[0.04]
                                   px-5 py-3
                                   text-sm font-semibold
                                   text-white
                                   transition
                                   hover:border-blue-500/40
                                   hover:bg-blue-500/10
                                   sm:w-auto"
                      >
                        <FaGithub size={17} />
                        Source Code
                      </a>

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex w-full
                                     items-center
                                     justify-center gap-2
                                     rounded-xl
                                     bg-blue-600
                                     px-5 py-3
                                     text-sm font-semibold
                                     text-white
                                     transition
                                     hover:bg-blue-500
                                     sm:w-auto"
                        >
                          Live Demo
                          <ArrowUpRight size={17} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-9 text-center
                     sm:mt-10 lg:mt-12"
        >
          <a
            href="https://github.com/NitinPatyal03"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center
                       justify-center gap-2
                       text-xs font-medium
                       text-gray-400 transition
                       hover:text-blue-400
                       sm:text-sm"
          >
            <FaGithub
              size={18}
              className="shrink-0"
            />

            <span>
              View more projects on GitHub
            </span>

            <ArrowUpRight
              size={16}
              className="shrink-0"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;