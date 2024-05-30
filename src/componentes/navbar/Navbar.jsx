import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import Logo from "../../assets/logo.png"

import IngresarButon from "../IngresarButon";

export default function Navbar() {
  const [username, setUsername] = useState("");

  return (
    <nav className="nav">
      <div className="logo-container">
      <img src={Logo} alt="codeSphere logo"/>
      <span>CodeSphere</span>
      </div>
      <ul>
        <li>
          <NavLink to={"/"} >Inicio</NavLink>
        </li>
        <li>
          <NavLink to={"/usuarios"} >Usuarios</NavLink>
        </li>
        <li>
          <NavLink to={"/proyectos"} >Proyectos</NavLink>
        </li>
        <li>
          <NavLink to={"/publicaciones"} >Publicaciones</NavLink>
        </li>
        <li>{username == "" ? <IngresarButon /> : <span>{"Eban"}</span>}</li>
      </ul>
    </nav>
  );
}
