import React, { useState }from "react";
import styled from "styled-components";
import { currencyFormatter } from "../utils";
import Icon from '@mdi/react';
import { mdiMinus, mdiPlus } from '@mdi/js';


export const CartItem = (props) => {

  const { name, cost, img, count, id, type } = props;
  const handleAddToCart = props.handleAddToCart;
  const handleRemoveFromCart = props.handleRemoveFromCart;

  return (
    <StyledContainer>
      <ImageContainer>
        <img src={img} alt={name + " image"} style={myImgStyle} />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <ItemType>{type}</ItemType>
      <ItemCountContainer>
        <Icon path={mdiMinus} className="cart-icon"
          title="Cart"
          size={1.5}
          horizontal
          vertical
          rotate={180}
          color="#3c84cc"
          style={{'cursor':'pointer'}}
          onClick={() => handleRemoveFromCart(id, name, (cost/count), img, type)}
        />
        <ItemCount>{count}</ItemCount>
        <Icon path={mdiPlus} className="cart-icon"
          title="Cart"
          size={1.5}
          horizontal
          vertical
          rotate={180}
          color="#3c84cc"
          style={{'cursor':'pointer'}}
          onClick={() => handleAddToCart(id, name, (cost/count), img, type)}
        />
      </ItemCountContainer>
      <ItemCost>{currencyFormatter.format(cost / count)}</ItemCost>
    </StyledContainer>
  )
};

const StyledContainer = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 5fr 6fr 3fr;
  grid-template-rows: 43px 43px 43px;
  margin-bottom: 20px;
  overflow-y: hidden;
  column-gap: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 15px;
  border-radius: 5px;
`;

const ImageContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 4;
  width: 100px;
  height: auto;
`

const myImgStyle = {
  width: '100%',
  height: '100%'
}

const ItemName = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
`

const ItemType = styled.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
`

const ItemCountContainer = styled.div`
  grid-column: 2 / 4;
  grid-row: 3 / 4;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const ItemCount = styled.div`
  border: 1px solid #3c84cc;
  padding: 2px 5px;
  width: 30%;
  text-align: center;
`

const ItemCost = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 2;
`

