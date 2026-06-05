import { Linkedin, Instagram, Twitter, Youtube } from "lucide-react";

const cols = [
  {
    title: "Company",
    links: ["About", "Studio", "Careers", "Press", "Contact"],
  },
  {
    title: "Services",
    links: ["Structural Design", "RCC Structures", "PEB Structures", "Post-Tension", "Peer Review"],
  },
  {
    title: "Projects",
    links: ["Commercial", "Industrial", "Warehouse", "Residential", "Infrastructure"],
  },
];

export function Footer() {
  return (
    <footer className="blueprint-bg grain relative text-white">
      <div className="container-x relative pb-12 pt-24 md:pt-32">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
            <div className="font-display text-3xl font-bold tracking-tight">
              ISAAC
            </div>
            <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gold">
              Structural Consultancy
            </div>
            <p className="mt-8 max-w-xs text-sm leading-relaxed text-white/60">
              Providing innovative and reliable structural engineering solutions
              with precision, experience, and integrity since 1999.
            </p>
            <div className="mt-10 flex gap-3">
              {[Linkedin, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-500 hover:border-gold hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
                {c.title}
              </div>
              <ul className="mt-6 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/80 transition-colors hover:text-gold"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-2">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
              Contact
            </div>
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li>+91 98765 43210</li>
              <li>info@isaacstructural.com</li>
              <li>Chennai, Tamil Nadu, India</li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} ISAAC Structural Consultancy</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
