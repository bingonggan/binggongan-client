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
      <h1>
        포장하기를 누르면 상자 크기를 추천해주고 자동으로 포장해주는 사이트
      </h1>
    </StyledHeader>
  );
}

export default Header;
