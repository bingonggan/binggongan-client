import { Group } from "three";

export interface Item {
  itemName: string;
  itemTitle: string;
  itemW: number;
  itemH: number;
  itemD: number;
  loadBear: number;
}

export interface ItemState extends Item {
  isOpen: boolean;
  itemUrl: string;
  initItemW: number;
  initItemH: number;
  initItemD: number;
}

export type ItemStateAction = {
  setItemName: (itemName: ItemState["itemName"]) => void;
  setItemTitle: (itemTitle: ItemState["itemTitle"]) => void;
  setIsOpen: (isOpen: ItemState["isOpen"]) => void;
  setItemUrl: (itemUrl: ItemState["itemUrl"]) => void;
  setItemW: (itemW: ItemState["itemW"]) => void;
  setItemH: (itemH: ItemState["itemH"]) => void;
  setItemD: (itemD: ItemState["itemD"]) => void;
  setLoadBear: (loadBear: ItemState["loadBear"]) => void;
  setInitItemW: (initItemW: ItemState["initItemW"]) => void;
  setInitItemH: (initItemH: ItemState["initItemH"]) => void;
  setInitItemD: (initItemD: ItemState["initItemD"]) => void;
};

export interface CustomizedItem extends Item {
  itemScaleW: number;
  itemScaleH: number;
  itemScaleD: number;
}

export type CustomizedItemList = {
  customizedItemList: CustomizedItem[];
};

export type CustomizedItemListAction = {
  addCustomizedItemList: (item: CustomizedItem) => void;
  deleteCustomizedItemList: (itemIndex: Number) => void;
  initiateCustomizedItemList: () => void;
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
