import styled from "styled-components";

const StyledHeader = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  font-size: 2em;
  background-color: #f8f8f8;
`;

function Header() {
  return <StyledHeader>빈 공간</StyledHeader>;
}

export default Header;
