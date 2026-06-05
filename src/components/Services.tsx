import { motion } from "motion/react";
import { Building2, Grid3x3, Layers, Anchor, ArrowUpRight } from "lucide-react";
import { FadeUp } from "./Reveal";

const services = [
  {
    n: "01",
    icon: Building2,
    title: "Structural Design",
    desc: "Innovative, code-compliant systems tailored to each project's unique loading, span, and geometry.",
  },
  {
    n: "02",
    icon: Grid3x3,
    title: "RCC Structures",
    desc: "Reinforced concrete design for high-rise, podium, and complex transfer structures — built for durability.",
  },
  {
    n: "03",
    icon: Layers,
    title: "PEB Structures",
    desc: "Pre-engineered steel buildings for industrial, warehouse, and manufacturing facilities at scale.",
  },
  {
    n: "04",
    icon: Anchor,
    title: "Post-Tension Structures",
    desc: "Long-span PT slabs and beams that reduce depth, material, and time — without compromise on strength.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <FadeUp className="lg:col-span-6">
            <span className="eyebrow">Engineering Expertise</span>
            <h2 className="heading-xl mt-6 text-navy">
              Comprehensive structural
              <br />
              solutions, one studio.
            </h2>
          </FadeUp>
          <FadeUp className="lg:col-span-5 lg:col-start-8" delay={0.1}>
            <p className="text-base text-slate md:text-lg">
              From concept sketches to as-built drawings, we own every line of
              the structural narrative.
            </p>
          </FadeUp>
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-line md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className={`group relative flex flex-col gap-6 border-b border-line p-8 transition-colors duration-500 hover:bg-paper md:p-10 lg:p-12 ${
                i !== 0 ? "lg:border-l" : ""
              } ${i < 2 ? "md:border-r lg:border-r-0" : ""}`}
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-slate/60">{s.n}</span>
                <s.icon
                  strokeWidth={1.25}
                  className="h-8 w-8 text-navy transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gold"
                />
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-navy md:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate md:text-base">
                  {s.desc}
                </p>
              </div>
              <div className="mt-auto flex items-center justify-between pt-6">
                <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-20" />
                <ArrowUpRight className="h-5 w-5 text-navy transition-transform duration-500 group-hover:rotate-45 group-hover:text-gold" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
