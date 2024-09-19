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
    setItemTitle,
    setItemUrl,
    setItemImageUrl,
    setItemX,
    setItemY,
    setItemZ,
    setInitItemX,
    setInitItemY,
    setInitItemZ,
  } = useItemStateStore();

  const itemName = Object.keys(item)[0];
  const itemImageUrl = `${import.meta.env.VITE_ITEM_URL}/${itemName}.png`;
  const itemUrl = `${import.meta.env.VITE_ITEM_URL}/${itemName}.glb`;
  const itemTitle = item[itemName].title;

  const itemX = item[itemName].x;
  const itemY = item[itemName].y;
  const itemZ = item[itemName].z;

  return (
    <StyledLibraryItemCard>
      <StyledItemImageBox
        onClick={() => {
          setIsOpen(true);
          setItemTitle(itemTitle);
          setItemUrl(itemUrl);
          setItemX(itemX);
          setItemY(itemY);
          setItemZ(itemZ);
          setInitItemX(itemX);
          setInitItemY(itemY);
          setInitItemZ(itemZ);
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
