import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";

const imgs = [
  { src: g1, label: "Aerial — Hosur Campus" },
  { src: p1, label: "Helix Tower — Chennai" },
  { src: g2, label: "Erection — Mahindra City" },
  { src: p2, label: "Logistics Hub — Sriperumbudur" },
  { src: g3, label: "Bridge Detail — Cochin" },
];

export function GalleryStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-38%"]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy py-24 md:py-32">
      <div className="container-x mb-12">
        <span className="eyebrow">Project Gallery</span>
        <h2 className="heading-xl mt-6 text-white">A scroll through the field.</h2>
      </div>

      <motion.div style={{ x }} className="flex gap-6 will-change-transform">
        {imgs.map((it, i) => (
          <div
            key={i}
            className="relative aspect-[4/5] w-[78vw] shrink-0 overflow-hidden bg-navy-light md:w-[44vw] lg:w-[34vw]"
          >
            <img
              src={it.src}
              alt={it.label}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-navy/80 to-transparent p-6 text-white">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                0{i + 1}
              </span>
              <span className="font-display text-sm font-medium md:text-base">
                {it.label}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
