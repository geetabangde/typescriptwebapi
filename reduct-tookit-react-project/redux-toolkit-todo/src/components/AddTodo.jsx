import React from 'react'
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';


function AddTodo() {
    const [input, setInput] = React.useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if(input.trim() === "") return;
        dispatch(addTodo(input));
        setInput("");
    }

  return (
    <>
          {/* from add todo */}
          <from className="add-todo" onSubmit={addTodoHandler}>
              <input type="text" placeholder="Add a new todo" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button type="submit">Add</button>
          </from>
    </>
  )
}

export default AddTodo
