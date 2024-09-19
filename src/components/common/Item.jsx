import { useGLTF } from "@react-three/drei";

function Item({ position, itemUrl, scale = [1, 1, 1] }) {
  const { scene } = useGLTF(itemUrl);

  return <primitive object={scene} position={position} scale={scale} />;
}

export default Item;
