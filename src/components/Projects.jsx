import northNoble from "../assets/Full Page.jpeg";
import mlProject from "../assets/ml-project.png";
import translator from "../assets/translator.png";

function Projects() {
  const projects = [
    {
      title: "North & Noble",
      status: "Completed",
      image: northNoble,
      description:
        "A luxury fashion homepage built with React, focused on responsive design, clean UI and component-based structure.",
      tech: "React • CSS • Vite • Vercel",
      live: "https://north-noble.vercel.app/",
      github: "https://github.com/pritiimishraa12/North-Noble",
    },
    {
      title: "Exam Question Prediction System",
      status: "In Progress",
      image: mlProject,
      description:
        "A machine learning project that studies previous exam papers to identify repeated concepts and important topics.",
      tech: "Python • Machine Learning • NLP • Jupyter Notebook",
    },
    {
      title: "Offline AI Translator",
      status: "In Progress",
      image: translator,
      description:
        "A translation app idea focused on exploring multilingual communication using AI technologies.",
      tech: "Flutter • FastAPI • AI • Speech",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <p>Projects</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid-simple">
        {projects.map((project, index) => (
          <div className="project-simple-card" key={index}>
            <img src={project.image} alt={project.title} />

            <div className="project-simple-content">
              <span className="project-status">{project.status}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="built-with">
                <strong>Built With</strong>
                <span>{project.tech}</span>
              </div>

              {project.live && (
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;