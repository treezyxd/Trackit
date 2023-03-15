import { Container, MainLogo, StyledButton, StyledForm } from "./style";
import Logo from "../../assets/images/logo.svg";

function HomePage() {

  return (
    <Container>
      <MainLogo src={Logo} />
      <StyledForm>


        <StyledButton>
          Entrar
        </StyledButton>
      </StyledForm>
    </Container>
  );
}

export default HomePage;