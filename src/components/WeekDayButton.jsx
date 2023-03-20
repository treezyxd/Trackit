import weekDays from "../constants/weekDays";
import styled from "styled-components";

export default function WeekDayButtons({
  selectDays,
  setSelectDays,
  isLoading
}) {
  function handleDay(day) {
    if (selectDays.includes(day)) {
      const newDays = selectDays.filter(d => d !== day);
      setSelectDays(newDays);
    } else {
      setSelectDays([...selectDays, day]);
    }
  }

  return (
    <Days disabled={isLoading}>
      {weekDays.map((weekDay) => (
        <StyledDay
          data-test="habit-day"
          key={weekDay.id}
          isSelected={selectDays.includes(weekDay.id)}
          onClick={() => handleDay(weekDay.id)}
        >
          {weekDay.day}
        </StyledDay>
      ))}
    </Days>
  );
}

const StyledDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding-bottom: 2px;
  border: ${props => props.isSelected ? "1px solid #cfcfcf" : "1px solid #d5d5d5"};
  border-radius: 5px;
  font-size: 20px;
  line-height: 25px;
  background: ${props => (props.isSelected ? "#cfcfcf" : "#fff")};
  color: ${props => props.isSelected ? "#fff" : " #dbdbdb"};
`;

const Days = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
`;