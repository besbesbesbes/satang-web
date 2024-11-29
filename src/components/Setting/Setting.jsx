import React, { useEffect } from "react";
import useMainStore from "../../stores/mainStore";
import consoleLog from "../../utils/consoleLog";
import IconsList from "../IconsList";

function Setting() {
  const curPage = useMainStore((state) => state.curPage);
  const hdlLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  useEffect(() => {
    if (curPage !== 6) {
      return;
    }
    consoleLog("useEffect Setting");
  }, [curPage]);
  return (
    <div className="w-full h-[calc(100vh-80px)] bg-prim-5 absolute translate-x-[600%]">
      <button onClick={hdlLogout}>LogOut</button>
      <IconsList />
    </div>
  );
}

export default Setting;
