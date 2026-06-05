import { FadeUp } from "./Reveal";

const logos = [
  "L&T Construction",
  "TATA Projects",
  "TVS",
  "Ashok Leyland",
  "Godrej",
  "DLF",
  "Mahindra",
  "Brigade",
];

export function Clients() {
  return (
    <section className="border-y border-line bg-white py-16 md:py-20">
      <div className="container-x">
        <FadeUp>
          <div className="mb-10 flex items-center justify-center">
            <span className="eyebrow">Trusted by Industry Leaders</span>
          </div>
        </FadeUp>
      </div>
      <div
        className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]"
      >
        <div className="flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="flex h-12 shrink-0 items-center font-display text-2xl font-semibold tracking-tight text-slate/60 transition-colors duration-500 hover:text-navy md:text-3xl"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
