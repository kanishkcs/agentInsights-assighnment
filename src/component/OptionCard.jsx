import styled from "styled-components"

const Wrapper = styled.div`
margin: 1rem;
display: flex;
border-radius: 8px;
background: #F4F3F6;
cursor: pointer;
width: 510px;
height: 81px;
flex-shrink: 0;

`

const Left = styled.div``

const Middle = styled.div``

const Right = styled.div`
`


const OptionCard = ({question,option}) => {
  return (


    <Wrapper>
        <Left>{option}</Left>
        <Middle>{question}</Middle>
        
    </Wrapper>
 
  )
}

export default OptionCard