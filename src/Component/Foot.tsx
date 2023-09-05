import React from 'react'
import styled from '@emotion/styled'
import Logo from "../assets/globe.svg"
import pic1 from "../assets/facebook-badge.svg"
import pic2 from "../assets/twitter (1).svg"
import pic3 from "../assets/linked-in.svg"
import pic4 from "../assets/youtube-round-gray-adg.svg"


const Container =styled.footer`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 175px;
height: 60px;
box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`
const First =styled.div`
display: flex;
align-items: center;
h4{
    font-weight: 400;
    color: #42526E;
    margin-left: 50px;
}
div{
    display: flex;
    align-items: center;
    gap: 20px;

    a{
        margin: 0;
    }
}
a{
    margin-left: 40px;
    text-decoration: none;
    color: gray;
    font-size: 15px;
    :hover{
        text-decoration: underline;
    }
}
`
const Icon =styled.div`
img{
    height: 30px;
    margin-left: 10px;
}
`

export const Foot:React.FC = () => {
  return (
    <Container>
        <First>
            <div>
                <img src={Logo} alt="" />
                <a href="">English</a>
            </div>
            <a href="">Privacy policy</a>
            <a href="">Notice at Collection</a>
            <a href="">Terms</a>
            <a href="">Impressum</a>

            <h4>Copyright © 2023 Atlassian</h4>
        </First>
        <Icon>
            <img src={pic1} />
            <img src={pic2} />
            <img src={pic3} />
            <img src={pic4} />
        </Icon>
    </Container>
  )
}
