import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";
import services from "../appwrite/appwrite";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");

  async function feedbackFunction(e) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setStatus("sending");
    try {
      await services.sendFeedbacks({ name: name.trim(), message: message.trim() });
      setName(""); setMessage(""); setStatus("sent");
    } catch { setStatus("error"); }
  }

  return (
    <section id="contact" className="reveal-section relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/[.035] blur-3xl" />
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0b0f]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/50 to-transparent" />
        <div className="grid lg:grid-cols-[.9fr_1.1fr]">
          <div className="border-b border-white/10 p-7 sm:p-12 lg:border-b-0 lg:border-r lg:p-14">
            <p className="reveal-item text-xs font-bold uppercase tracking-[.25em] text-cyan-200">04 / Contact</p>
            <h2 className="reveal-item mt-5 text-4xl font-black tracking-[-.05em] text-white sm:text-6xl">Let's build something <span className="text-zinc-600">useful.</span></h2>
            <p className="reveal-item mt-6 max-w-lg text-base leading-7 text-zinc-500 sm:text-lg">Looking for a junior frontend developer, a collaborator, or simply want to talk about a project? Send a message and I'll get back to you.</p>
            <div className="reveal-item mt-10 space-y-3">
              <a href="mailto:qutubahmed104@gmail.com" className="group flex items-center justify-between rounded-xl border border-white/10 p-4 text-sm text-zinc-300 transition hover:border-cyan-300/25 hover:bg-white/[.025] hover:text-white"><span className="flex items-center gap-3"><Mail size={17} /> qutubahmed104@gmail.com</span><ArrowUpRight size={15} className="text-zinc-600 group-hover:text-cyan-200" /></a>
              <a href="https://www.linkedin.com/in/qutub-ahmed-9429982a6/" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-white/10 p-4 text-sm text-zinc-300 transition hover:border-cyan-300/25 hover:bg-white/[.025] hover:text-white"><span className="flex items-center gap-3"><Linkedin size={17} /> LinkedIn</span><ArrowUpRight size={15} className="text-zinc-600 group-hover:text-cyan-200" /></a>
              <a href="https://github.com/qutubahmed732" target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-xl border border-white/10 p-4 text-sm text-zinc-300 transition hover:border-cyan-300/25 hover:bg-white/[.025] hover:text-white"><span className="flex items-center gap-3"><Github size={17} /> GitHub</span><ArrowUpRight size={15} className="text-zinc-600 group-hover:text-cyan-200" /></a>
            </div>
          </div>

          <form className="reveal-item p-7 sm:p-12 lg:p-14" onSubmit={feedbackFunction}>
            <div className="mb-8"><p className="text-sm font-semibold text-white">Send a message</p><p className="mt-1 text-xs text-zinc-600">I'll read it personally.</p></div>
            <div className="space-y-5">
              <div><label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-600">Name</label><input id="name" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" className="w-full rounded-xl border border-white/10 bg-white/[.025] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-300/40 focus:bg-white/[.04]" placeholder="Your name" /></div>
              <div><label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-600">Message</label><textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows="7" className="w-full resize-none rounded-xl border border-white/10 bg-white/[.025] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-700 focus:border-cyan-300/40 focus:bg-white/[.04]" placeholder="Tell me about the opportunity or project..." /></div>
              <button disabled={status === "sending"} className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-bold text-zinc-950 transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-60">{status === "sending" ? "Sending..." : status === "sent" ? <>Message sent <CheckCircle2 size={17} /></> : <>Send message <Send size={17} className="transition group-hover:translate-x-0.5" /></>}</button>
              {status === "error" && <p className="text-sm text-red-300">Something went wrong. Please email me directly instead.</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
