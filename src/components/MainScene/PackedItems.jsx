import { useEffect } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import ResultToolTip from "./ResultToolTip";
import {
  usePackedBoxAndItemListStore,
  useModelStore,
  useActiveIndexStore,
  useBoxStore,
} from "../../store";
import { BOX_SIZE } from "../../constants";

function PackedItems() {
  const { packedBoxAndItemList } = usePackedBoxAndItemListStore();
  const { modelList, setModelList } = useModelStore();
  const { boxList, setBoxList } = useBoxStore();
  const { activeIndex } = useActiveIndexStore();
  const boxSizeList = packedBoxAndItemList.map(
    (boxAndItem) => boxAndItem.boxSize[1],
  );
  const itemLists = packedBoxAndItemList.map(
    (boxAndItem) => boxAndItem.itemList,
  );

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
    itemLists.forEach((itemList, index) =>
      itemList.forEach(async (item) => {
        const itemUrl = `${import.meta.env.VITE_ITEM_URL}/${item.itemName}.glb`;
        const position = item.position.map((value) => {
          return value / 100;
        });
        position[2] += index * 5.5;
        const glbModel = await loader.loadAsync(itemUrl);
        const scene = glbModel.scene;
        const scale = item.itemScale;
        const rotation = calculateRotationType(item.rotationType);
        const originalIndex = item.itemIndex;

        setModelList({ scene, scale, position, rotation, originalIndex });
      }),
    );
  }, []);

  useEffect(() => {
    boxSizeList.forEach(async (boxSize, index) => {
      const boxUrl = import.meta.env.VITE_PACKED_BOX_ITEM;
      const scale = [
        boxSize[0] / BOX_SIZE.w,
        boxSize[1] / BOX_SIZE.h,
        boxSize[2] / BOX_SIZE.d,
      ];
      const position = [0, 0, index * 5.5];
      const glbModel = await loader.loadAsync(boxUrl);
      const scene = glbModel.scene;

      setBoxList({ scene, scale, position });
    });
  }, []);

  return (
    <>
      <Canvas camera={{ position: [7, 10, 5], fov: 100 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        {boxList.map((box, index) => {
          box.scene.traverse((child) => {
            if (child.isMesh) {
              child.material.transparent = true;
              child.material.opacity = 0.5;
            }
          });
          return (
            <primitive
              key={index}
              object={box.scene}
              position={box.position}
              scale={box.scale}
            />
          );
        })}
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
        <OrbitControls enablePan={false} maxDistance={300} />
      </Canvas>
      <ResultToolTip />
    </>
  );
}

export default PackedItems;
