import React from 'react'
import styled from '@emotion/styled'
import side from "../assets/solutions_1_Con_Trello_JWM.svg"
import arrow from "../assets/bluearrow.svg"
import icon from "../assets/jira service desk-icon-gradient-blue.svg"

const Container =styled.div`
padding: 0 175px 0 175px;
position: absolute;
top: 100px;
left: 0;
text-align: start;
`
const Wrapper =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 100px;
`

const Wrap1 =styled.div`
width: 400px;
font-family: "Montserrat", sans-serif ;
h2{
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 16px;
    
    color: #253858;
}
a{
    text-decoration: none;
}

`
const Wrap2 =styled.div`
width: 820px;

`
const A =styled.a`
`
const Sideimg =styled.img``
const Pix =styled.img`
width: 58px;
padding: 10px;
border-radius: 3px;
background-color: #c1c7d086;
:hover{
    background-color: #c1c7d0;
}

`
const Pic =styled.img``
const Card =styled.div`
display: flex;
align-items: center;
margin-top: 20px;
`
const Icon =styled.div``
const Text =styled.div`
margin-left: 25px;
h3{
    margin: 0;
    line-height: 24px;
}
p{
    margin: 0;
    line-height: 24px;
}
`
const Servicemgt:React.FC = () => {
  return (
    <Container>
        <Wrapper>
            <Wrap1>
                <h2>Enable your dev, IT ops, and business teams to deliver great service experiences</h2>
                <A>
                 <a href="#">Deliver at high velocity <span>{<Pic src={arrow} />}</span></a>
                </A>
                <Card>
                    <Icon>
                        <Pix src={icon}/>
                    </Icon>
                    <Text>
                        <h3>Jira Service Management</h3>
                        <p>High-velocity ITSM</p>
                    </Text>
                </Card>
            </Wrap1>
            <Wrap2>
            <Sideimg src={side}/>
            </Wrap2>
        </Wrapper>
    </Container>
  )
}

export default Servicemgt