import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import {useUserContext} from "../../contexts/useUserContext";
import IngresarButon from "./IngresarButon";

export default function Navbar() {
  const {user} = useUserContext();

  return (
    <nav className="nav">
      <Link className="logo-container" to="/">
        <img src={Logo} alt="codeSphere logo" />
        <span>CodeSphere</span>
      </Link>
      <ul>
        <li>
          <NavLink to={"/"}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to={"/usuarios"}>Usuarios</NavLink>
        </li>
        <li>
          <NavLink to={"/proyectos"}>Proyectos</NavLink>
        </li>
        <li>
          <NavLink to={"/publicaciones"}>Publicaciones</NavLink>
        </li>
        <li>{user == null ? <IngresarButon /> : <span>{"Eban"}</span>}</li>
      </ul>
    </nav>
  );
}
