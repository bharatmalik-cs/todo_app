import React from 'react';
import { useState, memo } from 'react' // Direct import
import './App.css'

let counter = 4;

function App() {
  const [todo, setTodo] = useState([{
    id: 1,
    title: "go to gym",
    description: "go to gym today"
  },{
    id: 2,
    title: "eat healthy",
    description: "buy fruits"
  }, {
    id: 3,
    title: "go to classes",
    description: "learn react"
  }]);

  function addTodo() {
    setTodo([...todo,{
      id: counter++,
      title: Math.random(),
      description: Math.random()
  }])
  }
  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todo.map(todo  => 
        <Todo key = {todo.id} title={todo.title} description={todo.description}></Todo>
      )}
      
    </div>
  )
}

// Use 'memo' directly here since it was imported as such
function Todo({title,description}) {
  return <div>
    <h1>{title}</h1>
    <h3>{description} </h3>
  </div>
}

export default App;