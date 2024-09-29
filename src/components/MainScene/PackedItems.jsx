import { useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import {
  usePackedBoxAndItemListStore,
  useModelStore,
  useActiveIndexStore,
} from "../../store";
import { BOX_SIZE } from "../../constants";
import BoxItem from "./BoxItem";

function PackedItems() {
  const { packedBoxAndItemList } = usePackedBoxAndItemListStore();
  const { modelList, setModelList } = useModelStore();
  const { activeIndex } = useActiveIndexStore();
  const packedBoxSize = packedBoxAndItemList[0].boxSize[1];
  const packedItemList = packedBoxAndItemList[0].itemList;

  const boxScale = [
    packedBoxSize[0] / BOX_SIZE.w,
    packedBoxSize[1] / BOX_SIZE.h,
    packedBoxSize[2] / BOX_SIZE.d,
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
        return [rotation, 0, 0];
    }
  }

  const loader = new GLTFLoader();

  useEffect(() => {
    packedItemList.map(async (item) => {
      const itemUrl = `${import.meta.env.VITE_ITEM_URL}/${item.itemName}.glb`;
      const position = item.position.map((value) => {
        return value / 100;
      });
      const glbModel = await loader.loadAsync(itemUrl);
      const scene = glbModel.scene;
      const scale = item.itemScale;
      const rotation = calculateRotationType(item.rotationType);
      const originalIndex = item.itemIndex;

      setModelList({ scene, scale, position, rotation, originalIndex });
    });
  }, []);

  return (
    <Canvas camera={{ position: [7, 10, 0], fov: 100 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <BoxItem scale={boxScale} />
      {modelList.map((model, index) => {
        model.scene.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            if (!child.userData.originalMaterial) {
              child.userData.originalMaterial = child.material.clone();
            }

            if (model.originalIndex == activeIndex) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0x00ff00,
              });
            } else {
              child.material = child.userData.originalMaterial;
            }
          }
        });

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
      <OrbitControls />
    </Canvas>
  );
}

export default PackedItems;
