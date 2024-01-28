import { useEffect, useState } from "react";
import styles from './search.module.css'


const url = "https://api.spoonacular.com/recipes/complexSearch"
const apiKey = "7d7aa6b2b440485e9272fb2e0f6af9cc"    //in real world, we should no save key in files. should be placed in enviro. variable when we deplyoing app

export default function Search({foodData, setFoodData}) {
  const [query, setQuery] = useState("pizza");


  useEffect(()=>{
    async function fetchFood(){
        const res = await fetch(`${url}?query=${query}&apiKey=${apiKey}`) //string literal for dynamic string
        //we use async await because res.json execute before fetch actually fect all data from server.
        //to resolve this error we use await async
        //it return in JSON
        const data = await res.json()
        setFoodData(data.results)
        console.log(data.results)
    }
    fetchFood()
  },[query])

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        onChange={(event) => setQuery(event.target.value)}
        type="text"
        value={query}
      ></input>
    </div>
  );
}
