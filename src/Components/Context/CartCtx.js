import React, { useState} from "react";

const CartContext = React.createContext([]);
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    amount: 0,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.99,
    amount: 0,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    amount: 0,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    amount: 0,
  },
];

export const CartContextProvider = (props) => {
  const [cartArray, updateCartArray] = useState([
    {
      id: "m1",
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
      amount: 0,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false)
  const addItemHandler = (amount, id) => {
    let mealItem = DUMMY_MEALS.filter((val) => {
      return val.id === id;
    })[0];

    updateCartArray((prev) => {
      if (
        !prev.filter((val) => {
          return val.id === id;
        })[0]
      ) {
        prev.push(mealItem);
      }

      return prev.map((val) => {
        if (val.id === mealItem.id) {
          val.amount = parseInt(val.amount) + parseInt(amount);
          return val;
        }
        return val;
      });
    });
  };
  let totalItems = cartArray.reduce((accum, curval) => {
    return accum + curval.amount;
  },0);

  let totalBill = cartArray.reduce((accum, curval) => {
    return accum + curval.price * curval.amount;
  },0);
    const removeItemHandler = (id) => {
      updateCartArray((prev) => {
        return prev.map((val) => {
          if (val.id === id) {
            val.amount = val.amount-1
            return val;
          }
          return val;
        });
      });
    };
    
  return (
    <CartContext.Provider
      value={{
        cartArray: cartArray,
        addItemHandler: addItemHandler,
        totalItems: totalItems,
        totalBill: totalBill,
        removeItemHandler: removeItemHandler,
        isModalOpen: isModalOpen,
        setIsModalOpen: setIsModalOpen
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
