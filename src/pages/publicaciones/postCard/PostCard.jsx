import { Link } from "react-router-dom";
import "./postCard.scss";

export const PostCard = ({ post }) => {
  const nameWithoutSpaces = post.postName.replaceAll(" ", "_");
  return (
    <article className="post_card_container">
      <h1>{post.postName}</h1>
      <h2 className="leader">Líder del post: {post.postLeader}</h2>
      <p className="description">{post.details}</p>
      <div className="techs_container">
        {post.technologies.map((tech) => (
          <span className="tech" key={tech}>{tech}</span>
        ))}
      </div>
      <div className="details_container">
        <span className="members">
          Miembros {post.membersList.length}/{post.numMembers}
        </span>
        <Link to={`/post/${nameWithoutSpaces}`} className="card_btn">
          Ver post
        </Link>
      </div>
    </article>
  );
};
