import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Plane } from "@react-three/drei";
import styled from "styled-components";

const StyledCanvasContainer = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function BoxModel({ position }) {
  const { scene } = useGLTF(import.meta.env.VITE_BOX_MODEL);

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      child.material.opacity = 0.5;
    }
  });

  return <primitive object={scene} position={position} />;
}

function Main() {
  return (
    <StyledCanvasContainer>
      <Canvas camera={{ position: [2, 3, 2], fov: 100 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <BoxModel position={[0, 0, 0]} />
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
    </StyledCanvasContainer>
  );
}

export default Main;
