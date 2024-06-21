import { Link } from "react-router-dom";
import "./projectCard.scss";

export const ProjectCard = ({ project }) => {
  const nameWithoutSpaces = project.projectName.replaceAll(" ", "_");
  return (
    <article className="project_card_container">
      <h1>{project.projectName}</h1>
      <h2 className="leader">Lider del proyecto: {project.projectLeader}</h2>
      <p className="description" >{project.details}</p>
      <div className="techs_container">
        {project.technologies.map((tech) => (
          <span className="tech" key={tech}>{tech}</span>
        ))}
      </div>
      <div className="details_container">
        <span className="members">
          Miembros {project.membersList.length}/{project.numMembers}
        </span>
        <Link to={`/proyecto/${nameWithoutSpaces}`} className="card_btn">
          Ver proyecto
        </Link>
      </div>
    </article>
  );
};
