import "./userCard.scss";
import { Link } from "react-router-dom";
import NoAvatar from "../../../assets/noavatar.svg";

const UserCard = ({ user }) => {
  return (
    <Link to={`/usuario/${user.username}`} className="userCard">
      <article >
        {user.urlAvatar != null ? (
          <img src={user.urlAvatar} className="userCard_img" />
        ) : (
          <img src={NoAvatar} alt="no avatar image" className="userCard_img" />
        )}
        <h1 className="userCard_name">{user.username}</h1>
        <p className="userCard_title">{user.title}</p>
      </article>
    </Link>
  );
};

export default UserCard;
