import NoAvatar from "../../assets/noavatar.svg";
import Edit from "./Edit";

export default function Info({user,isMine, showEditUserModal}) {
  return (
    <section className="infoSection">
      {isMine && <Edit showEditUserModal={showEditUserModal}/>}
     {user.urlAvatar != null ? <img src={user.urlAvatar} className="avatar"/>: <img src={NoAvatar} alt="no avatar image" className="avatar"/>}
      <h1 className="username">{user.username}</h1>  
      <h2 className="title">{user.title != null ? user.title :  "sin título" }</h2>
      <p className="details">{user.details != null ? user.details : "No hay una descripción."}</p>
      <div  className="techContainer">{user.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>
    </section>
  )
}
