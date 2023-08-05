import React from "react";
import { styled } from "styled-components";

type Todo = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
};
// Styled

const Div = styled.div`
  padding: 0 4px;
  overflow: hidden;
  border-radius: 30px;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  border: 3px solid orange;
`;

const Button = styled.button`
  background-color: goldenrod;
  border-radius: 40px;
  padding: 5px 16px;
  font-size: 17px;
  cursor: pointer;
  outline: none;
  border: none;
  color: #fff;
  &:hover {
    background-color: orange;
  }
  &:active {
    transform: scale(0.98) translate(-0.5px, 0.5px);
  }
`;
const Input = styled.input`
  padding-left: 15px;
  padding: 10px;
  border: none;
  outline: none;
  height: 100%;
`;

const AddTodo: React.FC<Todo> = ({ todo, setTodo, addTodo }: Todo) => {
  return (
    <>
      <Div>
        <Input
          value={todo}
          type="text"
          placeholder="Please enter todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button onClick={addTodo}>Add</Button>
      </Div>
    </>
  );
};

export default AddTodo;
