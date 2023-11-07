import React, { useEffect, useState } from "react";

function ConsultaCard({ consulta, index }) {
  return (
    <div className="consulta-card">
      <h3>Consulta {index + 1}</h3>
      <p>Data: {consulta.dataConsulta}</p>
      <p>Motivo: {consulta.consulta}</p>
    </div>
  );
}

function Calendario() {
  const [userName, setUserName] = useState("");
  const [consulta, setConsulta] = useState("");
  const [dataConsulta, setDataConsulta] = useState("");
  const [userConsultas, setUserConsultas] = useState([]);

  useEffect(() => {
    const storedUserName = localStorage.getItem("newUser");

    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, []);

  const handleConsultaChange = (e) => {
    setConsulta(e.target.value);
  };

  const handleDataConsultaChange = (e) => {
    setDataConsulta(e.target.value);
  };

  const handleMarcarConsulta = () => {
    if (!userName) {
      alert("Por favor, faça login para marcar uma consulta.");
      return;
    }

    const consultas = JSON.parse(localStorage.getItem("consultas")) || [];
    const novaConsulta = { userName, consulta, dataConsulta };
    consultas.push(novaConsulta);

    localStorage.setItem("consultas", JSON.stringify(consultas));

    alert("Consulta marcada com sucesso!");
  };

  const handleVerConsultas = () => {
    if (!userName) {
      alert("Por favor, faça login para ver suas consultas.");
      return;
    }

    const consultas = JSON.parse(localStorage.getItem("consultas")) || [];
    const userConsultas = consultas.filter(
      (consulta) => consulta.userName === userName
    );

    setUserConsultas(userConsultas);
  };

  return (
    <div>
      <div className="calendar-container">
        <h2>Agende sua consulta</h2>

        <input
          type="date"
          value={dataConsulta}
          onChange={handleDataConsultaChange}
          placeholder="01/12/2023"
        />
      </div>
      <div>
        <select value={consulta} onChange={handleConsultaChange}>
          <option value="">Selecione o motivo da consulta...</option>
          <option value="pilates">Pilates</option>
          <option value="fisioterapia">Fisioterapia</option>
        </select>
        <div className="pro-btn">
          <button onClick={handleMarcarConsulta}>Marcar Consulta</button>
          <button onClick={handleVerConsultas}>Ver minhas consultas</button>
        </div>
        {userConsultas.map((consulta, index) => (
          <ConsultaCard key={index} consulta={consulta} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Calendario;
