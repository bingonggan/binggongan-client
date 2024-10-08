import styled from "styled-components";

const StyledButton = styled.button`
  width: ${({ $packing }) => $packing && "100%"};
  padding: 0.5rem 1.5rem;

  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  color: white;
  cursor: pointer;
  border: none;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : "#8b3dff"};
  border-radius: 5px;
  &:hover {
    background: ${({ $hoverBackgroundColor }) =>
      $hoverBackgroundColor ? $hoverBackgroundColor : "#5302d6"};
    transition: 0.3s;
  }
  &:active {
    background: ${({ $activeBackgroundColor }) =>
      $activeBackgroundColor ? $activeBackgroundColor : "#5302d6"};
  }
`;

function Button({
  onClick,
  message,
  fontSize,
  backgroundColor,
  hoverBackgroundColor,
  activeBackgroundColor,
  packing,
}) {
  return (
    <StyledButton
      onClick={onClick}
      fontSize={fontSize}
      $backgroundColor={backgroundColor}
      $hoverBackgroundColor={hoverBackgroundColor}
      $activeBackgroundColor={activeBackgroundColor}
      $packing={packing}
    >
      {message}
    </StyledButton>
  );
}

export default Button;
