import styles2 from "./Cart.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../Context/CartCtx";

const ModalButtons = (props) => {
  
  const ctx = useContext(CartContext);
  
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  
  useEffect(()=>{
    setIsButtonDisabled(ctx.totalItems <= 0)
  },[ctx.totalItems])
  const closeModal = () => {
    ctx.setIsModalOpen(false);
  };
  const orderHandler = () => {
    props.setIsFormDisplayed(true);
  };
  const returnHandler = () => {
    props.setIsFormDisplayed(false);
  };
  
  return (
    <div className={styles2.actions}>
      {" "}
      {props.isFormDisplayed ? (
        <button onClick={returnHandler} className={styles2["button--alt"]}>
          Return
        </button>
      ) : (
        <button onClick={closeModal} className={styles2["button--alt"]}>
          Close
        </button>
      )}
      {props.isFormDisplayed ? <button form='formCheckout' className={styles2.button} type="submit">Submit Order</button> :
      <button onClick={orderHandler} className={styles2.button} disabled={isButtonDisabled? true : ''}>
        Order
      </button>}
    </div>
  );
};

export default ModalButtons;
