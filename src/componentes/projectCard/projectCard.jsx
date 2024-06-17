import "./projectCard.scss"

export const ProjectCard = () => {
  return (
    <article className="project_card_container">
        <section className="project_info">
            <h1>Titulo del proyecto</h1>
            <aside className="leader_container">
                <h2 className="leader">Lider del proyecto: Roberto Carlos</h2>
            </aside>
            <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus consequatur id aliquid fuga odio quia aspernatur tempore </p>
        </section>
        <section className="details_container">
            <aside className="counter">
                <h3 className="members">Miembros 1/4</h3>
            </aside>
            <button className="card_btn">Ver Detalles</button>
        </section>
    </article>
  )
}
