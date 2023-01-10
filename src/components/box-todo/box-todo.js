import React,{useState} from 'react'
import './box-todo.scss'

function BoxTodo() {
    const [list,setList] = useState([])
    const [input,setInput] = useState("");
  
    const addTodo = (todo) => {
      const newTodo ={
        id:Math.random(),
        todo:todo,
      };
  
      //adding the todo to the list 
      setList([...list,newTodo])
      //clear input box
      setInput("")
    }
  
    const deleteTodo = (id) =>{
      const newList = list.filter((todo) => todo.id !== id)
      setList(newList)
    }
  
    return (
      <div className='container'>
        <h1>ToDo list</h1>
        <div className='adding'>    
        <input type="text"
         value={input}
         placeholder="Add a new task..."
        onChange={(e)=> setInput(e.target.value)} 
        />
        <button onClick={() => addTodo(input)}>add</button></div>
        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button onClick={()=> deleteTodo(todo.id)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
  export default  BoxTodo