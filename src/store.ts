import { create } from "zustand";
import type * as stateTypes from "./stateTypes";

const useItemStateStore = create<
  stateTypes.ItemState & stateTypes.ItemStateAction
>((set) => ({
  isOpen: false,
  itemName: "",
  itemTitle: "",
  itemUrl: null,
  itemW: 0,
  itemH: 0,
  itemD: 0,
  loadBear: 0,
  initItemW: 0,
  initItemH: 0,
  initItemD: 0,
  setItemName: (itemName) => set({ itemName }),
  setItemTitle: (itemTitle) => set({ itemTitle }),
  setIsOpen: (isOpen) => set({ isOpen }),
  setItemUrl: (itemUrl) => set({ itemUrl }),
  setItemW: (itemW) => set({ itemW }),
  setItemH: (itemH) => set({ itemH }),
  setItemD: (itemD) => set({ itemD }),
  setLoadBear: (loadBear) => set({ loadBear }),
  setInitItemW: (initItemW) => set({ initItemW }),
  setInitItemH: (initItemH) => set({ initItemH }),
  setInitItemD: (initItemD) => set({ initItemD }),
}));

const useCustomizedItemListStore = create<
  stateTypes.CustomizedItemList & stateTypes.CustomizedItemListAction
>((set) => ({
  customizedItemList: [],
  addCustomizedItemList: (item) =>
    set((state) => ({
      customizedItemList: [...state.customizedItemList, item],
    })),
  deleteCustomizedItemList: (itemIndex) =>
    set((state) => ({
      customizedItemList: state.customizedItemList.filter(
        (_, index) => itemIndex !== index,
      ),
    })),
  initiateCustomizedItemList: () => set(() => ({ customizedItemList: [] })),
}));

const usePackedBoxAndItemListStore = create<
  stateTypes.PackedBoxAndItemList & stateTypes.PackedBoxAndItemListAction
>((set) => ({
  packedBoxAndItemList: [],
  isPacked: false,
  setPackedBoxAndItemList: (packedBoxAndItemList) =>
    set({ packedBoxAndItemList }),
  setIsPacked: (isPacked) => set({ isPacked }),
}));

const useModelStateStore = create<
  stateTypes.ModelState & stateTypes.ModelAction
>((set) => ({
  modelList: [],
  setModelList: (model) =>
    set((state) => ({ modelList: [...state.modelList, model] })),
  initiateModelList: () => set({ modelList: [] }),
}));

const useBoxStateStore = create<stateTypes.BoxState & stateTypes.BoxAction>(
  (set) => ({
    boxList: [],
    setBoxList: (box) => set((state) => ({ boxList: [...state.boxList, box] })),
    initiateBoxList: () => set({ boxList: [] }),
  }),
);

const useActiveIndexStore = create<
  stateTypes.ActiveIndex & stateTypes.ActiveIndexAction
>((set) => ({
  activeIndex: null,
  setActiveIndex: (activeIndex) => set({ activeIndex }),
}));

export {
  useItemStateStore,
  useCustomizedItemListStore,
  usePackedBoxAndItemListStore,
  useModelStateStore,
  useBoxStateStore,
  useActiveIndexStore,
};
