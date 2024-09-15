import { create } from "zustand";

const useItemList = create((set) => ({
  itemList: [],
  setItemList: (itemList) => set({ itemList }),
}));

export { useItemList };
