import "../index.css";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.thumbnail} alt={project.title} className="project-image" />
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-tech">
        {project.tech.map((tech, i) => (
          <span key={i} className="tech-badge">{tech}</span>
        ))}
      </div>

      <div className="project-buttons">
        <Link to={`/projects/${project.id}`} className="btn-details">
          Details
        </Link>
        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard