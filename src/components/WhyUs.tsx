import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Check } from "lucide-react";
import { FadeUp } from "./Reveal";
import warehouse from "@/assets/warehouse.jpg";

const benefits = [
  "Experienced and qualified engineers",
  "Cost-effective design without compromise",
  "Advanced FEA & seismic analysis",
  "Independent quality assurance",
  "On-time delivery, every milestone",
];

export function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="section-pad bg-white">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <FadeUp>
            <span className="eyebrow">Why ISAAC</span>
            <h2 className="heading-xl mt-6 text-navy">
              Built on trust.
              <br />
              Driven by expertise.
            </h2>
            <p className="mt-6 max-w-md text-base text-slate md:text-lg">
              We don't just design structures — we build confidence that lasts
              for generations.
            </p>
          </FadeUp>

          <ul className="mt-12 space-y-1 border-t border-line">
            {benefits.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="group flex items-center gap-5 border-b border-line py-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-navy">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <span className="text-base font-medium text-navy md:text-lg">
                  {b}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div ref={ref} className="relative lg:col-span-6 lg:col-start-7">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <motion.img
              src={warehouse}
              alt="Steel-framed warehouse interior at sunset"
              loading="lazy"
              style={{ y }}
              className="absolute inset-[-8%] h-[116%] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />

            <div className="absolute bottom-6 right-6 max-w-xs bg-navy p-6 text-white md:p-8">
              <div className="font-display text-3xl leading-none text-gold">"</div>
              <p className="mt-2 text-base leading-relaxed">
                We don't just design structures — we build confidence that lasts
                for generations.
              </p>
              <div className="mt-4 h-px w-12 bg-gold" />
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
                Founding Principle
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
