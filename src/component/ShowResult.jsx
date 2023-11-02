import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ResultText = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
`;

const Emoji = styled.span`
  font-size: 48px;
`;

const StartButton = styled.button`
  background-color: #31CD63;
  border-radius: 8px;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
`;

const ShowResult = ({name}) => {
  const { id } = useParams();
  const score = parseInt(id, 10); 

  const navigate = useNavigate();

  const renderMessage = () => {
    if (score >= 5) {
      return (
        <>
          <ResultText>
            Congratulations!{name} Your score is {score}/10{" "}
            <Emoji role="img" aria-label="Smiley Emoji">
              😊
            </Emoji>
          </ResultText>
          <StartButton onClick={() => navigate("/")}>Start New Quiz</StartButton>
        </>
      );
    } else {
      return (
        <>
          <ResultText>
            Oh no!{name} Your score is {score}/10{" "}
            <Emoji role="img" aria-label="Sad Emoji">
              😞
            </Emoji>
          </ResultText>
          <StartButton onClick={() => navigate("/")}>Try Again</StartButton>
        </>
      );
    }
  };

  return (
    <Wrapper>
      {renderMessage()}
    </Wrapper>
  );
};

export default ShowResult;
