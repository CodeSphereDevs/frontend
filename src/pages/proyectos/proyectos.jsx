import { ProjectCard } from "../../componentes/projectCard/projectCard"
import { useState, useEffect } from "react";
import { getProjects } from "../../api/getProjects";
import "./proyectos.scss";

export const Proyectos = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      (async () => {
        setLoading(true);
        const response = await getProjects();
        if (response.success) {
          setProjects(response.data);
          setLoading(false);
        }
      })();
    }, []);
  return (
    <div className="card_list">
      {loading ? (
        <>
        </>
      ) : (
        <>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}

        </>
      )}

    </div>
  )
}
