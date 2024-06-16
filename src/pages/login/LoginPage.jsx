import { useState } from "react";
import { useUserContext } from "../../contexts/useUserContext";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import ErrorAlert from "../../componentes/ErrorAlert";
import { login } from "../../api/login";
import { Link } from "react-router-dom";
import Loader from "../../assets/loader.svg";

export default function LoginPage() {
  const [errorAlert, setErrorAlert] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserContext();
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
    const username = form.username.value;
    const password = form.password.value;

    if (!/^[a-zA-Z0-9]{3,30}$/.test(username)) {
      showErrorAlert(
        "El nombre de usuario debe contener entre 3 y 30 caracteres alfanuméricos"
      );
      return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,30}$/.test(password)) {
      showErrorAlert(
        "La contraseña debe contener entre 8 y 30 caracteres alfanuméricos, con al menos una mayúsculas y un número"
      );
      return;
    }
    setIsLoading(true);
    const response = await login(username, password);
    setIsLoading(false);
    if (!response.success) {
      showErrorAlert(response.message);
      return;
    }

    setUser(response.data);
    nav(`/usuario/${username}`);
  };

  return (
    <div className="loginPage">
      <form onSubmit={handleSubmit} style={{ height: 230 }}>
        {isLoading ? (
          <img src={Loader} alt="loader" />
        ) : (
          <>
            {" "}
            <div>
              <label htmlFor="username">Nombre de usuario:</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="nombre de usuario..."
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                name="password"
                placeholder="contraseña..."
              />
            </div>
            <input type="submit" value="Ingresar" className="submitButton" />
          </>
        )}
      </form>
      <span>No tienes una cuenta?</span>
      <Link className="createAccountButton" to="/registro">
        CREAR UNA
      </Link>
      {errorAlert != "" && <ErrorAlert alertMessage={errorAlert} />}
    </div>
  );
}
