import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="flex items-center justify-center h-screen px-4">
      <div className="max-w-3xl">
        <p className="text-cyan-400 mb-2">Hi, my name is</p>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">Sahil Bodekar.</h1>

        <h2 className="text-3xl md:text-5xl font-semibold text-gray-400 mb-6">
          <Typewriter
            words={[
              "I build modern web apps.",
              "MERN Stack Developer.",
              "I love clean code.",
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
          {/* Primary Button */}
          <a
            href="#contact"
            className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-xl shadow-lg hover:bg-cyan-300 transition duration-300 text-center transform hover:-translate-y-1"
          >
            Get In Touch
          </a>

          {/* Outline Button */}
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition duration-300 text-center transform hover:-translate-y-1"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
