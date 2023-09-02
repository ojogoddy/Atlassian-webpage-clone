import React from 'react'
import styled from "@emotion/styled"
import arrow from "../assets/bluearrow.svg"
import logo1 from "../assets/kiva.svg"
import logo2 from "../assets/twitter.svg"
import logo3 from "../assets/redfin.svg"
import logo4 from "../assets/nasa.svg"
import logo5 from "../assets/audi.svg"
import logo6 from "../assets/castlight.svg"

const Container=styled.div`
padding:40px 175px ;
margin-top: 730px;
background-color: #E6F0FF;
font-family: "Montserrat", sans-serif ;
h3{
    text-align: center;
}
`
const View=styled.div`
text-align: center;

a{
    text-decoration: none;
}
`
const Logo=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 310px;
background-color: #E6F0FF;
`
const Pic=styled.img``
const Icon=styled.img`
width: 150px;

`
const Join:React.FC = () => {
  return (
    <Container>
        <h3>Join the 250,000 companies that use our software to power team collaboration</h3>
        <View><a href="#">See all our customers<span>{<Pic src={arrow} />}</span></a></View>
        <Logo>
        {<Icon src={logo1} />}
        {<Icon src={logo2} />}
        {<Icon src={logo3} />}
        {<Icon src={logo4} />}
        {<Icon src={logo5} />}
        {<Icon src={logo6} />}
        </Logo>
    </Container>
  )
}

export default Join