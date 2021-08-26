import React, { useState, useContext } from "react";
import styles from "./MealItemForm.module.css";
import Input from "./Input";
import CartContext from "../Context/CartCtx";

const MealItemForm = (props) => {
  const ctx = useContext(CartContext);
  const [Counter, setCounter] = useState(1);

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.addItemHandler(Counter, props.id);
    setCounter(1);
  };
  const inputHandler = (e) => {
    setCounter(e.target.value);
  };

  return (
    <form className={styles.form}>
      <Input val={Counter} inputHandler={inputHandler} id={props.id}></Input>
      <button onClick={submitHandler}> +Add</button>
    </form>
  );
};

export default MealItemForm;
