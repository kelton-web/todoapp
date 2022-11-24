import React, { useState } from 'react'
import styles from "../styles/Header.module.css"
import Home from './TasksContainer';

function Header({setText, text, addTask}) {
    
    const handleTextInput = () => {
        console.log(text);
        addTask(text);
        setText("");
    }

  return (
    <div className={styles.header}>
        <input type="text" className={styles.input} placeholder="Enter your info" value={text} onChange={(event) => setText(event.target.value)}/>
        <button className={styles.button} onClick={() => handleTextInput()}>Mon button</button>
    </div>
  )
}

export default Header