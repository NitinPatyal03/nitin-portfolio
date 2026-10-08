import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="fixed left-0 top-0 z-50 w-full
                 border-b border-white/10
                 bg-[#050816]/80 backdrop-blur-xl"
    >
      <nav
        className="mx-auto flex h-16 w-full max-w-7xl
                   items-center justify-between
                   px-4 sm:px-6
                   lg:h-20 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex min-w-0 items-center gap-2.5
                     sm:gap-3"
          aria-label="Nitin Patyal - Home"
        >
          <div
            className="flex h-9 w-9 shrink-0
                       items-center justify-center
                       rounded-lg border
                       border-blue-500/30
                       bg-blue-500/10
                       text-sm font-bold text-blue-400
                       sm:h-10 sm:w-10"
          >
            NP
          </div>

          <div className="min-w-0">
            <p
              className="truncate text-sm font-semibold
                         text-white sm:text-base"
            >
              Nitin Patyal
            </p>

            <p
  className="hidden text-xs text-gray-500
             sm:block"
>
  AI Engineer • Full Stack
</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div
  className="hidden items-center gap-5
             md:flex lg:gap-7 xl:gap-8"
>
          {navLinks.map((link) => (
            <a
  key={link.name}
  href={link.href}
  className={`text-sm font-medium transition
    focus-visible:outline-none
    focus-visible:text-blue-400
    ${
      link.name === "Contact"
        ? "rounded-lg border border-blue-500/20 bg-blue-500/10 px-3 py-2 text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/15"
        : "text-gray-400 hover:text-blue-400"
    }`}
>
  {link.name}
</a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() =>
            setMenuOpen((current) => !current)
          }
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 shrink-0
                     items-center justify-center
                     rounded-xl border
                     border-white/10
                     bg-white/[0.04]
                     text-white transition
                     hover:border-blue-500/30
                     hover:bg-blue-500/10
                     focus-visible:outline-none
                     focus-visible:ring-2
                     focus-visible:ring-blue-500/50
                     md:hidden"
        >
          {menuOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
            }}
            className="overflow-hidden border-t
                       border-white/10
                       bg-[#050816]/95
                       backdrop-blur-xl
                       md:hidden"
          >
            <div
              className="mx-auto max-h-[calc(100vh-4rem)]
                         w-full max-w-7xl
                         overflow-y-auto
                         px-4 py-3
                         sm:px-6 sm:py-4"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="rounded-xl
                               px-4 py-3
                               text-sm font-medium
                               text-gray-300
                               transition
                               hover:bg-blue-500/[0.08]
                               hover:text-blue-400
                               focus-visible:outline-none
                               focus-visible:bg-blue-500/[0.08]
                               focus-visible:text-blue-400"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;