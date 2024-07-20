import { useState } from "react";
import Select from "react-select";
import techsOptions from "../../assets/techs.json";
import LinksAtEdit from "./LinksAtEdit";
import { updateUser } from "../../api/updateUser";

export default function EditUserModal({ user,setUser, showEditUserModal }) {
  const [isLoading, setIsLoading] = useState(false);
  const [addingLink, setAddingLink] = useState(false);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [techs, setTechs] = useState(user.technologies);
  const [links, setLinks] = useState(user.links);

  const [newLinkText, setNewLinkText] = useState("");
  const [newLink, setNewLink] = useState("");

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

  const addNewLink = () => {
    if (newLink != "" && newLinkText != "") {
      const newLinks = [...links];
      newLinks.push(newLinkText);
      newLinks.push(newLink);
      setLinks(newLinks);
      setNewLink("");
      setNewLinkText("");
      setAddingLink(false);
    }
  };

  const handleSaveChanges = async () => {
    const dataToSend = {};
    if (title != "") dataToSend.title = title;
    if (details != "") dataToSend.details = details;
    if (JSON.stringify(links) != JSON.stringify(user.links))
      dataToSend.links = links;
    if (JSON.stringify(techs) != JSON.stringify(user.technologies))
      dataToSend.technologies = techs;

    if (Object.keys(dataToSend).length != 0) {
      setIsLoading(true);
      const result = await updateUser(dataToSend);
      setIsLoading(false);
      console.log(result);
      if (result.success) setUser({...user, ...dataToSend})
    }

    showEditUserModal(false);
  };

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
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="userdescription">Descripción:</label>
      <textarea
        id="userdescription"
        rows={6}
        placeholder={
          user.details == null ? "Agrega una descripción..." : user.details
        }
        value={details}
        onChange={(e) => setDetails(e.target.value)}
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
        <button onClick={() => setAddingLink((value) => !value)}>
          Añadir Enlace
        </button>
      </div>

      {addingLink && (
        <div className="newLink">
          <input
            type="text"
            id=""
            placeholder="texto..."
            value={newLinkText}
            onChange={(e) => setNewLinkText(e.target.value)}
          />
          <input
            type="text"
            id=""
            placeholder="enlace..."
            value={newLink}
            onChange={(e) => setNewLink(e.target.value)}
          />
          <button onClick={addNewLink}>+</button>
        </div>
      )}

      <div>
        {links.map((link, index) => {
          if (index % 2 == 0) {
            return (
              <LinksAtEdit
                externalLink={{ label: link, link: links[index + 1] }}
                deleteLink={() => deleteLink(index)}
                key={link}
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
        <button className="saveButton" onClick={handleSaveChanges}>
          Guardar cambios
        </button>
      </div>
    </div>
  );
}
