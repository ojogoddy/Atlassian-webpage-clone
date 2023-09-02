import React from 'react'
import styled from "@emotion/styled"
import arrow from "../assets/bluearrow.svg"
import first from "../assets/SecurityCheckmark.svg"
import second from "../assets/Building.svg"
import avatar from "../assets/Building.svg"
import avatar1 from "../assets/CloudCheckmark.svg"
import avatar2 from "../assets/CloudCheckmark.svg"

interface Iprops {
  title: string;
  text1: string
  text2?: string
  text3?: string
  text4?: string
  text5?: string
  
  icon?:any
}
interface Ipropss{
  bg: string
  title:string
  icon: any
  text1:string
}

const Contain=styled.div`
width: 300px;
`
const Container=styled.div`
padding: 0px 0px 20px 175px;
font-family: "Montserrat", sans-serif ;
position: absolute;
top: 95px;
left: 0;
background-color: white;
h4{
  /* width: 200px; */
}
`
const Wrapper=styled.div`
display: flex;
`
const Wrap1=styled.div`
display: flex;
flex-wrap: wrap;
gap: 20px;

`
const Wrap2=styled.div`
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
const A=styled.div`
margin-bottom:40px;
`
const What=styled.div`
padding-bottom:8px ;
font-size: 12px;
font-weight: 600;
color: #42526ebb;

`
const Cloud=styled.div``
const First=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
margin-top: 20px;
`
const Second=styled.div`
display: flex;
align-items: center;
`
const Program=styled.div``
const Card=styled.div`
padding: 20px 20px 0 20px;
font-size: 14px;
letter-spacing: 1.1px;
line-height: 18px;
`
const SolCard=styled.div<{bg:string}> `
background-color: ${(props)=>props.bg};
width: 300px;
height: 200px;
/* text-align: center; */
border-radius: 10px;
:hover{
  transform: scale(1.03);
  transition: all 350ms;
}

`
const Pic=styled.img``
const Wrap1a=styled.div`
margin-top: 30px;
`
const New=styled.div`
width: 300px;
h4{
  font-weight: 600;
  font-size: 12px;
  color: #42526ebb;
}
h5{
  font-size: 16px;
  font-weight: 600;
}
`
const Pics=styled.img`
width: 30px;
margin-right: 10px;
`
const Card1=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Img=styled.img`
width: 25px;
`


const SolutionCard: React.FC<Iprops> = ({title, text1, text2, text3, text4, text5})=>{
  return(
    
      <Contain>
              <h4>{title}</h4>
              <p>{text1}</p>
              <p>{text2}</p>
              <p>{text3}</p>
              <p>{text4}</p>
              <p>{text5}</p>
      </Contain>
    
 )
}
const SolutCard:React.FC<Ipropss>=({title, icon, text1, bg})=>{
  return(
    <SolCard bg={bg}>
      <Card>
      <Card1>
        <h4>{title}</h4>
        <Img src={icon}/>
      </Card1>
      <p>{text1}</p>
      </Card>
    </SolCard>
  )
}

const SolutionDrop:React.FC = () => {
  let title1: string ="BY TEAM SIZE"
  let text1:string = "Enterprise"
  let text2:string = "Small Business"
  let text3:string = "Startup"
  let text4:string = "Non-profit"

  let title2: string ="BY TEAM FUNCTION"
  let text5: string ="Software Development"
  let text6: string ="IT"
  let text7: string ="Finance"
  let text8: string ="Marketing"
  let text9: string ="HR"

  let title3: string ="BY INDUSTRY"
  let text10: string ="Retail"
  let text11: string ="Telecommunications"
  let text12: string ="Professional Services"
  let text13: string ="Government"

  let title4:string = "Work Management"
  let text14:string ="Manage projects and align goals across all teams to achieve deliverables"
  let bg1:any ="#CFDDFF"
  let bg2:any = "#D1EDF5"
  let bg3:any ="#F4E8F2"

  let title5:string = "IT Service Management"
  let text15:string = "Enable dev, IT ops and business teams to deliver great service at high velocity"

  let title6:string = "Agile & DevOps"
  let text16:string = "Run a world-class agile software organization from discovery to delivery and operations"
  return (
    <Container>
     
      <Wrapper>
        <Wrap1a>
        <h4>FEATURED</h4>
          <Wrap1>
          <SolutCard title={title4} icon={avatar} text1={text14} bg={bg1}/>
          <SolutCard title={title5} icon={avatar1} text1={text15} bg={bg2}/>
          <SolutCard title={title6} icon={avatar2} text1={text16} bg={bg3}/>
          <SolutionCard title={title1} text1={text1} text2={text2} text3={text3} text4={text4} />
          <SolutionCard title={title2} text1={text5} text2={text6} text3={text7} text4={text8} text5={text9} />
          <SolutionCard title={title3} text1={text10} text2={text11} text3={text12} text4={text13} />
          </Wrap1>
        </Wrap1a>
        <Wrap2>
          <New>
            <h4>WHAT'S NEW</h4>
            <h5>Atlassian Together</h5>
            <p>Get Atlassian work management products in one convenient package for enterprise teams</p>
          </New>

            <A>
            <a href="#">Learn more <span>{<Pic src={arrow} />}</span></a>
            </A>
            <What> YOU MIGHT FIND HELPFUL</What>
            <Cloud>
                <First>
                    {<Pics src={first}/>}
                    <Cloud>Atlassian Trust & Security</Cloud>
                </First>
                <Second>
                    {<Pics src={second}/>}
                    <Program>Customer Case Studies</Program>
                </Second>
            </Cloud>
        </Wrap2>
      </Wrapper>
    </Container>
  )
}

export default SolutionDrop