





const CountDown = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Too lale...</div>;
  }

  return (
    <div >
      
      {remainingTime}
      
    </div>
  );
};

export default CountDown;