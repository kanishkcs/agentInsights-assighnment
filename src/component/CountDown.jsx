import { CountdownCircleTimer } from "react-countdown-circle-timer";





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




const CountDown = ({questionNumber,setQuestionNumber}) => {
  return (
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
                if(questionNumber!=10) setQuestionNumber(questionNumber=>questionNumber+1)
              }
            }}
            
          >
            {CountDownS}
          </CountdownCircleTimer>
  )
}




export default CountDown;