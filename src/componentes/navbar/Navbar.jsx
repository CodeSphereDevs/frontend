import "./Navbar.scss";
import { NavLink, Link } from "react-router-dom";
import { useUserContext } from "../../contexts/useUserContext";
import IngresarButon from "./IngresarButon";
import { useState } from "react";
import UserMenu from "./UserMenu";

export default function Navbar() {
  const { user } = useUserContext();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <nav className="nav">
      <Link className="logo-container" to="/">
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
        <li>
          {user == null ? (
            <IngresarButon />
          ) : (
            <button
              className="userButton"
              onClick={() => setShowUserMenu((value) => !value)}
            >
              {user.username}
            </button>
          )}
        </li>
      </ul>
      {user != null && showUserMenu && <UserMenu username={user.username} />}
    </nav>
  );
}
