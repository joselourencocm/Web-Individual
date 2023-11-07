import { useState, useEffect } from "react";
import { useNavigate, useParams, Link, Navigate } from "react-router-dom";

function Cadastro() {
  // Estados para armazenar as informações do formulário
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState("");
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("newUser"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  // Função para lidar com o envio do formulário de cadastro
  const handleSubmit = (e) => {
    e.preventDefault();

    // Criar um objeto com os dados do usuário
    const newUser = {
      fullName: fullName,
      email: email,
      phone: phone,
      password: password,
    };
    setNewUser(newUser);

    // Armazenar a lista atualizada de usuários no Local Storage
    localStorage.setItem("newUser", JSON.stringify(newUser));

    // Reset dos campos do formulário após o envio
    setFullName("");
    setEmail("");
    setPhone("");
    setPassword("");
    navigate("/Login");
  };

  const entrar = () => {
    if (login === "" || senha === "") {
      setError("Preencha todos os campos");
    } else {
      const existingUser = users.find((user) => user.login === login);

      if (existingUser) {
        setError("Este login já está em uso. Escolha outro.");
      } else {
        // Adicione o novo usuário ao array
        const newUser = { login, senha };
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        setError("");

        // Limpe os campos de entrada
        setLogin("");
        setSenha("");
        navigate("/Login");
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Cadastre-se</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Nome Completo</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Celular</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
