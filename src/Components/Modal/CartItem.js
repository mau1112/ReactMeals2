import classes from './CartItem.module.css';
import CartContext from '../Context/CartCtx'
import React, {useContext} from 'react'

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const ctx = useContext(CartContext)
  const onRemove = () =>{
    ctx.removeItemHandler(props.id)
  }
  const onAdd = () =>{
    ctx.addItemHandler(1, props.id)
  }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
