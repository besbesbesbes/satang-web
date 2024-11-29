import { create } from "zustand";

const useMainStore = create((set) => ({
  isShowSatangLog: true, //Open log
  curPage: null,
  setCurPage: (val) => set({ curPage: val }),
}));

export default useMainStore;
