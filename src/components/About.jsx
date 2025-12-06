import { Github, Linkedin, Mail } from "lucide-react";
import myImage from "../images/my_image.jpeg";

export default function About() {
  return (
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
  );
}
