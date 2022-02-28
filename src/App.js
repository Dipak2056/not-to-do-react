import './App.css';
import { BadList } from './components/BadList';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { Title } from './components/Title';
import { TotalHours } from './components/TotalHours';

function App() {
  return (
    <>
    <div class="wrapper">
    <div class="container">
       <Title />
       <Form />
        <div class="row">
           <TaskList />
           <BadList />
          </div>
   <TotalHours />

</div>
</div>

</>
  );
}

export default App;
