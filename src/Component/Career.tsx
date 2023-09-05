import React from 'react'
import styled from '@emotion/styled'
import Pic1 from "../assets/CareersCenterMobile.svg"
import Pic2 from "../assets/CareersRight_540x450.svg"
import Button from './Button'


const Container =styled.div`
    background-color: white;
    height: 70vh;
    width: 100%;
    background-image: url(${Pic1}), url(${Pic2});
    background-repeat: no-repeat, no-repeat;
    background-position: bottom left, bottom right;
    background-size: 580px, 580px;
`
const CareerBold =styled.h2`
    color: #2684ff;
    font-size: 17px;
    line-height: 32px;
    font-weight: 800;
    margin-top: 150px;`

const We = styled.h1`
    font-size: 48px;
    line-height: 56px;
    margin: 0;
    margin-bottom: 24px;
`
const Para =styled.p`
    width: 430px;
    font-size: 20px;
    margin-bottom: 24px;
`
const Wrapper =styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Careers:React.FC = () => {
  return (
  <Container>
    <Wrapper>
        <CareerBold>CAREERS</CareerBold>
        <We>We can't do it alone</We>
        <Para>We have an ambitious road ahead, and we're looking for people to join our global team to help shape the future of Atlassian.</Para>
        <Button title='Join the team' bg='#0054BB' cl='white' hbg="#0e68d6"/>
    </Wrapper>
  </Container>
  )
}
