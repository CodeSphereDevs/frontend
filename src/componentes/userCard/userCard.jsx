import "./userCard.scss";
import { Link } from "react-router-dom";
import NoAvatar from "../../assets/noavatar.svg";

const UserCard = ({ user }) => {
  return (
    <article className="userCard">
      {user.urlAvatar != null ? (
        <img src={user.urlAvatar} className="userCard_img" />
      ) : (
        <img src={NoAvatar} alt="no avatar image" className="userCard_img" />
      )}
      <h1 className="userCard_name">{user.username}</h1>
        <p className="userCard_info">{user.title}</p>
      <Link to={`/usuarios/${user.username}`} className="userCard_button">
        Ver Perfil
      </Link>
    </article>
  );
};

export default UserCard;
