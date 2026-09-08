import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import myImage from "../images/my_image.jpeg";

export default function About() {
  return (
    <section id="about" className="reveal-section relative overflow-hidden border-b border-white/10 bg-[#0a0a0d] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div className="reveal-item relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-[2.5rem] border border-white/[.07]" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 p-2">
              <img src={myImage} alt="Qutub Ahmed" className="h-full w-full rounded-[1.5rem] object-cover object-top grayscale-[12%]" loading="lazy" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-zinc-950/75 p-4 backdrop-blur-xl">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-zinc-500">Based in</p>
                <p className="mt-1 text-sm font-semibold text-white">Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          <div>
            <p className="reveal-item text-xs font-bold uppercase tracking-[.25em] text-cyan-200">01 / About me</p>
            <h2 className="reveal-item mt-4 max-w-4xl text-4xl font-black tracking-[-.045em] text-white sm:text-6xl">Learning in public. <span className="text-zinc-600">Building for real.</span></h2>
            <div className="mt-7 max-w-3xl space-y-5 text-base leading-8 text-zinc-400 sm:text-lg">
              <p className="reveal-item">I'm a self-taught Frontend Developer from Karachi who enjoys turning ideas into clean, responsive and useful web experiences.</p>
              <p className="reveal-item">My main focus is the React and Next.js ecosystem, with practical experience across UI development, APIs, state management, authentication and browser persistence.</p>
              <p className="reveal-item">I'm a fresher, not an experienced professional yet. I'm building real projects, improving my engineering habits and looking for an opportunity where I can contribute while continuing to grow.</p>
            </div>
            <div className="reveal-item mt-9 flex flex-wrap gap-3">
              <a href="https://github.com/qutubahmed732" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-cyan-300/30 hover:text-white">GitHub <ArrowUpRight size={14} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
              <a href="https://www.linkedin.com/in/qutub-ahmed-9429982a6/" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-cyan-300/30 hover:text-white">LinkedIn <ArrowUpRight size={14} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
              <a href="mailto:qutubahmed104@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-cyan-300/30 hover:text-white">Email <Mail size={14} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
