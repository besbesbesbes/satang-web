import React, { useEffect } from "react";
import useMainStore from "../../stores/mainStore";
import consoleLog from "../../utils/consoleLog";
import IconsList from "../IconsList";

function Setting() {
  const curPage = useMainStore((state) => state.curPage);
  useEffect(() => {
    if (curPage !== 5) {
      return;
    }
    consoleLog("useEffect Setting");
  }, [curPage]);
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-prim-5 absolute translate-x-[500%]">
      <IconsList />
    </div>
  );
}

export default Setting;
