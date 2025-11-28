import myImage from "../images/my_image.jpeg";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className=" sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Hi, I'm Qutub Ahmed
            <br className="hidden lg:inline-block" />
            A frontend Developer
          </h1>
          <p className="mb-8 md:text-lg leading-relaxed text-balance p-1">
            I'm from Karachi who loves creating clean, modern, and responsive websites. I enjoy turning simple ideas into smooth, functional interfaces using React.js, Tailwind CSS, and JavaScript. I'm always learning new things, improving my skills, and building projects that look good and work even better.
          </p>
          <div className="flex justify-center">
            <a href="#contact" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Contact Me
            </a>
            {/* <a href="" className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </a> */}
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="w-100 h-100 object-cover object-center rounded-2xl"
            alt="hero"
            src={myImage}
          />
        </div>
      </div>
    </section>

  );
}
