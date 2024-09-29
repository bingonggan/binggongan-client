import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../common/Button";
import {
  useCustomizedItemListStore,
  usePackedBoxAndItemListStore,
  useActiveIndexStore,
  useModelStore,
} from "../../store";

function PackingItems() {
  const { customizedItemList, initiateCustomizedItemList } =
    useCustomizedItemListStore();
  const { setPackedBoxAndItemList, setIsPacked, isPacked } =
    usePackedBoxAndItemListStore();
  const { initiateModelList } = useModelStore();
  const { setActiveIndex } = useActiveIndexStore();

  async function handlePacking() {
    const items = customizedItemList.map((item, index) => {
      return {
        itemName: item.itemName,
        itemIndex: index,
        itemScaleX: item.itemScaleW,
        itemScaleY: item.itemScaleH,
        itemScaleZ: item.itemScaleD,
        itemW: item.itemW,
        itemH: item.itemH,
        itemD: item.itemD,
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
      const jsonResponse = await response.json();
      const packedBoxAndItemList = jsonResponse.result;

      setPackedBoxAndItemList(packedBoxAndItemList);
      setIsPacked(true);
    } catch (error) {
      toast(`포장되지 않았습니다. 아이템을 추가해 주세요`);
    }
  }

  function initiatePacking() {
    initiateCustomizedItemList();
    initiateModelList();
    setIsPacked(false);
    setActiveIndex(null);
  }
  return (
    <>
      {isPacked ? (
        <Button
          onClick={initiatePacking}
          message={"초기화하기"}
          fontSize={"2rem"}
        />
      ) : (
        <Button
          onClick={handlePacking}
          message={"포장하기"}
          fontSize={"2rem"}
        />
      )}
      <ToastContainer />
    </>
  );
}

export default PackingItems;
