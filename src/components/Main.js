import React, { useState } from "react";
import Task from "./Task";

// const tasks = ["meeting 10am", "gym 6m", "party 10pm"]

const Main = () => {
  const [tasks, setTasks] = useState([
    { title: "go to gym", isCompleted: false },
    { title: "take a break", isCompleted: false },
    { title: "Buy a Coke", isCompleted: true },
  ]);

  const formSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements[0].value !== "") {
      let newItem = {
        title: e.target.elements[0].value,
        isCompleted: false,
      };
      setTasks([...tasks, newItem]);
    }
   
    e.target.elements[0].value = ""
  };

  const toggleStatus = (e, index) => {
    e.preventDefault();
    let exitingArray = [...tasks];
    exitingArray[index].isCompleted = !exitingArray[index].isCompleted;
    setTasks(exitingArray);
  };

  return (
    <div className="main">
      <form className="new-task-form" onSubmit={(e) => formSubmit(e)}>
        <input
          className="new-input-task"
          type="text"
          placeholder="item"
          name="task"
        />
        <input className="add-button" type="submit" value="Add" />
      </form>
      {tasks.map((item, index) => {
        return (
          <div onClick={(e) => toggleStatus(e, index)} key={index}>
            <Task title={item.title} isCompleted={item.isCompleted} />
          </div>
        );
      })}
    </div>
  );
};

export default Main;
