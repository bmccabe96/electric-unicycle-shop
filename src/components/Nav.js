import React from "react";
import styled from "styled-components";
import Icon from '@mdi/react';
import { mdiSpeedometer, mdiCart, mdiArmFlex } from '@mdi/js';

const Nav = (props) => {
  const cartCount = props.cartCount;

  return (
    <HorizontalLine>
      <NavBarLeft>EUC Nation 
        <div>
          <Icon path={mdiSpeedometer}
            title="Speed"
            size={2}
            horizontal
            vertical
            rotate={180}
            color="red"
          />
        </div>    
      </NavBarLeft>
      <NavBarRight>
        <div className="nav-bar-action">Home</div>
        <div className="nav-bar-action">Products</div>
        <CartContainer>
          {cartCount > 0 ?
            <div style={myCartNumberStyle}>{cartCount}</div> :
            null
          }    
          <Icon path={mdiCart}
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
  height: 100px;
  color: white;
`
const NavBarLeft = styled.div`
  display: flex;
  gap: 5px;
  grid-column: 1 / 2;
  padding-left: 25px;
  font-size: 40px;
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
  height: '20px',
  width: '20px'
}

export default Nav;
