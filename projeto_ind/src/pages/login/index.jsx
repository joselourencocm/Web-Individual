import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./style.css";

function Login({ newUser }) {
  // Estados para armazenar as informações do formulário de login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Recuperar os dados do usuário do Local Storage
    const storedUser = JSON.parse(localStorage.getItem("newUser"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // Função para lidar com o envio do formulário de login
  const handleSubmit = (e) => {
    e.preventDefault();

    if (user && email === user.email && password === user.password) {
      navigate("/");
    } else {
      // Login falhou
      alert("Login falhou. Verifique suas credenciais.");
    }

    // Reset dos campos do formulário após o envio
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <h2>Faça o Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Entrar</button>
        <div>
          <p className="registrar">
            Não tem uma conta?{" "}
            <Link to="/cadastro" className="ir">
              Registre-se
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
