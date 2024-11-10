import { Group } from "three";

export interface ItemState {
  itemName: string;
  initItemTitle: string;
  initItemW: number;
  initItemH: number;
  initItemD: number;
  loadBear: number;
  itemUrl: string;
}

export interface CustomizedItem extends Partial<ItemState> {
  itemTitle: string;
  itemW: number;
  itemH: number;
  itemD: number;
  itemScaleW: number;
  itemScaleH: number;
  itemScaleD: number;
}

export type CustomizedItemList = {
  customizedItemList: CustomizedItem[];
};

type BoxSize = [string, [number, number, number]];

type ResultItem = {
  itemIndex: number;
  itemName: string;
  itemScale: [number, number, number];
  position: [number, number, number];
  rotationType: number;
};

type PackedBoxAndItem = {
  boxSize: BoxSize;
  itemList: ResultItem[];
};

export type PackedBoxAndItemList = {
  packedBoxAndItemList: PackedBoxAndItem[];
  isPacked: boolean;
};

export type PackedBoxAndItemListAction = {
  setPackedBoxAndItemList: (
    packedBoxAndItemList: PackedBoxAndItemList["packedBoxAndItemList"],
  ) => void;
  setIsPacked: (isPacked: PackedBoxAndItemList["isPacked"]) => void;
};

export type Model = {
  originalIndex: number;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  scene: Group;
};

export type ModelState = {
  modelList: Model[];
};

export type ModelAction = {
  setModelList: (model: Model) => void;
  initiateModelList: () => void;
};

type Box = {
  position: [number, number, number];
  scale: [number, number, number];
  scene: Group;
};

export type BoxState = {
  boxList: Box[];
};

export type BoxAction = {
  setBoxList: (box: Box) => void;
  initiateBoxList: () => void;
};

export type ActiveIndex = {
  activeIndex: Number;
};

export type ActiveIndexAction = {
  setActiveIndex: (activeIndex: ActiveIndex["activeIndex"]) => void;
};
