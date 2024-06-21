import "./NewProjectButton.scss";
import { Link } from "react-router-dom";

export default function NewProjectButton() {
  return (
    <Link to={"/nuevo-proyecto"} className="createButton">Nuevo Proyecto</Link>
  )
}
