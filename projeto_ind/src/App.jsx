import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Calendario from "./components/Calendario";
import Contato from "./components/Contato";
import Sair from "./components/Sair";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/calendar" element={<Calendario />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sair" element={<Sair />} />
      </Routes>
    </Router>
  );
}

export default App;
