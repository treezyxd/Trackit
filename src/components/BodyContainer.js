import styled from "styled-components";

import { BackgroundColorHabits } from "../constants/color";

export const Container = styled.div`
  background-color: ${BackgroundColorHabits};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  margin-top: 70px;
  padding-bottom: 100px;
`;