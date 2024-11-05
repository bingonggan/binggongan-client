import styled from "styled-components";

import MainScene from "../MainScene";
import Sidebar from "../Sidebar";

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  background-color: #f1f1fc;
`;

function Main() {
  return (
    <MainContainer>
      <Sidebar />
      <MainScene />
    </MainContainer>
  );
}

export default Main;
