import { useGLTF } from "@react-three/drei";

function BoxItem({ position, scale = [1, 1, 1] }) {
  const { scene } = useGLTF(import.meta.env.VITE_BOX_ITEM);

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      child.material.opacity = 0.5;
    }
  });

  return <primitive object={scene} position={position} scale={scale} />;
}

export default BoxItem;
