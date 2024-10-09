import { create } from "zustand";

const useItemStateStore = create((set) => ({
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

const useCustomizedItemListStore = create((set) => ({
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

const usePackedBoxAndItemListStore = create((set) => ({
  packedBoxAndItemList: [],
  isPacked: false,
  setPackedBoxAndItemList: (packedBoxAndItemList) =>
    set({ packedBoxAndItemList }),
  setIsPacked: (isPacked) => set({ isPacked }),
}));

const useModelStore = create((set) => ({
  modelList: [],
  setModelList: (model) =>
    set((state) => ({ modelList: [...state.modelList, model] })),
  initiateModelList: () => set({ modelList: [] }),
}));

const useBoxStore = create((set) => ({
  boxList: [],
  setBoxList: (box) => set((state) => ({ boxList: [...state.boxList, box] })),
  initiateBoxList: () => set({ boxList: [] }),
}));

const useActiveIndexStore = create((set) => ({
  activeIndex: null,
  setActiveIndex: (activeIndex) => set({ activeIndex }),
}));

export {
  useItemStateStore,
  useCustomizedItemListStore,
  usePackedBoxAndItemListStore,
  useModelStore,
  useBoxStore,
  useActiveIndexStore,
};
