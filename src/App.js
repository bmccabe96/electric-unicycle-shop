import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import items from "./assets/products.json";
import ItemList from "./components/ItemList";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { countTotalCartItems } from "./utils";
import "./styles/App.css";
import { mdiConsoleNetwork } from "@mdi/js";


const App = () => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [selectedTab, setSelectedTab] = useState('Home');
  const [cartVisible, setCartVisible] = useState(false);


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

  const handleTabSwitch = (e) => {
    if(e.target.innerHTML === "Home") {
      setSelectedTab("Home");
    }
    else {
      setSelectedTab("Products");
    }
  }

  const transitionCart = () => {
    setCartVisible(!cartVisible);
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Nav cartCount={cartCount} selectedTab={selectedTab} handleTabSwitch={handleTabSwitch} transitionCart={transitionCart}/> 
        <Routes>
          <Route path="/" element={<Home handleTabSwitch={handleTabSwitch}/>} />
          <Route path="/products" element={<ItemList items={items} handleAddToCart={handleAddToCart}/>} />
        </Routes>
      </BrowserRouter>  
      <Cart cartVisible={cartVisible} transitionCart={transitionCart}/>    
    </div>
  )
}

export default App;