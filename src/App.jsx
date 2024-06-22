import Navbar from "./componentes/navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/inicio/Home";
import Usuarios from "./pages/usuarios/Usuarios";



import UserContext from "./contexts/useUserContext";
import LoginPage from "./pages/login/LoginPage";
import Registro from "./pages/registro/Registro";
import Usuario from "./pages/usuario/Usuario";
import Proyectos from "./pages/proyectos/Proyectos";
import NuevoProyecto from "./pages/nuevo-proyecto/NuevoProyecto";
import Publicaciones from "./pages/publicaciones/Publicaciones";
import NuevaPublicacion from "./pages/nueva-publicacion/NuevaPublicacion";
import Proyecto from "./pages/proyecto/Proyecto";


function App() {
  return (
    <>
      <BrowserRouter>
        <UserContext>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/proyectos" element={<Proyectos/>}/>
              <Route path="/proyecto/:projectName" element={<Proyecto/>}/>
              <Route path="/nuevo-proyecto" element={<NuevoProyecto />} />

              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/usuario/:username" element={<Usuario />} />

              <Route path="/login" element={<LoginPage />} />
              <Route path="/registro" element={<Registro />} />
              
              <Route path="/publicaciones" element={<Publicaciones />} />
              <Route path="/nueva-publicacion" element={<NuevaPublicacion />} />
            </Routes>
          </main>
        </UserContext>
      </BrowserRouter>
    </>
  );
}

export default App;
