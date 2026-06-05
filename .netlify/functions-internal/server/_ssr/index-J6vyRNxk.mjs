import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { m as motion, u as useScroll, a as useTransform, A as AnimatePresence, b as useInView } from "../_libs/framer-motion.mjs";
import { A as ArrowUpRight, X, M as Menu, B as Building2, G as Grid3x3, L as Layers, a as Anchor, b as MessagesSquare, C as ClipboardCheck, P as PencilRuler, H as HardHat, c as Check, d as ArrowLeft, e as ArrowRight, f as Linkedin, I as Instagram, T as Twitter, Y as Youtube } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function SmoothScroll() {
  reactExports.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });
    let rafId = 0;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
  return null;
}
const links = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Expertise", href: "#expertise" },
  { label: "About", href: "#about" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-navy/75 backdrop-blur-[20px] border-b border-white/10" : "bg-transparent border-b border-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x flex h-20 items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl font-bold tracking-tight text-white", children: "ISAAC" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden h-6 w-px bg-white/20 sm:block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 sm:block", children: [
              "Structural",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Consultancy"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-9 lg:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "relative text-sm font-medium text-white/85 transition-colors hover:text-white pb-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-right after:scale-x-0 after:bg-white after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100", children: l.label }, l.href)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#contact",
                className: "group hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-navy transition-all duration-500 hover:bg-gold hover:text-white sm:inline-flex",
                children: [
                  "Contact Us",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:rotate-45" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setOpen((o) => !o),
                className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur lg:hidden text-white hover:bg-white/20 transition-colors",
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
              }
            )
          ] })
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            className: "overflow-hidden border-t border-line bg-white lg:hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x flex flex-col gap-1 py-6", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: l.href,
                onClick: () => setOpen(false),
                className: "flex items-center justify-between border-b border-line py-4 text-lg text-navy",
                children: [
                  l.label,
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 text-gold" })
                ]
              },
              l.href
            )) })
          }
        )
      ]
    }
  );
}
const warehouse = "/assets/warehouse-DmWxHaR2.jpg";
const commercialImg = "/assets/hero-building-DRk_kY3N.jpg";
const p1 = "/assets/project-1-D6yC2fqh.jpg";
const slides = [
  {
    id: "01",
    image: warehouse,
    title: "Engineering Excellence",
    subtitle: "Delivering innovative structural engineering solutions.",
    projectName: "Industrial Warehouse Complex",
    location: "Chennai, India 2025"
  },
  {
    id: "02",
    image: commercialImg,
    title: "Built Through Experience.",
    subtitle: "Trusted by developers and industrial leaders.",
    projectName: "Commercial Office Tower",
    location: "Bangalore, India 2026"
  },
  {
    id: "03",
    image: p1,
    title: "Proven Through Projects.",
    subtitle: "Engineering confidence through precision.",
    projectName: "Steel Manufacturing Plant",
    location: "Hosur, India 2025"
  }
];
function Hero() {
  const [active, setActive] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  reactExports.useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5e3);
    return () => clearInterval(timer);
  }, []);
  const currentSlide = slides[active];
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  };
  const wordAnim = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, id: "top", className: "relative h-[100vh] w-full overflow-hidden bg-navy", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: { y }, className: "absolute inset-0 h-full w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.img,
      {
        src: currentSlide.image,
        alt: currentSlide.title,
        initial: { opacity: 0, scale: 1.1 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0 },
        transition: { duration: 1.2, ease: "easeInOut" },
        className: "absolute inset-0 h-full w-full object-cover"
      },
      active
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0", style: { background: "linear-gradient(to bottom, rgba(0,0,0,.45), rgba(0,0,0,.55))" } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 top-1/2 z-10 w-full max-w-[850px] -translate-y-1/2 pr-6 md:left-[80px] md:pr-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        variants: container,
        initial: "hidden",
        animate: "show",
        exit: "hidden",
        className: "flex flex-col",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "flex flex-wrap gap-x-4 gap-y-2 font-display text-[42px] font-[800] leading-[0.9] tracking-[-3px] text-white sm:text-[64px] md:gap-y-4 lg:text-[90px] xl:text-[120px] uppercase", children: currentSlide.title.split(" ").map((word, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block overflow-hidden pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { variants: wordAnim, className: "inline-block", children: word }) }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.7 },
              className: "mt-6 max-w-[500px] text-[22px] text-white/85",
              children: currentSlide.subtitle
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.9 },
              className: "mt-10 flex flex-wrap gap-4",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#projects",
                    className: "group inline-flex h-[60px] items-center justify-center gap-3 rounded-full bg-white px-8 py-[18px] text-sm font-medium text-navy transition-all duration-500 hover:scale-[1.03] hover:bg-gold hover:text-white",
                    children: [
                      "View Projects",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:rotate-45" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "#contact",
                    className: "inline-flex h-[60px] items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-[18px] text-sm font-medium text-white backdrop-blur transition-all duration-500 hover:bg-white/20",
                    children: "Talk to an Engineer"
                  }
                )
              ]
            }
          )
        ]
      },
      active
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { delay: 2, duration: 1 },
        className: "absolute bottom-[200px] left-6 z-20 hidden flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 md:flex md:bottom-[160px] md:left-[30px]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { writingMode: "vertical-rl" }, className: "rotate-180", children: "Scroll" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative h-12 w-[1px] overflow-hidden bg-white/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              className: "absolute left-0 top-0 h-full w-full bg-white",
              animate: { y: ["-100%", "100%"] },
              transition: { repeat: Infinity, duration: 1.5, ease: "linear" }
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-[30px] left-6 right-6 z-20 md:bottom-[50px] md:left-[80px] md:right-[80px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden grid-cols-1 gap-6 border-t border-white/20 pt-6 md:grid md:grid-cols-3 md:gap-10", children: slides.map((slide, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActive(idx),
          className: `group relative flex flex-col items-start text-left transition-all duration-500 ${active === idx ? "opacity-100" : "opacity-60 hover:opacity-80"}`,
          children: [
            active === idx && /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                layoutId: "activeSlide",
                className: "absolute -top-[25px] left-0 h-[2px] w-full bg-gold"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-gold", children: slide.id }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1 font-display text-sm font-semibold text-white md:text-base", children: slide.projectName }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] text-white/70", children: slide.location })
          ]
        },
        slide.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-3 md:hidden", children: slides.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActive(idx),
          className: `h-2 rounded-full transition-all duration-500 ${active === idx ? "w-8 bg-gold" : "w-2 bg-white/40"}`
        },
        idx
      )) })
    ] })
  ] });
}
function Counter({
  to,
  duration = 2e3,
  suffix = ""
}) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n,
    suffix
  ] });
}
const ease = [0.22, 1, 0.36, 1];
function FadeUp({
  children,
  delay = 0,
  className,
  y = 32
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.9, ease, delay },
      children
    }
  );
}
function StaggerGroup({
  children,
  className,
  delay = 0,
  stagger = 0.08
}) {
  const v = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      variants: v,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true },
      children
    }
  );
}
const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
};
function WordReveal({
  text,
  className,
  delay = 0
}) {
  const words = text.split(" ");
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.05, delayChildren: delay }
    }
  };
  const child = {
    hidden: { y: "110%" },
    show: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.span,
    {
      className,
      variants: container,
      initial: "hidden",
      whileInView: "show",
      viewport: { once: true },
      children: words.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "inline-block overflow-hidden align-bottom",
          style: { marginRight: "0.25em" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              className: "inline-block",
              variants: child,
              children: w
            }
          )
        },
        i
      ))
    }
  );
}
const stats = [
  { value: 300, suffix: "+", label: "Projects Delivered" },
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Clients Worldwide" },
  { value: 10, suffix: "M+", label: "Sq. Ft Designed" }
];
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "blueprint-bg grain relative text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x relative py-20 md:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StaggerGroup, { className: "grid grid-cols-2 gap-y-12 md:grid-cols-4", stagger: 0.12, children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      variants: staggerItem,
      className: `flex flex-col items-start gap-3 px-4 md:px-8 ${i !== 0 ? "md:border-l md:border-white/10" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-gold", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl font-semibold leading-none tracking-tight md:text-6xl lg:text-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.value, suffix: s.suffix }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-white/70 md:text-base", children: s.label })
      ]
    },
    s.label
  )) }) }) });
}
const p2 = "/assets/project-2-DQK8sT3c.jpg";
const p3 = "/assets/project-3-BBvsm_ie.jpg";
const p4 = "/assets/project-4-DhNRjGOR.jpg";
const items = [
  { img: p1, title: "Helix Corporate Tower", tag: "Commercial · Chennai", size: "lg" },
  { img: p2, title: "Aurora Logistics Hub", tag: "Industrial · Sriperumbudur", size: "sm" },
  { img: p3, title: "Northgate PEB Facility", tag: "PEB · Hosur", size: "sm" },
  { img: p4, title: "Marina Residences", tag: "Residential · ECR", size: "lg" }
];
function Card({ item, idx }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.a,
    {
      href: "#",
      initial: { opacity: 0, y: 60 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: idx * 0.08 },
      className: `group relative block overflow-hidden bg-navy ${item.size === "lg" ? "aspect-[4/5] md:aspect-[4/5]" : "aspect-[5/4]"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: item.img,
            alt: item.title,
            loading: "lazy",
            className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/10 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-6 md:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "translate-y-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gold transition-transform duration-700 group-hover:translate-y-0", children: item.tag }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "translate-y-2 font-display text-2xl font-medium text-white transition-transform duration-700 group-hover:translate-y-0 md:text-3xl", children: item.title }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-px w-0 bg-gold transition-all duration-700 group-hover:w-24" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-navy opacity-0 transition-all duration-500 group-hover:opacity-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" }) })
      ]
    }
  );
}
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "section-pad bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Featured Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "heading-xl mt-6 text-navy", children: [
          "Engineering excellence",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "across every structure."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { className: "lg:col-span-5 lg:col-start-8", delay: 0.1, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-slate md:text-lg", children: "A selection of recent projects that reflect our commitment to precision, safety, and structural integrity — from high-rise commercial towers to expansive industrial campuses." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "#",
            className: "group mt-8 inline-flex items-center gap-2 border-b border-navy/30 pb-1 text-sm font-medium text-navy transition-colors hover:border-gold",
            children: [
              "View all projects",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:rotate-45" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:mt-24", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: i % 2 === 0 ? "md:translate-y-0" : "md:translate-y-16",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { item: it, idx: i })
      },
      it.title
    )) })
  ] }) });
}
const blueprint = "/assets/blueprint-C3WpFt_Z.jpg";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "section-pad bg-paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { clipPath: "inset(0 0 100% 0)" },
        whileInView: { clipPath: "inset(0 0 0% 0)" },
        viewport: { once: true, margin: "0px 0px -50px 0px" },
        transition: { duration: 1.3, ease: [0.22, 1, 0.36, 1] },
        className: "relative aspect-[4/5] w-full overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: blueprint,
              alt: "Structural engineering blueprint with ruler and pencil",
              loading: "lazy",
              className: "absolute inset-0 h-full w-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-5 left-5 right-5 flex items-end justify-between bg-white/85 p-4 backdrop-blur-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-gold", children: "Studio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-display text-lg font-medium text-navy", children: "Chennai, Tamil Nadu" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs text-slate", children: "EST. 1999" })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center lg:col-span-6 lg:col-start-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "About the Practice" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "heading-xl mt-6 max-w-xl text-navy", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WordReveal, { text: "Engineering precision," }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WordReveal, { text: "built on experience.", delay: 0.1 }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl text-base leading-[1.85] text-slate md:text-lg", children: "For over two decades, ISAAC Structural Consultancy has partnered with leading developers and industrial groups to engineer structures that are not only safe and economical, but also future-ready. We treat every drawing as a commitment." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { delay: 0.3, className: "mt-10 grid grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-4xl font-semibold text-navy", children: [
            "25",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "+" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-slate", children: "Years on site" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-4xl font-semibold text-navy", children: [
            "IS 800",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-slate", children: "Code-compliant by default" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#contact",
          className: "group mt-12 inline-flex items-center gap-3 bg-navy px-7 py-4 text-sm font-medium text-white transition-all duration-500 hover:bg-navy-light hover:ring-1 hover:ring-gold",
          children: [
            "Discuss your project",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:rotate-45" })
          ]
        }
      ) })
    ] })
  ] }) });
}
const services = [
  {
    n: "01",
    icon: Building2,
    title: "Structural Design",
    desc: "Innovative, code-compliant systems tailored to each project's unique loading, span, and geometry."
  },
  {
    n: "02",
    icon: Grid3x3,
    title: "RCC Structures",
    desc: "Reinforced concrete design for high-rise, podium, and complex transfer structures — built for durability."
  },
  {
    n: "03",
    icon: Layers,
    title: "PEB Structures",
    desc: "Pre-engineered steel buildings for industrial, warehouse, and manufacturing facilities at scale."
  },
  {
    n: "04",
    icon: Anchor,
    title: "Post-Tension Structures",
    desc: "Long-span PT slabs and beams that reduce depth, material, and time — without compromise on strength."
  }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "section-pad bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 items-end gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { className: "lg:col-span-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Engineering Expertise" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "heading-xl mt-6 text-navy", children: [
          "Comprehensive structural",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "solutions, one studio."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { className: "lg:col-span-5 lg:col-start-8", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-slate md:text-lg", children: "From concept sketches to as-built drawings, we own every line of the structural narrative." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 border-t border-line md:grid-cols-2 lg:mt-20 lg:grid-cols-4", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        href: "#",
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
        className: `group relative flex flex-col gap-6 border-b border-line p-8 transition-colors duration-500 hover:bg-paper md:p-10 lg:p-12 ${i !== 0 ? "lg:border-l" : ""} ${i < 2 ? "md:border-r lg:border-r-0" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-slate/60", children: s.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              s.icon,
              {
                strokeWidth: 1.25,
                className: "h-8 w-8 text-navy transition-all duration-500 group-hover:-translate-y-1 group-hover:text-gold"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-medium text-navy md:text-2xl", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-slate md:text-base", children: s.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between pt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-gold transition-all duration-500 group-hover:w-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 text-navy transition-transform duration-500 group-hover:rotate-45 group-hover:text-gold" })
          ] })
        ]
      },
      s.title
    )) })
  ] }) });
}
const steps = [
  { n: "01", icon: MessagesSquare, title: "Consultation", desc: "Understanding your vision, brief, and the constraints of the site." },
  { n: "02", icon: ClipboardCheck, title: "Analysis", desc: "Detailed site study, soil reports, and structural analysis with FEA tools." },
  { n: "03", icon: PencilRuler, title: "Design", desc: "Code-compliant drawings optimised for safety, cost, and constructability." },
  { n: "04", icon: HardHat, title: "Execution Support", desc: "On-site guidance through casting, fabrication, erection, and handover." }
];
function Process() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"]
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad bg-paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 items-end gap-10 lg:grid-cols-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Our Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "heading-xl mt-6 text-navy", children: [
        "A structured approach",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "to every project."
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 right-0 top-12 hidden h-px bg-line lg:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          style: { scaleX: lineScale },
          className: "absolute left-0 right-0 top-12 hidden h-px origin-left bg-gold lg:block"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 },
          className: "relative",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex h-24 w-24 items-center justify-center rounded-full border border-line bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { strokeWidth: 1.25, className: "h-8 w-8 text-navy" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 font-mono text-xs uppercase tracking-[0.22em] text-gold", children: [
              "Step ",
              s.n
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl font-medium text-navy", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xs text-sm leading-relaxed text-slate", children: s.desc })
          ]
        },
        s.n
      )) })
    ] })
  ] }) });
}
const benefits = [
  "Experienced and qualified engineers",
  "Cost-effective design without compromise",
  "Advanced FEA & seismic analysis",
  "Independent quality assurance",
  "On-time delivery, every milestone"
];
function WhyUs() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-pad bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Why ISAAC" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "heading-xl mt-6 text-navy", children: [
          "Built on trust.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Driven by expertise."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-base text-slate md:text-lg", children: "We don't just design structures — we build confidence that lasts for generations." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-12 space-y-1 border-t border-line", children: benefits.map((b, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.li,
        {
          initial: { opacity: 0, x: -16 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
          className: "group flex items-center gap-5 border-b border-line py-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4", strokeWidth: 2.5 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-medium text-navy md:text-lg", children: b })
          ]
        },
        b
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: "relative lg:col-span-6 lg:col-start-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.img,
        {
          src: warehouse,
          alt: "Steel-framed warehouse interior at sunset",
          loading: "lazy",
          style: { y },
          className: "absolute inset-[-8%] h-[116%] w-full object-cover"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 right-6 max-w-xs bg-navy p-6 text-white md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl leading-none text-gold", children: '"' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-base leading-relaxed", children: "We don't just design structures — we build confidence that lasts for generations." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 h-px w-12 bg-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/60", children: "Founding Principle" })
      ] })
    ] }) })
  ] }) });
}
const logos = [
  "L&T Construction",
  "TATA Projects",
  "TVS",
  "Ashok Leyland",
  "Godrej",
  "DLF",
  "Mahindra",
  "Brigade"
];
function Clients() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-y border-line bg-white py-16 md:py-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-x", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Trusted by Industry Leaders" }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee gap-16 group-hover:[animation-play-state:paused]", children: [...logos, ...logos].map((name, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "flex h-12 shrink-0 items-center font-display text-2xl font-semibold tracking-tight text-slate/60 transition-colors duration-500 hover:text-navy md:text-3xl",
            children: name
          },
          i
        )) })
      }
    )
  ] });
}
const quotes = [
  {
    quote: "ISAAC delivered exceptional engineering on our 4.2M sq.ft tech park. Their expertise, professionalism, and commitment to timelines were outstanding.",
    name: "R. Karthik",
    role: "Project Manager, L&T Construction"
  },
  {
    quote: "The PEB design for our distribution centre shaved three months off our schedule. We've worked with them on every subsequent build.",
    name: "Anita Menon",
    role: "Head of Projects, TATA Logistics"
  },
  {
    quote: "From the first sketch to the final pour, ISAAC's drawings were the cleanest we've seen in twenty years of contracting.",
    name: "S. Velumani",
    role: "Director, Velumani Builders"
  }
];
function Testimonials() {
  const [i, setI] = reactExports.useState(0);
  const q = quotes[i];
  const next = () => setI((p) => (p + 1) % quotes.length);
  const prev = () => setI((p) => (p - 1 + quotes.length) % quotes.length);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-navy", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: warehouse,
        alt: "",
        "aria-hidden": true,
        className: "absolute inset-0 h-full w-full object-cover opacity-15",
        loading: "lazy"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative grid grid-cols-1 gap-10 py-24 md:py-32 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-7xl leading-none text-gold md:text-8xl", children: '"' }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
            transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl font-medium leading-snug text-white md:text-3xl lg:text-4xl", children: q.quote }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-gold font-display text-lg font-semibold text-navy", children: q.name.charAt(0) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-medium text-white", children: q.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-white/60", children: q.role })
                ] })
              ] })
            ]
          },
          i
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex items-center justify-between border-t border-white/10 pt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: quotes.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setI(idx),
              className: `h-1 w-10 transition-all duration-500 ${idx === i ? "bg-gold" : "bg-white/20 hover:bg-white/40"}`,
              "aria-label": `Quote ${idx + 1}`
            },
            idx
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: prev,
                className: "flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-all duration-500 hover:border-gold hover:text-gold",
                "aria-label": "Previous",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: next,
                className: "flex h-12 w-12 items-center justify-center border border-white/20 text-white transition-all duration-500 hover:border-gold hover:text-gold",
                "aria-label": "Next",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
const tabs = [
  { key: "commercial", label: "Commercial", img: p1, headline: "Skyline-defining commercial towers.", body: "From corporate HQs to mixed-use developments — engineered to flex with future tenant needs while keeping floor plates open and beautiful." },
  { key: "industrial", label: "Industrial", img: p2, headline: "Plants designed around process flow.", body: "Heavy industry, manufacturing, and process buildings with structural systems that respect the equipment they house." },
  { key: "warehouse", label: "Warehouse", img: p3, headline: "Long-span PEB facilities at scale.", body: "Pre-engineered steel buildings designed for rapid erection, optimised material usage, and clear-span performance up to 80m." },
  { key: "residential", label: "Residential", img: p4, headline: "Homes built to outlast generations.", body: "From townhouses to high-rise apartments, our residential designs prioritise occupant comfort, seismic safety, and elegant detailing." }
];
function Expertise() {
  const [active, setActive] = reactExports.useState(0);
  const t = tabs[active];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "expertise", className: "relative overflow-hidden bg-paper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x section-pad relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-12 flex items-end justify-between gap-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Sectors" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-xl mt-6 max-w-2xl text-navy", children: "Built for every kind of structure." })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 border-b border-line", children: tabs.map((tab, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setActive(i),
        className: `relative px-5 py-4 font-display text-sm font-medium uppercase tracking-wider transition-colors md:text-base ${active === i ? "text-navy" : "text-slate hover:text-navy"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono mr-3 text-xs text-slate/60", children: [
            "0",
            i + 1
          ] }),
          tab.label,
          active === i && /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              layoutId: "tab-underline",
              className: "absolute inset-x-0 -bottom-px h-0.5 bg-gold"
            }
          )
        ]
      },
      tab.key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] w-full overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.img,
          {
            src: t.img,
            alt: t.label,
            loading: "lazy",
            initial: { opacity: 0, scale: 1.06 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 1.02 },
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            className: "absolute inset-0 h-full w-full object-cover"
          },
          t.key
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col justify-center lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -10 },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-gold", children: [
              "Sector · 0",
              active + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "heading-lg mt-4 text-navy", children: t.headline }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base text-slate md:text-lg", children: t.body }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#",
                className: "group mt-8 inline-flex items-center gap-2 border-b border-navy/30 pb-1 text-sm font-medium text-navy transition-colors hover:border-gold",
                children: [
                  "Explore sector",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:rotate-45" })
                ]
              }
            )
          ]
        },
        t.key
      ) }) })
    ] })
  ] }) });
}
const g1 = "/assets/gallery-1-BICAcE6k.jpg";
const g2 = "/assets/gallery-2-DKs4r_9Y.jpg";
const g3 = "/assets/gallery-3-CjdfmzlW.jpg";
const posts = [
  { img: g1, cat: "Field Notes", title: "Why long-span PEB is winning India's logistics race.", read: "6 min read" },
  { img: g2, cat: "Engineering", title: "Designing for seismic zones III & IV: a practitioner's guide.", read: "9 min read" },
  { img: g3, cat: "Insight", title: "Post-tensioned slabs: where they pay back, where they don't.", read: "7 min read" }
];
function Insights() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "insights", className: "section-pad bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 items-end gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FadeUp, { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Insights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "heading-xl mt-6 text-navy", children: [
          "Notes from the",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "drawing board."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { className: "lg:col-span-4 lg:col-start-9 lg:text-right", delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "#",
          className: "group inline-flex items-center gap-2 border-b border-navy/30 pb-1 text-sm font-medium text-navy transition-colors hover:border-gold",
          children: [
            "All articles",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:rotate-45" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 gap-10 md:grid-cols-3", children: posts.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.a,
      {
        href: "#",
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 },
        className: "group block",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/5] w-full overflow-hidden bg-navy", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: p.img,
              alt: p.title,
              loading: "lazy",
              className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-slate", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: p.cat }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.read })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-xl font-medium leading-snug text-navy transition-colors group-hover:text-navy-light md:text-2xl", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 inline-flex items-center gap-2 text-sm font-medium text-navy", children: [
            "Read article",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" })
          ] })
        ]
      },
      p.title
    )) })
  ] }) });
}
const imgs = [
  { src: g1, label: "Aerial — Hosur Campus" },
  { src: p1, label: "Helix Tower — Chennai" },
  { src: g2, label: "Erection — Mahindra City" },
  { src: p2, label: "Logistics Hub — Sriperumbudur" },
  { src: g3, label: "Bridge Detail — Cochin" }
];
function GalleryStrip() {
  const ref = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const x = useTransform(scrollYProgress, [0, 1], ["8%", "-38%"]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, className: "relative overflow-hidden bg-navy py-24 md:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", children: "Project Gallery" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "heading-xl mt-6 text-white", children: "A scroll through the field." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { style: { x }, className: "flex gap-6 will-change-transform", children: imgs.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative aspect-[4/5] w-[78vw] shrink-0 overflow-hidden bg-navy-light md:w-[44vw] lg:w-[34vw]",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: it.src,
              alt: it.label,
              loading: "lazy",
              className: "absolute inset-0 h-full w-full object-cover"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-navy/80 to-transparent p-6 text-white", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-gold", children: [
              "0",
              i + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-medium md:text-base", children: it.label })
          ] })
        ]
      },
      i
    )) })
  ] });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative overflow-hidden bg-navy", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: warehouse,
        alt: "",
        "aria-hidden": true,
        loading: "lazy",
        className: "absolute inset-0 h-full w-full object-cover opacity-30"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative py-28 text-center md:py-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow justify-center", children: "Let's Build" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "heading-hero mx-auto mt-8 max-w-4xl text-white", children: [
        "Let's discuss your",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "next project." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-8 max-w-xl text-base leading-[1.8] text-white/70 md:text-lg", children: "Partner with experienced structural engineers for reliable, efficient, and future-ready solutions — from concept to completion." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.a,
        {
          href: "mailto:info@isaacstructural.com",
          whileHover: { scale: 1.02 },
          className: "group mt-12 inline-flex items-center gap-4 bg-gold px-10 py-5 font-display text-base font-medium text-navy transition-all duration-500 hover:bg-gold-soft",
          children: [
            "Start a project",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5 transition-transform duration-500 group-hover:rotate-45" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.4, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "+91 98765 43210" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-white/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "info@isaacstructural.com" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-white/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Chennai, Tamil Nadu" })
      ] }) })
    ] })
  ] });
}
const cols = [
  {
    title: "Company",
    links: ["About", "Studio", "Careers", "Press", "Contact"]
  },
  {
    title: "Services",
    links: ["Structural Design", "RCC Structures", "PEB Structures", "Post-Tension", "Peer Review"]
  },
  {
    title: "Projects",
    links: ["Commercial", "Industrial", "Warehouse", "Residential", "Infrastructure"]
  }
];
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "blueprint-bg grain relative text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-x relative pb-12 pt-24 md:pt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-12 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 md:col-span-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl font-bold tracking-tight", children: "ISAAC" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gold", children: "Structural Consultancy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xs text-sm leading-relaxed text-white/60", children: "Providing innovative and reliable structural engineering solutions with precision, experience, and integrity since 1999." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex gap-3", children: [Linkedin, Instagram, Twitter, Youtube].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-500 hover:border-gold hover:text-gold",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
          },
          i
        )) })
      ] }),
      cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-white/40", children: c.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: c.links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "text-sm text-white/80 transition-colors hover:text-gold",
            children: l
          }
        ) }, l)) })
      ] }, c.title)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-white/40", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-3 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "+91 98765 43210" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "info@isaacstructural.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Chennai, Tamil Nadu, India" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-white/40 md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ISAAC Structural Consultancy"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Privacy Policy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-gold", children: "Terms & Conditions" })
      ] })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative bg-white text-navy", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SmoothScroll, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Clients, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Expertise, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Insights, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(GalleryStrip, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Index as component
};
