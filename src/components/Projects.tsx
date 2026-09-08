import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import passwordGenerator from "../assets/passwordGeneratorImg.png";
import todoApp from "../assets/todo-app.png";
import megaBlog from "../assets/mega-blog.png";
import currencyConverter from "../assets/currencyConverter.png";
import hooksAgency from "../assets/hooks_agency.png";
import weatherApp from "../assets/weather_app.png";
import resumeAnalyzer from "../assets/Resume_Analyzer.png";
import chatbot from "../assets/Chatbot.png";
import stickyNotes from "../assets/stickyNotes.png";

const projects = [
  { title: "AI Resume Analyzer", description: "AI-assisted resume analysis with practical feedback for improving clarity, structure and impact.", tech: ["React", "Tailwind", "Express", "Gemini API"], live: "https://ai-resume-analyzer-green-nine.vercel.app/", repo: "https://github.com/qutubahmed732/AI_resume_analyzer", image: resumeAnalyzer },
  { title: "AI Chatbot", description: "A conversational AI product interface with authentication and an API-driven chat experience.", tech: ["React", "Tailwind", "Express", "Gemini API", "Clerk"], live: "https://ai-chatbot-blue-six.vercel.app/", repo: "https://github.com/qutubahmed732/AI-Chatbot", image: chatbot },
  { title: "Blog with Appwrite", description: "Full CRUD blogging experience with authentication, rich text editing and persistent Appwrite data.", tech: ["React", "TypeScript", "Appwrite", "React Hook Form"], live: "https://mega-blog-lake-seven.vercel.app", repo: "https://github.com/qutubahmed732/megaBlog", image: megaBlog },
  { title: "Currency Converter", description: "Responsive conversion interface consuming external exchange-rate data with a focused, usable UI.", tech: ["Next.js", "Tailwind", "API Integration"], live: "https://currency-converter-chi-kohl.vercel.app", repo: "https://github.com/qutubahmed732/Currency-Converter", image: currencyConverter },
  { title: "Sticky Notes", description: "Lightweight notes experience combining motion, local persistence and simple interactions.", tech: ["React", "Tailwind", "Motion", "Local Storage"], live: "https://stickykeepnotes.netlify.app/", repo: "https://github.com/qutubahmed732/sticky_notes", image: stickyNotes },
  { title: "Todo App", description: "CRUD todo application with filtering, reusable state and persistent browser storage.", tech: ["React", "Tailwind", "Context API", "Local Storage"], live: "https://todo-local-storage-eight.vercel.app", repo: "https://github.com/qutubahmed732/Todo_LocalStorage", image: todoApp },
  { title: "Password Generator", description: "Customizable password generator with a clean interaction flow and copy-to-clipboard support.", tech: ["React", "Tailwind"], live: "https://password-generator-two-tau-98.vercel.app", repo: "https://github.com/qutubahmed732/Password_Generator", image: passwordGenerator },
  { title: "Hooks Agency Clone", description: "Responsive frontend recreation focused on layout, navigation and detailed SCSS styling.", tech: ["HTML", "SCSS", "JavaScript"], live: "https://hooks-agency-clone.vercel.app", repo: "https://github.com/qutubahmed732/hooks_agency_clone", image: hooksAgency },
  { title: "Weather App", description: "API-powered weather interface designed around clear information hierarchy and responsive presentation.", tech: ["HTML", "CSS", "JavaScript", "Weather API"], live: "https://qutubahmed732.github.io/weather_app_new/", repo: "https://github.com/qutubahmed732/weather_app_new", image: weatherApp },
];

export default function Projects() {
  return (
    <section id="projects" className="reveal-section relative overflow-hidden border-y border-white/10 bg-[#0a0a0d] px-6 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="reveal-item text-xs font-bold uppercase tracking-[.25em] text-cyan-200">03 / Selected work</p>
            <h2 className="reveal-item mt-4 text-4xl font-black tracking-[-.045em] text-white sm:text-6xl">Built, shipped, <span className="text-zinc-600">learned from.</span></h2>
            <p className="reveal-item mt-5 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">Real projects that demonstrate UI development, APIs, state management, authentication, persistence and product thinking.</p>
          </div>
          <a href="https://github.com/qutubahmed732" target="_blank" rel="noreferrer" className="reveal-item inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-zinc-300 transition hover:border-cyan-300/30 hover:text-cyan-200">View GitHub <ArrowUpRight size={16} /></a>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className={`reveal-item group overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950/80 transition duration-500 hover:-translate-y-2 hover:border-cyan-300/25 hover:shadow-[0_24px_70px_rgba(0,0,0,.35)] ${index === 0 ? "md:col-span-2 lg:col-span-2" : ""}`}>
              <div className={`relative overflow-hidden bg-zinc-900 ${index === 0 ? "aspect-[16/8]" : "aspect-[16/10]"}`}>
                <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.18em] text-zinc-300 backdrop-blur-md">Project {String(index + 1).padStart(2, "0")}</div>
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition duration-300 group-hover:opacity-100 max-sm:opacity-100">
                  <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`GitHub repository for ${project.title}`} className="rounded-full border border-white/15 bg-black/60 p-2.5 text-white backdrop-blur-md hover:text-cyan-200"><Github size={16} /></a>
                  <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Live demo for ${project.title}`} className="rounded-full border border-white/15 bg-black/60 p-2.5 text-white backdrop-blur-md hover:text-cyan-200"><ExternalLink size={16} /></a>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">{project.title}</h3>
                  <span className="mt-1 text-xs font-bold text-zinc-700">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-zinc-500">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/[.02] px-2.5 py-1 text-[11px] font-medium text-zinc-500">{tech}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
