import styled from "styled-components";

import { useItemStateStore } from "../../store";
import MainScene from "../MainScene";
import Sidebar from "../Sidebar";
import ItemModal from "../ItemModal";
import BottomBar from "../BottomBar";

const StyledMain = styled.div`
  display: flex;
`;

function Main() {
  const { isOpen } = useItemStateStore();

  return (
    <StyledMain>
      <Sidebar />
      <MainScene />
      {isOpen && <ItemModal />}
      <BottomBar />
    </StyledMain>
  );
}

export default Main;
