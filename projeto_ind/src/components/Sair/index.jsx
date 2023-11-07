import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function SuaPagina() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem("isUserLoggedIn", "false");

    navigate("/");
  };

  return (
    <div>
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
export default SuaPagina;
