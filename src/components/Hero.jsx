import myImage from "../images/my_image.jpeg";
import { ChevronDown, Mail } from "lucide-react";

export default function Hero() {
  return (
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
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-200 cursor-pointer"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
          >
            Contact Me <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* <p className="">Hire me to unlock and bring out my full potential.</p> */}

        <div className="mt-16 animate-bounce text-slate-400 cursor-pointer" onClick={() => scrollToSection('about')}>
          <ChevronDown className="w-6 h-6 mx-auto" />
        </div>
      </div>
    </section>

  );
}
