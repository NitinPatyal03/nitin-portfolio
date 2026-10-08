import { motion } from "motion/react";

import {
  GraduationCap,
  Award,
  CalendarDays,
  MapPin,
  Code2,
  ShieldCheck,
  BarChart3,
  ExternalLink,
} from "lucide-react";

const certifications = [
  {
    title: "Developing Services using ASP.NET Core Web API",
    issuer: "Infosys Springboard",
    year: "2026",
    date: "October 8, 2026",
    file: "/certificates/developing-services-aspnet-core-web-api-infosys.pdf",
    icon: Code2,
  },
  {
    title: "Ethics & Generative AI (GenAI)",
    issuer: "Infosys Springboard",
    year: "2026",
    date: "August 18, 2026",
    file: "/certificates/ethics-generative-ai-infosys.pdf",
    icon: Award,
  },
  {
    title: "Programming Using Java",
    issuer: "Infosys Springboard",
    year: "2026",
    date: "May 3, 2026",
    file: "/certificates/Infosys.pdf",
    icon: Code2,
  },
  // {
  //   title: "AR/VR Training",
  //   issuer: "Internshala",
  //   year: "2025",
  //   date: "July 17, 2025",
  //   file: "/certificates/ar-vr-training-internshala.pdf",
  //   icon: Code2,
  // },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    year: "2024",
    date: "June 27, 2024",
    file: "/certificates/introduction-to-cybersecurity-cisco.pdf",
    icon: ShieldCheck,
  },
  {
    title: "Ethical Hacking",
    issuer: "Internshala",
    year: "2024",
    date: "June 25, 2024",
    file: "/certificates/ethical-hacking-internshala.pdf",
    icon: ShieldCheck,
  },
  {
    title: "Data Analytics with Tableau",
    issuer: "Jobaaj Learning",
    year: "2023",
    icon: BarChart3,
  },
];

const Journey = () => {
  return (
    <section
      id="education"
      className="relative overflow-hidden
                 py-16 sm:py-20 lg:py-24"
    >
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute
                   right-[-180px] top-1/3
                   h-[300px] w-[300px]
                   rounded-full bg-purple-600/[0.05]
                   blur-[110px]
                   sm:h-[380px] sm:w-[380px]
                   lg:h-[450px] lg:w-[450px]
                   lg:blur-[140px]"
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
            My Journey
          </p>

          <h2
            className="text-3xl font-bold
                       leading-tight text-white
                       sm:text-4xl md:text-5xl"
          >
            Education &{" "}
            <span
              className="bg-gradient-to-r
                         from-blue-400 to-purple-500
                         bg-clip-text text-transparent"
            >
              Certifications
            </span>
          </h2>

          <p
            className="mx-auto mt-4 max-w-2xl
                       text-sm leading-7 text-gray-400
                       sm:mt-5 sm:text-base"
          >
            My academic background and continuous learning journey
            in software development, cybersecurity and technology.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div
          className="mt-10 grid gap-10
                     sm:mt-12
                     lg:mt-16
                     lg:grid-cols-2
                     lg:gap-10"
        >
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            {/* Section title */}
            <div
              className="mb-5 flex items-center gap-3
                         sm:mb-7"
            >
              <div
                className="flex h-10 w-10 shrink-0
                           items-center justify-center
                           rounded-xl bg-blue-500/10
                           text-blue-400
                           sm:h-11 sm:w-11"
              >
                <GraduationCap size={23} />
              </div>

              <h3
                className="text-xl font-bold text-white
                           sm:text-2xl"
              >
                Education
              </h3>
            </div>

            {/* Education Card */}
            <div
              className="relative overflow-hidden
                         rounded-2xl border
                         border-white/10
                         bg-white/[0.025]
                         p-5 transition
                         hover:border-blue-500/30
                         sm:rounded-3xl
                         sm:p-7
                         md:p-8"
            >
              {/* Glow */}
              <div
                className="pointer-events-none
                           absolute right-[-50px]
                           top-[-50px]
                           h-32 w-32 rounded-full
                           bg-blue-500/[0.07]
                           blur-3xl
                           sm:h-40 sm:w-40"
              />

              {/* Icon */}
              <div
                className="relative mb-5 flex
                           h-12 w-12 items-center
                           justify-center rounded-xl
                           border border-blue-500/20
                           bg-blue-500/10
                           text-blue-400
                           sm:mb-6 sm:h-14
                           sm:w-14 sm:rounded-2xl"
              >
                <GraduationCap size={27} />
              </div>

              <p
                className="text-xs font-medium
                           text-blue-400
                           sm:text-sm"
              >
                Bachelor of Technology
              </p>

              <h4
                className="mt-2 text-xl
                           font-bold leading-tight
                           text-white
                           sm:text-2xl"
              >
                Computer Science Engineering
              </h4>

              <p
                className="mt-3 text-sm
                           leading-6 text-gray-300
                           sm:text-base
                           md:text-lg"
              >
                Himachal Pradesh Technical University
              </p>

              {/* Education metadata */}
              <div
                className="mt-5 flex flex-col
                           gap-3 text-xs
                           text-gray-500
                           sm:mt-6 sm:flex-row
                           sm:flex-wrap sm:gap-x-5
                           sm:gap-y-3 sm:text-sm"
              >
                <span
                  className="flex items-center
                             gap-2"
                >
                  <CalendarDays
                    size={16}
                    className="shrink-0"
                  />

                  2022 – 2026
                </span>

                <span
                  className="flex min-w-0
                             items-start gap-2"
                >
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0"
                  />

                  <span>
                    Hamirpur, Himachal Pradesh
                  </span>
                </span>
              </div>

              {/* Description */}
              <div
                className="mt-6 border-t
                           border-white/10 pt-5
                           sm:mt-7 sm:pt-6"
              >
                <p
                  className="text-sm leading-7
                             text-gray-400
                             sm:text-base"
                >
                  Building a strong foundation in computer science,
                  software development, databases and modern web
                  technologies while developing practical full-stack
                  applications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            {/* Section title */}
            <div
              className="mb-5 flex items-center
                         gap-3 sm:mb-7"
            >
              <div
                className="flex h-10 w-10 shrink-0
                           items-center justify-center
                           rounded-xl bg-purple-500/10
                           text-purple-400
                           sm:h-11 sm:w-11"
              >
                <Award size={23} />
              </div>

              <h3
                className="text-xl font-bold
                           text-white sm:text-2xl"
              >
                Certifications
              </h3>
            </div>

            {/* Certification Cards */}
            <div className="grid gap-3 sm:gap-4">
              {certifications.map(
                (certification, index) => {
                  const Icon = certification.icon;

                  return (
                    <motion.div
                      key={`${certification.title}-${certification.issuer}`}
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      whileHover={{
                        x: 4,
                      }}
                      className="group flex
                                 min-w-0 items-start
                                 gap-3 rounded-2xl
                                 border border-white/10
                                 bg-white/[0.025]
                                 p-4 transition
                                 hover:border-purple-500/30
                                 sm:items-center
                                 sm:gap-5 sm:p-5"
                    >
                      {/* Icon */}
                      <div
                        className="flex h-10 w-10
                                   shrink-0 items-center
                                   justify-center
                                   rounded-xl
                                   bg-purple-500/10
                                   text-purple-400
                                   sm:h-12 sm:w-12"
                      >
                        <Icon size={21} />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <h4
                          className="text-sm
                                     font-semibold
                                     leading-5 text-white
                                     sm:text-base
                                     sm:leading-6"
                        >
                          {certification.title}
                        </h4>

                        <p
                          className="mt-1 text-xs
                                     leading-5
                                     text-gray-500
                                     sm:text-sm"
                        >
                          {certification.issuer}
                        </p>

                        {/* Mobile Year */}
                        <div className="flex shrink-0 items-center gap-2">
  <span
    className="hidden rounded-full border
               border-white/10 bg-white/[0.03]
               px-3 py-1 text-xs text-gray-400
               sm:inline-flex"
  >
    {certification.year}
  </span>

  {certification.file && (
    <a
      href={certification.file}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${certification.title} certificate`}
      className="inline-flex items-center gap-1.5
                 rounded-lg border border-blue-500/20
                 bg-blue-500/10 px-2.5 py-2
                 text-xs font-medium text-blue-400
                 transition hover:border-blue-500/40
                 hover:bg-blue-500/20
                 hover:text-blue-300"
    >
      <ExternalLink size={13} />
      <span className="hidden sm:inline">
        View Certificate
      </span>
      <span className="sm:hidden">
        View
      </span>
    </a>
  )}
</div>
                      </div>

                      {/* Tablet/Desktop Year */}
                      <span
                        className="hidden shrink-0
                                   rounded-full border
                                   border-white/10
                                   bg-white/[0.03]
                                   px-3 py-1
                                   text-xs text-gray-400
                                   sm:inline-flex"
                      >
                        {certification.year}
                      </span>
                    </motion.div>
                  );
                }
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Journey;