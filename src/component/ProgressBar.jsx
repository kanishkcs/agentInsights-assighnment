import styled from "styled-components"

const Wrapper = styled.div`

width: ${props => `${props.progress * 10}%`};
background: #31CD63;
  height: 20px; 
  border-radius: 16px;

`

const Number = styled.div`
font-size: 14px;
position: absolute;
right: 10px;

`

const Main = styled.div`
position: relative;
border-radius: 16px;
display: flex;
width: 240px;
height: 20px;
background-color: white;
color: black;
justify-content: space-between;


align-items: center;
`

const ProgressBar = ({progress}) => {
  return (
    <>
<Main>


   
    <Wrapper progress={progress}>
        
    </Wrapper>
    <Number>{progress}/10</Number>
    </Main>
    </>
  )
}

export default ProgressBar