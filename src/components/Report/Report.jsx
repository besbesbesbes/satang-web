import React, { useEffect } from "react";
import useMainStore from "../../stores/mainStore";
import consoleLog from "../../utils/consoleLog";

function Report() {
  const curPage = useMainStore((state) => state.curPage);
  useEffect(() => {
    if (curPage !== 5) {
      return;
    }
    consoleLog("useEffect Report");
  }, [curPage]);
  return (
    <div className="w-full h-[calc(100svh-80px)] bg-prim-5 absolute translate-x-[500%]">
      <p>Report</p>
    </div>
  );
}

export default Report;
