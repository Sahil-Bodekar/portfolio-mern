function Projects() {
  const projectList = [
    {
      title: "Personal Portfolio",
      description:
        "A full-stack portfolio website built using MERN stack with Telegram notifications and MongoDB integration.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      live: "https://fastidious-cajeta-ea631f.netlify.app/#about",
      github: "https://github.com/yourusername/portfolio-mern",
    },
    {
      title: "Expense Tracker",
      description:
        "A web application to track daily expenses with authentication and database storage.",
      tech: ["MERN Stack", "JWT", "MongoDB"],
    },
    {
      title: "Financial Anomaly Detection",
      description:
        "A hackathon project focused on detecting unusual financial transactions using intelligent logic.",
      tech: ["Node.js", "MongoDB", "AI Logic"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-cyan-400 mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="bg-[#1e293b] border border-gray-700 rounded-2xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {project.live ? (
                <div className="flex gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center border border-cyan-400 text-cyan-400 py-2 rounded-md hover:bg-cyan-400 hover:text-black transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center border border-gray-500 text-gray-300 py-2 rounded-md hover:bg-gray-700 transition"
                  >
                    GitHub
                  </a>
                </div>
              ) : (
                <button className="w-full border border-cyan-400 text-cyan-400 py-2 rounded-md opacity-60 cursor-not-allowed">
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
