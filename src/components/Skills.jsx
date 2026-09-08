import { Code2, Layout, Boxes, Palette, Server, Wrench } from "lucide-react";

const skills = [
  { category: "Core web", icon: Code2, number: "01", items: ["HTML5", "CSS3", "JavaScript (ES6+)"] },
  { category: "React ecosystem", icon: Layout, number: "02", items: ["React.js", "Next.js", "TypeScript"] },
  { category: "State & forms", icon: Boxes, number: "03", items: ["Redux Toolkit", "Context API", "React Hook Form"] },
  { category: "Styling & UI", icon: Palette, number: "04", items: ["Tailwind CSS", "SCSS", "Responsive Design"] },
  { category: "Services", icon: Server, number: "05", items: ["Appwrite", "Firebase", "Clerk", "Gemini API"] },
  { category: "Workflow", icon: Wrench, number: "06", items: ["Git & GitHub", "VS Code", "Vercel", "Netlify"] },
];

export default function Skills() {
  return (
    <section id="skills" className="reveal-section relative overflow-hidden px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-violet-500/[.04] blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="reveal-item text-xs font-bold uppercase tracking-[.25em] text-cyan-200">02 / Toolkit</p>
            <h2 className="reveal-item mt-4 text-4xl font-black tracking-[-.045em] text-white sm:text-6xl">A stack built around <span className="text-zinc-600">shipping.</span></h2>
          </div>
          <p className="reveal-item max-w-md text-sm leading-6 text-zinc-500">Modern frontend tools I use to build responsive interfaces, reusable components and practical web applications.</p>
        </div>

        <div className="mt-8 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ category, icon: Icon, number, items }) => (
            <article key={category} className="reveal-item group relative min-h-52 bg-[#0a0a0d] p-7 transition duration-500 hover:bg-[#0f1014]">
              <div className="flex items-start justify-between">
                <div className="rounded-xl border border-white/10 bg-white/[.035] p-2.5 text-cyan-200 transition duration-300 group-hover:border-cyan-300/25 group-hover:scale-105"><Icon size={20} /></div>
                <span className="text-xs font-bold tracking-[.15em] text-zinc-700">{number}</span>
              </div>
              <h3 className="mt-8 text-lg font-bold text-white">{category}</h3>
              <div className="mt-4 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="text-xs font-medium text-zinc-500 transition group-hover:text-zinc-300">{item}</span>)}</div>
              <div className="absolute bottom-0 left-7 right-7 h-px origin-left scale-x-0 bg-cyan-300/50 transition duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
