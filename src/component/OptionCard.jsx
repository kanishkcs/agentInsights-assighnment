import styled from "styled-components";
import Avatar from "react-avatar";

import TickIcon from "../assets/accept.png";
const Wrapper = styled.div`
  transition: 0.4s ease-in all;
  margin: 1rem;
  display: flex;
  border-radius: 8px;
  background: #f4f3f6;
  cursor: pointer;
  width: 510px;
  height: 81px;
  flex-shrink: 0;
  gap: 20px;
  align-items: center;
  color: ${(props) => (props.isSelected ? " white" : "black")};
  background-color: ${(props) => (props.isSelected ? " #45C486;" : "white")};
 
  &:hover{
    transform: scale(1.01);
  }
  transition: 0.1s ease-in all;

  @media screen and (max-width: 1000px) {
    width: 80vw;
    height: 68px;
  }
  
`;

const Left = styled.div`
  margin-left: 10px;
`;

const Middle = styled.div``;

const Right = styled.div``;

const OptionCard = ({ question, option, isSelected }) => {
  let options = ["A", "B", "C", "D"];

  return (
    <Wrapper isSelected={isSelected}>
      <Left>
        {isSelected?(
          <Avatar
          src={TickIcon}
          size="35"
          round={true}
          color="#EDE8E3"
          fgColor="black"
        />
        ):
        <Avatar
          name={options[option]}
          size="35"
          round={true}
          color="#EDE8E3"
          fgColor="black"
        />}
      </Left>
      <Middle>{question}</Middle>
    </Wrapper>
  );
};

export default OptionCard;
