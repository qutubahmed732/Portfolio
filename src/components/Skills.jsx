import { Code2, Layout, Boxes, Palette, Server, Wrench } from "lucide-react";

const skills = [
  { category: "Core web", icon: Code2, items: ["HTML5", "CSS3", "JavaScript (ES6+)"] },
  { category: "React ecosystem", icon: Layout, items: ["React.js", "Next.js", "TypeScript"] },
  { category: "State & forms", icon: Boxes, items: ["Redux Toolkit", "Context API", "React Hook Form"] },
  { category: "Styling & UI", icon: Palette, items: ["Tailwind CSS", "SCSS", "Responsive Design"] },
  { category: "Services", icon: Server, items: ["Appwrite", "Firebase", "Clerk", "Gemini API"] },
  { category: "Workflow", icon: Wrench, items: ["Git & GitHub", "VS Code", "Vercel", "Netlify"] },
];

export default function Skills() {
  return (
    <section id="skills" className="reveal-section px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="reveal-item text-sm font-bold uppercase tracking-[.2em] text-cyan-300">02 / Toolkit</p>
          <h2 className="reveal-item mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Tools I use to turn ideas into interfaces.</h2>
          <p className="reveal-item mt-5 leading-7 text-zinc-400">A practical stack centered on the modern JavaScript ecosystem. I care about readable code, reusable components, responsive behavior, and shipping working products.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ category, icon: Icon, items }) => (
            <article key={category} className="reveal-item rounded-2xl border border-white/10 bg-white/[.035] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[.055]">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl border border-white/10 bg-zinc-900 p-2.5 text-cyan-300"><Icon size={20} /></div>
                <h3 className="font-bold text-white">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-400">{item}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
