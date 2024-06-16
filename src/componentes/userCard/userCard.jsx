import "./userCard.css"

const UserCard = () => {
  return (
    <article className="userCard">
                <img 
                    className="userCard_img"
                    src="https://www.w3schools.com/w3images/avatar1.png"
                    width={150}
                    alt="userimg"
                />
        <h1 className="userCard_name">UserName</h1>
        <aside className="userCard_info_container">
            <p className="userCard_info">FullStack</p>
            <p className="userCard_info">Typescript</p>
        </aside>
        <button className="userCard_button">Ver Perfil</button>
    </article>
  )
}

export default UserCard