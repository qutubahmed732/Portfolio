import { Mail, Linkedin, Github } from "lucide-react";
import React, { useState, useEffect } from "react";
import services from "../appwrite/appwrite";

export default function Contact() {

  const [messagesname, setMessagesname] = useState("");
  const [messagesMessage, setMessagesMessage] = useState("");

  async function feedbackFunction(e) {
    e.preventDefault();
    const data = {
      name: messagesname,
      message: messagesMessage
    }

    await services.sendFeedbacks(data);
    setMessagesname("");
    setMessagesMessage("");
  }


  return (
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

            <form className="space-y-4" onSubmit={feedbackFunction}>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input
                  value={messagesname}
                  onChange={(e) => setMessagesname(e.target.value)}
                  type="text"
                  className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all text-white placeholder-slate-600"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea
                  value={messagesMessage}
                  onChange={(e) => setMessagesMessage(e.target.value)}
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
  );
}
