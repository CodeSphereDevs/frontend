import { Link } from "react-router-dom";

export default function NewPosttButton() {
  return (
    <Link to={"/nueva-publicacion"} className="createButton">Nueva publicación</Link>
  )
}
