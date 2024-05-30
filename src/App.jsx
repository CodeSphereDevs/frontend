import Navbar from "./componentes/navbar/Navbar";
import { Route, Routes } from "react-router-dom";

import Home from "./inicio/Home";
import Usuarios from "./usuarios/Usuarios";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuarios" element={<Usuarios />} />
      </Routes>
    </>
  );
}

export default App;
