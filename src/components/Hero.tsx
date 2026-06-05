import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import warehouseImg from "@/assets/warehouse.jpg";
import commercialImg from "@/assets/hero-building.jpg";
import steelImg from "@/assets/project-1.jpg";

const slides = [
  {
    id: "01",
    image: warehouseImg,
    title: "Engineering Excellence",
    subtitle: "Delivering innovative structural engineering solutions.",
    projectName: "Industrial Warehouse Complex",
    location: "Chennai, India 2025"
  },
  {
    id: "02",
    image: commercialImg,
    title: "Built Through Experience.",
    subtitle: "Trusted by developers and industrial leaders.",
    projectName: "Commercial Office Tower",
    location: "Bangalore, India 2026"
  },
  {
    id: "03",
    image: steelImg,
    title: "Proven Through Projects.",
    subtitle: "Engineering confidence through precision.",
    projectName: "Steel Manufacturing Plant",
    location: "Hosur, India 2025"
  }
];

export function Hero() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[active];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };

  const wordAnim = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section ref={ref} id="top" className="relative h-[100vh] w-full overflow-hidden bg-navy">
      {/* Background Slider */}
      <motion.div style={{ y }} className="absolute inset-0 h-full w-full">
        <AnimatePresence initial={false}>
          <motion.img
            key={active}
            src={currentSlide.image}
            alt={currentSlide.title}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </motion.div>

      {/* Cinematic Dark Overlay */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,.45), rgba(0,0,0,.55))" }} />

      {/* Main Content Overlay */}
      <div className="absolute left-6 top-1/2 z-10 w-full max-w-[850px] -translate-y-1/2 pr-6 md:left-[80px] md:pr-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col"
          >
            {/* Headline */}
            <h1 className="flex flex-wrap gap-x-4 gap-y-2 font-display text-[42px] font-[800] leading-[0.9] tracking-[-3px] text-white sm:text-[64px] md:gap-y-4 lg:text-[90px] xl:text-[120px] uppercase">
              {currentSlide.title.split(" ").map((word, i) => (
                <span key={i} className="inline-block overflow-hidden pb-2">
                  <motion.span variants={wordAnim} className="inline-block">
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
              className="mt-6 max-w-[500px] text-[22px] text-white/85"
            >
              {currentSlide.subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex h-[60px] items-center justify-center gap-3 rounded-full bg-white px-8 py-[18px] text-sm font-medium text-navy transition-all duration-500 hover:scale-[1.03] hover:bg-gold hover:text-white"
              >
                View Projects
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-[60px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-[18px] text-sm font-medium text-white backdrop-blur transition-all duration-500 hover:bg-white/20"
              >
                Talk to an Engineer
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-[200px] left-6 z-20 hidden flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 md:flex md:bottom-[160px] md:left-[30px]"
      >
        <span style={{ writingMode: "vertical-rl" }} className="rotate-180">Scroll</span>
        <span className="relative h-12 w-[1px] overflow-hidden bg-white/30">
          <motion.span
            className="absolute left-0 top-0 h-full w-full bg-white"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </span>
      </motion.div>

      {/* Bottom Project Navigation */}
      <div className="absolute bottom-[30px] left-6 right-6 z-20 md:bottom-[50px] md:left-[80px] md:right-[80px]">
        <div className="hidden grid-cols-1 gap-6 border-t border-white/20 pt-6 md:grid md:grid-cols-3 md:gap-10">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setActive(idx)}
              className={`group relative flex flex-col items-start text-left transition-all duration-500 ${active === idx ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
            >
              {/* Active Accent Line */}
              {active === idx && (
                <motion.div
                  layoutId="activeSlide"
                  className="absolute -top-[25px] left-0 h-[2px] w-full bg-gold"
                />
              )}

              <span className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
                {slide.id}
              </span>
              <span className="mb-1 font-display text-sm font-semibold text-white md:text-base">
                {slide.projectName}
              </span>
              <span className="font-mono text-[10px] text-white/70">
                {slide.location}
              </span>
            </button>
          ))}
        </div>

        {/* Mobile slide indicator dots */}
        <div className="flex items-center justify-center gap-3 md:hidden">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${active === idx ? "w-8 bg-gold" : "w-2 bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
