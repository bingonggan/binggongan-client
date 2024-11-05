import styled from "styled-components";

type ButtonState = {
  onClick: () => void;
  message: string;
  fontSize: string;
  backgroundColor: string | null;
  hoverBackgroundColor: string | null;
  activeBackgroundColor: string | null;
  packing: Boolean | null;
};

type StyledButtonProps = {
  $packing: Boolean;
  $backgroundColor: string | null;
  $hoverBackgroundColor: string | null;
  $activeBackgroundColor: string | null;
  fontSize: string | null;
};

const StyledButton = styled.button<StyledButtonProps>`
  width: ${({ $packing }) => $packing && "100%"};
  padding: 0.5rem 1.5rem;
  background-color: ${({ $backgroundColor }) =>
    $backgroundColor ? $backgroundColor : "#8b3dff"};
  border: none;
  border-radius: 5px;
  color: white;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  cursor: pointer;
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
}: ButtonState) {
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
