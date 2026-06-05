import { createFileRoute } from "@tanstack/react-router";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { WhyUs } from "@/components/WhyUs";
import { Clients } from "@/components/Clients";
import { Testimonials } from "@/components/Testimonials";
import { Expertise } from "@/components/Expertise";
import { Insights } from "@/components/Insights";
import { GalleryStrip } from "@/components/GalleryStrip";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ISAAC Structural Consultancy — Engineering Confidence" },
      {
        name: "description",
        content:
          "Premium structural engineering for industrial, commercial, and residential developments. 25+ years, 300+ projects, 10M+ sq.ft designed across India.",
      },
      { property: "og:title", content: "ISAAC Structural Consultancy" },
      {
        property: "og:description",
        content:
          "Structural engineering excellence — RCC, PEB, post-tension. Chennai, India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative bg-white text-navy">
      <SmoothScroll />
      <Nav />
      <Hero />
      <Stats />
      <Projects />
      <About />
      <Services />
      <Process />
      <WhyUs />
      <Clients />
      <Expertise />
      <Testimonials />
      <Insights />
      <GalleryStrip />
      <FinalCTA />
      <Footer />
    </main>
  );
}
