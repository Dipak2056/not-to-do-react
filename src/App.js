import React, { useState } from "react";
import "./App.css";
import { BadList } from "./components/BadList";
import { Form } from "./components/Form";
import { TaskList } from "./components/TaskList";
import { Title } from "./components/Title";
import { TotalHours } from "./components/TotalHours";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [badList, setBadList] = useState([]);

  const addNewTask = (task) => {
    setTaskList([...taskList, task]);
  };
  // Delete the task item from task list
  const handleOnDeleteTaskList = (i) => {
    if (window.confirm("Are you sure you want to delete the task?")) {
      const newArg = taskList.filter((item, index) => index !== i);
      setTaskList(newArg);
    }
  };
  //delete the element from the bad-list
  const handleOnDeleteBadList = (i) => {
    const newArg = badList.filter((item, index) => index !== i);
    setBadList(newArg);
  };
  //to move to the bad-item list
  const markAsNotToDo = (i) => {
    const selectedItem = taskList[i];
    setBadList([...badList, selectedItem]);
    const newArg = taskList.filter((item, index) => index !== i);
    setTaskList(newArg);
  };
  //to move to goodlist from the bad-item list
  const markAsTask = (i) => {
    const selectedItem = badList[i];
    setTaskList([...taskList, selectedItem]);
    const newArg = badList.filter((item, index) => index !== i);
    setBadList(newArg);
  };
  const ttlBadHours = badList.reduce((acc, curr) => acc + curr.hr, 0);
  const ttlTaskHours = taskList.reduce((acc, curr) => acc + curr.hr, 0);

  return (
    <>
      <div class="wrapper">
        <div class="container">
          <Title />
          <Form addNewTask={addNewTask} />
          <div class="row">
            <TaskList
              taskList={taskList}
              handleOnDeleteTaskList={handleOnDeleteTaskList}
              markAsNotToDo={markAsNotToDo}
            />
            <BadList
              badList={badList}
              markAsTask={markAsTask}
              handleOnDeleteBadList={handleOnDeleteBadList}
              ttlBadHours={ttlBadHours}
            />
          </div>
          <TotalHours total={ttlBadHours + ttlTaskHours} />
        </div>
      </div>
    </>
  );
}

export default App;
