import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import warehouse from "@/assets/warehouse.jpg";
import { FadeUp } from "./Reveal";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy">
      <img
        src={warehouse}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" />

      <div className="container-x relative py-28 text-center md:py-40">
        <FadeUp>
          <span className="eyebrow justify-center">Let's Build</span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="heading-hero mx-auto mt-8 max-w-4xl text-white">
            Let's discuss your
            <br />
            <span className="text-gold">next project.</span>
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-[1.8] text-white/70 md:text-lg">
            Partner with experienced structural engineers for reliable, efficient,
            and future-ready solutions — from concept to completion.
          </p>
        </FadeUp>
        <FadeUp delay={0.3}>
          <motion.a
            href="mailto:info@isaacstructural.com"
            whileHover={{ scale: 1.02 }}
            className="group mt-12 inline-flex items-center gap-4 bg-gold px-10 py-5 font-display text-base font-medium text-navy transition-all duration-500 hover:bg-gold-soft"
          >
            Start a project
            <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" />
          </motion.a>
        </FadeUp>
        <FadeUp delay={0.4}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
            <span>+91 98765 43210</span>
            <span className="h-px w-8 bg-white/20" />
            <span>info@isaacstructural.com</span>
            <span className="h-px w-8 bg-white/20" />
            <span>Chennai, Tamil Nadu</span>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
