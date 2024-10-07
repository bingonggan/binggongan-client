import { useState } from "react";
import styled from "styled-components";

import { usePackedBoxAndItemListStore } from "../../store";
import Button from "../common/Button";

const ResultToolTipContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
`;

const ResultModal = styled.div`
  position: fixed;
  top: 37%;
  left: 37%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items; center;
  border-radius: 5px;
  gap: 2rem;
  background: #FFFFFF;
  width: 27%;
  box-shadow: 0 0 10px #FFFFFF;

  padding: 2rem;
  text-align: center;

  .modal-title-message {
    font-weight: bold;
    font-size: 25px;
  }

  span {
    font-size: 20px;

    strong {
      color: red;
    }
  }
`;

const ResultIconContainer = styled.div`
  position: absolute;
  cursor: pointer;
  left: 90%;
  top: 5%;
`;

const ModalButtonContainer = styled.div`
  width: 80%;
  margin: 0 2rem;
`;

function ResultToolTip() {
  const { packedBoxAndItemList } = usePackedBoxAndItemListStore();
  const [isResultToolTipOpen, setIsResultToolTipOpen] = useState(true);

  function handleModalClose() {
    setIsResultToolTipOpen(false);
  }

  const boxSizeList = packedBoxAndItemList.map(
    (boxAndItem) => boxAndItem.boxSize[0],
  );
  const boxSize = boxSizeList.join(", ");

  return isResultToolTipOpen ? (
    <ResultToolTipContainer onClick={handleModalClose}>
      <ResultModal onClick={(event) => event.stopPropagation()}>
        <span className="modal-title-message">
          우체국 박스 <strong>{boxSize}</strong>로 포장되었습니다.
        </span>
        <span>내 아이템을 클릭하면 위치를 확인할 수 있습니다.</span>
        <ModalButtonContainer>
          <Button
            message={"확인"}
            onClick={() => setIsResultToolTipOpen(false)}
          />
        </ModalButtonContainer>
      </ResultModal>
    </ResultToolTipContainer>
  ) : (
    <ResultIconContainer onClick={() => setIsResultToolTipOpen(true)}>
      <img src="lightbulb.svg" />
    </ResultIconContainer>
  );
}

export default ResultToolTip;
