import { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";
import ItemList from "./ItemList";

export default function FoodDetails({ foodId }) {
    const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
    const apiKey = "7d7aa6b2b440485e9272fb2e0f6af9cc";

  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true); //to know if data complately loaded or not. we cant direct show instruction because data is not fetch when app is first refresh.

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?apiKey=${apiKey}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]); //when ever foodId change useEffect call and fetch the data.

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImg} src={food.image}></img>
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏱️{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👨‍👩‍👧‍👦 Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕Vagetarian" : "🥩Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegen ? "🐮Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          <span>
            <strong>💲{food.pricePerServing} Per Serving</strong>
          </span>
        </div>
        <h2>Ingredientss</h2>
        <ItemList food={food} isLoading={isLoading}></ItemList>
        <h2>Instructions</h2>
        <div className={styles.recipeInstruction}>
          <ol>
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              food.analyzedInstructions[0].steps.map((step) =>
                <li>{step.step}</li>
              )
            )}
          </ol>
        </div>
      </div>
    </div>
  );
}
