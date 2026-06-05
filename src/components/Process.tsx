import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  MessagesSquare,
  ClipboardCheck,
  PencilRuler,
  HardHat,
} from "lucide-react";
import { FadeUp } from "./Reveal";

const steps = [
  { n: "01", icon: MessagesSquare, title: "Consultation", desc: "Understanding your vision, brief, and the constraints of the site." },
  { n: "02", icon: ClipboardCheck, title: "Analysis", desc: "Detailed site study, soil reports, and structural analysis with FEA tools." },
  { n: "03", icon: PencilRuler, title: "Design", desc: "Code-compliant drawings optimised for safety, cost, and constructability." },
  { n: "04", icon: HardHat, title: "Execution Support", desc: "On-site guidance through casting, fabrication, erection, and handover." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section-pad bg-paper">
      <div className="container-x">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <FadeUp className="lg:col-span-7">
            <span className="eyebrow">Our Process</span>
            <h2 className="heading-xl mt-6 text-navy">
              A structured approach
              <br />
              to every project.
            </h2>
          </FadeUp>
        </div>

        <div ref={ref} className="relative mt-20">
          {/* timeline line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-line lg:block" />
          <motion.div
            style={{ scaleX: lineScale }}
            className="absolute left-0 right-0 top-12 hidden h-px origin-left bg-gold lg:block"
          />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
                className="relative"
              >
                <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-line bg-white">
                  <s.icon strokeWidth={1.25} className="h-8 w-8 text-navy" />
                </div>
                <div className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-gold">
                  Step {s.n}
                </div>
                <h3 className="mt-3 font-display text-2xl font-medium text-navy">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
