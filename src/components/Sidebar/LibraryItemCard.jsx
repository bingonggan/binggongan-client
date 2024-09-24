import styled from "styled-components";

import { useItemStateStore } from "../../store";

const StyledLibraryItemCard = styled.div`
  min-height: 200px;
  margin: 10%;
  border-radius: 5px;
`;

const StyledItemImageBox = styled.div`
  height: 85%;
  width: 100%;
  background-color: black;
  border-radius: 5px;
  cursor: pointer;
`;

const ItemImage = styled.img`
  border-radius: 5px;
  height: 100%;
  width: 100%;
`;

const StyledItemName = styled.div`
  display: flex;
  height: 15%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

function LibraryItemCard({ item }) {
  const {
    setIsOpen,
    setItemName,
    setItemTitle,
    setItemUrl,
    setItemImageUrl,
    setItemW,
    setItemH,
    setItemD,
    setInitItemW,
    setInitItemH,
    setInitItemD,
  } = useItemStateStore();

  const itemName = Object.keys(item)[0];
  const itemImageUrl = `${import.meta.env.VITE_ITEM_URL}/${itemName}.png`;
  const itemUrl = `${import.meta.env.VITE_ITEM_URL}/${itemName}.glb`;
  const itemTitle = item[itemName].title;

  const itemW = item[itemName].x;
  const itemH = item[itemName].y;
  const itemD = item[itemName].z;

  return (
    <StyledLibraryItemCard>
      <StyledItemImageBox
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
          setItemImageUrl(itemImageUrl);
        }}
      >
        <ItemImage src={itemImageUrl} alt={itemName} />
      </StyledItemImageBox>
      <StyledItemName>
        <h2>{itemTitle}</h2>
      </StyledItemName>
    </StyledLibraryItemCard>
  );
}

export default LibraryItemCard;
