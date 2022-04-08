import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiSpeedometer, mdiCart, mdiSetNone, mdiSourceCommitStartNextLocal } from '@mdi/js';

const Nav = (props) => {
  const cartCount = props.cartCount;
  const selectedTab = props.selectedTab;
  const handleTabSwitch = props.handleTabSwitch;
  const transitionCart = props.transitionCart;

  return (
    <HorizontalLine>
      <NavBarLeft>
        <div>EUC Nation</div>
        <div>
          <Icon path={mdiSpeedometer}
            title="Speed"
            size={2}
            horizontal
            vertical
            rotate={180}
            color="#3c84cc"
          />
        </div>    
      </NavBarLeft>
      <NavBarRight>
        <Link 
          to="/" 
          className={selectedTab === 'Home' ? "nav-bar-action selected" : "nav-bar-action"}
          style={myNavBarActionStyle}
          onClick={handleTabSwitch}
          >Home
        </Link>
        <Link 
          to="/products" 
          className={selectedTab === 'Products' ? "nav-bar-action selected" : "nav-bar-action"}
          style={myNavBarActionStyle}
          onClick={handleTabSwitch}
          >Products
        </Link>
        <CartContainer onClick={transitionCart}>
          {cartCount > 0 ?
            <div style={myCartNumberStyle}>{cartCount}</div> :
            null
          }    
          <Icon path={mdiCart} className="cart-icon"
            title="Cart"
            size={1.5}
            horizontal
            vertical
            rotate={180}
            color="white"
          />
        </CartContainer>
      </NavBarRight>
    </HorizontalLine>
  )
}

const HorizontalLine = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background-color: black;
  height: 14%;
  color: white;
`
const NavBarLeft = styled.div`
  display: flex;
  gap: 5px;
  grid-column: 1 / 2;
  padding-left: 75px;
  font-size: 40px;
  align-items: center;
  width: auto;
`

const NavBarRight = styled.div`
  grid-column: 2 / 3;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const CartContainer = styled.div`
  position: relative;
`

const myCartNumberStyle = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: "-15px",
  left: "-12px",
  backgroundColor: 'red',
  borderRadius: '50%',
  height: '18px',
  width: '18px',
  fontSize: '11px'
}

const myNavBarActionStyle = {
  textDecoration: 'none',
  color: 'white'
}

export default Nav;
