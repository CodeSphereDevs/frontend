import { ProjectCard } from "../../componentes/projectCard/projectCard";
import { useState, useEffect } from "react";
import { getProjects } from "../../api/getProjects";
import "./proyectos.scss";
import NewProjectButton from "./NewProjectButton";

export default function Proyectos() {
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
      <NewProjectButton />
      {loading ? (
        <></>
      ) : (
        <>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </>
      )}
    </div>
  );
}
