import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../componentes/ErrorAlert";
import { login } from "../../api/login";
import Loader from "../../assets/loader.svg";
import { createPost } from "../../api/createPost";
import "./NuevaPublicacion.scss";

export default function NuevaPublicacion() {
  const [errorAlert, setErrorAlert] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  const showErrorAlert = (s) => {
    setErrorAlert(s);
    setTimeout(() => {
      setErrorAlert("");
    }, 3000);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const title = form.title.value;
    const content = form.content.value;

    setIsLoading(true);
    const response = await createPost(title, content);
    setIsLoading(false);
    if (!response.success) {
      showErrorAlert(response.message);
      return;
    }

    nav("/publicaciones");
  };

  return (
    <div className="postPage">
      <form onSubmit={handleSubmit}>
        <h1>Nueva publicación</h1>
        {isLoading ? (
          <img src={Loader} alt="loader" />
        ) : (
          <>
            {" "}

              <label htmlFor="title">Título:</label>
              <input type="text" name="title" id="title" autoComplete="off" />


              <label htmlFor="content">Contenido:</label>
              <textarea name="content" id="content" rows={12}></textarea>
            <div>
              <button>Cancelar</button>
              <input type="submit" value="Publicar" className="submitButton" />
            </div>
          </>
        )}
      </form>

      {errorAlert != "" && <ErrorAlert alertMessage={errorAlert} />}
    </div>
  );
}
