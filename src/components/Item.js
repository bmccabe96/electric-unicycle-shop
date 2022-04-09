import React, { useState }from "react";
import styled from "styled-components";
import { currencyFormatter } from "../utils";

export const Item = (props) => {
  
  const { id, name, type, price, imgs } = props;
  const handleAddToCart = props.handleAddToCart;
  const [imageView, setImageView] = useState(imgs[0]);
  const [btnStyle, setBtnStyle] = useState({
    width: '100%',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '6px',
    borderRadius: '4px',
    cursor: 'pointer'
  })

  const handleHover = () => {
    setImageView(imgs[1]);
  }

  const handleHoverEnd = () => {
    setImageView(imgs[0]);
  }

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
    <StyledContainer className="item" key={id} type={type}>
      <ImageContainer onMouseOver={handleHover} onMouseLeave={handleHoverEnd}>
        <img src={imageView} alt={name + " image"} style={myImgStyle} />
      </ImageContainer>
      <strong>{name}</strong>
      <div>
        <span>{type}</span>
        <span> | </span>
        <span>{currencyFormatter.format(price)}</span>
      </div>
      <button 
        style={btnStyle} 
        onMouseOver={handleBtnHover} 
        onMouseLeave={handleBtnHoverEnd}
        onClick={() => handleAddToCart(id, name, price, imgs[0], type)}
        >Add to cart
      </button>
    </StyledContainer>
  )
};

const myImgStyle = {
  width: '100%',
  height: '100%'
}


const ImageContainer = styled.div`
  width: 100%;
  height: 65%;
  border-bottom: 1px solid rgb(0,0,0,0.25);
  padding: 5px;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  width: 195px;
  height: 295px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
  border-radius: 10px;
  padding: 15px;
`
