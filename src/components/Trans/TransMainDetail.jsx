import React, { useState } from "react";
import Tag from "../common/Tag";

function TransMainDetail() {
  const [isShowTxt, setIsShowTxt] = useState(false);
  const hdlShowDetail = () => {
    setIsShowTxt(!isShowTxt);
  };
  return (
    <div
      className="w-full min-h-[30px] px-1 bg-prim-6 flex flex-col items-center cursor-pointer border-b border-acct-6 flex-wrap"
      onClick={hdlShowDetail}
    >
      <div className="w-full flex flex-wrap">
        <Tag icon="ExpenseIcon" txt="a" color="6" isShowTxt={isShowTxt} />
        <Tag icon="Icon27" txt="bb" color="7" isShowTxt={isShowTxt} />
        <Tag icon="Icon26" txt="ccc" color="2" isShowTxt={isShowTxt} />
        <Tag icon="Icon1" txt="Test3" color="13" isShowTxt={isShowTxt} />
      </div>
    </div>
  );
}

export default TransMainDetail;
