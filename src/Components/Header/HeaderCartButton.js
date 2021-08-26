import Card from "../UI/Card";
import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../Context/CartCtx";
import React, {useContext} from "react";

const HeaderCardButton = (props) => {
  const ctx = useContext(CartContext)
  return <button className={styles.button} onClick={props.onClick}>
    <span><CartIcon className={styles.icon}></CartIcon></span>
    <span>Your Cart</span>
    <span><Card className={styles.badge}>
      {ctx.totalItems}
    </Card></span>
  </button>;
};

export default HeaderCardButton;
