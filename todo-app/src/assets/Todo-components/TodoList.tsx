import React, { useState } from "react";
import { Todos } from "../../Types/Type";
import { styled } from "styled-components";

type Props = {
  todos: Todos[];
  removeTodo: (id: number) => void;
  isCompleted: boolean;
  setIsCompleted: React.Dispatch<React.SetStateAction<boolean>>;
};

// Styled
const Ul = styled.ul`
  padding-left: 0;
  margin-left: 0;
  height: aute;
  width: 260px;
`;

const Li = styled.li`
  width: 90%;
  margin: 5px 0;
  font-size: 14px;
  color: #000000b3;
  list-style: none;
  padding: 7px 10px;
  border-radius: 5px;
  align-items: center;
  display: inline-flex;
  font-family: sans-serif;
  border: 0.4px solid #000000b4;
  justify-content: space-between;
  &:hover {
    border-color: grey;
  }
`;

const Span = styled.span`
  font-family: sans-serif;
  border-radius: 50%;
  cursor: pointer;
  padding: 5px 7px;
  font-size: 13px;
  font-weight: 600;
  &:hover {
    color: grey;
  }
`;

// Check Completed

const li = document.querySelectorAll<HTMLLIElement>("li");

const TodoList: React.FC<Props> = ({
  todos,
  removeTodo,
  isCompleted,
  setIsCompleted,
}) => {
  return (
    <>
      <Ul>
        {todos.map((todo) => (
          <Li onClick={() => setIsCompleted(!isCompleted)} key={todo.id}>
            <p
              style={{ textDecoration: isCompleted ? "line-through" : "none" }}
            >
              {todo.message}
            </p>{" "}
            <Span onClick={() => removeTodo(todo.id)}>X</Span>
          </Li>
        ))}
      </Ul>
    </>
  );
};

export default TodoList;
