import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styled from "styled-components";

import Button from "../common/Button";
import {
  usePackedBoxAndItemListStore,
  useSelectedIndexStore,
} from "../../store";

import type { CustomizedItem } from "../../types";

const Container = styled.div`
  width: 100%;
`;

type PropsType = {
  itemList: CustomizedItem[];
  changeItemList: React.Dispatch<React.SetStateAction<CustomizedItem[]>>;
};

function PackingItems({ itemList, changeItemList }: PropsType) {
  const { setPackedBoxAndItemList, setIsPacked, isPacked } =
    usePackedBoxAndItemListStore();
  const { setSelectedIndex } = useSelectedIndexStore();

  async function handlePacking() {
    if (itemList.length === 0) {
      toast("아이템을 추가해 주세요`");
      return;
    }

    const items = itemList.map((item, index) => {
      return {
        itemName: item.itemName,
        itemIndex: index,
        itemScaleX: item.itemScaleW,
        itemScaleY: item.itemScaleH,
        itemScaleZ: item.itemScaleD,
        itemW: item.itemW,
        itemH: item.itemH,
        itemD: item.itemD,
        loadBear: item.loadBear,
      };
    });
    const jsonItemList = JSON.stringify({ items });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_ORIGIN}/packing`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: jsonItemList,
        },
      );

      if (!response.ok) {
        throw new Error();
      }

      const jsonResponse = await response.json();
      const packedBoxAndItemList = jsonResponse.result;

      setPackedBoxAndItemList(packedBoxAndItemList);
      setIsPacked(true);
    } catch (error) {
      toast("아이템을 추가해 주세요");
    }
  }

  function initiatePacking() {
    changeItemList([]);
    setIsPacked(false);
    setSelectedIndex(null);
  }

  return (
    <Container>
      {isPacked ? (
        <Button
          onClick={initiatePacking}
          message={"초기화하기"}
          fontSize={"1.5rem"}
          backgroundColor={"#5e5470"}
          hoverBackgroundColor={"#322e38"}
          activeBackgroundColor={"#322e38"}
          packing
        />
      ) : (
        <Button
          onClick={handlePacking}
          message={"포장하기"}
          fontSize={"1.5rem"}
          backgroundColor={null}
          hoverBackgroundColor={null}
          activeBackgroundColor={null}
          packing
        />
      )}
      <ToastContainer />
    </Container>
  );
}

export default PackingItems;
