import React from "react";
import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";

import { COLORS } from "../constants/colors";

const StyledContainer = styled.div({
  backgroundColor: COLORS.brown,
  width: "70%",
  minHeight: 630,
  margin: "2rem auto",
  borderRadius: 20,
  position: "relative",
});

const StyledInputContainer = styled.div({
  backgroundColor: COLORS.lightBrown,
  width: "100%",
  height: 150,
  borderRadius: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 16,
  margin: "auto",

  "@media (max-width: 624px)": {
    display: "flex",
    flexDirection: "column",
  },
});

const StyledInput = styled.input({
  width: 400,
  height: 30,
  borderRadius: 10,
  padding: "24px 20px",
  border: `2px solid ${COLORS.greyish}`,
  outline: "none",
  backgroundColor: COLORS.greyish,

  "::placeholder": {
    color: COLORS.cream,
  },

  "@media (max-width: 624px)": {
    width: 300,
  },
});

const StyledButtonContainer = styled.div({
  display: "flex",
  gap: "1rem",
});

const StyledButton = styled.button({
  backgroundColor: COLORS.cream,
  padding: "1rem",
  border: `2px solid ${COLORS.greyish}`,
  borderRadius: 14,
  cursor: "pointer",
  color: COLORS.lightBrown,
  fontSize: 18,

  ":hover": {
    backgroundColor: COLORS.greyish,
    color: COLORS.brown,
    transition: "1s ease all",
  },
});

const StyledTodosContainer = styled.div({
  width: "100%",
  minHeight: 470,
  borderBottomLeftRadius: 20,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  paddingBottom: 20,
  paddingTop: 20,
});

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

const StyledEmptyText = styled.p({
  height: 480,
  fontSize: 44,
  color: COLORS.greyish2,
  textShadow: "1px 1px 1px #eee",
  display: "grid",
  placeItems: "center",
});

const TodoUI: React.FC = () => {
  const [input, setInput] = React.useState<string>("");
  const [todos, setTodos] = React.useState<string[]>([]);

  const addTodo = () => {
    setTodos([input, ...todos]);
    setInput("");
    console.log(todos);
  };

  const deleteTodo = (todoIdx: number) => {
    let newArr = [...todos];
    newArr.splice(todoIdx, 1);
    setTodos(newArr);
  };

  const clearAll = () => {
    setTodos([]);
    setInput("");
  };

  return (
    <StyledContainer>
      <form action="submit" onSubmit={(e) => e.preventDefault()}>
        <StyledInputContainer>
          <StyledInput
            placeholder="Enter a to-do"
            maxLength={80}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <StyledButtonContainer>
            <StyledButton
              type="submit"
              onClick={addTodo}
              disabled={input.length === 0}
            >
              add todo
            </StyledButton>
            <StyledButton type="button" onClick={clearAll}>
              clear all
            </StyledButton>
          </StyledButtonContainer>
        </StyledInputContainer>
      </form>
      {todos.length === 0 ? (
        <StyledEmptyText>add some to-do</StyledEmptyText>
      ) : (
        <StyledTodosContainer>
          {todos.map((todo, idx) => {
            return (
              <StyledTodoContainer key={idx}>
                <StyledTodoText>
                  {idx + 1}. {todo}
                </StyledTodoText>
                <BsFillTrashFill
                  size={22}
                  style={{ cursor: "pointer" }}
                  onClick={() => deleteTodo(idx)}
                />
              </StyledTodoContainer>
            );
          })}
        </StyledTodosContainer>
      )}
    </StyledContainer>
  );
};

export default TodoUI;
