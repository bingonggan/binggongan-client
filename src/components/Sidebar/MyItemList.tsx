import styled from "styled-components";
import { useRef, useEffect } from "react";

import {
  useSelectedIndexStore,
  usePackedBoxAndItemListStore,
} from "../../store";
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
  itemList: CustomizedItem[];
  changeItemList: React.Dispatch<React.SetStateAction<CustomizedItem[]>>;
};

function MyItemList({ itemList, changeItemList }: PropsType) {
  const { setSelectedIndex } = useSelectedIndexStore();
  const { isPacked } = usePackedBoxAndItemListStore();

  const itemListEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (itemListEndRef.current) {
      itemListEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [itemList]);

  function activateItem(index: number): void {
    setSelectedIndex(index);
  }

  function handleDelete(selectIndex: number) {
    changeItemList(itemList.filter((_, index) => index !== selectIndex));
  }

  return (
    <>
      <TitleContainer>내 아이템</TitleContainer>
      <ListContainer data-testid="my-item-list">
        {itemList.map((item, index) => {
          return isPacked ? (
            <PackedItemContainer
              onClick={() => activateItem(index)}
              key={index}
            >
              {`${index + 1}. ${item.itemTitle}`}
            </PackedItemContainer>
          ) : (
            <ItemContainer key={index} data-testid={`my-item-${index}`}>
              <ItemExplainContainer>{`${index + 1}. ${item.itemTitle}`}</ItemExplainContainer>
              <Button
                message={"삭제"}
                onClick={() => handleDelete(index)}
                fontSize={"0.6em"}
                backgroundColor={"#5e5470"}
                hoverBackgroundColor={"#322e38"}
                activeBackgroundColor={"#322e38"}
                packing={false}
                data-testid={`item-delete-button-${index}`}
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
