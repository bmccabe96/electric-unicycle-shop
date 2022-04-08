import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import items from "./assets/products.json";
import ItemList from "./components/ItemList";
import Nav from "./components/Nav";
import Home from "./components/Home";
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
    <div className="app">
      <Nav cartCount={cartCount}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ItemList items={items} handleAddToCart={handleAddToCart}/>} />
        </Routes>
      </BrowserRouter>      
    </div>
  )
}

export default App;