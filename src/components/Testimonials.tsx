import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import warehouse from "@/assets/warehouse.jpg";

const quotes = [
  {
    quote:
      "ISAAC delivered exceptional engineering on our 4.2M sq.ft tech park. Their expertise, professionalism, and commitment to timelines were outstanding.",
    name: "R. Karthik",
    role: "Project Manager, L&T Construction",
  },
  {
    quote:
      "The PEB design for our distribution centre shaved three months off our schedule. We've worked with them on every subsequent build.",
    name: "Anita Menon",
    role: "Head of Projects, TATA Logistics",
  },
  {
    quote:
      "From the first sketch to the final pour, ISAAC's drawings were the cleanest we've seen in twenty years of contracting.",
    name: "S. Velumani",
    role: "Director, Velumani Builders",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const q = quotes[i];
  const next = () => setI((p) => (p + 1) % quotes.length);
  const prev = () => setI((p) => (p - 1 + quotes.length) % quotes.length);

  return (
    <section className="relative overflow-hidden bg-navy">
      <img
        src={warehouse}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-15"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />

      <div className="container-x relative grid grid-cols-1 gap-10 py-24 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-2">
          <div className="font-display text-7xl leading-none text-gold md:text-8xl">
            "
          </div>
        </div>
        <div className="lg:col-span-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-2xl font-medium leading-snug text-white md:text-3xl lg:text-4xl">
                {q.quote}
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold font-display text-lg font-semibold text-navy">
                  {q.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-lg font-medium text-white">
                    {q.name}
                  </div>
                  <div className="text-sm text-white/60">{q.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-8">
            <div className="flex gap-2">
              {quotes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  className={`h-1 w-10 transition-all duration-500 ${
                    idx === i ? "bg-gold" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Quote ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-all duration-500 hover:border-gold hover:text-gold"
                aria-label="Previous"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                className="flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-all duration-500 hover:border-gold hover:text-gold"
                aria-label="Next"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
