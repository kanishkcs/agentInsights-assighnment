import { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router-dom";




const CountDownS = ({ remainingTime }) => {
    
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div >
      
      {remainingTime}
      
    </div>
  );
};




const CountDown = ({questionNumber,setQuestionNumber ,questions,selectedOption,setScore,score}) => {
    const [shouldContinue , setContinue] = useState(true)
    const [gameOver , setGameOver] = useState(false)
const navigate = useNavigate()
    const checkAnswer = (e) => {
        if (e == questions[questionNumber].answer) {
          setScore((score) => score + 1);
          
        }
    
      };

      useEffect(()=>{
        if(!shouldContinue){
            checkAnswer(selectedOption);
           setGameOver(true)
        }
    },[shouldContinue])

    useEffect(()=>{
        if(gameOver){
            navigate("/result/"+score)
        }
    },[gameOver])


  return (
    <CountdownCircleTimer
          size={80}
            key={questionNumber}
            isPlaying={shouldContinue}
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
                if(questionNumber!=9)
                { setQuestionNumber(questionNumber=>questionNumber+1)
                }
                else{
                    setContinue(false)
                }
                
              }
            }}
            
          >
            {CountDownS}
          </CountdownCircleTimer>
  )
}




export default CountDown;