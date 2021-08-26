import Card from "../UI/Card";
import styles from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import { useState, useEffect } from "react";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://react-http-1d3f1-default-rtdb.firebaseio.com/meals.json"
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        const meals = [];
        for (const key in data) {
          meals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }
        setIsLoading(false);
        setMeals(meals);
        if(meals.length === 0){
          throw new Error('No meals found')
        }
      } catch (error) {
        setIsLoading(false);
        setHttpError(error);
        
      }
    };
    fetchMeals();
  }, []);
  let content = (
    <ul>
      {meals.map((val) => {
        return (
          <MealItem
            id={val.id}
            name={val.name}
            description={val.description}
            price={val.price}
            key={val.id}
          />
        );
      })}
    </ul>
  );
  if (httpError) {
    content = <p>{httpError.message}</p>;
  }
  if (isLoading){
    content= <p>Loading...</p>
  }
  return (
    <Card className={styles.meals}>
      {content}
    </Card>
  );
};

export default AvailableMeals;
