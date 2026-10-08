import { motion } from "motion/react";
import {
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center
                 overflow-hidden pb-12 pt-24
                 sm:pb-16 sm:pt-28
                 lg:pb-20 lg:pt-32"
    >
      {/* Background glows */}
      <div
        className="pointer-events-none absolute
                   left-[-180px] top-[180px]
                   h-[320px] w-[320px]
                   rounded-full bg-blue-600/10
                   blur-[110px]
                   sm:h-[400px] sm:w-[400px]"
      />

      <div
        className="pointer-events-none absolute
                   right-[-200px] top-[80px]
                   h-[350px] w-[350px]
                   rounded-full bg-purple-600/10
                   blur-[120px]
                   sm:h-[500px] sm:w-[500px]"
      />

      {/* Container */}
      <div
        className="relative z-10 mx-auto grid
                   w-full max-w-7xl
                   grid-cols-1 items-center
                   gap-12 px-4
                   sm:px-6
                   md:gap-14
                   lg:grid-cols-2
                   lg:gap-16 lg:px-8"
      >
        {/* LEFT */}
        <div className="order-1 min-w-0">
          {/* Intro Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex rounded-full
                       border border-blue-500/20
                       bg-blue-500/10
                       px-3.5 py-2
                       text-xs text-blue-400
                       sm:mb-6 sm:px-4 sm:text-sm"
          >
            👋 Hello, I'm
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="text-4xl font-bold
                       leading-[1.08] tracking-tight
                       text-white
                       sm:text-5xl
                       md:text-6xl
                       lg:text-7xl"
          >
            Nitin{" "}
            <span
              className="bg-gradient-to-r
                         from-blue-400 to-purple-500
                         bg-clip-text text-transparent"
            >
              Patyal
            </span>
          </motion.h1>

          {/* Role */}
<motion.h2
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 0.6,
    delay: 0.25,
  }}
  className="mt-4 text-xl
             font-semibold text-gray-200
             sm:mt-5 sm:text-2xl
             md:text-3xl"
>
  AI Engineer | Full Stack Developer
</motion.h2>

{/* Description */}
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{
    duration: 0.6,
    delay: 0.35,
  }}
  className="mt-5 max-w-xl
             text-base leading-7
             text-gray-400
             sm:mt-6 sm:text-lg
             sm:leading-8"
>
  I build AI-powered, scalable and secure web applications
  using modern full-stack technologies, machine learning
  and intelligent developer tools. Passionate about AI/ML,
  backend engineering, cybersecurity and data-driven solutions.
</motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-col
                       gap-3
                       sm:mt-9 sm:flex-row
                       sm:flex-wrap sm:gap-4"
          >
            <a
              href="#projects"
              className="flex w-full items-center
                         justify-center gap-2
                         rounded-xl bg-blue-600
                         px-6 py-3.5
                         font-semibold text-white
                         transition hover:bg-blue-500
                         sm:w-auto"
            >
              View My Work
              <ArrowRight size={18} />
            </a>

            <a
              href="/Nitin_Patyal-Resume.pdf"
              download="Nitin_Patyal_Resume.pdf"
              className="flex w-full items-center
                         justify-center gap-2
                         rounded-xl border
                         border-white/15 bg-white/5
                         px-6 py-3.5
                         font-semibold text-white
                         transition
                         hover:border-blue-500/50
                         hover:bg-blue-500/10
                         sm:w-auto"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-7 flex flex-wrap
                       items-center gap-3
                       sm:mt-8 sm:gap-4"
          >
            <a
              href="https://github.com/NitinPatyal03"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="social-button"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/nitin-patyal-03mar2005/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="social-button"
            >
              <FaLinkedinIn size={20} />
            </a>

            <a
              href="mailto:patyalnitin868@gmail.com"
              aria-label="Email"
              className="social-button"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 0.8 }}
          className="order-2 relative mx-auto
                     flex h-[260px] w-[260px]
                     items-center justify-center
                     sm:h-[320px] sm:w-[320px]
                     md:h-[380px] md:w-[380px]
                     lg:h-[430px] lg:w-[430px]"
        >
          {/* Outer Circle */}
          <div
            className="absolute h-[240px] w-[240px]
                       rounded-full
                       border border-blue-500/30
                       sm:h-[295px] sm:w-[295px]
                       md:h-[350px] md:w-[350px]
                       lg:h-[400px] lg:w-[400px]"
          />

          {/* Inner Circle */}
          <div
            className="absolute h-[200px] w-[200px]
                       rounded-full
                       border border-purple-500/30
                       sm:h-[245px] sm:w-[245px]
                       md:h-[295px] md:w-[295px]
                       lg:h-[340px] lg:w-[340px]"
          />

          {/* Glow */}
          <div
            className="absolute h-[190px] w-[190px]
                       rounded-full
                       bg-blue-500/10 blur-3xl
                       sm:h-[230px] sm:w-[230px]
                       md:h-[270px] md:w-[270px]"
          />

          {/* NP Circle */}
          <div
            className="relative flex
                       h-36 w-36
                       items-center justify-center
                       rounded-full
                       border border-blue-400/30
                       bg-gradient-to-br
                       from-blue-500/20
                       to-purple-500/20
                       shadow-[0_0_80px_rgba(59,130,246,0.20)]
                       sm:h-44 sm:w-44
                       md:h-52 md:w-52
                       lg:h-56 lg:w-56"
          >
            <span
              className="bg-gradient-to-r
                         from-blue-400 to-purple-400
                         bg-clip-text
                         text-5xl font-bold
                         text-transparent
                         sm:text-6xl
                         md:text-7xl"
            >
              NP
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;