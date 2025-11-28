export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS",
    "Context API", "Redux Toolkit", "Next.js", "Backend (Basic)",
  ];

  return (
    <section id="skills" className="py-16 px-5 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-6">
        {skills.map((skill, i) => (
          <div key={i} className="p-4 bg-gray-800 rounded-lg text-center">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
