import styled from "styled-components";

const StyledBottomBar = styled.div`
  position: absolute;
  display: flex;
  height: 10vh;
  top: 85%;
  left: 35%;
`;

const ContentBox = styled.div`
  display: flex;
  border-radius: 5px;
  justify-align: center;
  border: 3px solid grey;
  width: 5vw;
  height: 100%;
`;

function BottomBar() {
  return (
    <StyledBottomBar>
      <ContentBox>
        <img src="/left-arrow.png" alt="왼쪽 화살표" />
      </ContentBox>
      <ContentBox />
      <ContentBox />
      <ContentBox />
      <ContentBox />
      <ContentBox />
      <ContentBox>
        <img src="/right-arrow.png" alt="오른쪽 화살표" />
      </ContentBox>
    </StyledBottomBar>
  );
}

export default BottomBar;
