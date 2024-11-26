import { useState } from "react";
import styled from "styled-components";

import PresetItemList from "./PresetItemList";
import MyItemList from "./MyItemList";
import PackingItems from "./PackingItems";
import ItemToolTip from "./ItemToolTip";

import { ItemState, CustomizedItem } from "../../types";

const SidebarContainer = styled.div`
  width: 400px;
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  height: 10vh;
  display: flex;
`;

const PresetItemListContainer = styled.div`
  height: 40vh;
`;

const AddedItemListContainer = styled.div`
  height: 50vh;
  display: flex;
  flex-direction: column;
`;

function Sidebar() {
  const [itemState, setItemState] = useState<ItemState>();
  const [customizedItemList, setCustomizedItemList] = useState<
    CustomizedItem[]
  >([]);
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);

  return (
    <SidebarContainer>
      <TitleContainer>
        <img src="logo.png" alt="빈공간 로고" />
      </TitleContainer>
      <PresetItemListContainer>
        <PresetItemList
          setItemState={setItemState}
          setIsToolTipOpen={setIsToolTipOpen}
        />
      </PresetItemListContainer>
      <AddedItemListContainer>
        <MyItemList
          itemList={customizedItemList}
          changeItemList={setCustomizedItemList}
        />
        <PackingItems
          itemList={customizedItemList}
          changeItemList={setCustomizedItemList}
        />
      </AddedItemListContainer>
      {isToolTipOpen && (
        <ItemToolTip
          itemState={itemState}
          setIsToolTipOpen={setIsToolTipOpen}
          customizedItemList={customizedItemList}
          setCustomizedItemList={setCustomizedItemList}
        />
      )}
    </SidebarContainer>
  );
}

export default Sidebar;
