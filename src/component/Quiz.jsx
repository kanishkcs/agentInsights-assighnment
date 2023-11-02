import { startTransition, useEffect, useState } from "react";
import styled from "styled-components";
import { data } from "../assets/data";
import OptionCard from "./OptionCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const ScoreDiv = styled.div`
  display: flex;

  align-items: center;
  font-size: 1.8rem;
  gap: 10px;
  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;
const Score = styled.div`
  text-align: center;
  width: 50px;
  padding: 8px;
  border-radius: 4px;
  background-color: lightgray;
  font-size: 19px;
  @media screen and (max-width: 1000px) {
    padding: 4px;
    font-size: 14px;
  }
`;

const QuestionDiv = styled.div``;

const OptionsDiv = styled.div``;

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
  margin-top: 4rem;
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

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [newQuiz, setNewQuiz] = useState(false);

  useEffect(() => {
    setQuestions(shuffleArray(data));
  }, [newQuiz]);

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
          <ScoreDiv>
            Score: <Score> {score}</Score>
          </ScoreDiv>
          <TopBarHeading>AgentInsight Quiz</TopBarHeading>
          <div></div>
        </TopBar>
        <Middle>
          <QuestionDiv>
            <Question>{questions[questionNumber]?.question}</Question>
          </QuestionDiv>
          <OptionsDiv>
            {questions[questionNumber]?.options.map((item) => {
              return (
                <Option onClick={() => checkAnswer(item)}>
                  <OptionCard
                    onClick={() => console.log("clicked")}
                    key={item}
                    question={item}
                  />
                </Option>
              );
            })}
          </OptionsDiv>
        </Middle>
        <Bottom>
          <NextButton onClick={changeQuestion}>Change Question</NextButton>
        </Bottom>
      </Wrapper>
    </>
  );
};

export default Quiz;
