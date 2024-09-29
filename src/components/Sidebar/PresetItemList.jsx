import styled from "styled-components";

import { useItemStateStore } from "../../store";
import { ITEM_LIST } from "../../constants";

const TitleContainer = styled.div`
  height: 10%;
  border-bottom-color: rgba(74, 46, 126, 0.15);
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

const ListContainer = styled.div`
  height: 80%;
  flex-direction: column;
  overflow-y: scroll;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: stretch;
  cursor: pointer;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 10px;
  &:hover {
    border-radius: 10px;
    background: #ebecf0;
    transition: 0.3s;
  }
  &:active {
    background: #d9d9d9;
  }
`;

const ItemImageContainer = styled.div`
  margin-right: 10px;
`;

const ItemTitleContainer = styled.div``;

function PresetItemList() {
  const {
    setIsOpen,
    setItemName,
    setItemTitle,
    setItemUrl,
    setItemW,
    setItemH,
    setItemD,
    setInitItemW,
    setInitItemH,
    setInitItemD,
  } = useItemStateStore();

  return (
    <>
      <TitleContainer>아이템 리스트</TitleContainer>
      <ListContainer>
        {ITEM_LIST.map((item, index) => {
          const itemName = Object.keys(item)[0];
          const itemUrl = `${import.meta.env.VITE_ITEM_URL}/${itemName}.glb`;
          const itemTitle = item[itemName].title;
          const itemW = item[itemName].w;
          const itemH = item[itemName].h;
          const itemD = item[itemName].d;

          return (
            <ItemContainer
              key={index}
              onClick={() => {
                setIsOpen(true);
                setItemName(itemName);
                setItemTitle(itemTitle);
                setItemUrl(itemUrl);
                setItemW(itemW);
                setItemH(itemH);
                setItemD(itemD);
                setInitItemW(itemW);
                setInitItemH(itemH);
                setInitItemD(itemD);
              }}
            >
              <ItemImageContainer>
                <img src={`${itemName}.svg`} width={"24px"} height={"24px"} />
              </ItemImageContainer>
              <ItemTitleContainer>{itemTitle}</ItemTitleContainer>
            </ItemContainer>
          );
        })}
      </ListContainer>
    </>
  );
}

export default PresetItemList;
