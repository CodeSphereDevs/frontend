export default function EditUserModal({ user, showEditUserModal }) {
  return (
    <div className="editUserModal">
      <label htmlFor="avatar" className="uploadAvatar">
        Subir Avatar
        <input type="file" id="avatar" hidden />
      </label>

      <label htmlFor="usertitle">Título:</label>
      <input type="text" id="usertitle" placeholder={ user.title == null ? "Agrega un título" : user.title}/>

      <label htmlFor="userdescription">Descripción:</label>
      <textarea id="userdescription" rows={6} placeholder={ user.details == null ? "Agrega un título" : user.details}></textarea>

      <label htmlFor="techs">Tecnologías:</label>
      <input type="text" name="" id="techs" />
      <div>{user.technologies.map(tech => <span>{tech}</span>) }</div>
      
      <label htmlFor="links">Enlaces:</label>
      <input type="text" name="" id="links" />
      <div>{user.links.map(link => <span>{link}</span>) }</div>

      <div>
        <button className="cancelButton" onClick={()=> showEditUserModal(false)}>Cancelar</button>
        <button className="saveButton">Guardar cambios</button>
      </div>

      
    </div>
  );
}
