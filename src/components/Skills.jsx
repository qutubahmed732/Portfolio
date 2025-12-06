import { Code2, Layout, Cpu, Terminal, Server, Database } from "lucide-react";

export default function Skills() {
  
  const skills = [
    { category: "Frontend Core", icon: <Code2 className="w-6 h-6" />, items: ["HTML5", "CSS3", "JavaScript (ES6+)"] },
    { category: "Frameworks", icon: <Layout className="w-6 h-6" />, items: ["React.js", "Next.js 14", "TypeScript"] },
    { category: "State Management", icon: <Cpu className="w-6 h-6" />, items: ["Redux Toolkit", "Context API"] },
    { category: "Styling & UI", icon: <Terminal className="w-6 h-6" />, items: ["Tailwind CSS", "Shadcn UI"] },
    { category: "Backend & Services", icon: <Server className="w-6 h-6" />, items: ["Appwrite", "Firebase"] },
    { category: "Tools", icon: <Database className="w-6 h-6" />, items: ["Git/GitHub", "VS Code", "Vercel"] },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Arsenal</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            My stack is built around the modern JavaScript ecosystem. I focus on writing maintainable, type-safe, and scalable code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-slate-800">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="flex items-center text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
