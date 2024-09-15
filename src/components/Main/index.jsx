import styled from "styled-components";

import MainScene from "../MainScene";
import Sidebar from "../Sidebar";

const StyledMain = styled.div`
  display: flex;
`;

function Main() {
  return (
    <StyledMain>
      <Sidebar />
      <MainScene />
    </StyledMain>
  );
}

export default Main;
