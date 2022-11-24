import React, { useState } from 'react'
import styles from '../styles/TasksContainer.module.css'

function TasksContainer({text, setText, taskText, removeTask, index}) {

  const [isUpdate, setIsUpdate] = useState(false);

  const updateTask = () => {
    setIsUpdate(!isUpdate);
  }


  const Modify = () => {
    if(!isUpdate){
      return (
        <div className={styles.tabStyle}>
          <div className={styles.titleStyle}>
            <p>{taskText}</p>
          </div>
          <div className={styles.iconContainer}>
            <button>checkbox</button>
            <button onClick={() => updateTask()}>update</button>
            <button onClick={() => removeTask(index)}>delete</button>
          </div>
        </div>
        )
    } else {
      return (
      <div className={styles.tabStyle}>
          <div className={styles.titleStyle}>
            <input value={text} onChange={(event) => setText(event.target.value)}></input>
          </div>
          <div className={styles.iconContainer}>
            <button>checkbox</button>
            <button onClick={() => updateTask()}>save</button>
            <button onClick={() => removeTask(index)}>delete</button>
          </div>
      </div>
      )
    }
  }

  return (
    <div className={styles.containerTasks}>
      <Modify />
    </div>
  )
}

export default TasksContainer