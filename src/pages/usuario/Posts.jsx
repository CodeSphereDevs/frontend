import React from 'react'
import { Link } from 'react-router-dom'

export default function Posts({posts}) {
  return (
    <div className='posts'>
        <h3>Publiaciones</h3>
        {posts.length == 0 && <span>No hay publicaciones aún.</span>}
        {posts.map(post => <Link to={`/publicacion/${post.title.replaceAll(" ","_")}`} key={post.id}>{post.title}</Link>)}
    </div>
  )
}
