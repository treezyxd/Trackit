import React, { useContext } from "react";
import trashIcon from "../assets/images/dump.svg";
import WeekDayButtons from "../components/WeekDayButton";
import apiHabits from "../api/apiHabits";
import { UserContext } from "../contexts/UserContext";
import styled from "styled-components";

function HabitCard({ id, name, days, getHabitsList }) {
  const { user } = useContext(UserContext);

  function handleDelete() {
    const confirmation = window.confirm(
      "Voce realmente quer deletar esse habito?"
    );

    if(confirmation) {
      apiHabits
        .deleteHabit(user.token, id)
        .then(res => {
          getHabitsList();
        })
        .catch(err => {
          alert(err.response.data.message);
        });
    }
  }

  return (
    <Container data-test="habit-container">
      <Title data-test="habit-name">{name}</Title>
      <WeekDayButtons selectedDays={days} />
      <img data-test="habit-delete-btn" src={trashIcon} onClick={handleDelete} alt="" />
    </Container>
  );
}

export default HabitCard;

const Container = styled.div`
  width: 100%;
  height: 90px;
  padding: 15px;
  margin: 5px 0;
  background: #fff;
  border-radius: 5px;
  position: relative;

  img {
    width: 15px;
    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  line-height: 25px;
  word-break: break-all;
  width: 80%;
  color: #666;
`;