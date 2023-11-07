import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import Contato from "../../components/Contato";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Calendario from "../../components/Calendario";
import Sair from "../../components/Sair";
import "./style.css";

function Home() {
  // Estado para armazenar o termo de pesquisa
  const [searchTerm, setSearchTerm] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Verifique se há um nome de usuário armazenado no Local Storage
    const storedUser = localStorage.getItem("newUser");

    if (storedUser) {
      // Extraindo o nome do usuário do objeto armazenado
      const { fullName } = JSON.parse(storedUser);
      setUserName(fullName);
    }
  }, []);

  // Imagens do consultório
  const officeImages = [
    "src/images/undraw_pilates_ltw9.svg",
    "src/images/undraw_stability_ball_b-4-ia.svg",
  ];

  // Array de atendimentos (você pode substituir com os dados reais)
  const services = [
    {
      title: "O que é e para que serve o Pilates?",
      description: (
        <p>
          {" "}
          Melhorar a postura e corrigir os hábitos posturais incorretos,
          aumentar a flexibilidade e a mobilidade, melhorar a coordenação
          motora, <br />
          Respirar melhor e de maneira mais consciente, favorecer o relaxamento
          mental, aumentar a consciência corporal.
        </p>
      ),
    },
    {
      title: "Beneficíos da Fisioterapia",
      description: (
        <p>
          Melhora na postura Reabilitação física, alívio de tensões
          musculoesqueléticas, melhora do humor, da autoestima e da
          autoconfiança, <br />
          Melhora do condicionamento físico, tratamento e prevenção de doenças
          crônicas, melhora de qualidade de vida e prevenção de lesões
        </p>
      ),
    },
  ];

  // Função para filtrar atendimentos com base no termo de pesquisa
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="navbar">
      <div className="home-container">
        {userName && (
          <div className="recep">
            <h3>Bem-vindo, {userName}!</h3>
          </div>
        )}
        {/* Campo de pesquisa */}
        <input
          type="text"
          placeholder="Pesquisar atendimentos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="botao">
          <button className="btn" type="button">
            <Link to={"/Login"} className="botao">
              Login
            </Link>
          </button>{" "}
          <button className="btn" type="button">
            <Link to={"/cadastro"} className="botao">
              Cadastrar-se
            </Link>
          </button>
          <Sair />
        </div>
        <div>
          <Calendario />
        </div>
      </div>

      <Carousel showThumbs={false} showArrows={true} dynamicHeight={true}>
        {officeImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Consultório ${index + 1}`} />
          </div>
        ))}
      </Carousel>

      {/* Lista de atendimentos */}
      <div className="services-list">
        {filteredServices.map((service, index) => (
          <div key={index} className="service-item">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div className="pe">
        <footer>
          <Contato />
        </footer>
      </div>
    </div>
  );
}

export default Home;
