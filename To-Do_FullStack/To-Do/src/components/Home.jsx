import React, { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
  const [todos, setTodos] = useState([]);
  const[task,setTask]=useState("")
  const handleAdd=()=>{
    console.log(task)
    axios.post('http://localhost:3000/add', {task:task})
    .then(response => console.log(response.data))
    .catch(error => console.error(error));
  }

  useEffect(()=>{ //to load all task immediately after refresing page or in the starting of page
    axios.get('http://localhost:3000/get')
    .then(result=> setTodos(result.data))//receives all data from the result(server)
    .catch(err=>console.log(err))
  },[])

  return (
    <div className="Home w-full bg-gray-700 h-screen flex justify-center items-center">
      <div className="container bg-slate-800">
        <div className="header">
          <h2 className="bg-slate-900 text-white p-4 rounded">To-Do List</h2>
        </div>
        <div className="content">
          <div className="input">
            <input
              type="text"
              placeholder="Enter your task here"
              onChange={(e) => setTask(e.target.value)}
            />
            <button className="button-add" onClick={handleAdd}>Add</button>
          </div>
          <div className="todo-task">
            <div className="front-part">
              <input type="checkbox" />
              <div className="to-do-content">
                <p>Actual task</p>
              </div>
            </div>
            <button className="button-delete ">Delete</button>
          </div>
          
          {
        todos.length===0?
        <div className="NoTask">
            <h2>Hurray. You have no task todayyy</h2>
        </div>
          :todos.map(todo=>(
            <div className="todo-task">
            <div className="front-part">
              <input type="checkbox" />
              <div className="to-do-content">
                <p>{todo.task}</p>
              </div>
            </div>
            <button className="button-delete ">Delete</button>
          </div>
          ))}
          
          <div className="todo-task">
            <div className="front-part">
              <input type="checkbox" />
              <div className="to-do-content">
                <p>Actual task</p>
              </div>
            </div>
            <button className="button-delete ">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
