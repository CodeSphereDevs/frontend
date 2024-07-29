import { useState } from "react"
import NewPosttButton from "./NewPostButton"
import { useEffect } from "react";
import { getPosts } from "../../api/getPosts";
import PostCard from "./PostCard";
import "./Publicaciones.scss"
import {useUserContext} from "../../contexts/useUserContext"

export default function Publicaciones() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const {user} = useUserContext();

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
      {posts.map(post => (<PostCard key={post.id} post={post} username={user.username}/>))}
  </div>
  )
}
