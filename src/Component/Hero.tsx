import React from 'react'
import styled from "@emotion/styled"
import {useState} from "react"
import pic1 from "../assets/Dektop_TL@2x.png"
import pic2 from "../assets/Desktop_TR-2x.png"
import pic3 from "../assets/Desktop_BL-2x.png"
import pic4 from "../assets/Desktop_BR-2x.png"


const Container=styled.div`
height: 700px;
/* width: 100%; */
background-color: #0054bb;
color: white;
background-image: url(${pic1}),url(${pic2}),url(${pic3}),url(${pic4});
background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
background-size: 550px, 500px, 350px, 350px;
background-position: top left, top right, bottom left, bottom right;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-family:"Montserrat", sans-serif ;
`
const First=styled.h2`
margin: 0;
font-size: 48px;
line-height: 56px;
font-weight: 500;
`
const Second=styled.h2`
margin: 0;
font-size: 48px;
line-height: 56px;
font-weight: 800;
margin-left: 150px;
`
const Div=styled.div`
font-size: 16px;
text-align: center;

`
const Wrap =styled.div`
p{
  font-size: 24px;
  text-align: center;
}
`
const Hero:React.FC = () => {
  const [showVideo, setShowVideo]= useState<boolean>(false)

  const toggleVideo =()=>{
    setShowVideo(!showVideo)
  }
  return (
    <Container>
    <Wrap>
      <First>Impossible alone</First>
      <Second>Possible together</Second>
      <p>See how collaboration makes the impossible, possible.</p>

      <div>
        <Div onClick={toggleVideo}>Play video</Div>
      </div>
      {showVideo? (
        <div>
          {/* <VideonModal/> */}
        </div>
      ): null}
    </Wrap>
    </Container>
  )
}

export default Hero