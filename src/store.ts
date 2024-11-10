import { create } from "zustand";
import type * as stateTypes from "./stateTypes";

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
  usePackedBoxAndItemListStore,
  useModelStateStore,
  useBoxStateStore,
  useActiveIndexStore,
};
