import { useState } from "react";
import { motion } from "motion/react";

import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({
      type: null,
      message: "",
    });

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    formData.append(
      "from_name",
      "Nitin Patyal Portfolio"
    );

    try {
      const object = Object.fromEntries(
        formData.entries()
      );

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify(object),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully! I'll get back to you soon.",
        });

        form.reset();
      } else {
        setStatus({
          type: "error",
          message:
            result.message ||
            "Unable to send your message.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden
                 py-16 sm:py-20 lg:py-24"
    >
      {/* Background glows */}
      <div
        className="pointer-events-none absolute
                   bottom-[-150px] left-[-180px]
                   h-[300px] w-[300px]
                   rounded-full
                   bg-blue-600/[0.06]
                   blur-[110px]
                   sm:h-[380px] sm:w-[380px]
                   lg:h-[450px] lg:w-[450px]
                   lg:blur-[140px]"
      />

      <div
        className="pointer-events-none absolute
                   right-[-180px] top-[100px]
                   h-[280px] w-[280px]
                   rounded-full
                   bg-purple-600/[0.05]
                   blur-[110px]
                   sm:h-[350px] sm:w-[350px]
                   lg:h-[400px] lg:w-[400px]
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
            className="mb-3 text-xs
                       font-semibold uppercase
                       tracking-[0.2em]
                       text-blue-400
                       sm:text-sm
                       sm:tracking-[0.25em]"
          >
            Get In Touch
          </p>

          <h2
            className="text-3xl font-bold
                       leading-tight text-white
                       sm:text-4xl md:text-5xl"
          >
            Let's Build Something{" "}
            <span
              className="bg-gradient-to-r
                         from-blue-400
                         to-purple-500
                         bg-clip-text
                         text-transparent"
            >
              Great
            </span>
          </h2>

          <p
            className="mx-auto mt-4 max-w-2xl
                       text-sm leading-7
                       text-gray-400
                       sm:mt-5 sm:text-base"
          >
            Have an opportunity, project idea or just want
            to connect? Feel free to send me a message.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div
          className="mt-10 grid gap-5
                     sm:mt-12 sm:gap-6
                     lg:mt-16
                     lg:grid-cols-[0.8fr_1.2fr]
                     lg:gap-8"
        >
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0 rounded-2xl
                       border border-white/10
                       bg-white/[0.025]
                       p-5
                       sm:rounded-3xl
                       sm:p-7
                       md:p-8"
          >
            <h3
              className="text-xl font-bold
                         text-white sm:text-2xl"
            >
              Let's Connect
            </h3>

            <p
              className="mt-4 text-sm
                         leading-7 text-gray-400
                         sm:text-base"
            >
              I'm interested in software engineering and
              full-stack development opportunities where I
              can build useful products, solve problems and
              continue growing as a developer.
            </p>

            {/* Email */}
            <a
              href="mailto:patyalnitin868@gmail.com"
              className="group mt-6 flex
                         min-w-0 items-center gap-3
                         rounded-xl border
                         border-white/10
                         bg-white/[0.025]
                         p-3.5 transition
                         hover:border-blue-500/30
                         sm:mt-8 sm:gap-4
                         sm:rounded-2xl sm:p-4"
            >
              <div
                className="flex h-10 w-10
                           shrink-0 items-center
                           justify-center rounded-xl
                           bg-blue-500/10
                           text-blue-400
                           sm:h-11 sm:w-11"
              >
                <Mail size={20} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-xs text-gray-500">
                  Email
                </p>

                <p
                  className="truncate text-xs
                             font-medium
                             text-gray-200
                             sm:text-sm"
                >
                  patyalnitin868@gmail.com
                </p>
              </div>

              <ArrowUpRight
                size={18}
                className="shrink-0
                           text-gray-600
                           transition
                           group-hover:text-blue-400"
              />
            </a>

            {/* Location */}
            <div
              className="mt-3 flex
                         min-w-0 items-center
                         gap-3 rounded-xl
                         border border-white/10
                         bg-white/[0.025]
                         p-3.5
                         sm:mt-4 sm:gap-4
                         sm:rounded-2xl sm:p-4"
            >
              <div
                className="flex h-10 w-10
                           shrink-0 items-center
                           justify-center rounded-xl
                           bg-purple-500/10
                           text-purple-400
                           sm:h-11 sm:w-11"
              >
                <MapPin size={20} />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-500">
                  Location
                </p>

                <p
                  className="text-xs font-medium
                             leading-5 text-gray-200
                             sm:text-sm"
                >
                  Himachal Pradesh, India
                </p>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 sm:mt-8">
              <p
                className="mb-3 text-xs
                           text-gray-500
                           sm:mb-4 sm:text-sm"
              >
                Find me online
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/NitinPatyal03"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="social-button"
                >
                  <FaGithub size={19} />
                </a>

                <a
                  href="https://www.linkedin.com/in/nitin-patyal-03mar2005/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="social-button"
                >
                  <FaLinkedinIn size={19} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0 rounded-2xl
                       border border-white/10
                       bg-white/[0.025]
                       p-5
                       sm:rounded-3xl
                       sm:p-7
                       md:p-8"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-4 sm:space-y-5"
            >
              {/* Name + Email */}
              <div
                className="grid gap-4
                           sm:grid-cols-2
                           sm:gap-5"
              >
                <div className="min-w-0">
                  <label
                    htmlFor="name"
                    className="mb-2 block
                               text-xs text-gray-400
                               sm:text-sm"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full min-w-0
                               rounded-xl border
                               border-white/10
                               bg-white/[0.03]
                               px-3.5 py-3
                               text-sm text-white
                               outline-none transition
                               placeholder:text-gray-600
                               focus:border-blue-500/50
                               focus:bg-blue-500/[0.03]
                               sm:px-4"
                  />
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="email"
                    className="mb-2 block
                               text-xs text-gray-400
                               sm:text-sm"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full min-w-0
                               rounded-xl border
                               border-white/10
                               bg-white/[0.03]
                               px-3.5 py-3
                               text-sm text-white
                               outline-none transition
                               placeholder:text-gray-600
                               focus:border-blue-500/50
                               sm:px-4"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block
                             text-xs text-gray-400
                             sm:text-sm"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Job opportunity / Project / Hello"
                  className="w-full min-w-0
                             rounded-xl border
                             border-white/10
                             bg-white/[0.03]
                             px-3.5 py-3
                             text-sm text-white
                             outline-none transition
                             placeholder:text-gray-600
                             focus:border-blue-500/50
                             sm:px-4"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block
                             text-xs text-gray-400
                             sm:text-sm"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell me about your opportunity or project..."
                  className="w-full min-w-0
                             resize-none rounded-xl
                             border border-white/10
                             bg-white/[0.03]
                             px-3.5 py-3
                             text-sm text-white
                             outline-none transition
                             placeholder:text-gray-600
                             focus:border-blue-500/50
                             sm:px-4"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full
                           items-center justify-center
                           gap-2 rounded-xl
                           bg-blue-600
                           px-5 py-3.5
                           text-sm font-semibold
                           text-white transition
                           hover:bg-blue-500
                           disabled:cursor-not-allowed
                           disabled:opacity-60
                           sm:px-6 sm:text-base"
              >
                <Send
                  size={18}
                  className="shrink-0"
                />

                {isSubmitting
                  ? "Sending..."
                  : "Send Message"}
              </button>

              {/* Status */}
              {status.message && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className={`rounded-xl border
                              px-3 py-3
                              text-center text-xs
                              leading-5
                              sm:px-4 sm:text-sm
                    ${
                      status.type === "success"
                        ? "border-green-500/20 bg-green-500/10 text-green-400"
                        : "border-red-500/20 bg-red-500/10 text-red-400"
                    }`}
                >
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;