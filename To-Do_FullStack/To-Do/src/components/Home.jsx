import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const handleAdd = () => {
    console.log(task);
    if (task) {
      axios
        .post("http://localhost:3000/add", { task: task })
        .then((response) => console.log(response.data))
        .catch((error) => console.error(error));
    }
  };
  const handleDelete = (id) => {
    axios
    .delete("http://localhost:3000/delete/" + id)
    .then((result) => console.log(result)) //receives all data from the result(server)
    .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    axios
      .put("http://localhost:3000/update/" + id)
      .then((result) => console.log(result)) //receives all data from the result(server)
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    //to load all task immediately after refresing page or in the starting of page
    axios
      .get("http://localhost:3000/get")
      .then((result) => setTodos(result.data)) //receives all data from the result(server)
      .catch((err) => console.log(err));
  }, [todos]);

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
            <button className="button-add" onClick={handleAdd}>
              Add
            </button>
          </div>
          {todos.length === 0 ? (
            <div className="NoTask">
              <h2>Hurray. You have no task todayyy</h2>
            </div>
          ) : (
            todos.map((todo) => (
              <div className="todo-task">
                <div
                  className="front-part"
                  onClick={() => handleEdit(todo._id)}
                >
                  <div className="to-do-content">
                    <p className={todo.isCompleted ? "line-through" : "todo-style"}>
                      {todo.task}
                    </p>
                  </div>
                </div>
                <button
                  className="button-delete "
                  onClick={() => handleDelete(todo._id)}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
