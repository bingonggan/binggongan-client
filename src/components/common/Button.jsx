import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  color: white;
  cursor: pointer;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : "#8b3dff"};
  border-radius: 10px;
  &:hover {
    background: ${({ $hoverBackgroundColor }) =>
      $hoverBackgroundColor ? $hoverBackgroundColor : "#7731d8"};
    transition: 0.3s;
  }
  &:active {
    background: ${({ $activeBackgroundColor }) =>
      $activeBackgroundColor ? $activeBackgroundColor : "#612dae"};
  }
`;

function Button({
  onClick,
  message,
  fontSize,
  backgroundColor,
  hoverBackgroundColor,
  activeBackgroundColor,
}) {
  return (
    <StyledButton
      onClick={onClick}
      fontSize={fontSize}
      $backgroundColor={backgroundColor}
      $hoverBackgroundColor={hoverBackgroundColor}
      $activeBackgroundColor={activeBackgroundColor}
    >
      {message}
    </StyledButton>
  );
}

export default Button;
