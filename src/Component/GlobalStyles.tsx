// import React from 'react'
import {Global, css} from "@emotion/react"

const GlobalStyles= () => {
  return (
    <Global 
        styles={css`
         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
    body{
        font-family: "Montserrat", "sans-serif";
        margin: 0;
        padding: 0;
    }
    `} 
    ></Global>
  )
}

export default GlobalStyles