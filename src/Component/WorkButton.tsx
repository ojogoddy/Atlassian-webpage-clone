import React from 'react'
import styled from "@emotion/styled"
interface Iprops{
    bg:string
    cl:string
    title:string
}
const But=styled.button<{bg:string; cl:string}> `
background-color: ${(props)=>props.bg};color: ${(props)=>props.cl};
font-family: "Montserrat", sans-serif;
font-size: 20px;
font-weight: 600;
line-height: 20px;
text-align: center;
border-radius: 50px;
padding: 10px 15px;
margin-right: 30px;
width: 380px;
height: 90px;
border: none;
:hover{
    background-color: #0065ff;
    color: white;
}
:active{
  background-color: #0065ff;
    color: white;
}
`

const WorkButton:React.FC<Iprops> = ({bg, cl, title}) => {
  return (
    <But cl={cl} bg={bg}> {title}</But>
  )
}

export default WorkButton