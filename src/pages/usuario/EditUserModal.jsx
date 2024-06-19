export default function EditUserModal({ showEditUserModal }) {
  return (
    <div className="editUserModal">
      <label htmlFor="avatar" className="uploadAvatar">
        Subir Avatar
        <input type="file" id="avatar" hidden />
      </label>

      <label htmlFor="usertitle">Título:</label>
      <input type="text" id="usertitle" />

      <label htmlFor="userdescription">Descripción:</label>
      <textarea id="userdescription" rows={6}></textarea>

      <label htmlFor="techs">Tecnologías:</label>
      
      
      <div>
        <button className="cancelButton" onClick={()=> showEditUserModal(false)}>Cancelar</button>
        <button className="saveButton">Guardar cambios</button>
      </div>


    </div>
  );
}
