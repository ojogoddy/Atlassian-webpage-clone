import React from "react";
import styled from "@emotion/styled";

interface Iprops {
  avater: any;
  title: string;
  text: string;
  to: string;
  bg: string
}

const Holder = styled.div<{ bg: string }>`
  height: 460px;
  width: 400px;
  border-radius: 5px;
  background-color: ${(prop) => prop.bg};
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    width: 100%;
    height: 55%;
  }
  h1{
    font-size: 24px;
  }
  a {
    text-decoration: none;
    color: #3939fa;
    cursor: pointer;
  }
  p {
    text-align: center;
    width: 90%;
    margin-bottom: 20px;
  }
  :hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const EssentialsProp: React.FC<Iprops> = ({avater,title,text,to,bg}) => {
  return (
    <Holder bg={bg} > 
        <img src={avater} />
        <h1>{title}</h1>
        <p>{text}</p>
        <a>{to}</a>
    </Holder>
  );
};
