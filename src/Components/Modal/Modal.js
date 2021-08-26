import React, { useContext, useState } from "react";
import styles from "./Modal.module.css";
import CartContext from "../Context/CartCtx";
import CartItem from "./CartItem";
import reactDom from "react-dom";
import styles2 from "./Cart.module.css";
import ConfirmOrder from "./ConfirmOrder";
import ModalButtons from "./ModalButtons";
const Backdrop = (props) => {
  const ctx = useContext(CartContext);
  let isModalShown = ctx.isModalOpen;
  const closeModal = () => {
    ctx.setIsModalOpen(false);
  };
  return (
    <React.Fragment>
      {isModalShown && (
        <div className={styles.backdrop} onClick={closeModal}></div>
      )}
    </React.Fragment>
  );
};
const ModalWindow = (props) => {
  const [isFormDisplayed, setIsFormDisplayed] = useState(false);
  const ctx = useContext(CartContext);
  let isModalShown = ctx.isModalOpen;
  
  return (
    <React.Fragment>
      {isModalShown && (
        <React.Fragment>
          <div className={styles.modal}>
            <main>
            {isFormDisplayed ? <ConfirmOrder/> :  <ul>
                {ctx.cartArray.map((val) => {
                  if (val.amount > 0) {
                    return (
                      <CartItem
                        amount={val.amount}
                        price={val.price}
                        id={val.id}
                        name={val.name}
                        key={val.id}
                      ></CartItem>
                    );
                  }
                  return <div />;
                })}
              </ul>}
            </main>
            <footer className={styles2.total}>
              <h3>Total Amount</h3>
              <p>${ctx.totalBill.toFixed(2)}</p>
              <ModalButtons isFormDisplayed={isFormDisplayed} setIsFormDisplayed={setIsFormDisplayed}></ModalButtons>
            </footer>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
const Modal = (props) => {
  return (
    <React.Fragment>
      {reactDom.createPortal(
        <ModalWindow></ModalWindow>,
        document.getElementById("modal")
      )}
      {reactDom.createPortal(
        <Backdrop></Backdrop>,
        document.getElementById("backdrop")
      )}
    </React.Fragment>
  );
};

export default Modal;
