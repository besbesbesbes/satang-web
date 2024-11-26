import React, { useEffect } from "react";
import useMainStore from "../../stores/mainStore";
import consoleLog from "../../utils/consoleLog";
import TransFilter from "./TransFilter";
import TransMain from "./TransMain";

function Trans() {
  const curPage = useMainStore((state) => state.curPage);
  useEffect(() => {
    if (curPage !== 1) {
      return;
    }
    consoleLog("useEffect Trans");
  }, [curPage]);
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-prim-05 absolute translate-x-[100%]">
      <div className="w-full h-full relative flex flex-col">
        <TransFilter />
        <TransMain />
      </div>
    </div>
  );
}

export default Trans;
