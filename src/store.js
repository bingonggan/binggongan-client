import { create } from "zustand";

const useItemListStore = create((set) => ({
  itemList: [],
  setItemList: (itemList) => set({ itemList }),
}));

const useItemStateStore = create((set) => ({
  isOpen: false,
  itemName: "",
  itemTitle: "",
  itemUrl: null,
  itemImageUrl: null,
  itemW: 0,
  itemH: 0,
  itemD: 0,
  initItemW: 0,
  initItemH: 0,
  initItemD: 0,
  setItemName: (itemName) => set({ itemName }),
  setItemTitle: (itemTitle) => set({ itemTitle }),
  setIsOpen: (isOpen) => set({ isOpen }),
  setItemUrl: (itemUrl) => set({ itemUrl }),
  setItemImageUrl: (itemImageUrl) => set({ itemImageUrl }),
  setItemW: (itemW) => set({ itemW: parseInt(itemW, 10) }),
  setItemH: (itemH) => set({ itemH: parseInt(itemH, 10) }),
  setItemD: (itemD) => set({ itemD: parseInt(itemD, 10) }),
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

const useItemListIndexStore = create((set) => ({
  itemListIndex: 0,
  increaseItemListIndex: () =>
    set((state) => ({ itemListIndex: state.itemListIndex + 1 })),
  decreaseItemListIndex: () =>
    set((state) => ({ itemListIndex: state.itemListIndex - 1 })),
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

export {
  useItemListStore,
  useItemStateStore,
  useCustomizedItemListStore,
  useItemListIndexStore,
  usePackedBoxAndItemListStore,
  useModelStore,
};
