export default function Projects() {
  const projects = [
    {
      title: "Password Generator",
      desc: "A customizable password generator made with React.",
      link: "https://password-generator-two-tau-98.vercel.app"
    },
    {
      title: "Todo App with local storage",
      desc: "A complete CRUD todo app with filters & local storage.",
      link:"https://todo-local-storage-eight.vercel.app"
    },
    {
      title: "Blog with Appwrite",
      desc: "Blog system using Appwrite database & authentication.",
      link:"https://mega-blog-lake-seven.vercel.app"
    },
    {
      title: "Currency Converter",
      desc: "Live currency converter using real APIs.",
      link:"https://currency-converter-chi-kohl.vercel.app"
    },
  ];

  return (
    <section id="projects" className="py-16 px-5 bg-white text-gray-900">
      <h2 className="text-3xl font-bold text-center">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <a href={p.link} target="_blank" key={i} className="p-5 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="mt-2">{p.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
