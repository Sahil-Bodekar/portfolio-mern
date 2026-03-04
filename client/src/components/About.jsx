import { useEffect, useState } from "react";

function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  return (
    <section id="about" className="py-20 px-6 bg-[#0b1220]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-12">
          About Me
        </h2>

        <div
          className={`bg-[#1e293b] border border-gray-700 rounded-2xl p-8 md:p-10 shadow-lg transition-all duration-700 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } hover:-translate-y-2 hover:shadow-cyan-500/20`}
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            I’m <span className="text-white font-semibold">Sahil Bodekar</span>,
            a Diploma student in{" "}
            <span className="text-cyan-400">Computer Technology </span>
            with a strong passion for building real-world web applications.
            <br />
            <br />I specialize in{" "}
            <span className="text-cyan-400 font-semibold">
              Full Stack Development{" "}
            </span>
            using the{" "}
            <span className="text-cyan-400 font-semibold">MERN Stack</span>. I
            enjoy turning ideas into functional and scalable digital solutions.
            <br />
            <br />
            I have participated in a Hackathon, where I learned problem-solving
            under pressure and building practical solutions within limited time.
            <br />
            <br />
            My goal is to grow professionally and build impactful tech products
            — whether through a job opportunity or launching my own startup.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
