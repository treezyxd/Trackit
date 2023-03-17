import { Container, MainLogo, StyledForm, Register, StyledButton, StyledInput } from "./style";
import Logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import apiAuth from "../../api/apiAuth";

export default function Registration() {
  const navigate= useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSignUp(e) {
    e.preventDefault();
    setIsLoading(true);

    apiAuth
      .signUp(form)
      .then(() => {
        setIsLoading(false);
        navigate("/");
      })
      .catch(err => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
  }

  return (
    <Container>
      <MainLogo src={Logo} />
      <StyledForm onSubmit={handleSignUp}>
        <StyledInput 
          name="email"
          placeholder="email"
          type="email"
          required
          disabled={isLoading}
          value={form.email}
          onChange={handleForm}
          data-test="email-input"
        />
        <StyledInput 
          name="password"
          placeholder="senha"
          type="password"
          required
          disabled={isLoading}
          value={form.password}
          onChange={handleForm}
          data-test="password-input"
        />
        <StyledInput
          name="name"
          placeholder="nome"
          type="text"
          required
          disabled={isLoading}
          value={form.name}
          onChange={handleForm}
          data-test="user-name-input"
        />
        <StyledInput 
          name="image"
          placeholder="foto"
          type="url"
          required
          disabled={isLoading}
          value={form.image}
          onChange={handleForm}
          data-test="user-image-input"
        />

        <StyledButton data-test="signup-btn" type="submit" disabled={isLoading}>
          {isLoading ? (
            <ThreeDots width={50} height={50} color="#fff" />
          ) : (
            "Cadastrar"
          )}
        </StyledButton>
      </StyledForm>
      <Register data-test="login-link" to="/" data-identifier="back-to-login-action" >
        Já tem uma conta? Faça Login!
      </Register>
    </Container>
  );
}