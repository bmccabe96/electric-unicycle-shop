import React, { useState, useEffect } from "react";
import items from "./assets/products.json";
import ItemList from "./components/ItemList";
import Nav from "./components/Nav";
import { countTotalCartItems } from "./utils";
import "./styles/App.css";


const App = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(countTotalCartItems(cart));
  }, [cartCount, cart])

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
      <Nav cartCount={cartCount}/>
      <ItemList 
        items={items} 
        handleAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default App;