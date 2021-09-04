import React, { useState } from 'react';  
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

//Add Task

const addTask = (task) => { 
  const id = Math.floor(Math.random() * 10000) + 1; 
  const newTask = {id, ...task}
  setTasks([newTask, ...tasks])
}

//Delete Task 
const deleteTask = (id) => { 
  setTasks(tasks.filter((task) => task.id !== id))
}

//Toggle reminder 

const toggleReminder = (id) => { 
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task));
}

  return (
    <div className="container">
      <Header showAddButton = {showAddTask} showAddTaskWindow={() => setShowAddTask(!showAddTask)}/>
      {showAddTask ? <AddTask onAdd = {addTask}
      />: ""}
      {tasks.length > 0 ? <Tasks toggleReminder = {toggleReminder} tasks = {tasks} onDelete={deleteTask}/> 
      : <h3>No Tasks available</h3>}
    </div>
  );
}

export default App;
