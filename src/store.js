import { create } from "zustand";

const useItemListStore = create((set) => ({
  itemList: [],
  setItemList: (itemList) => set({ itemList }),
}));

const useItemStateStore = create((set) => ({
  isOpen: false,
  itemTitle: "",
  itemUrl: null,
  itemImageUrl: null,
  itemX: 0,
  itemY: 0,
  itemZ: 0,
  initItemX: 0,
  initItemY: 0,
  initItemZ: 0,
  setItemTitle: (itemTitle) => set({ itemTitle }),
  setIsOpen: (isOpen) => set({ isOpen }),
  setItemUrl: (itemUrl) => set({ itemUrl }),
  setItemImageUrl: (itemImageUrl) => set({ itemImageUrl }),
  setItemX: (itemX) => set({ itemX }),
  setItemY: (itemY) => set({ itemY }),
  setItemZ: (itemZ) => set({ itemZ }),
  setInitItemX: (initItemX) => set({ initItemX }),
  setInitItemY: (initItemY) => set({ initItemY }),
  setInitItemZ: (initItemZ) => set({ initItemZ }),
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

export {
  useItemListStore,
  useItemStateStore,
  useCustomizedItemListStore,
  useItemListIndexStore,
};
