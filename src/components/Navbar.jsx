import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const current = links
        .map((item) => item.toLowerCase())
        .reverse()
        .find((id) => {
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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? "border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4" aria-label="Main navigation">
        <button onClick={() => scrollTo("home")} className="group text-xl font-black tracking-tighter" aria-label="Back to home">
          QA<span className="text-cyan-300">.</span>
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((item) => {
            const id = item.toLowerCase();
            return (
              <button key={id} onClick={() => scrollTo(id)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeSection === id ? "bg-white/10 text-white" : "text-zinc-400 hover:text-white"}`}>
                {item}
              </button>
            );
          })}
        </div>
        <button className="rounded-lg p-2 text-zinc-300 hover:bg-white/10 md:hidden" onClick={() => setIsMenuOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-zinc-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {links.map((item) => {
              const id = item.toLowerCase();
              return <button key={id} onClick={() => scrollTo(id)} className="rounded-lg px-3 py-3 text-left text-sm text-zinc-300 hover:bg-white/5 hover:text-white">{item}</button>;
            })}
          </div>
        </div>
      )}
    </header>
  );
}
