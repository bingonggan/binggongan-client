import styled from "styled-components";

import { ITEM_LIST } from "../../constants";

import { ItemState } from "../../types";

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
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 10px;
  display: flex;
  align-items: stretch;
  cursor: pointer;
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

type PropsType = {
  setItemState: React.Dispatch<React.SetStateAction<ItemState>>;
  setIsToolTipOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function PresetItemList({ setItemState, setIsToolTipOpen }: PropsType) {
  return (
    <>
      <TitleContainer>아이템 리스트</TitleContainer>
      <ListContainer>
        {ITEM_LIST.map((item, index) => {
          const itemName = Object.keys(item)[0];
          const itemUrl = `${import.meta.env.VITE_ITEM_URL}/${itemName}.glb`;
          const initItemTitle = item[itemName].title;
          const initItemW = item[itemName].w;
          const initItemH = item[itemName].h;
          const initItemD = item[itemName].d;
          const loadBear = item[itemName].loadBear;

          return (
            <ItemContainer
              key={index}
              onClick={() => {
                setIsToolTipOpen(true);
                setItemState({
                  itemName,
                  initItemTitle,
                  itemUrl,
                  initItemW,
                  initItemH,
                  initItemD,
                  loadBear,
                });
              }}
            >
              <ItemImageContainer>
                <img
                  src={`${itemName}.svg`}
                  width={"24px"}
                  height={"24px"}
                  alt={itemName}
                />
              </ItemImageContainer>
              <ItemTitleContainer>{initItemTitle}</ItemTitleContainer>
            </ItemContainer>
          );
        })}
      </ListContainer>
    </>
  );
}

export default PresetItemList;
