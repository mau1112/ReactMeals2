import styles from "./Card.module.css";

const Card = (props) => {
    let classNameExists = Boolean(props.className)
  return <div className={`${styles.card} ${classNameExists && props.className}`}>{props.children}</div>;
};

export default Card;
