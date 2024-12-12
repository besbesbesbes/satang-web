import React, { useEffect } from "react";
import useMainStore from "../../stores/mainStore";
import consoleLog from "../../utils/consoleLog";

function AddTran() {
  const curPage = useMainStore((state) => state.curPage);
  useEffect(() => {
    if (curPage !== 0) {
      return;
    }
    consoleLog("useEffect AddTran");
  }, [curPage]);
  return (
    <div className="w-full h-[calc(100svh-80px)] bg-prim-5 absolute flex flex-col justify-between">
      {/* detail */}
      <div className="h-full flex justify-end items-end">Top</div>
      {/* input area */}
      <div className="w-full h-[200px] bg-prim-1 flex justify-end items-end">
        Bottom
      </div>
    </div>
  );
}

export default AddTran;
