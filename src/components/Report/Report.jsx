import React, { useEffect } from "react";
import useMainStore from "../../stores/mainStore";
import consoleLog from "../../utils/consoleLog";

function Report() {
  const curPage = useMainStore((state) => state.curPage);
  useEffect(() => {
    if (curPage !== 4) {
      return;
    }
    consoleLog("useEffect Report");
  }, [curPage]);
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-prim-05 absolute translate-x-[400%]">
      <p>Report</p>
    </div>
  );
}

export default Report;
