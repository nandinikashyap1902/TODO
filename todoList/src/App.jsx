import { useState } from 'react'

import './App.css'

function App() {
  const [todo, addTodo] = useState('')
  const [todos,setTodos] = useState([])
  function allTodos(item) {
    setTodos([...todos, item])
  }
  function deleteTodo(index) {
   setTodos( todos.filter((_,i)=>i!==index))
  }
  function editTodo(index) {
    const newTodo = prompt('Edit your todo:', todos[index]);
    if (newTodo) {
      const updatedTodos = todos.map((item, i) => (i === index ? newTodo : item));
      setTodos(updatedTodos);
    }
  }
  return (
    <>
      <input placeholder='type-here' value={todo} onChange={(ev)=>addTodo(ev.target.value)}/>
      <button onClick={()=>allTodos(todo)}>Add</button>
      {todos.map((item,i) => {
        return (
          <>
            < p key={i}> {item}</p>
            <button onClick={()=>deleteTodo(i)}>delete</button>
          <button onClick={()=>editTodo(i)}>edit</button>
            </>
        )
      })}
    </>
  )
}

export default App
