import { useEffect } from "react";
import styled from "styled-components";

import LibraryItemCard from "./LibraryItemCard";
import { useItemList } from "../../store/store";

const StyledSidebar = styled.div`
  height: 90vh;
  width: 200px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: #d9d9d9;
`;

const Header = styled.div`
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Sidebar() {
  const { itemList, setItemList } = useItemList();
  const itemListExists = itemList.length !== 0;
  useEffect(() => {
    async function fetchImageList() {
      const response = await fetch(import.meta.env.VITE_MODEL_LIST);
      const imageList = await response.json();

      setItemList(imageList.items);
    }

    fetchImageList();
  }, []);

  return (
    <StyledSidebar>
      <Header>
        <h1>물건</h1>
      </Header>
      {itemListExists &&
        itemList.map((item, index) => {
          return <LibraryItemCard key={index} item={item} />;
        })}
    </StyledSidebar>
  );
}

export default Sidebar;
