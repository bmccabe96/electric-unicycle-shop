import React from "react";
import products from "./assets/products.json";
import { Item } from "./components/Item"; 
import "./styles/App.css";

const App = () => {
  console.log(products[0]);
  return (
    <div>
      <p>heheh</p>
      <Item id={products[0].id} name={products[0].name} type={products[0].type} price={products[0].price} imgs={products[0].imgs}/>
    </div>
  )
}

export default App;