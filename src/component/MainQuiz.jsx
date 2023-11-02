import React from 'react'
import styled from "styled-components";

import OptionCard from "./OptionCard";
const QuestionDiv = styled.div``;
const Question = styled.span`
  color: #191d63;
  text-align: center;
  font-family: General Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 38px; /* 135.714% */
`;
const Option = styled.div``;

const OptionsDiv = styled.div``
const MainQuiz = ({animateClass,questionNumber,questions,setSelectedOption,selectedOption}) => {
  return (
    <>
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
    </>
  )
}

export default MainQuiz