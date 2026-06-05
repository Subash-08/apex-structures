import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-building.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const lines = [
    "Engineering",
    "Confidence.",
    "Built Through",
    "Experience.",
  ];

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-paper"
    >
      <div className="container-x relative grid min-h-[100svh] grid-cols-1 gap-10 pb-16 pt-32 md:pt-36 lg:grid-cols-12 lg:gap-12 lg:pb-24">
        {/* LEFT */}
        <div className="relative z-10 flex flex-col justify-end lg:col-span-6">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
            className="eyebrow mb-8"
          >
            Engineering Confidence — Est. 1999
          </motion.span>

          <h1 className="heading-hero text-navy">
            {lines.map((l, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.1, ease, delay: 0.5 + i * 0.12 }}
                >
                  {l}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden">
              <motion.span
                className="block text-gold"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, ease, delay: 0.5 + lines.length * 0.12 }}
              >
                Proven Through Projects.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.3 }}
            className="mt-8 max-w-md text-base leading-[1.8] text-slate md:text-lg"
          >
            Delivering structural engineering excellence across industrial,
            commercial, and residential developments — built with the precision
            of two decades on site.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 1.5 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 bg-navy px-7 py-4 text-sm font-medium text-white transition-all duration-500 hover:bg-navy-light hover:ring-1 hover:ring-gold"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-navy/15 bg-transparent px-7 py-4 text-sm font-medium text-navy transition-all duration-500 hover:border-gold hover:text-navy"
            >
              Talk to an Engineer
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* meta strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="mt-14 flex items-center gap-6 font-mono text-[10px] uppercase tracking-[0.22em] text-slate"
          >
            <span>RCC · PEB · POST-TENSION</span>
            <span className="h-px w-10 bg-slate/40" />
            <span>Chennai, IN</span>
          </motion.div>
        </div>

        {/* RIGHT — image */}
        <div className="relative lg:col-span-6">
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.4, ease, delay: 0.2 }}
            className="relative aspect-[3/4] w-full overflow-hidden bg-navy lg:absolute lg:inset-0 lg:aspect-auto lg:h-[calc(100vh-7rem)] lg:rounded-sm"
          >
            <motion.img
              src={heroImg}
              alt="Steel and glass commercial building at dusk"
              style={{ y, scale }}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8, ease }}
              className="absolute inset-0 h-full w-full object-cover"
              width={1080}
              height={1920}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />

            {/* floating label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 1.6 }}
              className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white"
            >
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                  Featured Build
                </div>
                <div className="mt-1 font-display text-lg font-medium">
                  Velmurugan Tech Park · 4.2M sq.ft
                </div>
              </div>
              <div className="hidden font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 sm:block">
                01 / 04
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-slate md:flex"
      >
        Scroll
        <span className="h-10 w-px animate-pulse bg-slate/50" />
      </motion.div>
    </section>
  );
}
