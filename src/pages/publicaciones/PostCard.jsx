import { Link } from "react-router-dom"
import { formatDate } from "../../utils/formatDate"
import { isLiked } from "../publicacion/isLiked"

export default function PostCard({post, username}) {
  return (
    <Link to={`/publicacion/${post.title.replaceAll(" ","_")}`} className='post-card'>
        <span>{post.title}</span>
        <span className="author">{post.author}</span>
        <span className="date">{formatDate(post.createdAt)}</span>
        <div className="likes"> 
            {isLiked(post, username)}
            <span>{post.likes.length}</span>
        </div>
    </Link>
  )
}
