import React from 'react'
import styled from '@emotion/styled'
import Pic from "../assets/logos-atlassian-logo-gradient-horizontal-neutral.svg"

const Image =styled.img`
height: 20px;
margin-top: 20px;
`
const Product =styled.div`
display: flex;
flex-direction: column;
`
const Resources =styled.div`
display: flex;
flex-direction: column;
`
const Expand =styled.div`
display: flex;
flex-direction: column;
`
const About =styled.div`
display: flex;
flex-direction: column;
`

const Container =styled.div`
display: flex;
justify-content: space-between;
padding: 0 175px;
margin-top: 32px;
background-color: #F4F5F7;
h4{
    font-weight: 800;
}
nav{
    color: #0052cc;
    cursor: pointer;
}


nav{
    margin-bottom: 10px;
    color: #42526e;
    cursor: pointer;
    letter-spacing: normal;
    font-size: 14px;
    :hover{
        text-decoration: underline;
    }
}
a{
    margin-top: 32px;
    font-size: 14px;
    text-decoration: none;

}

`
export const Footer:React.FC = () => {
  return (
    <Container>
        <Image src={Pic} />
        <Product>
            <h4>PRODUCTS</h4>
            <nav>Jira Software</nav>
            <nav>Jira Align</nav>
            <nav>Jira Service Management</nav>
            <nav>Jira Product Discovery</nav>
            <nav>Confluence</nav>
            <nav>Trello</nav>
            <nav>Bitbucket</nav>
            <a href='#'>Veiw all product</a>
        </Product>
        <Resources>
            <h4>RESOURCES</h4>
            <nav>Technical Support</nav>
            <nav>Purchasing & licensing</nav>
            <nav>Atlassian Community</nav>
            <nav>Knownledge base</nav>
            <nav>Marketplace</nav>
            <nav>My Account</nav>
            <a href='#'>Create support ticket</a>
        </Resources>
        <Expand>
            <h4>EXPAND & LEARN</h4>
            <nav>Partners</nav>
            <nav>Training & Certification</nav>
            <nav>Documentation</nav>
            <nav>Developer Resources</nav>
            <nav>Enterprise service</nav>
            <a href='#'>View all resources</a>
        </Expand>
        <About>
            <h4>ABOUT ATLASSIAN</h4>
            <nav>Company</nav>
            <nav>Careers</nav>
            <nav>Events</nav>
            <nav>Blogs</nav>
            <nav>Atlassian Foundation</nav>
            <nav>Investor Relations</nav>
            <nav>Trust & Security</nav>
            <a href='#'>Contact us</a>
        </About>
    </Container>
  )
}
