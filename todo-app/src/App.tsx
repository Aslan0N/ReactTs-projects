import React, { useState } from 'react'
import AddTodo from './assets/Todo-components/AddTodo'
import TodoList from './assets/Todo-components/TodoList'
import { Todos } from './Types/Type'


const App:React.FC = () => {

  const [todo, setTodo] = useState<string>('')

  const [todos, setTodos] = useState<Todos[]>([])

const [isCompleted, setIsCompleted] = useState<boolean>(false)


  const addTodo = () =>{
    if(todo !== '') setTodos([...todos, {message:todo, id:todos.length + 1}])
    setTodo('')
  }

  const removeTodo = (id:number) =>{
      setTodos(todos.filter(todo=> todo.id != id))
  }



  return (
    <>
    <AddTodo todo={todo} setTodo={setTodo} addTodo={addTodo} />
    <TodoList todos={todos} removeTodo={removeTodo} isCompleted={isCompleted} setIsCompleted={setIsCompleted}/>
    </>
  )
}

export default App