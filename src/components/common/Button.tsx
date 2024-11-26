import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type PropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: () => void;
  message: string;
  fontSize: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;
  packing?: Boolean;
};

type StyledButtonProps = {
  fontSize?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;
  packing: Boolean;
};

const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => props.packing && "100%"};
  padding: 0.5rem 1.5rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#8b3dff"};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  cursor: pointer;
  &:hover {
    background: ${(props) =>
      props.hoverBackgroundColor ? props.hoverBackgroundColor : "#5302d6"};
    transition: 0.3s;
  }
  &:active {
    background: ${(props) =>
      props.activeBackgroundColor ? props.activeBackgroundColor : "#5302d6"};
  }
`;

function Button({ onClick, message, ...rest }: PropsType) {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {message}
    </StyledButton>
  );
}

export default Button;
