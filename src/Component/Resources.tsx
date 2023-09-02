import React from 'react'
import styled from "@emotion/styled"
import first from "../assets/Screen Shot 2023-01-05 at 3.48 1.jpg"
import arrow from "../assets/bluearrow.svg"

interface Iprops{
    title: string;
    text: string
    text1: string
    text2: string
    text3: string
    text4?: string
    text5?: string
}

const Container = styled.div`
font-family: "Montserrat", sans-serif ;
padding: 0px 0px 0px 175px;
background-color: white;
display: flex;
justify-content: space-between;
color: #42526e;
position: absolute;
top: 95px;
left: 0;

`
const Contain = styled.div`
h4{
    font-weight: 300;
    font-size: 14px;
}
`
const Wrap1 = styled.div`
display: flex;
/* justify-content: space-between; */
gap: 120px;
margin-bottom: 40px;
margin-top: 40px;
`

const Support = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #E6FCFF;
padding: 25px;
`
const Text = styled.div``
const Wrapper = styled.div`
width: 870px;
`
const Server = styled.h4`
font-weight: 300;
margin: 0;
`
const Pics = styled.img`
margin-bottom: 20px;
margin-top: 20px;
`
const Butt = styled.button`
background-color: transparent;
border: 1px solid #5952CC;
border-radius: 4px;
padding: 10px;
font-size: 14px;
color: #5952CC;
`
const Para = styled.p`
font-size: 12px;
width: 450px;
line-height: 20px;
letter-spacing: 1.2px;
`
const Wrap2 = styled.div`
background-color: #f4f5f7bf;
height: 510px;
margin-left: 40px;
width: 570px;
padding: 50px 26px;
`
const A = styled.div`
a{
text-decoration: none;
font-size: 17px;
}

`
const Pic = styled.img`
width: 15px;
margin-left: 5px;
`



const ResourcesCard:React.FC<Iprops> = ({title, text, text1, text2, text3, text4, text5})=>{
    return(
        <Contain>
            <h4>{title}</h4>
            <p>{text}</p>
            <p>{text1}</p>
            <p>{text2}</p>
            <p>{text3}</p>
            <p>{text4}</p>
            <p>{text5}</p>
        </Contain>
    )
}

const Resources:React.FC = () => {
  let title1:string = "LEARN"
  let text1:string = "Atlassian University"
  let text2:string = "Atlassian Playbook"
  let text3:string = "Product Documentation"
  let text4:string = "Developer Resources"


  let title2:string = "SUPPORT"
  let text5:string = "Atlassian Community"
  let text6:string = "Atlassian Support"
  let text7:string = "Atlassian Migration Program"
  let text8:string = "Enterprise Services"
  let text9:string = "Partner Support"
  let text10:string = "Purchasing & Licensing"


  let title3:string = "CONNECT"
  let text11:string = "About us"
  let text12:string = "Careers"
  let text13:string = "Work Life Blog"
  let text14:string = "Events"
  
    return (
    <Container>
       <Wrapper>
       <Wrap1>
            <ResourcesCard title={title1} text={text1} text1={text2} text2={text3} text3={text4} />
            <ResourcesCard title={title2} text={text5} text1={text6} text2={text7} text3={text8} text4={text9} text5={text10}/>
            <ResourcesCard title ={title3} text={text11} text1={text12} text2={text13} text3={text14}  />
        </Wrap1>
        <Support>
            <Text>
            <Server>Support for Server product ends February 15, 2024</Server>
            <Para>With end of support for our Server products fast approaching, create a winning plan for your Cloud migration with the Atlassian Migration Program.</Para>
            </Text>
            <Butt>
                Assess my options
            </Butt>
        </Support>
       </Wrapper>
        <Wrap2>
            <Server>WHAT,S NEW</Server>
            {<Pics src={first}/>}
            <Server>Atlassian Team '23</Server>
            <Para>Catch up on the latest Atlassian product announcements and innovations shared live on stage in Las Vegas.</Para>
            <A>
            <a href="#">View all <span>{<Pic src={arrow} />}</span></a>
            </A>

        </Wrap2>
    </Container>
  )
}

export default Resources