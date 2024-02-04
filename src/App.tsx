import { useState } from 'react';
import './App.css';
import IdScoped from './id-generator/IdScoped';
import { TasksList } from './tasks/TasksList';
import { Task } from './tasks/tasks.types';

const TASKS: Task[] = [  
  { id: 1, name: 'Add task'}, 
  { id: 2, name: 'Google it', subtasks: [ { id: 1, name: 'Fancy dinner'}, { id: 2, name: 'Vacation planning' } ]},
  { id: 3, name: 'Do groceries' }
];


function App() {

  const [tasks, setTasks] = useState(TASKS);

  function shuffleTasks(): void {
    setTasks([...tasks
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)]);
  }

  return (
    <IdScoped id='app'>
      <div className="App">
        <TasksList tasks={tasks}/>
        <button onClick={shuffleTasks}>Shuffle</button>
     </div>
    </IdScoped>
  );
}

export default App;
