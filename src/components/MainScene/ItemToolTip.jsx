import styled from "styled-components";

import NumberInput from "../common/NumberInput";
import TextInput from "../common/TextInput";
import Button from "../common/Button";
import { useItemStateStore, useCustomizedItemListStore } from "../../store";

const ItemToolTipContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 5%;
  left: 1%;
  width: 30%;
  height: 50%;
  z-index: 1;
  border-radius: 15px;
  border-color: rgba(74, 46, 126, 0.15);
  border-style: solid;
  border-width: 1px;
  background-color: #f1f1fc;
`;

const ExplainContainer = styled.div`
  margin-top: 3%;
  text-align: center;
`;

const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
`;

const InputContainer = styled.div`
  margin-top: 5%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 10%;
  justify-content: space-around;
`;

const ButtonContainer = styled.div`
  width: 30%;
`;

function ItemToolTip() {
  const {
    itemName,
    itemTitle,
    itemUrl,
    initItemW,
    initItemH,
    initItemD,
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
    });
    setIsOpen(false);
  }

  return (
    <ItemToolTipContainer>
      <ExplainContainer>
        <span>아이템의 이름과 크기를 입력해 주세요</span>
      </ExplainContainer>
      <ControlContainer>
        <InputContainer>
          <NumberInput
            label={"길이(mm)"}
            value={itemW}
            initValue={initItemW}
            setValue={setItemW}
          />
        </InputContainer>
        <InputContainer>
          <NumberInput
            label={"높이(mm)"}
            value={itemH}
            initValue={initItemH}
            setValue={setItemH}
          />
        </InputContainer>
        <InputContainer>
          <NumberInput
            label={"너비(mm)"}
            value={itemD}
            initValue={initItemD}
            setValue={setItemD}
          />
        </InputContainer>
        <InputContainer>
          <TextInput
            label={"아이템 이름"}
            value={itemTitle}
            setValue={setItemTitle}
          />
        </InputContainer>
      </ControlContainer>
      <ButtonsContainer>
        <ButtonContainer>
          <Button
            message={"취소"}
            onClick={() => setIsOpen(false)}
            backgroundColor={"#ff3232"}
            fontSize={"1.5rem"}
            hoverBackgroundColor={"#ff0000"}
            activeBackgroundColor={"#cd0000"}
          />
        </ButtonContainer>
        <ButtonContainer>
          <Button message={"추가"} fontSize={"1.5rem"} onClick={registerItem} />
        </ButtonContainer>
      </ButtonsContainer>
    </ItemToolTipContainer>
  );
}

export default ItemToolTip;
