import { Link, useNavigate } from "react-router-dom";
import InputButton from "../../components/InputButton/InputButton";
import InputField from "../../components/InputField/InputField";
import "../Config.css";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailInput = document.getElementById("email-id");
    let passwordInput = document.getElementById("password-id");

    if (emailInput.value === "") {
      return alert("Por favor, preencha o e-mail.");
    }

    if (!emailRegex.test(emailInput.value)) {
      return alert("Por favor, preencha corretamente o formato do e-mail.")
    }

    if (passwordInput.value === "") {
      return alert("Por favor, preencha a senha.");
    }

    // Navega para "/congrats"
    navigate('/congrats');
  };

  return (
    <div className="container">
      <form className="menu-container" onSubmit={handleSubmit}>
        <h2 className="title">Front-end API</h2>

        <div className="input-div">
          <h3>E-mail: </h3>
          <InputField
            placeholderText="fulano@gmail.com"
            type="email"
            id="email-id"
          />
        </div>

        <div className="input-div">
          <h3>Senha: </h3>
          <InputField
            placeholderText="Insira sua senha"
            type="password"
            id="password-id"
          />
        </div>

        <InputButton title="LogIn" />

        <div className="footer">
          <Link to="/forgot-password">Esqueceu a senha?</Link>
          <Link to="/signup">Criar conta</Link>
        </div>
      </form>
    </div>
  )
}