import React, {useState, useEffect} from 'react'

function App() {
  const [todo, setTodo] = useState([])
  useEffect(()=>{
    fetch(import.meta.env.VITE_API+'/todo')
    .then(res => res.json())
    .then(result =>{
      setTodo(result)
      console.log(result)
    })
  },[])
  return (
    <div>
      <ul>
      {todo.map(todo =>(
        <li>{todo.id} {todo.title}</li>
      ))}
      </ul>
    </div>
  )
}

export default App;
