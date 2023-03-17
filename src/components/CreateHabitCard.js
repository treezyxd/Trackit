import WeekDayButtons from "../components/WeekDayButton";
import StyledInput from "../components/StyledInput";
import { useContext, useState } from "react";
import apiHabits from "../api/apiHabits";
import { UserContext } from "../contexts/UserContext";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

function CreateHabitCard({
  isOpened,
  setIsOpened,
  getHabitsList
}) {
  const [form, setForm] = useState({ name: "" });
  const [days, setDays] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(UserContext);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCreate(e) {
    e.preventDefault();
    setIsLoading(true);

    const body = { ...form, days };
    apiHabits
      .createHabit(user.token, body)
      .then(res => {
        setIsLoading(false);
        setForm({ name: "" });
        setDays([]);
        setIsOpened(false);
        getHabitsList();
      })
      .catch(err => {
        setIsLoading(false);
        alert(err.response.data.message);
      });
  }

  return (
    <Form isOpened={isOpened} onSubmit={handleCreate}>
      <ButtonsContainer 
        data-test="habit-create-container"
      >
        <StyledInput 
          name="name"
          placeholder="nome do habito"
          type="text"
          required
          disabled={isLoading}
          value={form.name}
          onChange={handleForm}
          data-test="habit-name-input"
        />
        <WeekDayButtons 
          selectedDays={days}
          setSelectedDays={setDays}
          isLoading={isLoading}
        />
        <Footer>
          <CloseButton
            data-test="habit-create-cancel-btn"
            type="button"
            disabled={isLoading}
            onClick={() => setIsOpened(false)}
          >
            Cancelar
          </CloseButton>

          <SaveButton data-test="habit-create-save-btn" type="submit" disabled={isLoading}>
            {isLoading ? (
              <ThreeDots width={50} height={50} color="#fff" />
            ) : (
              "Salvar"
            )}
          </SaveButton>
        </Footer>
      </ButtonsContainer>
    </Form>
  );
}

export default CreateHabitCard;

const Form = styled.form`
  display: ${props => props.isOpened ? "initial" : "none"};
  width: 100%;
  height: 180px;
  margin-bottom: 5px;
  padding: 15px;
  background: #fff;
  border-radius: 5px;
`;

const ButtonsContainer = styled.div`
  margin-bottom: 25px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`;

const CloseButton = styled.button`
  width: 85px;
  height: 35px;
  pointer-events: ${props => props.disabled ? "none" : "all"};
  background-color: transparent;
  border-radius: 5px;
  line-height: 20px;
  color: #52b6ff;
  border: 0;
`;

const SaveButton = styled.button`
  width: 84px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.disabled ? 0.7 : 1};
  pointer-events: ${props => props.disabled ? "none" : "all"};
  background-color: #52b6ff;
  border-radius: 5px;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
  border: 0;
`;