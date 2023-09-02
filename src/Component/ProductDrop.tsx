import React from 'react'
import styled from "@emotion/styled"
import avatar from "../assets/jira software-icon-gradient-blue.svg"
import avatar1 from "../assets/confluence-icon-gradient-blue.svg"
import avatar2 from "../assets/jira service desk-icon-gradient-blue.svg"
import avatar3 from "../assets/trello-icon-gradient-blue.svg"
import avatar4 from "../assets/logos-atlas-icon-gradient-blue.svg"
import avatar5 from "../assets/Jira Product Discovery-icon-blue.svg"
import arrow from "../assets/bluearrow.svg"
import first from "../assets/Map.svg"
import second from "../assets/CloudCheckmark.svg"

interface Iprops{
    icon:any;
    title: string;
    text: string;
}


const Container = styled.div`
padding: 0px 0px 20px 175px;
background-color: white;
font-family: "Montserrat", sans-serif ;
position: absolute;
top: 95px;
left: 0;

h4{
    margin: 0;
    color: #42526e;
}
p{
    margin: 0;
    font-size: 13px;
    color: #42526E;
    padding-top: 5px;
}
`
const Wrap1 = styled.div`
background-color: white;
display: flex;
flex-wrap: wrap;
margin-bottom: 40px;
`
const Wrap2 = styled.div`
background-color: #f4f5f7bf;
height: 510px;
width: 900px;
padding: 40px 26px;


h4{
    margin: 0;
    
}
a{
    text-decoration: none;
    font-size: 17px;
    }
`
const Wrapper = styled.div`
display: flex;
justify-content: space-between;
`
const Contain = styled.div`
display: flex;
align-items: center;
gap: 25px;
margin-bottom: 30px;
`
const IconBox = styled.div``
const What = styled.h4`
padding-bottom:8px ;
`
const Cloud = styled.div``
const First = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
margin-top: 20px;
`
const Second = styled.div`
display: flex;
align-items: center;
`
const Program = styled.div``
const Pics = styled.img`
width: 30px;
margin-right: 10px;
`
const View = styled.div`
padding-bottom: 30px;
`
const Market = styled.div`
padding-top: 20px;
border-top: 1px solid #505b6e37;
h3{
    margin-bottom: 5px;
}
`
const A = styled.div`
padding-top: 40px;
margin-bottom:90px;
`
const WrapBox = styled.div`
padding-top: 40px;
h4{
    margin-bottom: 8px;
}
a{
    text-decoration: none;
    font-size: 17px;
    
}
`
const Pic = styled.img`
width: 15px;
margin-left: 5px;

`
const TextBox = styled.div`
margin-right: 50px;
width: 350px;
cursor: pointer;
color: #42526e;
h3{
    margin: 0;
    line-height: 24px;
    
}
:hover{
    h3{
        color: #0052cc;
    }
}

`
const Pix = styled.img`
width: 35px;
height: 35px;
padding: 8px;
border-radius: 5px;
background-color: #c1c7d086;
:hover{
    background-color: #c1c7d0;
}
`

const ProductCard:React.FC<Iprops> = ({icon, title, text})=>{
    return(
        <Contain>
            <IconBox>{icon}</IconBox>
            <TextBox>
                <h4>{title} </h4>
                <p>{text} </p>
            </TextBox>
        </Contain>
    )
}

const ProductDrop:React.FC = () => {
    let title1: string = "Jira Software"
    let text1: string = "Project and issue tracking"

    let title2:string = "Confluence"
    let text2:string = "Content collaboration"

    let title3:string = "Jira Service Management"
    let text3:string = "High-Velocity ITSM"

    let title4:string = "Trello"
    let text4:string = "Visual project management"

    let title5:string = "Atlas"
    let text5:string = "Teamwork directory"

    let title6:string = "Jira Product Discovery"
    let text6:string = "Prioritization and roadmapping"
  return (
    <Container>
        
        <Wrapper>
        
        <WrapBox>
        <h4>FEATURED</h4>
        <Wrap1>
            <ProductCard icon={<Pix src={avatar}/>} title={title1} text={text1} />
            <ProductCard icon={<Pix src={avatar1}/>} title={title2} text={text2} />
            <ProductCard icon={<Pix src={avatar2}/>} title={title3} text={text3} />
            <ProductCard icon={<Pix src={avatar3}/>} title={title4} text={text4} />
        </Wrap1>
        <View><a href="#">View all products<span>{<Pic src={arrow} />}</span></a></View>
        <Market>
            <h3>Marketplace</h3>
            <p>Connect thousands of apps and integrations for all your Atlassian products<span>{<Pic src={arrow} />}</span></p>
        </Market>

        </WrapBox>

        <Wrap2>
            <What>WHAT'S NEW</What>
            <ProductCard icon={<Pix src={avatar4}/>} title={title5} text={text5} />
            <ProductCard icon={<Pix src={avatar5}/>} title={title6} text={text6} />

            <A>
            <a href="#">View all <span>{<Pic src={arrow} />}</span></a>
            </A>
            <What> YOU MIGHT FIND HELPFUL</What>
            <Cloud>
                <First>
                    {<Pics src={first}/>}
                    <Cloud>Cloud Product Roadmap</Cloud>
                </First>
                <Second>
                    {<Pics src={second}/>}
                    <Program>Atlassian Migration Program</Program>
                </Second>
            </Cloud>
        </Wrap2>
        </Wrapper>

    </Container>
  )
}

export default ProductDrop