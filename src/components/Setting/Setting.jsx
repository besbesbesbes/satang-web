import React, { useEffect } from "react";
import useMainStore from "../../stores/mainStore";
import consoleLog from "../../utils/consoleLog";
import IconsList from "../IconsList";
import useUserStore from "../../stores/userStore";

function Setting() {
  const user = useUserStore((state) => state.user);
  const curPage = useMainStore((state) => state.curPage);
  const setCurPage = useMainStore((state) => state.setCurPage);
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
