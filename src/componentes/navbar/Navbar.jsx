import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import IngresarButon from "../IngresarButon";

export default function Navbar() {
  const [username, setUsername] = useState("");

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to={"/"}>Inicio</Link>
        </li>
        <li>
          <Link to={"/usuarios"}>Usuarios</Link>
        </li>
        <li>
          <Link to={"/proyectos"}>Proyectos</Link>
        </li>
        <li>
          <Link to={"/publicaciones"}>Publicaciones</Link>
        </li>
        <li>{username == "" ? <IngresarButon /> : <span>{Eban}</span>}</li>
      </ul>
    </nav>
  );
}
