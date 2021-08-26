import { useState, useContext } from "react";
import CartContext from "../Context/CartCtx";
import styles from "./ConfirmOrder.module.css";

const ConfirmOrder = (props) => {
  const ctx = useContext(CartContext);
  const [nameInput, setNameInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [adressInput, setAdressInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [hasNameInputBeenTouched, setHasNameInputBeenTouched] = useState(false);
  const [hasPhoneInputBeenTouched, setHasPhoneInputBeenTouched] = useState(false);
  const [hasAdressInputBeenTouched, setHasAdressInputBeenTouched] = useState(false);
  const [hasEmailInputBeenTouched, setHasEmailInputBeenTouched] = useState(false);
  const isNameValid = nameInput.trim().length > 1;
  const isPhoneValid = phoneInput.match(/^[0-9]+$/) != null;
  const isEmailValid = emailInput.includes("@") && emailInput.length > 2;
  const isAdressValid = adressInput.length > 5;
  const isFormValid =
    isNameValid && isPhoneValid && isEmailValid && isAdressValid;

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    const finalCart = ctx.cartArray.map((val) => {
      return { id: val.id, amount: val.amount };
    });
    const obj = {
      cart: finalCart,
      phone: phoneInput,
      adress: adressInput,
      name: nameInput,
      email: emailInput,
      totalBill: ctx.totalBill,
    };
    fetch('https://react-http-1d3f1-default-rtdb.firebaseio.com/orders.json',{method:'POST',body: JSON.stringify(obj)})
    setNameInput('');
    setPhoneInput('');
    setEmailInput('');
    setAdressInput('');
    setHasNameInputBeenTouched(false);
    setHasPhoneInputBeenTouched(false);
    setHasEmailInputBeenTouched(false);
    setHasAdressInputBeenTouched(false);
    
  };
  const nameBlurHandler = (e) => {
    setHasNameInputBeenTouched(true);
  };
  const phoneBlurHandler = (e) => {
    setHasPhoneInputBeenTouched(true);
  };
  const emailBlurHandler = (e) => {
    setHasEmailInputBeenTouched(true);
  };
  const adressBlurHandler = (e) => {
    setHasAdressInputBeenTouched(true);
  };
  const nameChangeHandler = (e) => {
    setNameInput(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPhoneInput(e.target.value);
  };
  const adressChangeHandler = (e) => {
    setAdressInput(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmailInput(e.target.value);
  };
  const nameClassname = !hasNameInputBeenTouched || isNameValid
    ? styles.control
    : styles.invalid + " " + styles.control;
  const phoneClassname = isPhoneValid || !hasPhoneInputBeenTouched
    ? styles.control
    : styles.invalid + " " + styles.control;
  const emailClassname = isEmailValid || !hasEmailInputBeenTouched
    ? styles.control
    : styles.invalid + " " + styles.control;
  const adressClassname = isAdressValid || !hasAdressInputBeenTouched
    ? styles.control
    : styles.invalid + " " + styles.control;

  return (
    <form
      className={styles.form}
      onSubmit={formSubmitHandler}
      id="formCheckout"
    >
      <div className={nameClassname}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={nameInput}
          onBlur={nameBlurHandler}
        ></input>
        {!hasNameInputBeenTouched || isNameValid ? null : <p>Invalid name</p>}
      </div>
      <div className={phoneClassname}>
        <label htmlFor="phoneNum">Phone numer</label>
        <input
          type="number"
          id="phoneNum"
          onChange={phoneChangeHandler}
          value={phoneInput}
          onBlur={phoneBlurHandler}
        ></input>
        {isPhoneValid || !hasPhoneInputBeenTouched? null : <p>Invalid phone number</p>}
      </div>
      <div className={adressClassname}>
        <label htmlFor="adress">Adress</label>
        <input
          type="text"
          id="adress"
          onChange={adressChangeHandler}
          value={adressInput}
          onBlur={adressBlurHandler}
        ></input>
        {isAdressValid || !hasAdressInputBeenTouched ? null : <p>Invalid adress</p>}
      </div>
      <div className={emailClassname}>
        <label htmlFor="email">Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={emailInput}
          onBlur={emailBlurHandler}
        ></input>
        {isEmailValid || !hasEmailInputBeenTouched ? null : <p>Invalid email</p>}
      </div>
    </form>
  );
};
export default ConfirmOrder;
