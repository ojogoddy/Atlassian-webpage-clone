import React from 'react'
import styled from '@emotion/styled'

interface Iprops{
    bg:string;
    cl: string;
    title: string;
    hbg:string
}

const But = styled.button<{bg:string; cl:string; hbg:string}> `
background-color: ${(props)=> props.bg};
color: ${(props)=> props.cl};
padding: 8px 15px;
border: none;
transition: all 350ms;
border-radius: 3px;
cursor: pointer;
font-size: 16px;
font-family: "Montserrat", sans-serif;
:hover{
    background-color: ${(props)=>props.hbg};
}
`


const Button:React.FC<Iprops> = ({bg, cl, title, hbg}) => {
  return (
    <But cl ={cl} bg ={bg} hbg={hbg}>
       {title} </But>
  )
}

export default Button