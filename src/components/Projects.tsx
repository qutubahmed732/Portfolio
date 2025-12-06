import { Github, ExternalLink } from "lucide-react";
import passwordGenerator from "../assets/passwordGeneratorImg.png";


export default function Projects() {
  
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
      tech: ["React", "Tailwind", "Typescript", "local storage"],
      live: "https://todo-local-storage-eight.vercel.app",
      repo: "https://github.com/qutubahmed732/Todo_LocalStorage",
      image: "https://api.microlink.io/?url=https%3A%2F%2Fwww.shopify.com&screenshot=true&meta=false&embed=screenshot.url"
    },
    {
      title: "Blog with Appwrite",
      description: "Blog system using Appwrite database & authentication.",
      tech: ["React", "React hook form", "Typescript", "RTE editor", "Appwrite"],
      live: "https://mega-blog-lake-seven.vercel.app",
      repo: "https://github.com/qutubahmed732/megaBlog",
      image: "https://api.microlink.io/?url=https%3A%2F%2Fweather.com&screenshot=true&meta=false&embed=screenshot.url"
    },
    {
      title: "Currency Converter",
      description: "Live currency converter using real APIs.",
      tech: ["Next.js", "Tailwind", "Currency API"],
      live: "https://currency-converter-chi-kohl.vercel.app",
      repo: "https://github.com/qutubahmed732/Currency-Converter",
      image: "https://api.microlink.io/?url=https%3A%2F%2Fweather.com&screenshot=true&meta=false&embed=screenshot.url"
    },
  ];


  return (
    <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 max-w-6xl mx-auto">
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
                  <div key={index} className="group bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      {/* Project Image Placeholder */}
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
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
