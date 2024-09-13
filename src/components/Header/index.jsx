import styled from "styled-components";

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #cccccc;
  font-size: 2em;
  background-color: #f8f8f8;
`;

function HeaderComponent() {
  return <Header>빈 공간</Header>;
}

export default HeaderComponent;
