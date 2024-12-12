import React, { useEffect, useState } from "react";
import useMainStore from "../../stores/mainStore";
import consoleLog from "../../utils/consoleLog";
import TransFilter from "./TransFilter";
import TransMain from "./TransMain";
import { getTransApi } from "../../apis/trans-api";

function Trans() {
  const curPage = useMainStore((state) => state.curPage);
  const [trans, setTrans] = useState([]);
  const getTrans = async () => {
    consoleLog("call getTrans");
    try {
      const result = await getTransApi({ test: "test" });
      console.log(result.data.trans);
      setTrans(result.data.trans);
    } catch (err) {
      console.log(err?.response?.data?.error || err.message);
    }
  };
  useEffect(() => {
    if (curPage !== 1) {
      return;
    }
    consoleLog("useEffect Trans");
    getTrans();
  }, [curPage]);
  return (
    <div className="w-full h-[calc(100svh-80px)] bg-prim-5 absolute translate-x-[100%]">
      <div className="w-full h-full relative flex flex-col">
        <TransFilter />
        <TransMain trans={trans} />
      </div>
    </div>
  );
}

export default Trans;
