import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  Code2,
  Database,
  Server,
  BrainCircuit,
  Wrench,
  Layout,
} from "lucide-react";

import {
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiDotnet,
  SiPostman,
} from "react-icons/si";

const categories = [
  { name: "Frontend", icon: Layout },
  { name: "Backend", icon: Server },
  { name: "Database", icon: Database },
  { name: "Languages", icon: Code2 },
  { name: "AI/ML", icon: BrainCircuit },
  { name: "Tools", icon: Wrench },
];

const skills = {
  Frontend: [
    { name: "React", icon: FaReact },
    { name: "Angular", icon: FaAngular },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: FaJs },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Tailwind CSS", icon: SiTailwindcss },
  ],

  Backend: [
    { name: "ASP.NET Core", icon: SiDotnet },
    { name: "C#", icon: Code2 },
    { name: "REST APIs", icon: Server },
    { name: "Entity Framework", icon: Database },
    { name: "JWT Auth", icon: Server },
  ],

  Database: [
    { name: "SQL Server", icon: Code2 },
    { name: "Entity Framework", icon: Database },
    { name: "SQL", icon: Database },
  ],

  Languages: [
    { name: "C#", icon: Code2 },
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: FaJs },
    { name: "Python", icon: FaPython },
  ],

  "AI/ML": [
    { name: "Python", icon: FaPython },
    { name: "Machine Learning", icon: BrainCircuit },
    { name: "Computer Vision", icon: BrainCircuit },
    { name: "LLM Integration", icon: BrainCircuit },
  ],

  Tools: [
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Postman", icon: SiPostman },
    { name: "Visual Studio", icon: Code2 },
    { name: "VS Code", icon: Code2 },
  ],
};

type Category = keyof typeof skills;

const Skills = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Frontend");

  return (
    <section
      id="skills"
      className="relative overflow-hidden
                 py-16 sm:py-20 lg:py-24"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute
                   right-[-180px] top-1/3
                   h-[300px] w-[300px]
                   rounded-full bg-purple-600/[0.06]
                   blur-[110px]
                   sm:h-[400px] sm:w-[400px]
                   lg:blur-[130px]"
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
                       sm:text-sm sm:tracking-[0.25em]"
          >
            What I Work With
          </p>

          <h2
            className="text-3xl font-bold text-white
                       sm:text-4xl md:text-5xl"
          >
            Technical{" "}
            <span
              className="bg-gradient-to-r
                         from-blue-400 to-purple-500
                         bg-clip-text text-transparent"
            >
              Skills
            </span>
          </h2>

          <p
            className="mx-auto mt-4 max-w-2xl
                       text-sm leading-7 text-gray-400
                       sm:mt-5 sm:text-base"
          >
            Technologies and tools I use to build modern,
            scalable and secure applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div
          className="no-scrollbar -mx-4 mt-9
                     flex gap-2 overflow-x-auto
                     px-4 pb-3
                     sm:mx-0 sm:mt-10
                     sm:flex-wrap sm:justify-center
                     sm:overflow-visible sm:px-0
                     lg:mt-12 lg:gap-3"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            const active =
              activeCategory === category.name;

            return (
              <button
                key={category.name}
                type="button"
                onClick={() =>
                  setActiveCategory(
                    category.name as Category
                  )
                }
                className={`flex shrink-0 items-center
                            gap-2 rounded-xl border
                            px-3.5 py-2.5
                            text-xs font-medium
                            transition
                            sm:px-4 sm:text-sm
                            lg:px-5 lg:py-3
                  ${
                    active
                      ? "border-blue-500/50 bg-blue-500/15 text-blue-300"
                      : "border-white/10 bg-white/[0.025] text-gray-400 hover:border-blue-500/30 hover:text-white"
                  }`}
              >
                <Icon
                  size={16}
                  className="shrink-0"
                />

                {category.name}
              </button>
            );
          })}
        </div>

        {/* Skill Cards */}
        <div
          className="mx-auto mt-6
                     max-w-5xl
                     sm:mt-8 lg:mt-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -15,
              }}
              transition={{
                duration: 0.25,
              }}
              className="grid grid-cols-2
                         gap-3
                         sm:grid-cols-3
                         sm:gap-4
                         lg:grid-cols-4"
            >
              {skills[activeCategory].map(
                (skill, index) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{
                        opacity: 0,
                        scale: 0.92,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.04,
                      }}
                      whileHover={{
                        y: -5,
                        scale: 1.02,
                      }}
                      className="group flex
                                 min-h-28 min-w-0
                                 flex-col items-center
                                 justify-center
                                 rounded-xl border
                                 border-white/10
                                 bg-white/[0.025]
                                 p-3 text-center
                                 backdrop-blur-xl
                                 transition
                                 hover:border-blue-500/30
                                 hover:bg-blue-500/[0.05]
                                 sm:min-h-32
                                 sm:rounded-2xl
                                 sm:p-5
                                 lg:min-h-36
                                 lg:p-6"
                    >
                      <Icon
                        className="h-7 w-7
                                   shrink-0
                                   text-gray-400
                                   transition
                                   group-hover:text-blue-400
                                   sm:h-8 sm:w-8
                                   lg:h-[38px]
                                   lg:w-[38px]"
                      />

                      <p
                        className="mt-3
                                   break-words
                                   text-xs font-medium
                                   leading-5
                                   text-gray-300
                                   transition
                                   group-hover:text-white
                                   sm:mt-4
                                   sm:text-sm
                                   lg:text-base"
                      >
                        {skill.name}
                      </p>
                    </motion.div>
                  );
                }
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;