import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Layout,
  Server,
  Menu,
  X,
  ChevronDown,
  Terminal,
  Cpu
} from 'lucide-react';
import myImage from "./images/my_image.jpeg";

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top < 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { category: "Frontend Core", icon: <Code2 className="w-6 h-6" />, items: ["HTML5", "CSS3", "JavaScript (ES6+)"] },
    { category: "Frameworks", icon: <Layout className="w-6 h-6" />, items: ["React.js", "Next.js 14", "TypeScript"] },
    { category: "State Management", icon: <Cpu className="w-6 h-6" />, items: ["Redux Toolkit", "Context API"] },
    { category: "Styling & UI", icon: <Terminal className="w-6 h-6" />, items: ["Tailwind CSS", "Shadcn UI"] },
    { category: "Backend & Services", icon: <Server className="w-6 h-6" />, items: ["Appwrite", "Firebase"] },
    { category: "Tools", icon: <Database className="w-6 h-6" />, items: ["Git/GitHub", "VS Code", "Vercel"] },
  ];

  const projects = [
    {
      title: "Password Generator",
      description: "A customizable password generator made from React with copy/paste functionality.",
      tech: ["React.js", "Tailwind"],
      live: "https://password-generator-two-tau-98.vercel.app",
      repo: "#",
      image: "https://api.microlink.io/?url=https%3A%2F%2Flinear.app&screenshot=true&meta=false&embed=screenshot.url"
    },
    {
      title: "Todo App with local storage",
      description: "A complete CRUD todo app with filters & local storage.",
      tech: ["React","Tailwind", "Typescript", "local storage"],
      live: "https://todo-local-storage-eight.vercel.app",
      repo: "#",
      image: "https://api.microlink.io/?url=https%3A%2F%2Fwww.shopify.com&screenshot=true&meta=false&embed=screenshot.url"
    },
    {
      title: "Blog with Appwrite",
      description: "Blog system using Appwrite database & authentication.",
      tech: ["React","React hook form", "Typescript", "RTE editor" ,"Appwrite"],
      live: "https://mega-blog-lake-seven.vercel.app",
      repo: "#",
      image: "https://api.microlink.io/?url=https%3A%2F%2Fweather.com&screenshot=true&meta=false&embed=screenshot.url"
    },
    {
      title: "Currency Converter",
      description: "Live currency converter using real APIs.",
      tech: ["Next.js", "Tailwind", "Currency API"],
      live: "https://currency-converter-chi-kohl.vercel.app",
      repo: "#",
      image: "https://api.microlink.io/?url=https%3A%2F%2Fweather.com&screenshot=true&meta=false&embed=screenshot.url"
    },
  ];


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 bg-gray-900! ${isScrolled ? 'bg-white/80! backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
            QA.
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${activeSection === item.toLowerCase() ? 'text-indigo-600' : 'text-slate-400'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 md:hidden flex flex-col space-y-4 shadow-lg">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-slate-600 font-medium py-2 hover:text-indigo-600"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

        <div className="text-center max-w-3xl z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6">
            <span className="flex w-2 h-2 bg-indigo-600 rounded-full mr-2 animate-pulse"></span>
            Available for Internships
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Hi, I'm <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Qutub Ahmed</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
            Frontend Developer specialized in building exceptional digital experiences with <span className="font-semibold text-slate-800">Next.js</span> and <span className="font-semibold text-slate-800">React</span>.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-200"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              Contact Me <Mail className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-16 animate-bounce text-slate-400 cursor-pointer" onClick={() => scrollToSection('about')}>
            <ChevronDown className="w-6 h-6 mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-indigo-600 rounded-full"></span>
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  I'm a 25-year-old passionate developer based in Karachi. My journey in web development started with a curiosity about how the internet works and evolved into a deep love for creating clean, efficient, and user-centric interfaces.
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Currently focused on the <strong className="text-indigo-600">React & Next.js ecosystem</strong>, I love bridging the gap between design and engineering. I treat every project as an opportunity to learn a new tool, optimize performance, or improve accessibility.
                </p>
                <div className="flex gap-4">
                  <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-2 bg-slate-100 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:email@example.com" className="p-2 bg-slate-100 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-64 h-64">
                  <div className="absolute inset-0 bg-indigo-600 rounded-2xl rotate-6 opacity-20"></div>
                  <div className="absolute inset-0 bg-indigo-600 rounded-2xl -rotate-6 opacity-20"></div>
                  <div className="relative w-full h-full bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                    {/* Placeholder for User Image */}
                    <img
                      src={myImage}
                      alt="Qutub Ahmed"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Projects Section */}
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
                    <a href={project.repo} className="p-2 bg-white rounded-full text-slate-900 hover:text-indigo-600">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.live} className="p-2 bg-white rounded-full text-slate-900 hover:text-indigo-600">
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Let's work together</h2>
            <p className="text-slate-400 mb-12 max-w-xl mx-auto">
              I'm currently looking for internship opportunities to apply my skills and grow as a developer. Have a question or want to say hi?
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Contact Details</h3>
                  <p className="text-slate-400 text-sm">Feel free to reach out through any of these platforms.</p>
                </div>

                <div className="space-y-4">
                  <a href="mailto:qutubahmed104@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                    <div className="p-2 bg-indigo-600/20 rounded-lg text-indigo-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    qutubahmed104@gmail.com
                  </a>
                  <a href="https://www.linkedin.com/in/qutub-ahmed-9429982a6/" target="_blank" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                    <div className="p-2 bg-indigo-600/20 rounded-lg text-indigo-400">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    linkedin.com/in/qutub-ahmed
                  </a>
                  <a href="https://github.com/qutubahmed732" target="_blank" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                    <div className="p-2 bg-indigo-600/20 rounded-lg text-indigo-400">
                      <Github className="w-5 h-5" />
                    </div>
                    github.com/qutub-ahmed
                  </a>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-600"
                    placeholder="Hello, I'd like to discuss an opportunity..."
                  ></textarea>
                </div>
                <button className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-950 text-slate-500 text-sm text-center border-t border-slate-800">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Qutub Ahmed. Built with Next.js & Tailwind.</p>
        </div>
      </footer>

      {/* Global styles for animation */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

