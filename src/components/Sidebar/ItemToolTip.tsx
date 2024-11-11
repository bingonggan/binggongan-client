import { useState } from "react";
import styled from "styled-components";

import NumberInput from "../common/NumberInput";
import TextInput from "../common/TextInput";
import Button from "../common/Button";

import type { ItemState, CustomizedItem } from "../../types";

const ItemToolTipContainer = styled.div`
  position: absolute;
  margin-left: 400px;
  z-index: 1;
  gap: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  background-color: #f1f1fc;
  border-radius: 15px;
  border: 1px solid rgba(74, 46, 126, 0.15);
`;

const ExplainContainer = styled.div`
  margin-bottom: 1rem;
  color: blue;
  font-weight: bold;
  text-align: center;
`;

const ControlContainer = styled.div`
  gap: 0.5rem;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  gap: 0.5rem;
  padding: 0.1rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const ButtonsContainer = styled.div`
  gap: 0.1rem;
  display: flex;
  justify-content: space-between;
`;

const ValidationMessageContainer = styled.div`
  color: red;
  font-size: 0.9rem;
  text-align: center;
`;

type PropsType = {
  itemState: ItemState;
  setIsToolTipOpen: React.Dispatch<React.SetStateAction<boolean>>;
  customizedItemList: CustomizedItem[];
  setCustomizedItemList: React.Dispatch<React.SetStateAction<CustomizedItem[]>>;
};

function ItemToolTip({
  itemState,
  setIsToolTipOpen,
  customizedItemList,
  setCustomizedItemList,
}: PropsType) {
  const [isValid, setIsValid] = useState(true);
  const [itemW, setItemW] = useState(itemState.initItemW);
  const [itemH, setItemH] = useState(itemState.initItemH);
  const [itemD, setItemD] = useState(itemState.initItemD);
  const [itemTitle, setItemTitle] = useState(itemState.initItemTitle);

  const isItemListFull = customizedItemList.length >= 15;

  function registerItem() {
    if (!isValid || isItemListFull) {
      return;
    }

    const itemScaleW = itemW / itemState.initItemW;
    const itemScaleH = itemH / itemState.initItemH;
    const itemScaleD = itemD / itemState.initItemD;

    setCustomizedItemList([
      ...customizedItemList,
      {
        itemName: itemState.itemName,
        itemTitle,
        itemScaleW,
        itemScaleH,
        itemScaleD,
        itemW,
        itemH,
        itemD,
        loadBear: itemState.loadBear,
      },
    ]);

    setIsToolTipOpen(false);
  }

  return (
    <ItemToolTipContainer>
      <ControlContainer>
        <ExplainContainer>
          <span>아이템의 크기와 이름을 입력해 주세요</span>
        </ExplainContainer>
        <InputContainer>
          <NumberInput
            label={"길이(mm)"}
            value={itemW}
            setValue={setItemW}
            setIsValid={setIsValid}
          />
          <NumberInput
            label={"높이(mm)"}
            value={itemH}
            setValue={setItemH}
            setIsValid={setIsValid}
          />
          <NumberInput
            label={"너비(mm)"}
            value={itemD}
            setValue={setItemD}
            setIsValid={setIsValid}
          />
          <TextInput
            label={"아이템 이름"}
            value={itemTitle}
            setValue={setItemTitle}
          />
        </InputContainer>
        {!isValid && (
          <ValidationMessageContainer>
            아이템 크기는 1mm 이상 400mm 이하여야 합니다.
          </ValidationMessageContainer>
        )}
        {isItemListFull && (
          <ValidationMessageContainer>
            아이템은 최대 15개까지 추가할 수 있습니다.
          </ValidationMessageContainer>
        )}
        <ButtonsContainer>
          <Button
            message={"취소"}
            onClick={() => setIsToolTipOpen(false)}
            fontSize={"1rem"}
            backgroundColor={"#5e5470"}
            hoverBackgroundColor={"#322e38"}
            activeBackgroundColor={"#322e38"}
            packing={true}
          />
          <Button
            message={"추가"}
            fontSize={"1rem"}
            onClick={registerItem}
            backgroundColor={null}
            hoverBackgroundColor={null}
            activeBackgroundColor={null}
            packing={true}
          />
        </ButtonsContainer>
      </ControlContainer>
    </ItemToolTipContainer>
  );
}

export default ItemToolTip;
