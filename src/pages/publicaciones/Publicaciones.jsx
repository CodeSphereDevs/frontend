import { useState } from "react"
import NewPosttButton from "./NewPostButton"
import { useEffect } from "react";
import { getPosts } from "../../api/getPosts";

export default function Publicaciones() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    (async ()=> {
      setLoading(true);
      const response = await getPosts();
      if(response.success){
        setPosts(response.data);
        setLoading(false);
      }
    })();
  },[]);

  return (
    <div className="card_list">
        <NewPosttButton />
      {posts.map(post => (<span>{JSON.stringify(post)}</span>))}
  </div>
  )
}
