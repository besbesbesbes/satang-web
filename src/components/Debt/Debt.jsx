import React, { useEffect } from "react";
import useMainStore from "../../stores/mainStore";
import consoleLog from "../../utils/consoleLog";

function Debt() {
  const curPage = useMainStore((state) => state.curPage);
  useEffect(() => {
    if (curPage !== 3) {
      return;
    }
    consoleLog("useEffect Debt");
  }, [curPage]);
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-prim-5 absolute translate-x-[300%]">
      <p>Debt</p>
    </div>
  );
}

export default Debt;
