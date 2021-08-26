import React from 'react'
import styles from './Input.module.css'
const Input = props =>{
    return <div className={styles.input}>
        <label htmlFor={props.id}>Amount</label> <input value={props.val} onChange={props.inputHandler} type='number' min={1} id={props.id}></input>
        </div>
}

export default Input