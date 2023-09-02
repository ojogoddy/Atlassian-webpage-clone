import React from 'react'
import styled from "@emotion/styled"

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
const Wrap1 = styled.div``
const Wrap2 = styled.div``
const Team:React.FC = () => {
  return (
    <Container>
        <Wrapper>
            <Wrap1>
                <h3>TEAM ESSENTIALS</h3>
                <h2>Explore resources to unleash the potential of your team</h2>
            </Wrap1>
            <Wrap2>
                
            </Wrap2>
        </Wrapper>
    </Container>
  )
}

export default Team