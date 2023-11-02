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
  margin-top: 2rem;
  width: 100%;
`;

const TopBarHeading = styled.span`
  font-size: 2rem;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
`;



const Question = styled.span`
  color: #191d63;
  text-align: center;
  font-family: General Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px; /* 135.714% */
`;

const QuestionTimer = styled.div``;

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
  width: 50%;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 2rem;
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

    const navigate = useNavigate()

  useEffect(() => {
    setQuestions(shuffleArray(data));
  }, [newQuiz]);
  useEffect(() => {
    setAnimateClass("main-div");
  }, [questionNumber]);

  const changeQuestion = () => {
    if (questionNumber == questions.length - 1) {
      setNewQuiz(!newQuiz);
    } else {
      setQuestionNumber((prev) => prev + 1);
    }
  };

  const checkAnswer = (e) => {
    if (e == questions[questionNumber].answer) {
      setScore((score) => score + 10);
      
    }

  };

 
  return (
    <>
      <Wrapper>
        <TopBar>
          <TopBarHeading>AgentInsight Quiz</TopBarHeading>
        </TopBar>
        <Middle >
        <Timer>
        <CountDown questionNumber={questionNumber} setQuestionNumber={setQuestionNumber}/>
        </Timer>
          <MainQuiz animateClass={animateClass} questions={questions} questionNumber={questionNumber} selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
          
        </Middle>
        <Bottom>
        <ProgressBar progress={questionNumber}/>
          {questionNumber==10?(<NextButton
            onClick={() => {

              checkAnswer(selectedOption)
              console.log(score)
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
