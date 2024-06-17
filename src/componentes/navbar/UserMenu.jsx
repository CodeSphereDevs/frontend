import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export default function UserMenu({username}) {
  return (
    <div className="userMenu">
        <Link to={`/usuarios/${username}`}>Perfil</Link>
        <Link to={`/usuarios/${username}`}>Mis Proyectos</Link>
        <Link to={`/usuarios/${username}`}>Mis Publicaciones</Link>
        <button>Salir</button>
    </div>
  )
}
