import React, { useState } from 'react'
import styles from "../styles/App.module.css"
import Header from './Header'
import TasksContainer from './TasksContainer'

function App() {
    const [text, setText] = useState('');
    const [taskText, setTaskText] = useState([]);

    const addTask = (textTask) => {
      setTaskText([...taskText, textTask]);
    }

    const removeTask = (index) => {
      setTaskText(taskText.filter((item, i) => i !== index));
      console.log("removeTask: " + parseInt(index + 1));
    }

   

  return (
    <main className={styles.main}>
        <div className={styles.container}>
            <h1>Todou</h1>
            <Header setText={setText} text={text} addTask={addTask}/>
            {taskText.map((elt, index) => {
              return (
                <TasksContainer key={index} text={text} setText={setText} taskText={elt} index={index} removeTask={removeTask} />
              )
            })}
        </div>
    </main>
  )
}

export default App