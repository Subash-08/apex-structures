import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FadeUp, WordReveal } from "./Reveal";
import blueprint from "@/assets/blueprint.jpg";

export function About() {
  return (
    <section id="about" className="section-pad bg-paper">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            whileInView={{ clipPath: "inset(0 0 0% 0)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden"
          >
            <img
              src={blueprint}
              alt="Structural engineering blueprint with ruler and pencil"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between bg-white/85 p-4 backdrop-blur-md">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold">
                  Studio
                </div>
                <div className="mt-1 font-display text-lg font-medium text-navy">
                  Chennai, Tamil Nadu
                </div>
              </div>
              <div className="font-mono text-xs text-slate">EST. 1999</div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <FadeUp>
            <span className="eyebrow">About the Practice</span>
          </FadeUp>
          <h2 className="heading-xl mt-6 max-w-xl text-navy">
            <WordReveal text="Engineering precision," />
            <br />
            <span className="text-gold">
              <WordReveal text="built on experience." delay={0.1} />
            </span>
          </h2>
          <FadeUp delay={0.2}>
            <p className="mt-8 max-w-xl text-base leading-[1.85] text-slate md:text-lg">
              For over two decades, ISAAC Structural Consultancy has partnered
              with leading developers and industrial groups to engineer
              structures that are not only safe and economical, but also
              future-ready. We treat every drawing as a commitment.
            </p>
          </FadeUp>
          <FadeUp delay={0.3} className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <div className="font-display text-4xl font-semibold text-navy">
                25<span className="text-gold">+</span>
              </div>
              <div className="mt-2 text-sm text-slate">Years on site</div>
            </div>
            <div>
              <div className="font-display text-4xl font-semibold text-navy">
                IS 800<span className="text-gold">.</span>
              </div>
              <div className="mt-2 text-sm text-slate">Code-compliant by default</div>
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <a
              href="#contact"
              className="group mt-12 inline-flex items-center gap-3 bg-navy px-7 py-4 text-sm font-medium text-white transition-all duration-500 hover:bg-navy-light hover:ring-1 hover:ring-gold"
            >
              Discuss your project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
