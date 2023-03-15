import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 68px;
`;

export const MainLogo = styled.img`
  height: 180px;
  width: 180px;
  border-radius: 0px;
`;

export const StyledForm = styled.form`
  width: 303px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 33px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-bottom: 25px;
  height: 45px;
  width: 100%;
  border-radius: 5px;
  background-color: #ff0000;
  border: none;

  color: #fff;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 26px;
  text-align: center;

  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;