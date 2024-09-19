import styled from "styled-components";

const StyledHeader = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  background-color: #f8f8f8;
`;

function Header() {
  return (
    <StyledHeader>
      <h1>빈 공간</h1>
    </StyledHeader>
  );
}

export default Header;
