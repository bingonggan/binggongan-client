import { useGLTF } from "@react-three/drei";

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

export default BoxModel;
