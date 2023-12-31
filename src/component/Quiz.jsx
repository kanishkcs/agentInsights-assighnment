import { useEffect, useState } from "react";
import styled from "styled-components";
import { data } from "../assets/data";

import "animate.css";
import CountDown from "./CountDown";
import { useNavigate } from "react-router-dom";


import ProgressBar from "./ProgressBar";
import MainQuiz from "./MainQuiz";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 70vh;
  
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`;

const TopBarHeading = styled.span`
  font-size: 1.6rem;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
`;




const NextButton = styled.button`
border-radius: 8px;
background: #31CD63;
border: none;
width: 100%;
height: 40px;
margin-top:2rem;
color: white;
cursor: pointer;
&:enabled:hover{
    transform: scale(1.05);
}
&:disabled{
    background: #747475;
}
`;



const Middle = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  text-align: center;
  align-items: center;
 
  gap: 2rem;
  @media screen and (max-width:1000px){
    width: 60%;
  }
`;
const Bottom = styled.div`
margin-top: 1rem;



`;


function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

const Timer = styled.div`
position: absolute;
top: 10%;
left: 5%;


`



const Quiz = () => {
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [newQuiz, setNewQuiz] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [animateClass, setAnimateClass] = useState("main-div");
const [gameOver,setGameOver] = useState(false)
    const navigate = useNavigate()

  useEffect(() => {
    setQuestions(shuffleArray(data));
  }, [newQuiz]);
  useEffect(() => {
    
    setAnimateClass("main-div");
  }, [questionNumber]);

  const changeQuestion = () => {
    if (questionNumber == 9) {
      setNewQuiz(!newQuiz);
    } else {
      setQuestionNumber((prev) => prev + 1);
    }
  };

  const checkAnswer = (e) => {
    if (e == questions[questionNumber].answer) {
      setScore((score) => score + 1);
      
    }
    if(questionNumber==9){
        setGameOver(true)
    }

  };

  
  useEffect(()=>{
    if(gameOver){
        navigate(`/result/${score}`)
    }
  },[gameOver])
 
  return (
    <>
      <Wrapper>
        <TopBar>
          <TopBarHeading>AgentInsight Quiz</TopBarHeading>
        </TopBar>
        <Middle >
        <Timer>
        <CountDown questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} questions={questions} selectedOption={selectedOption} setScore={setScore} score={score}/>
        </Timer>
          <MainQuiz  animateClass={animateClass} questions={questions} questionNumber={questionNumber} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
          
        </Middle>
        <Bottom>
        <ProgressBar progress={questionNumber}/>
          {questionNumber==9?(<NextButton
            onClick={() => { 
              checkAnswer(selectedOption) 
              finishQuiz();
            }}
            disabled={selectedOption != null ? false : true}
          >
            Finish Quiz
          </NextButton>):(<NextButton
            onClick={() => {
            checkAnswer(selectedOption)
            setSelectedOption(null)
              changeQuestion();
              setAnimateClass("");
              
            }}
            disabled={selectedOption != null ? false : true}
          >
            Next Question
          </NextButton>
          )}
          
        </Bottom>
      </Wrapper>
    </>
  );
};

export default Quiz;
