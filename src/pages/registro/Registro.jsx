import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login/LoginPage.css";
import ErrorAlert from "../../componentes/ErrorAlert";
import { signup } from "../../api/signup";
import { Link } from "react-router-dom";
import Loader from "../../assets/loader.svg";

export default function Registro() {
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
    const username = form.username.value;
    const password = form.password.value;
    const email = form.email.value;

    if (!/^[a-zA-Z0-9]{3,30}$/.test(username)) {
      showErrorAlert(
        "El nombre de usuario debe contener entre 3 y 30 caracteres alfanuméricos"
      );
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net)$/.test(email)) {
      showErrorAlert("El email no es válido");
      return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,30}$/.test(password)) {
      showErrorAlert(
        "La contraseña debe contener entre 8 y 30 caracteres alfanuméricos, con al menos una mayúsculas y un número"
      );
      return;
    }
    setIsLoading(true);
    const response = await signup(username, email, password);
    setIsLoading(false);

    if (!response.success) {
      showErrorAlert(response.message);
      return;
    }
    nav("/");
  };

  return (
    <div className="loginPage">
      <form onSubmit={handleSubmit} style={{height: 300}}>
        {isLoading ? (
          <img src={Loader} alt="loader"/>
        ) : (
          <>
            {" "}
            <div>
              <label htmlFor="username">Nombre de usuario:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="nombre de usuario..."
                autoComplete="off"
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email..."
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
            <input
              type="submit"
              value="Crear cuenta"
              className="submitButton"
            />
          </>
        )}
      </form>
      <span>Ya tienes una cuenta?</span>
      <Link className="createAccountButton" to="/login">
        Ingresa
      </Link>
      {errorAlert != "" && <ErrorAlert alertMessage={errorAlert} />}
    </div>
  );
}
