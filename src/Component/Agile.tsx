import React from 'react'
import styled from "@emotion/styled"
import arrow from "../assets/bluearrow.svg"
import avatar1 from "../assets/Jira Align-icon-blue-rgb.svg"
import avatar2 from "../assets/trello-icon-gradient-blue.svg"
import avatar3 from "../assets/Jira Align-icon-blue-rgb.svg"
import avatar4 from "../assets/logos-atlas-icon-gradient-blue.svg"
import avatar5 from "../assets/logos-bitbucket-icon-gradient-blue.svg"
import side from "../assets/solutions_1_Con_Trello_JWM.svg"

interface Iprops{
    icon:any
    title:string
    text:string
}

const Container=styled.div`
padding: 0 175px 0 175px;
position: absolute;
top: 100px;
left: 0;
text-align: start;
`
const Wrapper=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 100px;
`
const Wrap1=styled.div`
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
const Wrap2=styled.div`
width: 820px;
`
const Contain=styled.div`
display: flex;
align-items: center;
gap: 25px;
margin-bottom: 20px;
h4{
    margin: 0;
}
p{
    margin: 0;
}
`
const IconBox=styled.div``
const TextBox=styled.div``
const A=styled.div`
margin-bottom: 16px;
`
const Pic=styled.img``
const Pix=styled.img`
width: 38px;
/* margin-bottom: 20px; */
padding: 20px;
border-radius: 2px;
background-color: #c1c7d086;
:hover{
    background-color: #c1c7d0;
}
`
const Sideimg = styled.img`
    /* width: 900px;
    object-fit: cover; */
`

const WorkCard:React.FC<Iprops> = ({icon, title, text})=>{
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

const Agile:React.FC = () => {
    let title1:string = "Jira Software"
    let title2:string = "Jira Product Discovery"
    let title3:string = "Jira Align"
    let title4:string = "Compass"
    let title5:string = "Bitbucket"

    let text1:string="Project and issue tracking"
    let text2:string="Prioritization and roadmapping"
    let text3:string="Enterprise Agile planning"
    let text4:string="Developer experience platform"
    let text5:string="Code & CI/CD"
  return (
    <Container>
        <Wrapper>
            <Wrap1>
                <h2>Make work flow across teams while connecting back to company goals</h2>
                <A>
                 <a href="#">View all <span>{<Pic src={arrow} />}</span></a>
                </A>
                <WorkCard icon={<Pix src={avatar1}/>} title={title1} text={text1}/>
                <WorkCard icon={<Pix src={avatar2}/>} title={title2} text={text2}/>
                <WorkCard icon={<Pix src={avatar3}/>} title={title3} text={text3}/>
                <WorkCard icon={<Pix src={avatar4}/>} title={title4} text={text4}/>
                <WorkCard icon={<Pix src={avatar5}/>} title={title5} text={text5}/>
            </Wrap1>
            <Wrap2>
                <Sideimg src={side}/>
            </Wrap2>
        </Wrapper>
    </Container>
  )
}

export default Agile