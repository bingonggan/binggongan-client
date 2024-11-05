import { useGLTF } from "@react-three/drei";
import { type GLTF } from "three-stdlib";
import { type ObjectMap } from "@react-three/fiber";

function Item({ position, itemUrl, scale = [1, 1, 1] }) {
  const { scene } = useGLTF(itemUrl) as GLTF & ObjectMap;

  return <primitive object={scene} position={position} scale={scale} />;
}

export default Item;
