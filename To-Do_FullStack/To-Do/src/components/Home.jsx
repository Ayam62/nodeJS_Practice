import React from "react";

const Home = () => {
  return (
    <div className="Home w-full bg-gray-700 h-screen flex justify-center items-center">
      <div className="container bg-slate-800">
        <div className="header">
          <h2 className="bg-slate-900 text-white p-4 rounded">To-Do List</h2>
        </div>
        <div className="content">
          <div className="input">
            <input type="text" placeholder="Enter your task here" />
            <button className="button-add">Add</button>
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
          <div className="todo-task">
            <div className="front-part">
              <input type="checkbox" />
              <div className="to-do-content">
                <p>Actual task</p>
              </div>
            </div>
            <button className="button-delete ">Delete</button>
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
        </div>
      </div>
    </div>
  );
};

export default Home;
