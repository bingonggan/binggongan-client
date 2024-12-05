import { useState } from "react";
import styled from "styled-components";

import PresetItemList from "./PresetItemList";
import MyItemList from "./MyItemList";
import PackingItems from "./PackingItems";
import ItemInputField from "./ItemInputField";

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
  const [itemState, setItemState] = useState<ItemState>({
    itemName: "",
    initItemTitle: "",
    initItemD: 0,
    initItemH: 0,
    initItemW: 0,
    itemUrl: "",
    loadBear: 0,
  });
  const [customizedItemList, setCustomizedItemList] = useState<
    CustomizedItem[]
  >([]);
  const [isItemInputFieldOpen, setIsItemInputFieldOpen] = useState(false);

  return (
    <SidebarContainer>
      <TitleContainer>
        <img src="logo.png" alt="빈공간 로고" />
      </TitleContainer>
      <PresetItemListContainer>
        <PresetItemList
          setItemState={setItemState}
          setIsItemInputFieldOpen={setIsItemInputFieldOpen}
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
      {isItemInputFieldOpen && (
        <ItemInputField
          itemState={itemState}
          setIsItemInputFieldOpen={setIsItemInputFieldOpen}
          customizedItemList={customizedItemList}
          setCustomizedItemList={setCustomizedItemList}
        />
      )}
    </SidebarContainer>
  );
}

export default Sidebar;
