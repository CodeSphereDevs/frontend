import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import ErrorAlert from "../../componentes/ErrorAlert";
import Loader from "../../assets/loader.svg";
import { createProject } from "../../api/createProject";
import "./NuevoProyecto.scss";

const initialTechs = [];
const techsOptions = [
  { value: "React", label: "React" },
  { value: "Node.js", label: "Node.js" },
  { value: "Python", label: "Python" },
  { value: "Java", label: "Java" },
];

export default function NuevoProyecto() {
  const [errorAlert, setErrorAlert] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    projectName: "",
    details: "",
    technologies: initialTechs,
    numMembers: 2,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (selectedOptions) => {
    setFormData({
      ...formData,
      technologies: selectedOptions,
    });
  };

  const showErrorAlert = useCallback(
    (message) => {
      setErrorAlert(message);
      const timeoutId = setTimeout(() => {
        setErrorAlert("");
      }, 3000);
      return () => clearTimeout(timeoutId);
    },
    [setErrorAlert]
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validación de campos
    if (!formData.projectName || !formData.details || formData.technologies.length === 0) {
      showErrorAlert("Todos los campos son obligatorios.");
      return;
    }

    setIsLoading(true);

    const response = await createProject(formData);

    setIsLoading(false);

    if (response.error) {
      showErrorAlert(response.error);
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
            <input
              type="text"
              name="projectName"
              id="projectName"
              autoComplete="off"
              value={formData.projectName}
              onChange={handleInputChange}
            />
            <label htmlFor="details">Detalles:</label>
            <textarea
              name="details"
              id="details"
              value={formData.details}
              onChange={handleInputChange}
            />
            <label htmlFor="technologies">Tecnologías:</label>
            <Select
              isMulti
              name="technologies"
              options={techsOptions}
              className="techs"
              value={formData.technologies}
              onChange={handleSelectChange}
            />
            <label htmlFor="numMembers">Número de Miembros:</label>
            <input
              type="number"
              name="numMembers"
              id="numMembers"
              value={formData.numMembers}
              onChange={handleInputChange}
              min="2"
              max="6"
            />
            <button type="submit">Crear Proyecto</button>
          </>
        )}
        {errorAlert && <ErrorAlert message={errorAlert} />}
      </form>
    </div>
  );
}
