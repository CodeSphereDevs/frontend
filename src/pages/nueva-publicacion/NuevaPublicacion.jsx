
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../componentes/ErrorAlert";
import { login } from "../../api/login";
import Loader from "../../assets/loader.svg";
import { createPost } from "../../api/createPost";





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

    nav('/publicaciones')
  };

  return (
    <div className="postPage">
      <form onSubmit={handleSubmit} style={{ height: 230 }}>
        {isLoading ? (
          <img src={Loader} alt="loader" />
        ) : (
          <>
            {" "}
            <div>
              <label htmlFor="title">Titulo:</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="titulo..."
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="content">Contenido:</label>
              <input
                type="text"
                name="content"
                placeholder="..."
              />
            </div>
            <input type="submit" value="Publicar" className="submitButton" />
          </>
        )}
      </form>
      
      {errorAlert != "" && <ErrorAlert alertMessage={errorAlert} />}

    </div>
  );  
}
