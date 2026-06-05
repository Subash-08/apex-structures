import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "./Reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const tabs = [
  { key: "commercial", label: "Commercial", img: p1, headline: "Skyline-defining commercial towers.", body: "From corporate HQs to mixed-use developments — engineered to flex with future tenant needs while keeping floor plates open and beautiful." },
  { key: "industrial", label: "Industrial", img: p2, headline: "Plants designed around process flow.", body: "Heavy industry, manufacturing, and process buildings with structural systems that respect the equipment they house." },
  { key: "warehouse", label: "Warehouse", img: p3, headline: "Long-span PEB facilities at scale.", body: "Pre-engineered steel buildings designed for rapid erection, optimised material usage, and clear-span performance up to 80m." },
  { key: "residential", label: "Residential", img: p4, headline: "Homes built to outlast generations.", body: "From townhouses to high-rise apartments, our residential designs prioritise occupant comfort, seismic safety, and elegant detailing." },
];

export function Expertise() {
  const [active, setActive] = useState(0);
  const t = tabs[active];

  return (
    <section id="expertise" className="relative overflow-hidden bg-paper">
      <div className="container-x section-pad relative">
        <FadeUp>
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Sectors</span>
              <h2 className="heading-xl mt-6 max-w-2xl text-navy">
                Built for every kind of structure.
              </h2>
            </div>
          </div>
        </FadeUp>

        <div className="flex flex-wrap gap-2 border-b border-line">
          {tabs.map((tab, i) => (
            <button
              key={tab.key}
              onClick={() => setActive(i)}
              className={`relative px-5 py-4 font-display text-sm font-medium uppercase tracking-wider transition-colors md:text-base ${
                active === i ? "text-navy" : "text-slate hover:text-navy"
              }`}
            >
              <span className="font-mono mr-3 text-xs text-slate/60">
                0{i + 1}
              </span>
              {tab.label}
              {active === i && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute inset-x-0 -bottom-px h-0.5 bg-gold"
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={t.key}
                  src={t.img}
                  alt={t.label}
                  loading="lazy"
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
          </div>

          <div className="flex flex-col justify-center lg:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                  Sector · 0{active + 1}
                </div>
                <h3 className="heading-lg mt-4 text-navy">{t.headline}</h3>
                <p className="mt-6 text-base text-slate md:text-lg">{t.body}</p>
                <a
                  href="#"
                  className="group mt-8 inline-flex items-center gap-2 border-b border-navy/30 pb-1 text-sm font-medium text-navy transition-colors hover:border-gold"
                >
                  Explore sector
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
