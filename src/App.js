import React, { useState } from "react";
import items from "./assets/products.json";
import ItemList from "./components/ItemList";
import "./styles/App.css";


const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (id, name, price, img) => {
    for (let i=0; i<cart.length; i++) {
      if (cart[i].id === id) {
        const newCart = [...cart];
        newCart[i] = {
          id: id,
          name: name,
          cost: newCart[i].cost + price,
          img: img,
          count: newCart[i].count + 1
        }
        setCart(newCart);
        return;
      }
    }
    const newCart = cart.slice();
    newCart.push({
      id: id,
          name: name,
          cost: price,
          img: img,
          count: 1
    });
    setCart(newCart);
  }

  return (
    <div>
      <p>heheh</p>
      <ItemList 
        items={items} 
        handleAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default App;