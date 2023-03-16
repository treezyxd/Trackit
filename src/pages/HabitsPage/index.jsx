import HabitCard from "../../components/HabitCard";
import CreateHabitCard from "../../components/CreateHabitCard";
import ScreenWithBars from "../../components/ScreenWithBars";
import plusIcon from "../../assets/images/plus.svg";
import { CreateHabitContainer, Button } from "./style.js";
import StyledTitle from "../../components/StyledTitle";
import StyledSubtitle from "../../components/StyledSubtitle";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/USerContext";
import { ThreeDots } from "react-loader-spinner";
import { ProgressContext } from "../../contexts/ProgressContext";
import apiToday from "../../api/apiToday";
import apiHabits from "../../api/apiHabits";

export default function HabitsPage() {
  const [habits, setHabits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [createHabitOpened, setCreateHabitOpened] = useState(false);
  const { user } = useContext(UserContext);
  const { setProgress } = useContext(ProgressContext);

  useEffect(getHabitsList, []);

  function getTodayHabits() {
    apiToday
      .getToday(user.token)
      .then(res => {
        const apiHabits = res.data;
        const doneHabits = apiHabits.filter(h => h.done === true);
        const calc = ((doneHabits.length / apiHabits.length) * 100).toFixed(0);
        setProgress(calc);
      })
      .catch(err => alert(err.response.data.message));
  }

  function getHabitsList() {
    apiHabits
      .getHabits(user.token)
      .then(res => {
        setIsLoading(false);
        setHabits(res.data);
        getTodayHabits();
      })
      .catch(err => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
  }

  return (
    <ScreenWithBars>
      <CreateHabitContainer>
        <StyledTitle>Meus Habitos</StyledTitle>
        <Button onClick={() => setCreateHabitOpened(!createHabitOpened)}>
          <img src={plusIcon} alt="icone adicionar" />
        </Button>
      </CreateHabitContainer>

      <CreateHabitCard 
        isOpened={createHabitOpened}
        setIsOpened={setCreateHabitOpened}
        getHabitsList={getHabitsList}
      />

      {isLoading ? (
        <ThreeDots height={80} width={80} color={"#126ba5"} />
      ) : habits.length === 0 ? (
        <StyledSubtitle>
          Voce nao tem nenhum habito cadastrado ainda. Adicione um habito para inicar a trackear!
        </StyledSubtitle>
      ) : (
        habits.map(h => (
          <HabitCard 
            key={h.id}
            id={h.id}
            name={h.name}
            days={h.days}
            getHabitsList={getHabitsList}
          />
        ))
      )}
    </ScreenWithBars>
  );
}