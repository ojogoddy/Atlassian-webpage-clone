import React from 'react'
import styled from "@emotion/styled"
import pic from "../assets/Community@2x.jpg"
import avatar1 from "../assets/Blog_360x265@2x.jpg"
import avatar2 from "../assets/Team Playbook_360x265@2x.png"
import avatar3 from "../assets/Agile Coach_360x265@2x.png"
import avatar4 from "../assets/ITSM High Velocity 23.png"
import avatar5 from "../assets/Team23_Event2x.png"
import { EssentialsProp } from './EssentialProps'

const Container = styled.div`
margin-top: 40px;
padding: 0 175px;
font-family: "Montserrat", sans-serif ;
`
const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Wrap1 = styled.div`
h3 {
    color: #2684ff;
    font-size: 15px;
    font-weight: 800;
  }

  h2 {
    font-size: 35px;
    width: 400px;
  }
`
const Wrap2 = styled.div`
width: 870px;
  height: 450px;
  background-color: #fffae5;
  overflow: hidden;
  text-align: center;

  img {
    width: 100%;
    height: 60%;
    object-fit: cover;
  }

  p {
    margin-bottom: 40px;
  }

  div {
    display: flex;
    justify-content: center;
    gap: 100px;

    a {
      color: #3333fe;
      text-decoration: none;
      font-weight: 600;
    }
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`
const ImageHolder = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 40px;
`;
const Atle =styled.div`
display: flex;
gap: 65px;
margin-top: 40px;

justify-content: space-between;
`
const IM =styled.img`
  height: 460px;
  width: 400px;
  border-radius: 5px;

  :hover{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`
const Event =styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const Event1 =styled.div`

h1{
  color: #2684ff;
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 16px;  
}

h3{
  font-size: 36px;
    width: 400px;
    margin: 0;
    margin-bottom: 24px;
}

a{
  text-decoration: none;
  color: #0052cc;
}
`
const Team:React.FC = () => {
  return (
    <Container>
        <Wrapper>
            <Wrap1>
                <h3>TEAM ESSENTIALS</h3>
                <h2>Explore resources to unleash the potential of your team</h2>
            </Wrap1>
            <Wrap2>

          <img src={pic} />
          <h2>Atlassian Community</h2>
          <p>
            Connect globally and meet locally to get more out of our products.
          </p>
          <div>
            <a href="">Search the forum</a>
            <a href="">Join our community</a>
          </div>
            </Wrap2>
        </Wrapper>

        <ImageHolder>
        <EssentialsProp
          avater={avatar1}
          title="Work Life"
          text="Real-life advice, inspiration, and stories from the working world today."
          to="Read our blog"
          bg="#EAE6FF" />
        <EssentialsProp
          avater={avatar2}
          title="Atlassian Team Playbook"
          text="Solve common team challenges with these group exercises."
          to="Check team health"
          bg="#D4FAFF" />
           <EssentialsProp
          avater={avatar3}
          title="Work Life"
          text="Atlassian's no-nonsense guide to agile development."
          to="Visit our resource"
          bg="#DEEBFF"
        />
      </ImageHolder>
      <Event>
        <Event1>
         <h1>Event</h1>
         <h3>Hear from today’s fearless builders and innovators</h3>
         <a href="">Learn more</a>
        </Event1>
        <Atle>
          <IM src={avatar4} />
          <IM src={avatar5} />
        </Atle>
      </Event>

    </Container>
  )
}

export default Team