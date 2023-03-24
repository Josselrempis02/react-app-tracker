
import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'

function App() {
  const [tasks, setTasks] = useState([
   
    {
        id: 1,
        text: 'Basketball Training',
        day: 'Aug 5th at 6:00pm',
        reminder: true,
    },

    {
        id: 2,
        text: 'Baseball Training',
        day: 'Aug 5th at 7:00pm',
        reminder: true,
    },

    {
        id: 3,
        text: 'Suntukan Training',
        day: 'Aug 5th at 8:00pm',
        reminder: false ,
    },


])

// Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

// Toggle reminder
const ToggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: 
      !task.reminder} : task))

}


  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={ToggleReminder} />
       : 'No Task inaka'}
    </div>
    
  );
}



export default App;
