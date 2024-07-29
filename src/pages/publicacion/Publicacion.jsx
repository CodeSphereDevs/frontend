import { useState } from "react";
import "./Publicacion.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPostByTitle } from "../../api/getPostByTitle";
import Markdown from "markdown-to-jsx";
import { formatDate } from "../../utils/formatDate";
import { useUserContext } from "../../contexts/useUserContext";
import { isLiked } from "./isLiked";

export default function Publicacion() {
  const [post, setPost] = useState(null);
  const [responses, setResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { title } = useParams();

  const { user } = useUserContext();

  useEffect(() => {
    (async () => {
      const titleWithSpaces = title.replaceAll("_", " ");
      const response = await getPostByTitle(titleWithSpaces);

      if (response.success) {
        setPost(response.data);
        setIsLoading(false);
      }
    })();
  }, [title]);

  useState(() => {
    (async () => {
      //setResponses
    })();
  }, [post]);

  if (post === null) {
    return <span>Cargando post...</span>;
  }

  return (
    <>
      <article className="post">
        <h1>{post.title}</h1>
        <span className="author">{post.author}</span>
        <span className="date">{formatDate(post.createdAt)}</span>
        <Markdown
          options={{ overrides: { a: { props: { target: "_blank" } } } }}
        >
          {post.content}
        </Markdown>
        <button className="likes-container">
          {isLiked(post, user.username)}
          <span>{post.likes.length}</span>
        </button>
      </article>
    </>
  );
}
