import React from 'react'

export default function Posts({posts}) {
  return (
    <div className='posts'>
        <h3>Publiaciones</h3>
        {posts.length == 0 && <span>No hay publicaciones aún.</span>}
        {posts.map(post => <span key={post.id}>{post.title}</span>)}
    </div>
  )
}
