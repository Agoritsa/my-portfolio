import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import "../index.css";


const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p>Project not found.</p>;

  return (

    <section className="project-details">
      <div className="project-header">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>

      <div className="project-tech">
        {project.tech.map((tech, i) => (
          <span key={i} className="tech-badge">{tech}</span>
        ))}
      </div>

      <div className="project-screenshots">
        {project.screenshots.map((src, i) => (
          <img key={i} src={src} alt={`${project.title} screenshot ${i + 1}`} />
        ))}
      </div>

      {project.longDescription && (
        <div className="project-description-section">
          <h2 className="project-subtitle">About the Project</h2>
          <p className="project-long-description">{project.longDescription}</p>
        </div>
      )}

      <div className="project-links">
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
          GitHub
        </a>
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" title="Coming soon!" className="btn-details">
          Live Demo
        </a>
      </div>

      <Link to="/#projects" className="btn-back">← Back to Home</Link>
    </section>
  );
};

export default ProjectDetails