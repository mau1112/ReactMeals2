import HeaderCardButton from "./HeaderCartButton";
import styles from "./Header.module.css";
import React, { useContext } from "react";
import image from "../Images/meals.jpg";

import CartContext from "../Context/CartCtx";

const Header = (props) => {
  const ctx = useContext(CartContext);

  const showModal = () => {
    ctx.setIsModalOpen(true);
  };

  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={showModal}></HeaderCardButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={image} alt="Meals"></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
