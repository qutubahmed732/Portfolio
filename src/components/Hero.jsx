import { useEffect, useRef } from "react";
import { ArrowDownRight, Github, Mail } from "lucide-react";
import myImage from "../images/my_image.jpeg";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const gsap = window.gsap;
    const ctx = gsap.context(() => {
      gsap.from(".hero-kicker, .hero-title, .hero-copy, .hero-actions, .hero-card", { y: 32, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative isolate overflow-hidden px-6 pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,.12),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,.12),transparent_30%)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <div className="hero-kicker mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-xs font-semibold uppercase tracking-[.18em] text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_currentColor]" /> Self-taught • Open to opportunities
          </div>
          <h1 className="hero-title max-w-4xl text-5xl font-black tracking-[-.055em] text-white sm:text-7xl lg:text-[5.5rem] lg:leading-[.95]">
            I build interfaces people <span className="text-cyan-300">enjoy using.</span>
          </h1>
          <p className="hero-copy mt-7 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            I'm Qutub Ahmed, a self-taught Frontend Developer and fresher focused on React, Next.js, responsive UI, and turning ideas into clean, useful web experiences.
          </p>
          <div className="hero-actions mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-6 py-3.5 font-bold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-cyan-200">
              Explore my work <ArrowDownRight size={18} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[.04] px-6 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/[.08]">
              Let's connect <Mail size={18} />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-5 text-sm text-zinc-500">
            <a href="https://github.com/qutubahmed732" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-white"><Github size={16} /> GitHub</a>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span>Karachi, Pakistan</span>
          </div>
        </div>

        <div className="hero-card relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-[2rem] bg-cyan-300/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.04] p-2 shadow-2xl shadow-black/40">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-zinc-900">
              <img src={myImage} alt="Qutub Ahmed" className="h-full w-full object-cover object-top grayscale-[15%] transition duration-700 hover:scale-[1.03]" />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-zinc-950/70 p-4 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[.2em] text-cyan-300">Currently focused on</p>
                <p className="mt-1 font-semibold text-white">React • Next.js • Modern UI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="mx-auto mt-16 block text-zinc-600 transition hover:text-cyan-300" aria-label="Scroll to about section">
        <ArrowDownRight className="rotate-45" />
      </button>
    </section>
  );
}
