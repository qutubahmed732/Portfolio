import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import myImage from "../images/my_image.jpeg";

export default function About() {
  return (
    <section id="about" className="reveal-section border-y border-white/10 bg-zinc-900/40 px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
        <div className="reveal-item relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] border border-cyan-300/20" />
          <div className="relative aspect-square overflow-hidden rounded-[1.75rem] border border-white/10 bg-zinc-900">
            <img src={myImage} alt="Qutub Ahmed" className="h-full w-full object-cover object-top" loading="lazy" />
          </div>
        </div>
        <div>
          <p className="reveal-item text-sm font-bold uppercase tracking-[.2em] text-cyan-300">01 / About</p>
          <h2 className="reveal-item mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Curious by nature. Serious about the craft.</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-zinc-400 sm:text-lg">
            <p className="reveal-item">I'm a self-taught Frontend Developer from Karachi. I started with curiosity about how the web works and kept building until that curiosity became a genuine commitment to software development.</p>
            <p className="reveal-item">Today, I focus on the React and Next.js ecosystem, with an emphasis on responsive interfaces, component architecture, accessibility, and practical problem solving.</p>
            <p className="reveal-item">I don't present myself as an experienced professional yet. I'm a fresher building real projects, improving my engineering habits, and looking for the right opportunity to contribute and grow.</p>
          </div>
          <div className="reveal-item mt-8 flex flex-wrap gap-3">
            <a href="https://github.com/qutubahmed732" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-white/20 hover:text-white"><Github size={16} /> GitHub <ArrowUpRight size={14} /></a>
            <a href="https://www.linkedin.com/in/qutub-ahmed-9429982a6/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-white/20 hover:text-white"><Linkedin size={16} /> LinkedIn <ArrowUpRight size={14} /></a>
            <a href="mailto:qutubahmed104@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-white/20 hover:text-white"><Mail size={16} /> Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}
