import { create } from "zustand";


export const useLayoutStore = create((set) => ({
    layout: "grid",
    toggleLayout: (layout) => set(state => ({ layout })),
  }));

export const useCollapseStore = create((set) => ({
    collapse: false,
    toggleCollapse: () => set(state => ({ collapse: !state.collapse })),
  }));