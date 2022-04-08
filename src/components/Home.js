import React, { useState } from "react";
import styled from "styled-components";
import jumping_pic from "../assets/euc_jump.jpeg";


const Home = () => {

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
        <HeadingMain>Most trusted</HeadingMain>
        <br />
        <HeadingMain>Best built</HeadingMain>
        <br />
        <HeadingMain>Electric unicyles on the market</HeadingMain>
        <br />
        <br />
        <br />
        <br />
        <button 
          style={btnStyle}
          onMouseOver={handleBtnHover} 
          onMouseLeave={handleBtnHoverEnd}
          >Buy one today
        </button>
      </div>
      <ImageContainer>
        <img src={jumping_pic} alt="Jumping unicycle" style={myImgStyle}/>
      </ImageContainer>
    </StyledHomeContainer>
  )
}

const StyledHomeContainer = styled.div`
  height: 100%;
  background-image:
    radial-gradient(ellipse farthest-corner at 0 40%, white 0%, white 60%, #3c84cc 60%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 3fr 1fr;
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
  border-radius: 50%;
  height: 40%;
  width: 70%;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 8px;
`

const myImgStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '50%'
}

// const myBtnStyle = {
//   width: '70%',
//   backgroundColor: 'black',
//   color: 'white',
//   border: 'none',
//   padding: '6px',
//   borderRadius: '4px',
//   cursor: 'pointer',
//   fontSize: '24px'
// }

export default Home;