import styled from "styled-components";

const StyledInput = styled.input`
  width: 95%;
  height: 45px;
  margin-bottom: 6px;
  padding: 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-size: 20px;
  line-height: 25px;
  pointer-events: ${props => (props.disabled ? "none" : "all")};
  background-color: ${props => props.disabled ? "#f2f2f2" : "#fff"};
  color: ${props => (props.disabled ? "#afafaf" : "#666")};

  &::placeholder {
    color: #dbdbdb;
  }
`;

export default StyledInput;