import { startTransition, useState } from "react"
import styled from "styled-components"


const Wrapper = styled.div``

const TopBar = styled.div``

const TopBarHeading = styled.h3``

const ScoreDiv = styled.div``

const QuestionDiv  = styled.div``


const OptionsDiv = styled.div`

`


const QuestionTimer = styled.div`
`

const NextButton = styled.button``

const ProgressBar = styled.div``

const Middle = styled.div``
const Bottom = styled.div``

const Quiz = () => {
    const [score,setScore] = useState(0);
    const [userAnswer ,setUserAnswer] = useState("");
    const [questionNumber ,setQuestionNumber] = useState(0)




  return (
    <>

    <Wrapper>
        <TopBar>

            <ScoreDiv>{score}</ScoreDiv>
            <TopBarHeading>AgentInsight Quiz</TopBarHeading>
        </TopBar>
        <Middle></Middle>
        <Bottom></Bottom>
    </Wrapper>

    </>
  )
}

export default Quiz