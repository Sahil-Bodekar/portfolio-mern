function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built using React, Tailwind CSS, and Node.js backend.",
      tech: ["React", "Tailwind", "Node.js"],
      github: "#",
      live: "#",
    },
    {
      title: "E-Commerce App",
      description:
        "Full-stack MERN e-commerce application with authentication and payment integration.",
      tech: ["MongoDB", "Express", "React", "Node"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Manager API",
      description:
        "RESTful API with authentication and CRUD operations built using Express and MongoDB.",
      tech: ["Express", "MongoDB", "JWT"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 border-l-4 border-cyan-400 pl-4">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-lg border border-gray-800 hover:border-cyan-400 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#0f172a] text-cyan-400 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between">
                <a
                  href={project.github}
                  className="text-sm border border-gray-600 px-3 py-1 rounded hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  className="text-sm border border-gray-600 px-3 py-1 rounded hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
