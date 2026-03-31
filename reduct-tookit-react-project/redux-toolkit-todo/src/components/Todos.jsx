import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";


function Todos() {
    const todos = useSelector(state => state.todos?.todos || []);
    const dispatch = useDispatch();
  return (
    <>
      <h1>todo list</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos
