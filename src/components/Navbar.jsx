import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const current = links.map((item) => item.toLowerCase()).reverse().find((id) => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top <= 180;
      });
      if (current) setActiveSection(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "border-b border-white/10 bg-[#070709]/75 backdrop-blur-2xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <button onClick={() => scrollTo("home")} className="group flex items-center gap-2 text-lg font-black tracking-[-.05em] text-white" aria-label="Back to home">
          QUTUB<span className="text-cyan-200">.</span>
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((item) => {
            const id = item.toLowerCase();
            return <button key={id} onClick={() => scrollTo(id)} className={`relative rounded-full px-4 py-2 text-xs font-semibold transition ${activeSection === id ? "text-white" : "text-zinc-500 hover:text-zinc-200"}`}>
              {item}
              {activeSection === id && <span className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-cyan-200" />}
            </button>;
          })}
        </div>
        <a href="mailto:qutubahmed104@gmail.com" className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-bold text-zinc-300 transition hover:border-cyan-300/30 hover:text-white md:inline-flex">Let's talk <ArrowUpRight size={14} /></a>
        <button className="rounded-lg p-2 text-zinc-300 hover:bg-white/10 md:hidden" onClick={() => setIsMenuOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>{isMenuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </nav>
      {isMenuOpen && <div className="border-t border-white/10 bg-[#070709]/95 px-6 py-4 backdrop-blur-2xl md:hidden"><div className="mx-auto flex max-w-7xl flex-col gap-1">{links.map((item) => { const id = item.toLowerCase(); return <button key={id} onClick={() => scrollTo(id)} className={`rounded-lg px-3 py-3 text-left text-sm ${activeSection === id ? "bg-white/5 text-white" : "text-zinc-400"}`}>{item}</button>; })}</div></div>}
    </header>
  );
}
