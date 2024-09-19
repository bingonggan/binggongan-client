import { create } from "zustand";

const useItemList = create((set) => ({
  itemList: [],
  setItemList: (itemList) => set({ itemList }),
}));

const useItemState = create((set) => ({
  isOpen: false,
  itemUrl: null,
  itemX: 0,
  itemY: 0,
  itemZ: 0,
  initItemX: 0,
  initItemY: 0,
  initItemZ: 0,
  setIsOpen: (isOpen) => set({ isOpen }),
  setItemUrl: (itemUrl) => set({ itemUrl }),
  setItemX: (itemX) => set({ itemX }),
  setItemY: (itemY) => set({ itemY }),
  setItemZ: (itemZ) => set({ itemZ }),
  setInitItemX: (initItemX) => set({ initItemX }),
  setInitItemY: (initItemY) => set({ initItemY }),
  setInitItemZ: (initItemZ) => set({ initItemZ }),
}));

export { useItemList, useItemState };
