import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";

import BoxItem from "./BoxItem";
import PackedItems from "./PackedItems";
import { usePackedBoxAndItemListStore } from "../../store";

const MainSceneContainer = styled.div`
  width: calc(100% - 400px);
  margin: 10px 10px 10px 10px;
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
`;

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

function MainScene() {
  const { isPacked } = usePackedBoxAndItemListStore();

  return (
    <MainSceneContainer>
      {isPacked ? (
        <PackedItems />
      ) : (
        <CanvasContainer>
          <Canvas
            camera={{ position: [7, 10, 5], fov: 100 }}
            style={{ position: "absolute" }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <BoxItem position={[0, 0, 0]} />
            <OrbitControls enablePan={false} maxDistance={50} />
          </Canvas>
        </CanvasContainer>
      )}
    </MainSceneContainer>
  );
}

export default MainScene;
