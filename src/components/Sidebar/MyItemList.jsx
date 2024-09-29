import styled from "styled-components";

import {
  useCustomizedItemListStore,
  useActiveIndexStore,
  usePackedBoxAndItemListStore,
} from "../../store";
import Button from "../common/Button";

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
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-bottom: 10px;
`;

const PackedItemContainer = styled.div`
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

const ItemExplainContainer = styled.div`
  width: 80%;
`;

const DeleteContainer = styled.div`
  width: 20%;
`;

function MyItemList() {
  const { customizedItemList, deleteCustomizedItemList } =
    useCustomizedItemListStore();
  const { setActiveIndex } = useActiveIndexStore();
  const { isPacked } = usePackedBoxAndItemListStore();

  function activateItem(index) {
    setActiveIndex(index);
  }

  return (
    <>
      <TitleContainer>내 아이템 리스트</TitleContainer>
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
              <DeleteContainer>
                <Button
                  message={"삭제"}
                  onClick={() => deleteCustomizedItemList(index)}
                  backgroundColor={"#ff3232"}
                  fontSize={"0.8rem"}
                  hoverBackgroundColor={"#ff0000"}
                  activeBackgroundColor={"#cd0000"}
                />
              </DeleteContainer>
            </ItemContainer>
          );
        })}
      </ListContainer>
    </>
  );
}

export default MyItemList;
