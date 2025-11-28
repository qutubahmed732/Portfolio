export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Qutub Ahmed</h1>

      <ul className="hidden md:flex gap-6">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
