import { useEffect, useState } from "react";
import styled from "styled-components";
import { data } from "../assets/data";
import OptionCard from "./OptionCard";
import "animate.css";
import CountDown from "./CountDown";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 70vh;
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

const QuestionDiv = styled.div``;

const OptionsDiv = styled.div`

width: auto;
margin-left: 10px;

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

const NextButton = styled.button``;

const ProgressBar = styled.div``;

const Middle = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
const Bottom = styled.div``;

const Option = styled.div``;

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
      console.log(item, questions[questionNumber].answer);
    }
    console.log(item, questions[questionNumber].answer);
  };

  return (
    <>
      <Wrapper>
        <TopBar>
          <TopBarHeading>AgentInsight Quiz</TopBarHeading>
        </TopBar>
        <Middle >
        <Timer>
        <CountdownCircleTimer
          size={80}
            key={questionNumber}
            isPlaying
            duration={25}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[15, 10, 5, 0]}
            onComplete={() => ({
              shouldRepeat: true,
              delay: 0,
              newInitialRemainingTime: 25,
            })}
            onUpdate={(remainingTime) => {
              if (remainingTime == 0) {
                changeQuestion();
              }
            }}
            className={animateClass}
          >
            {CountDown}
          </CountdownCircleTimer>
        </Timer>
          
          <QuestionDiv className={animateClass}>
            <Question>{questions[questionNumber]?.question}</Question>
          </QuestionDiv>
          <OptionsDiv className={animateClass}>
            {questions[questionNumber]?.options.map((item) => {
              return (
                <Option
                  key={item}
                  onClick={() => {
                    setSelectedOption(item);
                    setUserAnswer(item);
                  }}
                >
                  <OptionCard
                    question={item}
                    isSelected={selectedOption == item}
                    option={questions[questionNumber].options.indexOf(item)}
                  />
                </Option>
              );
            })}
          </OptionsDiv>
        </Middle>
        <Bottom>
          <NextButton
            onClick={() => {
              changeQuestion();
              setAnimateClass("");
            }}
            disabled={selectedOption != null ? false : true}
          >
            Change Question
          </NextButton>
        </Bottom>
      </Wrapper>
    </>
  );
};

export default Quiz;
