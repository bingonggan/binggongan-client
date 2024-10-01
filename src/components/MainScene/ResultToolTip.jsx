import { useState } from "react";
import styled from "styled-components";

import { usePackedBoxAndItemListStore } from "../../store";
import Button from "../common/Button";

const ResultToolTipContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  z-index: 1;
  top: 5%;
  left: 50%;
  border: 1px solid gray;
  text-align: center;
`;

const SpanStyled = styled.span`
  font-weight: bold;
`;

const ResultIconContainer = styled.div`
  position: absolute;
  cursor: pointer;
  left: 90%;
  top: 5%;
`;

function ResultToolTip() {
  const { packedBoxAndItemList } = usePackedBoxAndItemListStore();
  const [isResultToolTipOpen, setIsResultToolTipOpen] = useState(true);

  const boxSizeList = packedBoxAndItemList.map(
    (boxAndItem) => boxAndItem.boxSize[0],
  );
  const boxSize = boxSizeList.join(", ");

  return isResultToolTipOpen ? (
    <ResultToolTipContainer>
      <SpanStyled>{`우체국 박스 ${boxSize}로 포장되었습니다.`}</SpanStyled>
      <span>내 아이템을 눌러 위치를 확인해 보세요.</span>
      <Button message={"확인"} onClick={() => setIsResultToolTipOpen(false)} />
    </ResultToolTipContainer>
  ) : (
    <ResultIconContainer onClick={() => setIsResultToolTipOpen(true)}>
      <img src="lightbulb.svg" />
    </ResultIconContainer>
  );
}

export default ResultToolTip;
