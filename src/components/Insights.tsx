import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "./Reveal";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";

const posts = [
  { img: g1, cat: "Field Notes", title: "Why long-span PEB is winning India's logistics race.", read: "6 min read" },
  { img: g2, cat: "Engineering", title: "Designing for seismic zones III & IV: a practitioner's guide.", read: "9 min read" },
  { img: g3, cat: "Insight", title: "Post-tensioned slabs: where they pay back, where they don't.", read: "7 min read" },
];

export function Insights() {
  return (
    <section id="insights" className="section-pad bg-white">
      <div className="container-x">
        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
          <FadeUp className="lg:col-span-7">
            <span className="eyebrow">Insights</span>
            <h2 className="heading-xl mt-6 text-navy">
              Notes from the
              <br />
              drawing board.
            </h2>
          </FadeUp>
          <FadeUp className="lg:col-span-4 lg:col-start-9 lg:text-right" delay={0.1}>
            <a
              href="#"
              className="group inline-flex items-center gap-2 border-b border-navy/30 pb-1 text-sm font-medium text-navy transition-colors hover:border-gold"
            >
              All articles
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
            </a>
          </FadeUp>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {posts.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="group block"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                />
              </div>
              <div className="mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-slate">
                <span className="text-gold">{p.cat}</span>
                <span>{p.read}</span>
              </div>
              <h3 className="mt-4 font-display text-xl font-medium leading-snug text-navy transition-colors group-hover:text-navy-light md:text-2xl">
                {p.title}
              </h3>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy">
                Read article
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
