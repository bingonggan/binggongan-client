import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import calculateRotationType from "./calculateRotationType";

import type { PackedBoxAndItem, ItemModelType } from "../types";

export default async function loadItemModels(
  itemLists: PackedBoxAndItem["itemList"][],
): Promise<ItemModelType[]> {
  const loader = new GLTFLoader();

  const allItems = itemLists.flatMap((itemList, index) =>
    itemList.map((item) => ({ item, index })),
  );

  const allModel = await Promise.all(
    allItems.map(async ({ item, index }) => {
      const itemUrl = `${import.meta.env.VITE_ITEM_URL}/${item.itemName}.glb`;
      const position = item.position.map(
        (value) => value / 100,
      ) as ItemModelType["position"];
      position[2] += index * 5.5;

      const glbModel = await loader.loadAsync(itemUrl);
      const scene = glbModel.scene;
      const scale = item.itemScale;
      const rotation = calculateRotationType(item.rotationType);
      const itemId = item.itemIndex;

      return { scene, scale, position, rotation, itemId };
    }),
  );

  return allModel;
}
