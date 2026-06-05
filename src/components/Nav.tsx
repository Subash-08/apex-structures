import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/75 backdrop-blur-[20px] border-b border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-xl font-bold tracking-tight text-white">
            ISAAC
          </span>
          <span className="hidden h-6 w-px bg-white/20 sm:block" />
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 sm:block">
            Structural
            <br />
            Consultancy
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative text-sm font-medium text-white/85 transition-colors hover:text-white pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-right after:scale-x-0 after:bg-white after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-navy transition-all duration-500 hover:bg-gold hover:text-white sm:inline-flex"
          >
            Contact Us
            <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur lg:hidden text-white hover:bg-white/20 transition-colors"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="overflow-hidden border-t border-line bg-white lg:hidden"
        >
          <div className="container-x flex flex-col gap-1 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-line py-4 text-lg text-navy"
              >
                {l.label}
                <ArrowUpRight className="h-5 w-5 text-gold" />
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
