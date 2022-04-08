import React, { useState } from "react";
import styled from "styled-components";

const Cart = (props) => {

  const cartVisible = props.cartVisible;
  const transitionCart = props.transitionCart;


  return (
    <div className={cartVisible ? "cart-container enter" : "cart-container"}>
      <button onClick={transitionCart}>Temporary close button</button>
    </div>
  )
}




export default Cart;