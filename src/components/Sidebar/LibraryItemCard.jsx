import styled from "styled-components";

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
  const itemName = Object.keys(item)[0];
  const itemImageUrl = `${import.meta.env.VITE_MODEL_URL}/${itemName}.png`;
  const replacedItemName = itemName.replaceAll("_", " ");

  return (
    <StyledLibraryItemCard>
      <StyledItemImageBox>
        <ItemImage src={itemImageUrl} alt={itemName} />
      </StyledItemImageBox>
      <StyledItemName>
        <h2>{replacedItemName}</h2>
      </StyledItemName>
    </StyledLibraryItemCard>
  );
}

export default LibraryItemCard;
