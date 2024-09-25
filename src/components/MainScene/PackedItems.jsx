import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { usePackedBoxAndItemListStore, useModelStore } from "../../store";
import { BOX_SIZE } from "../../../constants";
import BoxItem from "./BoxItem";

function PackedItems() {
  const { packedBoxAndItemList } = usePackedBoxAndItemListStore();
  const { modelList, setModelList } = useModelStore();
  const packedBoxSize = packedBoxAndItemList[0].boxSize[1];
  const packedItemList = packedBoxAndItemList[0].itemList;

  const boxScale = [
    packedBoxSize[0] / BOX_SIZE.x,
    packedBoxSize[1] / BOX_SIZE.y,
    packedBoxSize[2] / BOX_SIZE.z,
  ];

  function calculateRotationType(rotationType) {
    const rotation = Math.PI / 2;
    switch (rotationType) {
      case 0:
        return [0, 0, 0];
      case 1:
        return [0, 0, rotation];
      case 2:
        return [rotation, 0, -rotation];
      case 3:
        return [0, rotation, 0];
      case 4:
        return [0, rotation, rotation];
      case 5:
        return [rotation, rotation, 0];
    }
  }

  const loader = new GLTFLoader();

  useEffect(() => {
    packedItemList.map(async (item) => {
      const itemUrl = `${import.meta.env.VITE_ITEM_URL}/packed_${item.itemName}.glb`;
      const position = item.position.map((value) => {
        return value / 100;
      });
      const glbModel = await loader.loadAsync(itemUrl);
      const scene = glbModel.scene;
      const scale = item.itemScale;
      const rotation = calculateRotationType(item.rotationType);

      setModelList({ scene, scale, position, rotation });
    });
  }, []);

  return (
    <Canvas camera={{ position: [7, 10, 0], fov: 100 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <BoxItem scale={boxScale} />
      {modelList.map((model, index) => {
        return (
          <primitive
            key={index}
            object={model.scene}
            position={model.position}
            scale={model.scale}
            rotation={model.rotation}
          />
        );
      })}
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
  );
}

export default PackedItems;
