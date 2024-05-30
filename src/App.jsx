import Navbar from "./componentes/navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./inicio/Home";
import Usuarios from "./usuarios/Usuarios";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<Usuarios />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
