import styled from "styled-components";

const StyledButton = styled.div`
  position: absolute;
  top: ${({ $top }) => $top}%;
  left: ${({ $left }) => $left}%;
  padding: 20px 40px;
  border: 1px solid #d9d9d9;
  font-size: 2rem;
  cursor: pointer;
`;

function Button({ onClick, top, left, children }) {
  return (
    <StyledButton onClick={onClick} $top={top} $left={left}>
      {children}
    </StyledButton>
  );
}

export default Button;
