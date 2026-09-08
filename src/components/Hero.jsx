import { useEffect, useRef } from "react";
import { ArrowUpRight, Github, Mail, Sparkles } from "lucide-react";
import myImage from "../images/my_image.jpeg";

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root || !window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const gsap = window.gsap;
    const ctx = gsap.context(() => {
      gsap.fromTo(".hero-reveal", { y: 42, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, stagger: 0.09, ease: "power3.out" });
      gsap.to(".hero-orb-a", { x: 70, y: 35, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".hero-orb-b", { x: -55, y: -30, duration: 9, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".hero-image", { y: -10, duration: 3.8, repeat: -1, yoyo: true, ease: "sine.inOut" });
    }, root);

    const onPointerMove = (event) => {
      const rect = root.getBoundingClientRect();
      root.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      root.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };
    root.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      root.removeEventListener("pointermove", onPointerMove);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative isolate min-h-[calc(100vh-1px)] overflow-hidden border-b border-white/10 px-6 pb-16 pt-32 sm:pt-40 lg:pb-24">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-20 opacity-60" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(500px_circle_at_var(--mx,50%)_var(--my,30%),rgba(103,232,249,.09),transparent_70%)]" />
      <div className="hero-orb-a pointer-events-none absolute -left-32 top-28 -z-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="hero-orb-b pointer-events-none absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <div className="hero-reveal mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[.06] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[.2em] text-cyan-200">
            <Sparkles size={13} /> Available for opportunities
          </div>

          <p className="hero-reveal mb-4 text-sm font-semibold tracking-[.25em] text-zinc-500">HELLO, I'M QUTUB AHMED</p>
          <h1 className="hero-reveal max-w-5xl text-[clamp(3.5rem,9vw,7.5rem)] font-black leading-[.88] tracking-[-.075em] text-white">
            Frontend
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-violet-300 bg-clip-text text-transparent">Developer.</span>
          </h1>
          <p className="hero-reveal mt-8 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            I build responsive, polished web interfaces with React and Next.js — combining thoughtful UI, clean component architecture, and practical engineering.
          </p>

          <div className="hero-reveal mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-zinc-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-100">
              View selected work <ArrowUpRight size={17} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a href="mailto:qutubahmed104@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[.03] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[.07]">
              Let's talk <Mail size={17} />
            </a>
          </div>

          <div className="hero-reveal mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-medium uppercase tracking-[.14em] text-zinc-600">
            <a href="https://github.com/qutubahmed732" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-cyan-200"><Github size={15} /> GitHub</a>
            <span>Karachi · Pakistan</span>
            <span>React · Next.js · UI</span>
          </div>
        </div>

        <div className="hero-reveal relative mx-auto w-full max-w-[440px] lg:justify-self-end">
          <div className="absolute -inset-5 rounded-[2.5rem] border border-white/[.06]" />
          <div className="absolute -inset-10 rounded-full bg-cyan-300/[.04] blur-3xl" />
          <div className="hero-image relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 p-2 shadow-2xl shadow-black/50">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-zinc-950">
              <img src={myImage} alt="Qutub Ahmed" className="h-full w-full object-cover object-top grayscale-[10%] transition duration-700 hover:scale-[1.025]" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-zinc-950/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.18em] text-zinc-300 backdrop-blur-xl">01 / 01</div>
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-zinc-950/70 p-4 backdrop-blur-xl">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[.2em] text-cyan-200">Building for the web</p>
                    <p className="mt-1 text-sm font-semibold text-white">Interfaces that feel intentional.</p>
                  </div>
                  <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,.9)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-reveal mx-auto mt-16 grid max-w-7xl grid-cols-2 border-y border-white/10 sm:grid-cols-4">
        {[["09+", "Projects built"], ["React", "Primary stack"], ["Next.js", "Framework"], ["100%", "Self-taught"]].map(([value, label]) => (
          <div key={label} className="border-r border-white/10 px-4 py-5 last:border-r-0 sm:px-6">
            <p className="text-lg font-bold tracking-tight text-white sm:text-xl">{value}</p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[.15em] text-zinc-600">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
