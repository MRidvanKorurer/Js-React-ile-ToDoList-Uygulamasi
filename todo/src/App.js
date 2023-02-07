import './App.css';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = async (title, taskDesc) => {
    const response = await axios.post('http://localhost:3001/tasks', {
      title,
      taskDesc
    });
    console.log(response.data);
    const createdArray = [
      ...tasks, 
      response.data
    ];
    setTasks(createdArray);
  }

  const deleteByTask = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    const deletedByIdTask = tasks.filter((task) => {
      return(
        task.id !== id
      )
    });
    setTasks(deletedByIdTask);
  }

  const getApi = async () => {
    const response = await axios.get('http://localhost:3001/tasks');
    setTasks(response.data);
  }

  useEffect(() => {
    getApi();
  },[])

  return (
    <div className="App">
      <div className='header bg-primary text-center p-2 text-white'>
        <h1 className='h1'>TODO UYGULAMASI</h1>
      </div>
      <CreateTask onCreate={createTask}/>
      <div className='createHead bg-dark text-white w-25 text-center'>
        <h4>GOREVLER</h4>
      </div>
      <TaskList tasks={tasks} onDelete={deleteByTask}/>
    </div>
  );
}

export default App;
