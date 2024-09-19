import { Canvas } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";
import styled from "styled-components";

import BoxItem from "./BoxItem";

const StyledMainScene = styled.div`
  height: 90vh;
  width: 100vw;
`;

function MainScene() {
  return (
    <StyledMainScene>
      <Canvas camera={{ position: [7, 10, 0], fov: 100 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <BoxItem position={[0, 0, 0]} />
        <Plane
          args={[300, 300]}
          position={[0, -1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <meshStandardMaterial
            attach="material"
            color="#a89b91"
            roughness={0.8}
            metalness={0.1}
          />
        </Plane>
        <OrbitControls />
      </Canvas>
    </StyledMainScene>
  );
}

export default MainScene;
