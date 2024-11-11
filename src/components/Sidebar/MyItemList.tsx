import styled from "styled-components";
import { useRef, useEffect } from "react";

import { useActiveIndexStore, usePackedBoxAndItemListStore } from "../../store";
import Button from "../common/Button";

import type { CustomizedItem } from "../../types";

const TitleContainer = styled.div`
  height: 10%;
  border-bottom-color: rgba(74, 46, 126, 0.15);
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;

const ListContainer = styled.div`
  height: 80%;
  overflow-y: auto;
`;

const ItemContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

const PackedItemContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
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

const ItemExplainContainer = styled.span`
  padding: 0.5rem;
`;

type PropsType = {
  customizedItemList: CustomizedItem[];
  setCustomizedItemList: React.Dispatch<React.SetStateAction<CustomizedItem[]>>;
};

function MyItemList({ customizedItemList, setCustomizedItemList }: PropsType) {
  const { setActiveIndex } = useActiveIndexStore();
  const { isPacked } = usePackedBoxAndItemListStore();

  const itemListEndRef = useRef(null);

  useEffect(() => {
    itemListEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [customizedItemList]);

  function activateItem(index: number): void {
    setActiveIndex(index);
  }

  function handleDelete(selectIndex: number) {
    setCustomizedItemList(
      customizedItemList.filter((_, index) => index !== selectIndex),
    );
  }

  return (
    <>
      <TitleContainer>내 아이템</TitleContainer>
      <ListContainer>
        {customizedItemList.map((item, index) => {
          return isPacked ? (
            <PackedItemContainer
              onClick={() => activateItem(index)}
              key={index}
            >
              {`${index + 1}. ${item.itemTitle}`}
            </PackedItemContainer>
          ) : (
            <ItemContainer key={index}>
              <ItemExplainContainer>{`${index + 1}. ${item.itemTitle}`}</ItemExplainContainer>
              <Button
                message={"삭제"}
                onClick={() => handleDelete(index)}
                fontSize={"0.6em"}
                backgroundColor={"#5e5470"}
                hoverBackgroundColor={"#322e38"}
                activeBackgroundColor={"#322e38"}
                packing={false}
              />
            </ItemContainer>
          );
        })}
        <div ref={itemListEndRef}></div>
      </ListContainer>
    </>
  );
}

export default MyItemList;
