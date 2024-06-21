import { Link } from "react-router-dom";
import { logout } from "../../api/logout";
import { useUserContext } from "../../contexts/useUserContext";
import "./UserMenu.scss"

// eslint-disable-next-line react/prop-types
export default function UserMenu({username}) {
  const { setUser } = useUserContext();

  const handleLogout = async () => {
    await logout();
    setUser(null);
  }

  return (
    <div className="userMenu">
        <Link to={`/usuario/${username}`} >Perfil</Link>
        <Link to={`/usuario/${username}`} >Mis Proyectos</Link>
        <Link to={`/usuario/${username}`} >Mis Publicaciones</Link>
        <button onClick={handleLogout} className="logoutButton">Salir</button>
    </div>
  )
}
