import { useState } from "react";
import Select from "react-select";
import techsOptions from "../../assets/techs.json";
import LinksAtEdit from "./LinksAtEdit";

export default function EditUserModal({ user, showEditUserModal }) {
  const [isLoading, setIsLoading] = useState(false);
  const [addingLink, setAddingLink ] = useState(false);
  const [techs, setTechs] = useState(user.technologies);
  const [links, setLinks] = useState(user.links);

  const setTechnologies = (t) => {
    const tchs = t.map((tch) => tch.value);
    setTechs(tchs);
  };

  const initialTechs = techs.map((tech) => ({ label: tech, value: tech }));

  const deleteLink = (index) => {
    const copyLinks = [...links];
    copyLinks.splice(index, 2);
    setLinks(copyLinks);
  };

  const handleSaveChanges = () => {};

  return (
    <div className="editUserModal">
      <label htmlFor="avatar" className="uploadAvatar">
        Subir Avatar
        <input type="file" id="avatar" hidden />
      </label>

      <label htmlFor="usertitle">Título:</label>
      <input
        type="text"
        id="usertitle"
        placeholder={user.title == null ? "Agrega un títuloñ..." : user.title}
      />

      <label htmlFor="userdescription">Descripción:</label>
      <textarea
        id="userdescription"
        rows={6}
        placeholder={
          user.details == null ? "Agrega una descripción..." : user.details
        }
      ></textarea>

      <label htmlFor="techs">Tecnologías:</label>
      <Select
        defaultValue={initialTechs}
        isMulti
        name="techs"
        options={techsOptions}
        className="techs"
        onChange={(e) => setTechnologies(e)}
      />

      <div className="linksSect">
        <label htmlFor="links">Enlaces:</label>
        <button onClick={()=> setAddingLink(value => !value)}>Añadir Enlace</button>
      </div>

        {addingLink && <div className="newLink">
        <input type="text" id="" placeholder="texto..."/>
        <input type="text" id="" placeholder="enlace..."/>
        </div>}

      <div>
        {links.map((link, index) => {
          if (index % 2 == 0) {
            return (
              <LinksAtEdit
                externalLink={{ label: link, link: links[index + 1] }}
                deleteLink={() => deleteLink(index)}
              />
            );
          }
        })}
      </div>

      <div className="buttonsContainer">
        <button
          className="cancelButton"
          onClick={() => showEditUserModal(false)}
        >
          Cancelar
        </button>
        <button className="saveButton">Guardar cambios</button>
      </div>
    </div>
  );
}
