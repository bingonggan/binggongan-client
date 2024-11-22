import { create } from "zustand";
import type * as types from "./types";

const usePackedBoxAndItemListStore = create<
  types.PackedBoxAndItemList & types.PackedBoxAndItemListAction
>((set) => ({
  packedBoxAndItemList: [],
  isPacked: false,
  setPackedBoxAndItemList: (packedBoxAndItemList) =>
    set({ packedBoxAndItemList }),
  setIsPacked: (isPacked) => set({ isPacked }),
}));

const useSelectedIndexStore = create<
  types.SelectedIndex & types.selectedIndexAction
>((set) => ({
  selectedIndex: null,
  setSelectedIndex: (selectedIndex) => set({ selectedIndex }),
}));

export { usePackedBoxAndItemListStore, useSelectedIndexStore };
