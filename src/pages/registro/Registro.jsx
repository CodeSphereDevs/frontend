import { useState } from "react";
import { useUserContext } from "../../contexts/useUserContext";
import { useNavigate } from "react-router-dom";
import "../login/LoginPage.css";
import ErrorAlert from "../../componentes/ErrorAlert";
import {login} from "../../api/login";
import { Link } from "react-router-dom";

export default function Registro() {
    const [errorAlert, setErrorAlert] = useState("");
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
          "El nobre de usuario debe contener entre 3 y 30 caracteres alfanuméricos"
        );
        return;
      }
  
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,30}$/.test(password)) {
        showErrorAlert(
          "La contraseña debe contener entre 8 y 30 caracteres alfanuméricos, con al menos una mayúsculas y un número"
        );
        return;
      }
  
      const response = await login(username, password);
      console.log(response)
      if (!response.success) {
        showErrorAlert(response.message);
        return;
      }
  
      setUser(response.data);
      nav(-1);
    };
  
    return (
      <div className="loginPage">
        <form onSubmit={handleSubmit}>
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
            <input type="password" name="password" placeholder="contraseña..." />
          </div>
          <input type="submit" value="Crear cuenta" className="submitButton" />
        </form>
        <span>Yatienes una cuenta?</span>
        <Link className="createAccountButton" to="/login">Ingresa</Link>
        {errorAlert != "" && <ErrorAlert alertMessage={errorAlert} />}
      </div>
    );
}
