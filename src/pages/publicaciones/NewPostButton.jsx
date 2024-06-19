import { Link } from "react-router-dom";

export default function NewPosttButton() {
  return (
    <Link to={"/nuevo-proyecto"} className="createButton">Nueva publicación</Link>
  )
}
