import { motion } from "motion/react";
import {
  Code2,
  Lightbulb,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const qualities = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable and structured applications.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning technical challenges into practical solutions.",
  },
  {
    icon: Rocket,
    title: "Quick Learner",
    description: "Continuously exploring modern technologies and tools.",
  },
  {
    icon: ShieldCheck,
    title: "Security Mindset",
    description: "Building applications with security in mind.",
  },
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
                   lg:h-[400px] lg:w-[400px]
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
            A developer focused on building useful, scalable and
            secure digital experiences.
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

                {/* Code icon */}
                <div
                  className="relative flex h-28 w-28
                             items-center justify-center
                             rounded-2xl border
                             border-blue-500/30
                             bg-gradient-to-br
                             from-blue-500/10
                             to-purple-500/10
                             sm:h-36 sm:w-36
                             sm:rounded-3xl
                             md:h-40 md:w-40"
                >
                  <Code2
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
              <h3
                className="text-xl font-bold text-white
                           sm:text-2xl"
              >
                Full Stack Developer
              </h3>

              <p
                className="mt-4 text-sm leading-7
                           text-gray-400
                           sm:mt-5 sm:text-base
                           sm:leading-8"
              >
                I'm passionate about building modern web applications
                and solving real-world problems through technology.
                My development experience includes frontend interfaces,
                backend APIs, authentication systems and relational
                databases.
              </p>

              <p
                className="mt-4 text-sm leading-7
                           text-gray-400
                           sm:text-base sm:leading-8"
              >
                I primarily work with technologies such as React,
                TypeScript, ASP.NET Core and SQL Server. I'm also
                exploring artificial intelligence, machine learning
                and cybersecurity through practical projects.
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-3">
                {[
                  "React",
                  "TypeScript",
                  "ASP.NET Core",
                  "C#",
                  "SQL Server",
                  "REST APIs",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border
                               border-blue-500/20
                               bg-blue-500/[0.07]
                               px-3 py-1.5
                               text-xs text-blue-300
                               sm:px-4 sm:py-2
                               sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
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

                <h4 className="text-sm font-bold text-white sm:text-base">
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