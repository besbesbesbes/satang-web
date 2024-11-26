import { create } from "zustand";

const useMainStore = create((set) => ({
  isShowSatangLog: true, //Open log
  curPage: 1,
  setCurPage: (val) => set({ curPage: val }),
}));

export default useMainStore;
