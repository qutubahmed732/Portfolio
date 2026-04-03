import { Github, ExternalLink } from "lucide-react";
import passwordGenerator from "../assets/passwordGeneratorImg.png";
import todoApp from "../assets/todo-app.png";
import megaBlog from "../assets/mega-blog.png";
import currencyConverter from "../assets/currencyConverter.png";
import hooksAgency from "../assets/hooks_agency.png";
import weather_app from "../assets/weather_app.png";
import resume_analyzer from "../assets/Resume_Analyzer.png";
import Chatbot from "../assets/Chatbot.png";

import { useState, useEffect } from "react";

export default function Projects() {

  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    function handleClick() {
      setActive(null);   // screen par click → empty
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  const projects = [
    {
      title: "Password Generator",
      description: "A customizable password generator made from React with copy/paste functionality.",
      tech: ["React.js", "Tailwind"],
      live: "https://password-generator-two-tau-98.vercel.app",
      repo: "https://github.com/qutubahmed732/Password_Generator",
      image: passwordGenerator
    },
    {
      title: "Todo App with local storage",
      description: "A complete CRUD todo app with filters & local storage.",
      tech: ["React", "Tailwind", "local storage", "context-API"],
      live: "https://todo-local-storage-eight.vercel.app",
      repo: "https://github.com/qutubahmed732/Todo_LocalStorage",
      image: todoApp
    },
    {
      title: "Blog with Appwrite",
      description: "Blog system using Appwrite database & authentication.",
      tech: ["React", "React hook form", "Typescript", "RTE editor", "Appwrite"],
      live: "https://mega-blog-lake-seven.vercel.app",
      repo: "https://github.com/qutubahmed732/megaBlog",
      image: megaBlog
    },
    {
      title: "Currency Converter",
      description: "Live currency converter using real APIs.",
      tech: ["Next.js", "Tailwind", "Currency API"],
      live: "https://currency-converter-chi-kohl.vercel.app",
      repo: "https://github.com/qutubahmed732/Currency-Converter",
      image: currencyConverter
    },
    {
      title: "Hooks Agency | Clone website",
      description: "A responsive frontend practice website built using HTML, SCSS, and JavaScript, featuring a structured layout and a modern navigation bar.",
      tech: ["HTML", "JavaScript", "SCSS"],
      live: "https://hooks-agency-clone.vercel.app",
      repo: "https://github.com/qutubahmed732/hooks_agency_clone",
      image: hooksAgency
    },
    {
      title: "Weather App",
      description: "The app focuses on API integration, responsive design, and delivering real-time weather information with a smooth user experience.",
      tech: ["HTML", "CSS", "JavaScript", "Weather-API"],
      live: "https://qutubahmed732.github.io/weather_app_new/",
      repo: "https://github.com/qutubahmed732/weather_app_new",
      image: weather_app
    },
    {
      title: "AI Resume Analyzer",
      description: "AI Resume Analyzer is an intelligent tool that evaluates and scores resumes, providing actionable insights to help job seekers optimize their applications. It leverages AI to identify strengths, detect gaps, and suggest improvements for a better chance at landing interviews",
      tech: ["React.JS", "Tailwind", "Express.JS", "Gemini model-API"],
      live: "https://ai-resume-analyzer-green-nine.vercel.app/",
      repo: "https://github.com/qutubahmed732/AI_resume_analyzer",
      image: resume_analyzer
    },
    {
      title: "Chatbot",
      description: "AI Chatbot is an intelligent conversational assistant that understands user queries, provides accurate responses, and engages naturally. It leverages AI to simulate human-like interactions, helping users get information, support, or guidance instantly",
      tech: ["React.JS", "Tailwind", "Express.JS", "Gemini model-API", "Clerk-Authentication"],
      live: "https://ai-chatbot-blue-six.vercel.app/",
      repo: "https://github.com/qutubahmed732/AI-Chatbot",
      image: Chatbot
    },
  ];



  return (
    <section id="projects" className="py-24 bg-[#f2f2f2]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-slate-600">A selection of my recent work.</p>
          </div>
          <a href="https://github.com/qutubahmed732" target="_blank" className="hidden md:flex items-center text-indigo-600 font-medium hover:text-indigo-700 mt-4 md:mt-0">
            View Github <Github className="w-4 h-4 ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" onClick={(e) => { e.stopPropagation(), setActive(index) }}>
              <div className="relative h-48 overflow-hidden bg-slate-100">
                {/* Project Image Placeholder */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm ${active === index ? "opacity-100" : "opacity-0"}`}>
                  <a href={project.repo} target="_blank" className="p-2 bg-white rounded-full text-slate-900 hover:text-indigo-600">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} target="_blank" className="p-2 bg-white rounded-full text-slate-900 hover:text-indigo-600">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700">
            View Github <Github className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
