import { Container, MainLogo, StyledInput, StyledButton, StyledForm, Register } from "./style";
import Logo from "../../assets/images/logo.svg";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import apiAuth from "../../api/apiAuth";
import { ThreeDots } from "react-loader-spinner";

function HomePage({ setToken }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // function de login

  function handleLogin(e) {
    e.preventDefault();

    setIsLoading(true);

    apiAuth.login(form)
      .then((res) => {
        const { id, name, image, token } = res.data;
        setIsLoading(false);
        setUser({ id, name, image, token });
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
          data-test="email-input" 
          name="email"
          placeholder="email"
          type="email"
          required
          disabled={isLoading}
          value={form.email}
          onChange={handleForm}
        />
        <StyledInput
          data-test="password-input"
          name="password"
          placeholder="senha"
          type="password"
          required
          disabled={isLoading}
          value={form.password}
          onChange={handleForm}
        />

        <StyledButton
          data-test="login-btn"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <ThreeDots width={50} height={50} color="#fff" />
          ) : (
            "Entrar"
          )}
        </StyledButton>
      </StyledForm>

      <Register
        data-test="signup-link"
        to="/cadastro"
      >
        Não tem uma conta? Cadastre-se!
      </Register>
    </Container>
  );
}

export default HomePage;