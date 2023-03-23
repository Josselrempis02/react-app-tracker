
import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
   
    {
        id: 1,
        text: 'Basketball Training',
        day: 'Aug 5th at 6:00pm',
        remindaer: true,
    },

    {
        id: 2,
        text: 'Baseball Training',
        day: 'Aug 5th at 7:00pm',
        remindaer: true,
    },

    {
        id: 3,
        text: 'Suntukan Training',
        day: 'Aug 5th at 8:00pm',
        remindaer: false ,
    },


])
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}  />
    </div>
    
  );
}



export default App;
