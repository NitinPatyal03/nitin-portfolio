import {
  Code2,
  Database,
  Layers3,
  ShieldCheck,
} from "lucide-react";

import { motion } from "motion/react";

const stats = [
  {
    icon: Code2,
    title: "Full Stack",
    subtitle: "Development",
  },
  {
    icon: Layers3,
    title: ".NET + React",
    subtitle: "Core Stack",
  },
  {
    icon: Database,
    title: "SQL Server",
    subtitle: "Database",
  },
  {
    icon: ShieldCheck,
    title: "AI & Security",
    subtitle: "Exploring",
  },
];

const Stats = () => {
  return (
    <section className="relative z-10 pb-14 sm:pb-16 lg:pb-20">
      <div
        className="mx-auto w-full max-w-7xl
                   px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid overflow-hidden rounded-2xl
                     border border-white/10
                     bg-white/[0.03]
                     backdrop-blur-xl
                     sm:grid-cols-2
                     lg:grid-cols-4"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                className={`
                  flex min-w-0 items-center
                  gap-4 px-5 py-5
                  sm:px-6 sm:py-6
                  lg:justify-center lg:py-7

                  border-b border-white/10

                  ${
                    index % 2 === 0
                      ? "sm:border-r sm:border-white/10"
                      : ""
                  }

                  ${
                    index >= 2
                      ? "sm:border-b-0"
                      : ""
                  }

                  lg:border-b-0

                  ${
                    index !== stats.length - 1
                      ? "lg:border-r lg:border-white/10"
                      : "lg:border-r-0"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className="flex h-10 w-10 shrink-0
                             items-center justify-center
                             rounded-xl bg-blue-500/10
                             text-blue-400
                             sm:h-11 sm:w-11"
                >
                  <Icon size={21} />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p
                    className="text-sm font-bold
                               text-white
                               sm:text-base"
                  >
                    {stat.title}
                  </p>

                  <p
                    className="mt-0.5 text-xs
                               text-gray-500
                               sm:text-sm"
                  >
                    {stat.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;