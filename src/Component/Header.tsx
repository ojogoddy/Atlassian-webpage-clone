import React, { useState } from 'react'
import styled from '@emotion/styled'
import Button from './Button'
import atlassian from "../assets/Atlassian-horizontal-blue-rgb.svg"
import {AiOutlineDown} from "react-icons/ai"
import {BsSearch} from "react-icons/bs"
import ProductDrop from './ProductDrop'
import Resources from './Resources'
import SolutionDrop from './SolutionDrop'

const Container = styled.header`
background-color: white;
border-bottom: 1px solid #505b6e37;
height: 95px;
`
const Hold = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 22px 175px;
`
const Logo = styled.img`
width: 200px;
margin-right: 20px;
`
const ButtHold = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
const Navigation = styled.div`
display: flex;
align-items: center;
`
const NavHold = styled.div`
display: flex;
align-items: center;
cursor: pointer;
color: #42526e;
padding: 5px 14px 5px 25px;
border-radius: 5px;
transition: all 350ms;
font-family: "Montserrat", sans-serif ;
:hover{
    background-color: #c7c7c7;
}
span{
    margin-top: 8px;
    margin-left: 2px;
    color: #588BD6;
}
`
const Search = styled.div``
const Nav = styled.nav`
font-size: 18px;

`

const Header:React.FC = () => {
    const [showProduct, setShowProduct] = useState<boolean>(false);
    const [showSolutions, setShowSolutions] = useState<boolean>(false);
    const [showResources, setShowResources] = useState<boolean>(false);

    const changeProductShow=() =>{
        setShowProduct(!showProduct)
        setShowResources(false)
        setShowSolutions(false)
    }
    const changeSolution=() =>{
        setShowSolutions(!showSolutions)
        setShowProduct(false)
        setShowResources(false)
    }
    const changeResource=() =>{
        setShowResources(!showResources)
        setShowProduct(false)
        setShowSolutions(false)
    }
  return (
    <Container>
        <Hold>
            <Navigation>
            <Logo src={atlassian} />
                <NavHold onClick={changeProductShow}>
                    <Nav>Products</Nav>
                    <span><AiOutlineDown/> </span>
                </NavHold>
                {showProduct ? (
                    <div>
                        <ProductDrop changeProductShow={changeProductShow} />
                    </div>
                ): null}
                <NavHold onClick={changeSolution}>
                    <Nav>Solutions</Nav>
                    <span><AiOutlineDown/> </span>
                    {showSolutions ? (
                    <div>
                        <SolutionDrop changeSolution={changeSolution} />
                    </div>
                ): null}
                </NavHold>
                <NavHold onClick={changeResource}>
                    <Nav>Resources</Nav>
                    <span><AiOutlineDown/> </span>
                </NavHold>
                {showResources ? (
                    <div>
                        <Resources changeResource={changeResource} />
                    </div>
                ): null}

            </Navigation>
            <ButtHold>
            <Search> {" "} <BsSearch/> </Search>
            <Button bg="#0065ff" cl="white" title="Try now" hbg="#0e68d6" />
            <Button bg="white" cl="#0052D3"  title="Sign in" hbg="#c7c7c7" />
        </ButtHold>
        </Hold>
        
    </Container>
  )
}

export default Header