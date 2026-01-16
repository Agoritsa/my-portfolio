import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import "../index.css";

const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <ProjectCard key={index} project={p} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection