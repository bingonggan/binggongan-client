import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

import Button from "../common/Button";
import Item from "../common/Item";
import RangeInput from "../common/RangeInput";
import { useItemStateStore, useCustomizedItemListStore } from "../../store";

const StyledItemModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  height: 90vh;
  width: 80vw;
  background-color: #ffffff;
`;

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000;
  opacity: 0.7;
`;

const ControlBox = styled.div`
  position: absolute;
  height: 30%;
  width: 30%;
  left: 70%;
  top: 10%;
  z-index: 1;
`;

const ComparisonItemBox = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
  left: 50%;
  top: 0%;
`;

const TargetItemBox = styled.div`
  position: absolute;
  height: 100%;
  width: 50%;
`;

const InfoMessageBox = styled.div`
  position: absolute;
  top: 75%;
  left: 65%;
`;

function ItemModal() {
  const {
    itemName,
    itemTitle,
    itemUrl,
    itemImageUrl,
    initItemW,
    initItemH,
    initItemD,
    itemW,
    itemH,
    itemD,
    setItemW,
    setItemH,
    setItemD,
    setIsOpen,
  } = useItemStateStore();

  const addCustomizedItemList = useCustomizedItemListStore(
    (state) => state.addCustomizedItemList,
  );

  const comparisonItemUrl = import.meta.env.VITE_COMPARISON_ITEM_URL;

  const itemScaleX = itemW / initItemW;
  const itemScaleY = itemH / initItemH;
  const itemScaleZ = itemD / initItemD;

  function registerItem() {
    addCustomizedItemList({
      itemName,
      itemTitle,
      itemImageUrl,
      itemScaleX,
      itemScaleY,
      itemScaleZ,
      itemW,
      itemH,
      itemD,
    });
    setIsOpen(false);
  }

  return (
    <>
      <StyledOverlay />
      <StyledItemModal>
        <ControlBox>
          <RangeInput
            label={"길이(mm)"}
            value={itemW}
            initValue={initItemW}
            setValue={setItemW}
          />
          <RangeInput
            label={"높이(mm)"}
            value={itemH}
            initValue={initItemH}
            setValue={setItemH}
          />
          <RangeInput
            label={"너비(mm)"}
            value={itemD}
            initValue={initItemD}
            setValue={setItemD}
          />
        </ControlBox>
        <ComparisonItemBox>
          <Canvas camera={{ position: [0, 0, -5], fov: 50 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 10]} intensity={2} />
            <pointLight position={[10, 10, 10]} />
            <Item position={[0, 0, 0]} itemUrl={comparisonItemUrl} />
            <OrbitControls enableZoom={false} />
          </Canvas>
        </ComparisonItemBox>
        <TargetItemBox>
          <Canvas camera={{ position: [0, 0, -5], fov: 50 }}>
            <ambientLight intensity={1} />
            <directionalLight position={[0, 0, 10]} intensity={2} />
            <pointLight position={[10, 10, 10]} />
            {itemUrl && (
              <Item
                position={[0, 0, 0]}
                itemUrl={itemUrl}
                scale={[itemScaleX, itemScaleY, itemScaleZ]}
              />
            )}
            <OrbitControls enableZoom={false} />
          </Canvas>
        </TargetItemBox>
        <InfoMessageBox>
          <h2>Galaxy Z Flip 3의 크기를 참고해 주세요.</h2>
        </InfoMessageBox>
        <Button onClick={() => setIsOpen(false)} top={85} left={20}>
          취소
        </Button>
        <Button onClick={registerItem} top={85} left={70}>
          등록
        </Button>
      </StyledItemModal>
    </>
  );
}

export default ItemModal;
