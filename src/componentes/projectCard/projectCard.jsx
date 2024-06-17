import { Link } from "react-router-dom"
import "./projectCard.scss"

export const ProjectCard = ({ project }) => {
  return (
    <article className="project_card_container">
        <section className="project_info">
            <h1>{project.name}</h1>
            <aside className="leader_container">
                <h2 className="leader">Lider del proyecto: {project.leader}</h2>
            </aside>
            <p className="description">{project.description}</p>
        </section>
        <section className="details_container">
            <aside className="counter">
                <h3 className="members">Miembros {project.members}/{project.totalMembers}</h3>
            </aside>
            <Link to={`proyectos/${project.name}`} className="card_btn">Ver Detalles</Link>
        </section>
    </article>
  )
}
