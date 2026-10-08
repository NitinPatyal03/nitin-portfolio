import { motion } from "motion/react";
import {
  Code2,
  Lightbulb,
  ShieldCheck,
  BrainCircuit,
  Database,
} from "lucide-react";

const qualities = [
  {
    icon: BrainCircuit,
    title: "AI & ML Focus",
    description:
      "Building practical AI/ML solutions using Python, Scikit-learn, LLMs and modern AI tools.",
  },
  {
    icon: Code2,
    title: "Full Stack",
    description:
      "Developing responsive frontend applications and scalable backend APIs.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description:
      "Turning real-world problems into practical, data-driven software solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Security Mindset",
    description:
      "Building applications with authentication, RBAC and security-focused workflows.",
  },
];

const technologies = [
  "Python",
  "React.js",
  "TypeScript",
  "FastAPI",
  "ASP.NET Core",
  "Flask",
  "Scikit-learn",
  "LLMs",
  "PostgreSQL",
  "MongoDB",
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2
                   h-[280px] w-[280px]
                   -translate-x-1/2 -translate-y-1/2
                   rounded-full bg-blue-600/[0.05]
                   blur-[110px]
                   sm:h-[350px] sm:w-[350px]
                   lg:h-[450px] lg:w-[450px]
                   lg:blur-[130px]"
      />

      <div
        className="relative z-10 mx-auto w-full max-w-7xl
                   px-4 sm:px-6 lg:px-8"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12 lg:mb-14"
        >
          <p
            className="mb-3 text-xs font-semibold uppercase
                       tracking-[0.2em] text-blue-400
                       sm:text-sm sm:tracking-[0.25em]"
          >
            Get To Know Me
          </p>

          <h2
            className="text-3xl font-bold text-white
                       sm:text-4xl md:text-5xl"
          >
            About{" "}
            <span
              className="bg-gradient-to-r from-blue-400
                         to-purple-500 bg-clip-text
                         text-transparent"
            >
              Me
            </span>
          </h2>

          <p
            className="mx-auto mt-4 max-w-2xl
                       text-sm leading-7 text-gray-400
                       sm:mt-5 sm:text-base"
          >
            AI Engineer and Full Stack Developer focused on building
            intelligent, scalable and secure digital solutions.
          </p>
        </motion.div>

        {/* Main About Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-white/10
                     bg-white/[0.03] p-5
                     backdrop-blur-xl
                     sm:rounded-3xl sm:p-7
                     md:p-9 lg:p-12"
        >
          <div
            className="grid items-center gap-8
                       sm:gap-10
                       lg:grid-cols-[0.9fr_1.5fr]
                       lg:gap-12"
          >
            {/* Left visual */}
            <div className="flex items-center justify-center">
              <div
                className="relative flex h-48 w-48
                           items-center justify-center
                           sm:h-56 sm:w-56
                           md:h-64 md:w-64"
              >
                {/* Outer circle */}
                <div
                  className="absolute h-48 w-48 rounded-full
                             border border-blue-500/20
                             sm:h-56 sm:w-56
                             md:h-64 md:w-64"
                />

                {/* Inner circle */}
                <div
                  className="absolute h-40 w-40 rounded-full
                             border border-purple-500/20
                             sm:h-44 sm:w-44
                             md:h-52 md:w-52"
                />

                {/* Glow */}
                <div
                  className="absolute h-32 w-32 rounded-full
                             bg-blue-500/10 blur-3xl
                             sm:h-40 sm:w-40
                             md:h-44 md:w-44"
                />

                {/* AI / Code icon */}
                <div
                  className="relative flex h-28 w-28
                             items-center justify-center
                             rounded-2xl border
                             border-blue-500/30
                             bg-gradient-to-br
                             from-blue-500/10
                             to-purple-500/10
                             shadow-[0_0_60px_rgba(59,130,246,0.12)]
                             sm:h-36 sm:w-36
                             sm:rounded-3xl
                             md:h-40 md:w-40"
                >
                  <BrainCircuit
                    strokeWidth={1.3}
                    className="h-12 w-12 text-blue-400
                               sm:h-14 sm:w-14
                               md:h-[70px] md:w-[70px]"
                  />
                </div>
              </div>
            </div>

            {/* Right content */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <h3
                  className="text-xl font-bold text-white
                             sm:text-2xl"
                >
                  AI Engineer & Full Stack Developer
                </h3>

                <span
                  className="rounded-full border border-blue-500/20
                             bg-blue-500/10 px-3 py-1
                             text-xs font-medium text-blue-300"
                >
                  AI / ML
                </span>
              </div>

              <p
                className="mt-4 text-sm leading-7
                           text-gray-400
                           sm:mt-5 sm:text-base
                           sm:leading-8"
              >
                I'm a Computer Science Engineering graduate passionate
                about building AI-powered, scalable and secure software
                solutions. My experience spans full-stack development,
                machine learning, REST APIs, data processing and cloud
                deployment.
              </p>

              <p
                className="mt-4 text-sm leading-7
                           text-gray-400
                           sm:text-base sm:leading-8"
              >
                I work across the stack using Python, React.js,
                TypeScript, FastAPI, Flask and ASP.NET Core, while
                exploring LLM integration, machine learning and
                data-driven applications through practical projects.
              </p>

              {/* Technologies */}
              <div className="mt-6 sm:mt-8">
                <div className="mb-3 flex items-center gap-2">
                  <Database
                    size={17}
                    className="text-blue-400"
                  />

                  <span className="text-sm font-semibold text-gray-300">
                    Core Technologies
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border
                                 border-blue-500/20
                                 bg-blue-500/[0.07]
                                 px-3 py-1.5
                                 text-xs text-blue-300
                                 transition hover:border-blue-500/40
                                 hover:bg-blue-500/10
                                 sm:px-4 sm:py-2
                                 sm:text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Qualities */}
        <div
          className="mt-5 grid gap-3
                     sm:mt-6 sm:grid-cols-2 sm:gap-4
                     lg:mt-8 lg:grid-cols-4 lg:gap-5"
        >
          {qualities.map((quality, index) => {
            const Icon = quality.icon;

            return (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="rounded-2xl border
                           border-white/10
                           bg-white/[0.025]
                           p-5 transition
                           hover:border-blue-500/30
                           hover:bg-blue-500/[0.04]
                           sm:p-6"
              >
                <div
                  className="mb-4 flex h-10 w-10
                             items-center justify-center
                             rounded-xl bg-blue-500/10
                             text-blue-400
                             sm:mb-5 sm:h-11 sm:w-11"
                >
                  <Icon size={21} />
                </div>

                <h4
                  className="text-sm font-bold text-white
                             sm:text-base"
                >
                  {quality.title}
                </h4>

                <p
                  className="mt-2 text-xs leading-5
                             text-gray-500
                             sm:text-sm sm:leading-6"
                >
                  {quality.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;