import React from "react";
import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";
import { COLORS } from "../constants/colors";

const StyledTodoContainer = styled.div({
  width: 900,
  minHeight: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: COLORS.cream,
  marginTop: "1rem",
  borderRadius: 4,
  padding: "0 2rem",
  "@media (max-width: 624px)": {
    width: 300,
  },
});

const StyledTodoText = styled.p({
  fontSize: 20,
  textShadow: "1px 1px 1px #6d736f",
});

const StyledButtonsContainer = styled.div({
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "center",
});

const StyledInput = styled.input({
  cursor: "pointer",
});

interface IProps {
  todo: string;
  idx: number;
  deleteTodo: () => void;
}

const TodoContainer: React.FC<IProps> = ({ todo, idx, deleteTodo }) => {
  const [checked, setChecked] = React.useState<boolean>(true);

  return (
    <StyledTodoContainer
      key={idx}
      style={{ textDecoration: checked ? "none" : "line-through" }}
    >
      <StyledTodoText>
        {idx + 1}. {todo}
      </StyledTodoText>
      <StyledButtonsContainer>
        <StyledInput type="checkbox" onClick={() => setChecked(!checked)} />
        <BsFillTrashFill
          size={22}
          style={{ cursor: "pointer" }}
          onClick={() => deleteTodo()}
        />
      </StyledButtonsContainer>
    </StyledTodoContainer>
  );
};

export default TodoContainer;
