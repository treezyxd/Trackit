import { useContext } from "react";
import checkIcon from "../assets/images/check.svg";
import { UserContext } from "../contexts/UserContext";
import apiToday from "../api/apiToday";
import styled from "styled-components";

function HabitCheckCard({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
  getTodayHabits
}) {
  const { user } = useContext(UserContext);

  function handleCheck() {
    if(done) {
      apiToday
        .uncheckHabit(user.token, id)
        .then(() => getTodayHabits())
        .catch(err => alert(err.response.data.message));
    } else {
      apiToday
        .checkHabit(user.token, id)
        .then(() => getTodayHabits())
        .catch(err => alert(err.response.data.message));
    }
  }

  return (
    <Container>
      <DetailsContainer>
        <Title>{name}</Title>
        <Paragraph>
          Sequencia atual:
          <CurrentSequence done={done}>{currentSequence} dias</CurrentSequence>
        </Paragraph>
        <Paragraph>
          Seu recorde:
          <HighestSequence currentSequenceIsHighest={currentSequence === highestSequence}>
            {highestSequence} dias
          </HighestSequence>
        </Paragraph>
      </DetailsContainer>

      <CheckMarkContainer done={done} onClick={handleCheck}>
        <img alt="" src={checkIcon} />
      </CheckMarkContainer>
    </Container>
  );
}

export default HabitCheckCard;

const Container = styled.div`
  width: 100%;
  height: 94px;
  padding: 15px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const DetailsContainer = styled.div`
  width: 75%;
`;

const Title = styled.h2`
  font-size: 20px;
  line-height: 25px;
  width: 100%;
  word-break: break-all;
  margin-bottom: 7px;
  color: #666;
`;

const Paragraph = styled.p`
  font-size: 13px;
  line-height: 16px;
  color: #666;
`;

const CurrentSequence = styled.span`
  margin-left: 6px;
  color: ${props => (props.done ? "#8fc549" : "#666")};
`;

const HighestSequence = styled.span`
  margin-left: 6px;
  color: ${props => props.currentSequenceIsHighest ? "#8fc549" : "#666"};
`;

const CheckMarkContainer = styled.div`
  width: 69px;
  height: 69px;
  background-color: ${props => (props.done ? "#8fc549" : "#ebebeb")};
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;