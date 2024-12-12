import React, { useEffect } from "react";
import useMainStore from "../../stores/mainStore";
import consoleLog from "../../utils/consoleLog";

function Acct() {
  const curPage = useMainStore((state) => state.curPage);
  useEffect(() => {
    if (curPage !== 2) {
      return;
    }
    consoleLog("useEffect Acct");
  }, [curPage]);
  return (
    <div className="w-full h-[calc(100svh-80px)] bg-prim-5 absolute translate-x-[200%]">
      <p>Acct</p>
    </div>
  );
}

export default Acct;
