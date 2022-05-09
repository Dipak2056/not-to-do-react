import React, { useEffect, useState } from "react";
import "./App.css";
import { BadList } from "./components/BadList";
import { Form } from "./components/Form";
import { TaskList } from "./components/TaskList";
import { Title } from "./components/Title";
import { TotalHours } from "./components/TotalHours";
import { fetchTasks, postTask } from "./helper/axiosHelper";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [badList, setBadList] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getTask = async () => {
      setIsPending(true);

      const result = await fetchTasks();
      setIsPending(false);

      console.log(result);
    };
    getTask();
  }, []);

  const addNewTask = async (task) => {
    setIsPending(true);
    const result = await postTask(task);
    console.log(result);
    setIsPending(false);
    // setTaskList([...taskList, task]);
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
  const total = ttlBadHours + ttlTaskHours;

  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Title />
          {isPending && (
            <div className="d-flex justify-content-center color-primary">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}

          <div className="alert alert-success">feedback message here</div>

          <Form addNewTask={addNewTask} total={total} />
          <div className="row">
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
          <TotalHours total={total} />
        </div>
      </div>
    </>
  );
}

export default App;
