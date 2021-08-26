import styles from './MealItem.module.css'
import MealItemForm from './MealItemForm'
const MealItem = (props) => {
  return (

    <li className={styles.meal}>
      <div><h3>{props.name}</h3>
      <p className={styles.description}>{props.description}</p>
      <p className={styles.price}>${props.price}</p></div>
      <MealItemForm id={props.id}/>
    </li>
  );
};

export default MealItem;
