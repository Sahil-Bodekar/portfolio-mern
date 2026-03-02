function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-cyan-400 pl-4">
          About Me
        </h2>

        <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg border border-gray-800">
          <p className="text-gray-400 leading-relaxed">
            I am a passionate MERN stack developer who enjoys solving real-world
            problems and building scalable applications. I focus on writing
            clean, efficient, and maintainable code.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
