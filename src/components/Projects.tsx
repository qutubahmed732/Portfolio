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
  { title: "AI Resume Analyzer", description: "An AI-assisted resume review tool that evaluates a CV and returns practical improvement insights.", tech: ["React", "Tailwind", "Express", "Gemini API"], live: "https://ai-resume-analyzer-green-nine.vercel.app/", repo: "https://github.com/qutubahmed732/AI_resume_analyzer", image: resumeAnalyzer },
  { title: "AI Chatbot", description: "A conversational AI interface built around an API-driven chat experience with authentication.", tech: ["React", "Tailwind", "Express", "Gemini API", "Clerk"], live: "https://ai-chatbot-blue-six.vercel.app/", repo: "https://github.com/qutubahmed732/AI-Chatbot", image: chatbot },
  { title: "Blog with Appwrite", description: "A full CRUD blog experience with authentication, rich-text editing, and Appwrite-backed data.", tech: ["React", "TypeScript", "Appwrite", "React Hook Form"], live: "https://mega-blog-lake-seven.vercel.app", repo: "https://github.com/qutubahmed732/megaBlog", image: megaBlog },
  { title: "Currency Converter", description: "A responsive currency conversion interface consuming live exchange-rate data through an external API.", tech: ["Next.js", "Tailwind", "API Integration"], live: "https://currency-converter-chi-kohl.vercel.app", repo: "https://github.com/qutubahmed732/Currency-Converter", image: currencyConverter },
  { title: "Sticky Notes", description: "A lightweight notes app with motion, local persistence, and an intentionally simple interaction model.", tech: ["React", "Tailwind", "Motion", "Local Storage"], live: "https://stickykeepnotes.netlify.app/", repo: "https://github.com/qutubahmed732/sticky_notes", image: stickyNotes },
  { title: "Todo App", description: "A CRUD todo application with filtering and persistent browser storage.", tech: ["React", "Tailwind", "Context API", "Local Storage"], live: "https://todo-local-storage-eight.vercel.app", repo: "https://github.com/qutubahmed732/Todo_LocalStorage", image: todoApp },
  { title: "Password Generator", description: "A customizable password generator with convenient copy-to-clipboard functionality.", tech: ["React", "Tailwind"], live: "https://password-generator-two-tau-98.vercel.app", repo: "https://github.com/qutubahmed732/Password_Generator", image: passwordGenerator },
  { title: "Hooks Agency Clone", description: "A responsive frontend recreation focused on layout, navigation, and clean styling with SCSS.", tech: ["HTML", "SCSS", "JavaScript"], live: "https://hooks-agency-clone.vercel.app", repo: "https://github.com/qutubahmed732/hooks_agency_clone", image: hooksAgency },
  { title: "Weather App", description: "A responsive weather interface focused on API integration and presenting current weather information clearly.", tech: ["HTML", "CSS", "JavaScript", "Weather API"], live: "https://qutubahmed732.github.io/weather_app_new/", repo: "https://github.com/qutubahmed732/weather_app_new", image: weatherApp },
];

export default function Projects() {
  return (
    <section id="projects" className="reveal-section border-y border-white/10 bg-zinc-900/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="reveal-item text-sm font-bold uppercase tracking-[.2em] text-cyan-300">03 / Selected work</p>
            <h2 className="reveal-item mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">Things I've actually built.</h2>
            <p className="reveal-item mt-4 max-w-xl text-zinc-400">Personal and learning projects that show how I approach UI, APIs, state, authentication, persistence, and real product flows.</p>
          </div>
          <a href="https://github.com/qutubahmed732" target="_blank" rel="noreferrer" className="reveal-item inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-300">All repositories <ArrowUpRight size={16} /></a>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="reveal-item group overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-2xl hover:shadow-black/30">
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-white">{project.title}</h3>
                  <div className="flex shrink-0 gap-1">
                    <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`GitHub repository for ${project.title}`} className="rounded-lg p-2 text-zinc-500 hover:bg-white/5 hover:text-white"><Github size={17} /></a>
                    <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Live demo for ${project.title}`} className="rounded-lg p-2 text-zinc-500 hover:bg-white/5 hover:text-cyan-300"><ExternalLink size={17} /></a>
                  </div>
                </div>
                <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-zinc-500">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-medium text-zinc-500">{tech}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
