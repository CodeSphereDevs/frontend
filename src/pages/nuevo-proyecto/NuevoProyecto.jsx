import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../componentes/ErrorAlert";
import Loader from "../../assets/loader.svg";
import { createProject } from "../../api/createProject";
import "./NuevoProyecto.scss";

export default function NuevoProyecto() {
  const [errorAlert, setErrorAlert] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  const showErrorAlert = useCallback((s) => {
    setErrorAlert(s);
    const timeoutId = setTimeout(() => {
      setErrorAlert("");
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [setErrorAlert]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const projectName = form.projectName.value;
    const details = form.details.value;
    const technologies = form.technologies.value;
    const numMembers = form.numMembers.value;

    setIsLoading(true);
    
    const response = await createProject(projectName, details, technologies, numMembers);

    setIsLoading(false);

    if (!response.success) {
      showErrorAlert(response.message);
      return;
    }

    nav("/publicaciones");
  };

  return (
    <div className="proyectoPage">
      <form onSubmit={handleSubmit}>
        <h1>Nueva publicación</h1>
        {isLoading ? (
          <img src={Loader} alt="loader" />
        ) : (
          <>
            <label htmlFor="projectName">Nombre del Proyecto:</label>
            <input type="text" name="projectName" id="projectName" autoComplete="off" />

            <label htmlFor="details">Detalles:</label>
            <textarea name="details" id="details" rows={6}></textarea>

            <label htmlFor="technologies">Tecnologías:</label>
            <input type="text" name="technologies" id="technologies" autoComplete="off" />

            <label htmlFor="numMembers">Número de Miembros:</label>
            <input type="number" name="numMembers" id="numMembers" autoComplete="off" />

            <div>
              <button type="button" onClick={() => nav("/publicaciones")}>Cancelar</button>
              <input type="submit" value="Publicar" className="submitButton" />
            </div>
          </>
        )}
      </form>

      {errorAlert && <ErrorAlert alertMessage={errorAlert} />}
    </div>
  );
}
