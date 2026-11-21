import React, { useState } from "react";
import "../src/todolist.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TodoList() {
  const [todotask, settodoTask] = useState([]);

  const Error = () => {
    toast.error("Task already exists!");
  };

  const Success = () => {
    toast.success(" Task added successfully!");
  };

  const Empty = () => {
    toast.warning("Please Enter a Task....!");
  };

  let list = todotask.map((val, ind) => {
    return (
      <ToDoItem value={val} key={ind} indexNumber={ind}  todotask={todotask}  settodoTask={settodoTask} />
    );
  });

  const saveData = (e) => {
    e.preventDefault();
    let val = e.target.taskname.value.trim(); 

    if (val === "") {
      Empty(); 
    } 
    else if (todotask.includes(val)) {
      Error(); 
    } 
    else {
      let list = [...todotask, val];
      settodoTask(list);
      Success(); 
    }

    e.target.reset();
  };

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={saveData} className="form">
        <input type="text" placeholder="Enter your task" name="taskname" />
        <button type="submit">Save</button>
      </form>

      <div className="uldiv">
        <ul>{list}</ul>
      </div>

      
      <ToastContainer position="top-right" autoClose={1000} />
    </div>
  );
}

export default TodoList;

function ToDoItem({ value, indexNumber, todotask, settodoTask }) {
  let [status, setstatus] = useState(false);

  const deletetask = (e) => {
    e.stopPropagation(); 
    let finaldata = todotask.filter((v, i) => i !== indexNumber);
    settodoTask(finaldata);
    toast.error("Task deleted!");
  };

  let checkstatus = () => {
    setstatus(!status);
    if (!status) {
      toast.info("Task marked complete");
    } else {
      toast.info("Task marked incomplete");
    }
  };

  return (
    <li
      className={status ? "completetask" : ""}
      onClick={checkstatus}
    >
      {value}
      <span onClick={deletetask}>❌</span>
    </li>
  );
}
