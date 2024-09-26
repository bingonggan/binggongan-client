import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  useItemListIndexStore,
  useCustomizedItemListStore,
  usePackedBoxAndItemListStore,
  useModelStore,
} from "../../store";

const BottomBarContainer = styled.div`
  position: absolute;
  flex-direction: column;
  align-items: center;
  display: flex;
  height: 15vh;
  top: 80%;
  left: 35%;
`;

const ContentBox = styled.div`
  display: flex;
  height: 80%;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 5px;
  border: 3px solid grey;
  width: 5vw;
  height: 100%;
`;

const ItemNavBox = styled.div`
  display: flex;
  height: 20%;
  width: 100%;
`;

const ItemImageBox = styled.div`
  display: flex;
  justify-content: center;
  height: 80%;
  width: 100%;
`;

const ItemIndexBox = styled.div`
  width: 80%;
`;

const ItemDeleteImageBox = styled.div`
  display: flex;
  cursor: pointer;
  width: 20%;
`;

const ArrowBox = styled.div`
  display: flex;
  border-radius: 5px;
  border: 3px solid grey;
  width: 5vw;
  height: 100%;
`;

const ButtonBox = styled.button`
  height: 30%;
  width: 15%;
  border: 1px solid #d9d9d9;
  margin-bottom: 5px;
  text-align: center;
  font-size: 1.5rem;
  cursor: pointer;
  background-color: #999999;
`;

function BottomBar() {
  const { increaseItemListIndex, decreaseItemListIndex, itemListIndex } =
    useItemListIndexStore();
  const {
    customizedItemList,
    deleteCustomizedItemList,
    initiateCustomizedItemList,
  } = useCustomizedItemListStore();
  const { setPackedBoxAndItemList, setIsPacked, isPacked } =
    usePackedBoxAndItemListStore();
  const { initiateModelList } = useModelStore();

  const contentList = new Array(5).fill(0);

  function handleIncreaseIndex() {
    if (itemListIndex < 10) {
      increaseItemListIndex();
    }
  }

  function handleDecreaseIndex() {
    if (itemListIndex > 0) {
      decreaseItemListIndex();
    }
  }

  function handleDeleteItem(itemIndex) {
    deleteCustomizedItemList(itemIndex);
  }

  function initiateMainScene() {
    initiateCustomizedItemList();
    initiateModelList();
    setIsPacked(false);
  }

  async function handlePacking() {
    const items = customizedItemList.map((object) => {
      return {
        itemName: object.itemName,
        itemScaleX: object.itemScaleX,
        itemScaleY: object.itemScaleY,
        itemScaleZ: object.itemScaleZ,
        itemW: object.itemW,
        itemH: object.itemH,
        itemD: object.itemD,
      };
    });
    const stringifyItems = JSON.stringify({ items });

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_ORIGIN}/packing`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: stringifyItems,
        },
      );
      const jsonResponse = await response.json();
      const packedBoxAndItemList = jsonResponse.result;
      const boxSize = packedBoxAndItemList[0].boxSize[0];

      setPackedBoxAndItemList(packedBoxAndItemList);
      setIsPacked(true);
      toast(
        <div>
          <h1>{`우체국 상자 ${boxSize}로 포장되었습니다.`}</h1>
          <button onClick={initiateMainScene}>초기화하기</button>
        </div>,
        {
          autoClose: false,
        },
      );
    } catch (error) {
      toast(`포장되지 않았습니다. 아이템을 추가해 주세요`);
    }
  }

  return (
    <BottomBarContainer>
      <ButtonBox disabled={isPacked} onClick={handlePacking}>
        포장하기
      </ButtonBox>
      <ToastContainer />
      <ContentBox>
        <ArrowBox onClick={handleDecreaseIndex}>
          <img src="/left-arrow.png" alt="왼쪽 화살표" />
        </ArrowBox>
        {contentList.map((_, index) => {
          const itemIndex = itemListIndex + index;
          const itemImageUrl = customizedItemList[itemIndex]?.itemImageUrl;
          const itemTitle = customizedItemList[itemIndex]?.itemTitle;
          const itemNumber = itemListIndex + index + 1;

          return (
            <ItemBox key={index}>
              <ItemNavBox>
                <ItemIndexBox>{itemNumber}</ItemIndexBox>
                <ItemDeleteImageBox onClick={() => handleDeleteItem(itemIndex)}>
                  <img src="/delete.svg" alt="delete" />
                </ItemDeleteImageBox>
              </ItemNavBox>
              <ItemImageBox>
                {itemImageUrl && <img src={itemImageUrl} alt={itemTitle} />}
              </ItemImageBox>
            </ItemBox>
          );
        })}
        <ArrowBox onClick={handleIncreaseIndex}>
          <img src="/right-arrow.png" alt="오른쪽 화살표" />
        </ArrowBox>
      </ContentBox>
    </BottomBarContainer>
  );
}

export default BottomBar;
