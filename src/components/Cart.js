import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CartItem } from "./CartItem";
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { currencyFormatter } from "../utils";


const Cart = (props) => {

  const cartVisible = props.cartVisible;
  const transitionCart = props.transitionCart;
  const cart = props.cart;
  const handleRemoveFromCart = props.handleRemoveFromCart;
  const handleAddToCart = props.handleAddToCart;


  const [btnStyle, setBtnStyle] = useState({
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '6px',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px'
  })

  const handleBtnHover = () => {
    const newStyle = {...btnStyle};
    newStyle['backgroundColor'] = 'rgb(0,0,0,0.8)';
    setBtnStyle(newStyle);
  }

  const handleBtnHoverEnd = () => {
    const newStyle = {...btnStyle};
    newStyle['backgroundColor'] = 'black';
    setBtnStyle(newStyle);
  }


  return (
    <div className={cartVisible ? "cart-container enter" : "cart-container"}>
      <div className="close-cart" onClick={transitionCart}>
          <Icon path={mdiClose}
            title="Close Cart"
            size={2}
            horizontal
            vertical
            rotate={180}
            color="#3c84cc"
          />
        </div> 
      <div className="cart-title">Your shopping bag</div>
      <div className="cart-item-list">
        {cart.map(item => {
          return <CartItem 
            name={item.name}
            cost={item.cost}
            img={item.img}
            count={item.count}
            id={item.id}
            key={item.id}
            type={item.type}
            handleRemoveFromCart={handleRemoveFromCart}
            handleAddToCart={handleAddToCart}
         />
        })}
      </div>
      <strong>Subtotal: {currencyFormatter.format(cart.reduce((total, obj) => obj.cost + total,0))}</strong>
      <button 
        style={btnStyle} 
        onMouseOver={handleBtnHover} 
        onMouseLeave={handleBtnHoverEnd}
        >Checkout
      </button>
    </div>
  )
}




export default Cart;