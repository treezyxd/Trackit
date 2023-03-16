import {
  Container,
  MainLogo,
  StyledForm,
  Register,
  StyledButton,
  StyledInput,
} from "./style";
import Logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ThreeDots } from "react-loader-spinner";
import apiAuth from "../../api/apiAuth";

function HomePage({ setToken }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Função Login
  function handleLogin(e) {
    e.preventDefault();

    // Adiciona efeito Loading
    setIsLoading(true);

    apiAuth
      .login(form)
      .then((res) => {
        const { id, name, image, token } = res.data;
        setIsLoading(false);
        setUser({ id, name, image, token });
        // Guarda dados usuario no no Local Storage (Persistencia Login)
        localStorage.setItem(
          "user",
          JSON.stringify({ id, name, image, token })
        );
        navigate("/hoje");
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
  }

  return (
    <Container>
      <MainLogo src={Logo} />
      <StyledForm onSubmit={handleLogin}>
        <StyledInput
          data-identifier="input-email"
          name="email"
          placeholder="email"
          type="email"
          required
          disabled={isLoading}
          value={form.email}
          onChange={handleForm}
        />
        <StyledInput
          data-identifier="input-password"
          name="password"
          placeholder="senha"
          type="password"
          required
          disabled={isLoading}
          value={form.password}
          onChange={handleForm}
        />

        {/* Adiciona Efeito Loading */}
        <StyledButton
          data-identifier="login-btn"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <ThreeDots width={50} height={50} color="#FFFFFF" />
          ) : (
            "Entrar"
          )}
        </StyledButton>
      </StyledForm>

      <Register to="/cadastro" data-identifier="sign-up-action">
        Não tem uma conta? Cadastre-se!
      </Register>
    </Container>
  );
}

export default HomePage;