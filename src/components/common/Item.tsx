import { useGLTF } from "@react-three/drei";
import { type GLTF } from "three-stdlib";
import { type ObjectMap } from "@react-three/fiber";

type PropsType = {
  position: [number, number, number];
  itemUrl: string;
  scale: [number, number, number];
};

function Item({ position, itemUrl, scale = [1, 1, 1] }: PropsType) {
  const { scene } = useGLTF(itemUrl) as GLTF & ObjectMap;

  return <primitive object={scene} position={position} scale={scale} />;
}

export default Item;
