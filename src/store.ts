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

const useActiveIndexStore = create<types.ActiveIndex & types.ActiveIndexAction>(
  (set) => ({
    activeIndex: null,
    setActiveIndex: (activeIndex) => set({ activeIndex }),
  }),
);

export { usePackedBoxAndItemListStore, useActiveIndexStore };
