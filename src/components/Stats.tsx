import { Counter } from "./Counter";
import { StaggerGroup, staggerItem } from "./Reveal";
import { motion } from "motion/react";

const stats = [
  { value: 300, suffix: "+", label: "Projects Delivered" },
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Clients Worldwide" },
  { value: 10, suffix: "M+", label: "Sq. Ft Designed" },
];

export function Stats() {
  return (
    <section className="blueprint-bg grain relative text-white">
      <div className="container-x relative py-20 md:py-24">
        <StaggerGroup className="grid grid-cols-2 gap-y-12 md:grid-cols-4" stagger={0.12}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={staggerItem}
              className={`flex flex-col items-start gap-3 px-4 md:px-8 ${
                i !== 0 ? "md:border-l md:border-white/10" : ""
              }`}
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                0{i + 1}
              </span>
              <div className="font-display text-5xl font-semibold leading-none tracking-tight md:text-6xl lg:text-7xl">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-sm font-medium text-white/70 md:text-base">
                {s.label}
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
