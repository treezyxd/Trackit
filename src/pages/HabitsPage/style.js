import styled from "styled-components";
import {
  MainColor,
  SecundaryColor,
  BackgroundWhite,
  RegistrationTextColor,
  RegistrationBorderColor,
  DescriptionTextColor,
  DaysColor
} from "../../constants/color";

export const AddHabits = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 90%;
  margin-top: 28px;
  margin-bottom: 25px;
  p {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 29px;
    color: ${SecundaryColor};
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 35px;
    border-radius: 5px;
    background-color: ${MainColor};
    border: none;
    p {
      color: ${BackgroundWhite};
      font-family: "Lexend Deca", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 27px;
      line-height: 34px;
      margin-bottom: 5px;
      margin-left: 1px;
    }
  }
`;

export const NoHabits =  styled.p`
  width: 90%;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: ${DescriptionTextColor};
`;

export const NewHabit = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 180px;
  background-color: ${BackgroundWhite};
  border-radius: 5px;
  margin-bottom: 29px;
  input {
    margin-top: 18px;
    border-radius: 5px;
    display: inline-block;
    width: 90%;
    border: 1px solid ${RegistrationBorderColor};
    margin-bottom: 8px;

    font-family: "Lexend Deca", sans-serif;
    font-size: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #000;
    ::placeholder {
      font-family: "Lexend Deca", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 25px;
      color: ${RegistrationTextColor};
    }
  }
  div {
    width: 90%;
    margin-bottom: 29px;
  }
`;

export const ButtonDay = styled.button`
width: 30px;
height: 30px;
background: ${(props) =>
  props.selected
    ? DaysColor.selected.background
    : DaysColor.unselected.background};
border: 1px solid
  ${(props) =>
    props.selected
      ? DaysColor.selected.border
      : DaysColor.unselected.border};
border-radius: 5px;
margin-right: 4px;
font-family: "Lexend Deca", sans-serif;
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
/* identical to box height */
color: ${(props) =>
  props.selected ? DaysColor.selected.letter : DaysColor.unselected.letter};
`;

export const CancelOrSaveContainer = styled.div`
  display: flex;
  justify-content: end;
  button {
    width: 84px;
    height: 35px;
    margin-left: 10px;
    background-color: pink;
    border: none;
    border-radius: 5px;

    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    :nth-child(1) {
      background-color: ${BackgroundWhite};
      color: ${MainColor};
    }
    :nth-child(2) {
      background-color: ${MainColor};
      color: ${BackgroundWhite};
    }
  }
`;

export const CreateHabitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  background-color: #52b6ff;
  border-radius: 5px;
`;