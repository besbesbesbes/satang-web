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
    <div className="w-full h-[calc(100vh-80px)] bg-prim-05 absolute">
      <p className="py-[50px] bg-prim-06">AddTran</p>
    </div>
  );
}

export default AddTran;
