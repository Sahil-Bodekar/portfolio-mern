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

        <a
          href="#contact"
          className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:text-black transition"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;
