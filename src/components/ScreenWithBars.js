import Header from "./Header";
import Menu from "./Menu";

import styled from "styled-components";

export default function ScreenWithBars({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Menu />
    </Container>
  );
}

const Container = styled.div`
  min-height: calc(100vh - 200px);
  padding: 90px 20px 100px 20px;
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  align-items: center;
`;