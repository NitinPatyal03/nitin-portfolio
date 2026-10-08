import { ArrowUp } from "lucide-react";

import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-white/10
                 bg-[#030611]"
    >
      <div
        className="mx-auto flex w-full
                   max-w-7xl flex-col
                   items-center justify-between
                   gap-6 px-4 py-7
                   sm:px-6 sm:py-8
                   md:flex-row
                   md:gap-5
                   lg:px-8"
      >
        {/* Logo */}
        <div
          className="flex items-center
                     justify-center gap-3
                     md:justify-start"
        >
          <div
            className="flex h-9 w-9
                       shrink-0 items-center
                       justify-center rounded-lg
                       border border-blue-500/30
                       bg-blue-500/10
                       text-sm font-bold
                       text-blue-400"
          >
            NP
          </div>

          <div className="min-w-0">
            <p
              className="text-sm font-semibold
                         text-white
                         sm:text-base"
            >
              Nitin Patyal
            </p>

            <p
              className="text-[11px]
                         text-gray-600
                         sm:text-xs"
            >
              AI Engineer • Full Stack
            </p>
          </div>
        </div>

        {/* Copyright */}
        <p
          className="max-w-sm text-center
                     text-xs leading-6
                     text-gray-600
                     sm:text-sm
                     md:max-w-none"
        >
          © {year} Nitin Patyal. 
        </p>

        {/* Socials + Back to top */}
        <div
          className="flex items-center
                     justify-center gap-3"
        >
          <a
            href="https://github.com/NitinPatyal03"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            title="GitHub"
            className="social-button"
          >
            <FaGithub size={17} />
          </a>

          <a
            href="https://www.linkedin.com/in/nitin-patyal-03mar2005/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="social-button"
          >
            <FaLinkedinIn size={17} />
          </a>

          <a
            href="#home"
            aria-label="Back to top"
            title="Back to top"
            className="social-button"
          >
            <ArrowUp size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;