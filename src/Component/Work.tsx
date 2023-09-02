import React, {useState} from 'react'
import WorkButton from './WorkButton'
import styled from "@emotion/styled"
import Workmgt from './Workmgt'
import Servicemgt from './Servicemgt'
import Agile from './Agile'



const Container=styled.div``
const Wrapper1=styled.div``
// const WrapSide=styled.div``
// const Wrap1=styled.div``
// const Wrap2=styled.div``
const Wrapper=styled.div`
text-align: center;
margin-bottom: 60px;
h2{
    font-size: 36px;
    color: #253858;
    margin-top: 55px;
    margin-bottom: 35px;
    font-family: "Montserrat", sans-serif;
}
`
const Work1=styled.div`
`
const Work2=styled.div`
`
const Work3=styled.div`
`
const Workwrap=styled.div`
display: flex;
justify-content: center;
position: relative;
`

const Work:React.FC = () => {
const [showWorkmgt, setShowWorkmgt] = useState<boolean>(true)
const [ShowServicemgt, setShowServicemgt] = useState<boolean>(false)
const [ShowAgile, setShowAgile] = useState<boolean>(false)

const changeWorkmgt =()=>{
  setShowWorkmgt(true)
  setShowServicemgt(false)
  setShowAgile(false)
}
const changeServiceMgt=()=>{
  setShowServicemgt(true)
  setShowWorkmgt(false)
  setShowAgile(false)
}
const changeAgile=()=>{
  setShowAgile(true)
  setShowWorkmgt(false)
  setShowServicemgt(false)
}
  return (
    <Container>
      <Wrapper>
      <h2>Atlassian solutions are designed for all types of work</h2>
      <Workwrap>
      <Work1 onClick={changeWorkmgt}> <WorkButton  bg="#deebff" cl="#0065ff" title="Work Management"/> </Work1>
       {showWorkmgt?
        <div>
          <Workmgt changeWorkmgt={changeWorkmgt} />
        </div>
       : null}
       <Work2 onClick={changeServiceMgt}><WorkButton bg="#deebff" cl="#0065ff" title="IT Service Management" /></Work2>
       {ShowServicemgt?(
        <div>
          <Servicemgt changeServiceMgt={changeServiceMgt}/>
        </div>
       ):null}
       <Work3 onClick={changeAgile}> <WorkButton bg="#deebff" cl="#0065ff" title="Agile and DevOps" /></Work3>
       {ShowAgile?(
        <div>
          <Agile changeAgile={changeAgile}/>
        </div>
       ):null}
      </Workwrap>
      </Wrapper>
      <Wrapper1>
        
      </Wrapper1>
    </Container>
  )
}

export default Work