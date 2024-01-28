import './App.css';
import IdScoped from './id-generator/IdScoped';
import { TasksList } from './tasks/TasksList';
import { Task } from './tasks/tasks.types';

const TASKS: Task[] = [  
  { name: 'Add task'}, 
  { name: 'Google it', subtasks: [ { name: 'Fancy dinner'}, { name: 'Vacation planning' } ]},
  { name: 'Do groceries' }
];


function App() {
  return (
    <IdScoped id='app'>
      <div className="App">
        <TasksList tasks={TASKS}/>
     </div>
    </IdScoped>
  );
}

export default App;
