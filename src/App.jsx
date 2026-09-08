import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !window.gsap || !window.ScrollTrigger) return undefined;

    const gsap = window.gsap;
    const { ScrollTrigger } = window;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".reveal-section", {
        y: 48,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08,
        scrollTrigger: { trigger: ".reveal-section", start: "top 88%", once: true },
      });
      gsap.utils.toArray(".reveal-item").forEach((item) => {
        gsap.from(item, {
          y: 28,
          opacity: 0,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: { trigger: item, start: "top 90%", once: true },
        });
      });
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-cyan-300 selection:text-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-zinc-950 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Qutub Ahmed.</p>
          <p>Built with React, Tailwind CSS & GSAP.</p>
        </div>
      </footer>
    </div>
  );
}
