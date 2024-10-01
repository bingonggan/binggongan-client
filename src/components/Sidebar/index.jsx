import styled from "styled-components";

import PresetItemList from "./PresetItemList";
import MyItemList from "./MyItemList";
import PackingItems from "./PackingItems";

const SidebarContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

const TitleContainer = styled.div`
  height: 10vh;
  display: flex;
`;

const PresetItemListContainer = styled.div`
  height: 40vh;
`;

const AddedItemListContainer = styled.div`
  height: 40vh;
`;

const PackingItemsContainer = styled.div`
  height: 10vh;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <TitleContainer>
        <img src="logo.png" alt="빈공간 로고" />
      </TitleContainer>
      <PresetItemListContainer>
        <PresetItemList />
      </PresetItemListContainer>
      <AddedItemListContainer>
        <MyItemList />
      </AddedItemListContainer>
      <PackingItemsContainer>
        <PackingItems />
      </PackingItemsContainer>
    </SidebarContainer>
  );
}

export default Sidebar;
