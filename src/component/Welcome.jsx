import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

`

const WelcomeDiv = styled.div`
width: 450px;
height: 250px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
gap: 20px;
@media screen and (max-width:1000px) {
    margin: 20px;
    height: 400px;
    flex-direction: column;
    gap: 2rem;
}

`

const NameInput = styled.input`
padding-left: 10px;
border-radius: 8px;
outline: none;
width: 35%;
height: 10%;
background-color: #F4F3F6;
border: none;
padding: 10px;
font-size: 16px;
@media screen and (max-width:1000px) {
    height: 6%;
}
`

const StartQuiz = styled.button`

border-radius: 8px;
background: #31CD63;
height: 14%;
width: 18%;
color: white;
border: none;
cursor: pointer;
&:hover{
    transform: scale(1.05);
}
@media screen and (max-width:1000px) {
    height: 7.5%;
    width: 23%;
    font-size: 13px;
}

`

const Welcome = ({name,setName}) => {
    const navigat= useNavigate()
  return (
    <>
    <Wrapper>
    <WelcomeDiv>

    
        <NameInput type='text' placeholder='Enter Your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <StartQuiz onClick={()=>navigat("/quiz")}>Start Quiz</StartQuiz>
        </WelcomeDiv>
    </Wrapper>

    </>
  )
}

export default Welcome