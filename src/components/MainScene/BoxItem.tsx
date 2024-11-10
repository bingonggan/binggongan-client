import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

type PropsType = {
  position: [number, number, number];
  scale?: [number, number, number];
};

function BoxItem({ position, scale = [1, 1, 1] }: PropsType) {
  const { scene } = useGLTF(import.meta.env.VITE_BOX_ITEM);

  scene.traverse((child) => {
    if (child instanceof Mesh) {
      child.material.transparent = true;
      child.material.opacity = 0.5;
    }
  });

  return <primitive object={scene} position={position} scale={scale} />;
}

export default BoxItem;
