import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "./Reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

const items = [
  { img: p1, title: "Helix Corporate Tower", tag: "Commercial · Chennai", size: "lg" },
  { img: p2, title: "Aurora Logistics Hub", tag: "Industrial · Sriperumbudur", size: "sm" },
  { img: p3, title: "Northgate PEB Facility", tag: "PEB · Hosur", size: "sm" },
  { img: p4, title: "Marina Residences", tag: "Residential · ECR", size: "lg" },
];

function Card({ item, idx }: { item: (typeof items)[number]; idx: number }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 }}
      className={`group relative block overflow-hidden bg-navy ${
        item.size === "lg" ? "aspect-[4/5] md:aspect-[4/5]" : "aspect-[5/4]"
      }`}
    >
      <img
        src={item.img}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
        <div className="overflow-hidden">
          <div className="translate-y-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gold transition-transform duration-700 group-hover:translate-y-0">
            {item.tag}
          </div>
        </div>
        <div className="mt-2 overflow-hidden">
          <h3 className="translate-y-2 font-display text-2xl font-medium text-white transition-transform duration-700 group-hover:translate-y-0 md:text-3xl">
            {item.title}
          </h3>
        </div>
        <div className="mt-4 h-px w-0 bg-gold transition-all duration-700 group-hover:w-24" />
      </div>
      <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 transition-all duration-500 group-hover:opacity-100">
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </motion.a>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section-pad bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <FadeUp className="lg:col-span-5">
            <span className="eyebrow">Featured Projects</span>
            <h2 className="heading-xl mt-6 text-navy">
              Engineering excellence
              <br />
              across every structure.
            </h2>
          </FadeUp>
          <FadeUp className="lg:col-span-5 lg:col-start-8" delay={0.1}>
            <p className="text-base text-slate md:text-lg">
              A selection of recent projects that reflect our commitment to
              precision, safety, and structural integrity — from high-rise
              commercial towers to expansive industrial campuses.
            </p>
            <a
              href="#"
              className="group mt-8 inline-flex items-center gap-2 border-b border-navy/30 pb-1 text-sm font-medium text-navy transition-colors hover:border-gold"
            >
              View all projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
            </a>
          </FadeUp>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:mt-24">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={
                i % 2 === 0 ? "md:translate-y-0" : "md:translate-y-16"
              }
            >
              <Card item={it} idx={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
