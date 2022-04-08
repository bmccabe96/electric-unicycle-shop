import React, { useState } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import jumping_pic from "../assets/euc_jump.jpeg";


const Home = (props) => {

  const handleTabSwitch = props.handleTabSwitch;


  const [btnStyle, setBtnStyle] = useState({
    width: '70%',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '6px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '24px'
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
    <StyledHomeContainer className="page-content home">
      <div>
        <HeadingSecondary><em>The </em>place to get an EUC</HeadingSecondary>
        <br />
        <HeadingMain>Most trusted...</HeadingMain>
        <br />
        <HeadingMain>Best built...</HeadingMain>
        <br />
        <HeadingMain>Electric unicyles on the market</HeadingMain>
        <br />
        <br />
        <br />
        <br />
        <Link to="/products" onClick={handleTabSwitch}>
          <button
            style={btnStyle}
            onMouseOver={handleBtnHover}
            onMouseLeave={handleBtnHoverEnd}
            >Buy one today
          </button>
        </Link>
      </div>
      <ImageContainer>
        <img src={jumping_pic} alt="Jumping unicycle" style={myImgStyle}/>
      </ImageContainer>
    </StyledHomeContainer>
  )
}

const StyledHomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 1fr;
  height: 86%;
  background-image:
    radial-gradient(ellipse farthest-corner at 0 40%, white 0%, white 60%, #3c84cc 60%);  
  box-sizing: border-box;
`

const HeadingMain = styled.div`
  color: black;
  font-size: 35px;
  font-weight: bold;
  width: 80%;
`

const HeadingSecondary = styled.div`
  color: rbg(0,0,0,0.3);
  font-size: 24px;
`

const ImageContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  align-self: center;
  justify-self: start;
  border-radius: 50%;
  height: 50%;
  width: 60%;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
`

const myImgStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '50%'
}


export default Home;