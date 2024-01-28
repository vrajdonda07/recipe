import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav"
import "./App.css"
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetails from "./Components/FoodDetails";

function App() {

  const [foodData, setFoodData] = useState([]);
  //as data come from API, from App.jsx we can send data to every component.
  //if we keep it in Search component it can only be use in there.
  const [foodId, setFoodId] = useState("680975");

  return (
    <div className="App">
      <Nav></Nav>
      <Search foodData={foodData} setFoodData={setFoodData}></Search>
      <Container>
        <InnerContainer>
          <FoodList foodData={foodData} setFoodData={setFoodData} setFoodId={setFoodId}></FoodList>
        </InnerContainer>
        <InnerContainer>
          <FoodDetails foodId={foodId}></FoodDetails>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
