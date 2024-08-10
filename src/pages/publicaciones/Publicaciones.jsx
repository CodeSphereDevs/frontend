import { useState, useEffect } from "react";
import NewPostButton from "./NewPostButton";
import { getPosts } from "../../api/getPosts";
import { PostCard } from "./postCard/PostCard";

export default function Publicaciones() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getPosts();
        if (response.success) {
          setPosts(response.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="card_list">
      <NewPostButton />
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
}
