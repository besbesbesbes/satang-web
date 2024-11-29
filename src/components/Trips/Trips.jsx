import React, { useEffect } from "react";
import useMainStore from "../../stores/mainStore";
import consoleLog from "../../utils/consoleLog";

function Trips() {
  const curPage = useMainStore((state) => state.curPage);
  useEffect(() => {
    if (curPage !== 4) {
      return;
    }
    consoleLog("useEffect Trips");
  }, [curPage]);
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-prim-5 absolute translate-x-[400%]">
      <p>Trips</p>
    </div>
  );
}

export default Trips;
