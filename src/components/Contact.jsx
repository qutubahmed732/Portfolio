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
      setName("");
      setMessage("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="reveal-section px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[.06] to-white/[.02] p-7 sm:p-12">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="reveal-item text-sm font-bold uppercase tracking-[.2em] text-cyan-300">04 / Contact</p>
            <h2 className="reveal-item mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Have an opportunity in mind?</h2>
            <p className="reveal-item mt-5 max-w-lg leading-7 text-zinc-400">I'm currently looking for my first professional opportunity. If you're hiring a junior frontend developer, building something interesting, or simply want to connect, I'd be glad to hear from you.</p>
            <div className="reveal-item mt-8 space-y-3 text-sm">
              <a href="mailto:qutubahmed104@gmail.com" className="flex items-center gap-3 text-zinc-300 hover:text-cyan-300"><Mail size={17} /> qutubahmed104@gmail.com <ArrowUpRight size={14} /></a>
              <a href="https://www.linkedin.com/in/qutub-ahmed-9429982a6/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-cyan-300"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
              <a href="https://github.com/qutubahmed732" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-zinc-300 hover:text-cyan-300"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a>
            </div>
          </div>

          <form className="reveal-item space-y-4" onSubmit={feedbackFunction}>
            <div><label htmlFor="name" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">Name</label><input id="name" value={name} onChange={(e) => setName(e.target.value)} required autoComplete="name" className="w-full rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10" placeholder="Your name" /></div>
            <div><label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">Message</label><textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows="6" className="w-full resize-none rounded-xl border border-white/10 bg-zinc-950/70 px-4 py-3 text-white outline-none transition focus:border-cyan-300/50 focus:ring-2 focus:ring-cyan-300/10" placeholder="Tell me a little about the opportunity..." /></div>
            <button disabled={status === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-300 px-5 py-3.5 font-bold text-zinc-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60">
              {status === "sending" ? "Sending..." : status === "sent" ? <>Message sent <CheckCircle2 size={17} /></> : <>Send message <Send size={17} /> </>}
            </button>
            {status === "error" && <p className="text-sm text-red-300">Something went wrong. Please email me directly instead.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
