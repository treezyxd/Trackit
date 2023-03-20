import styled from "styled-components";
import { SecundaryColor, DescriptionTextColor } from "../../constants/color";
import Calendar from "react-calendar";

export const Header = styled.div`
  width: 90%;
  margin-top: 28px;
  margin-bottom: 17px;
  h1 {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    /* identical to box height */
    color: ${SecundaryColor};
  }
`;

export const NoHistoric = styled.p`
  width: 90%;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;
  color: ${DescriptionTextColor};
`;

export const ContainerCalendar = styled.div`
  height: 60vh;
  margin-bottom: 30px;
`;

export const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: 100%;
  margin-top: 12px;
  border: none;
  border-radius: 10px;
`;