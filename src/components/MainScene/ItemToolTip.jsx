import styled from "styled-components";

import NumberInput from "../common/NumberInput";
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import { useItemStateStore, useCustomizedItemListStore } from "../../store";

const ItemToolTipContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  z-index: 1;
  border-radius: 15px;
  border: 1px solid rgba(74, 46, 126, 0.15);
  background-color: #f1f1fc;
`;

const ExplainContainer = styled.div`
  text-align: center;
  font-weight: bold;
  color: blue;
  margin-bottom: 1rem;
`;

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.1rem;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.1rem;
`;

function ItemToolTip() {
  const {
    itemName,
    itemTitle,
    initItemW,
    initItemH,
    initItemD,
    loadBear,
    itemW,
    itemH,
    itemD,
    setItemW,
    setItemH,
    setItemD,
    setItemTitle,
    setIsOpen,
  } = useItemStateStore();
  const { addCustomizedItemList } = useCustomizedItemListStore();

  const itemScaleW = itemW / initItemW;
  const itemScaleH = itemH / initItemH;
  const itemScaleD = itemD / initItemD;

  function registerItem() {
    addCustomizedItemList({
      itemName,
      itemTitle,
      itemScaleW,
      itemScaleH,
      itemScaleD,
      itemW,
      itemH,
      itemD,
      loadBear,
    });
    setIsOpen(false);
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
            initValue={initItemW}
            setValue={setItemW}
          />
          <NumberInput
            label={"높이(mm)"}
            value={itemH}
            initValue={initItemH}
            setValue={setItemH}
          />
          <NumberInput
            label={"너비(mm)"}
            value={itemD}
            initValue={initItemD}
            setValue={setItemD}
          />
          <TextInput
            label={"아이템 이름"}
            value={itemTitle}
            setValue={setItemTitle}
          />
        </InputContainer>
        <ButtonsContainer>
          <Button
            message={"취소"}
            onClick={() => setIsOpen(false)}
            fontSize={"1rem"}
            backgroundColor={"#5e5470"}
            hoverBackgroundColor={"#322e38"}
            activeBackgroundColor={"#322e38"}
            packing
          />
          <Button
            message={"추가"}
            fontSize={"1rem"}
            onClick={registerItem}
            packing
          />
        </ButtonsContainer>
      </ControlContainer>
    </ItemToolTipContainer>
  );
}

export default ItemToolTip;
