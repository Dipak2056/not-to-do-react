import React, { useState } from 'react'
import './App.css';
import { BadList } from './components/BadList';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { Title } from './components/Title';
import { TotalHours } from './components/TotalHours';

function App() {

const [taskList,setTaskList] = useState([]);


  const addNewTask = task => {
    setTaskList([...taskList,task]);
}
  return (
    <>
    <div class="wrapper">
    <div class="container">
       <Title />
       <Form addNewTask = {addNewTask} />
        <div class="row">
           <TaskList taskList = {taskList} />
           <BadList />
          </div>
   <TotalHours />

</div>
</div>

</>
  );
}

export default App;
