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

type BoxSize = [string, [number, number, number]];

type PackedItem = {
  itemIndex: number;
  itemName: string;
  itemScale: [number, number, number];
  position: [number, number, number];
  rotationType: number;
};

export type PackedBoxAndItem = {
  boxSize: BoxSize;
  itemList: PackedItem[];
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

export type ItemModelType = {
  itemId: number;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  scene: Group;
};

export type BoxModelType = {
  position: [number, number, number];
  scale: [number, number, number];
  scene: Group;
};

export type SelectedIndex = {
  selectedIndex: Number | null;
};

export type selectedIndexAction = {
  setSelectedIndex: (selectedIndex: SelectedIndex["selectedIndex"]) => void;
};
