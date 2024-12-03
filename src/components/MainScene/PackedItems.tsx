import { useEffect, useState } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import ResultToolTip from "./ResultToolTip";

import {
  usePackedBoxAndItemListStore,
  useSelectedIndexStore,
} from "../../store";

import loadItemModels from "../../utils/loadItemModels";
import loadBoxModels from "../../utils/loadBoxModels";

import type { ItemModelType, BoxModelType } from "../../types";

function PackedItems() {
  const { packedBoxAndItemList } = usePackedBoxAndItemListStore();
  const { selectedIndex } = useSelectedIndexStore();

  const [itemModelList, setItemModelList] = useState<ItemModelType[]>();
  const [boxModelList, setBoxModelList] = useState<BoxModelType[]>();

  const boxSizeList = packedBoxAndItemList.map(
    (boxAndItem) => boxAndItem.boxSize[1],
  );
  const itemLists = packedBoxAndItemList.map(
    (boxAndItem) => boxAndItem.itemList,
  );

  useEffect(() => {
    async function fetchItemModel() {
      const allItemModel = await loadItemModels(itemLists);
      setItemModelList(allItemModel);
    }

    fetchItemModel();
  }, []);

  useEffect(() => {
    async function fetchBoxModel() {
      const allBoxModel = await loadBoxModels(boxSizeList);
      setBoxModelList(allBoxModel);
    }

    fetchBoxModel();
  }, []);

  return (
    <>
      <Canvas camera={{ position: [7, 10, 5], fov: 100 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        {boxModelList &&
          boxModelList.map((box, index) => {
            box.scene.traverse((child) => {
              if (child instanceof THREE.Mesh) {
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
        {itemModelList &&
          itemModelList.map((model, index) => {
            model.scene.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                if (!child.userData.originalMaterial) {
                  child.userData.originalMaterial = child.material.clone();
                }

                if (model.itemId === selectedIndex) {
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
        <OrbitControls enablePan={false} maxDistance={30} />
      </Canvas>
      <ResultToolTip />
    </>
  );
}

export default PackedItems;
