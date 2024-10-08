import styled from "styled-components";

import MainScene from "../MainScene";
import Sidebar from "../Sidebar";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
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
