import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import { BoxModelType } from "../types";
import { BOX_SIZE } from "../constants";

type boxSizeListType = [number, number, number][];

export default async function loadBoxModels(
  boxSizeList: boxSizeListType,
): Promise<BoxModelType[]> {
  const boxUrl = import.meta.env.VITE_PACKED_BOX_ITEM;

  const loader = new GLTFLoader();

  const allBoxes = await Promise.all(
    boxSizeList.map(async (boxSize, index) => {
      const scale: [number, number, number] = [
        boxSize[0] / BOX_SIZE.w,
        boxSize[1] / BOX_SIZE.h,
        boxSize[2] / BOX_SIZE.d,
      ];
      const position: [number, number, number] = [0, 0, index * 5.5];
      const glbModel = await loader.loadAsync(boxUrl);
      const scene = glbModel.scene;

      return { scene, scale, position };
    }),
  );

  return allBoxes;
}
