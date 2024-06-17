import { ProjectCard } from "../../componentes/projectCard/projectCard"
import { useState, useEffect } from "react";
import { getUsers } from "../../api/getUsers";
import "./proyectos.scss";

export const Proyectos = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getUsers();
      if (response.success) {
        setUsers(response.data);
        // setIsLoading(false);
      }
    })();
  }, []);
  return (
    <div className="card_list">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
    </div>
  )
}
