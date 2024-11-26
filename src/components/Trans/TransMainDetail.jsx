import React, { useState } from "react";
import Tag from "../common/Tag";

function TransMainDetail() {
  const [isShowTxt, setIsShowTxt] = useState(false);
  const hdlShowDetail = () => {
    setIsShowTxt(!isShowTxt);
    setIsShowDetail(!isShowDetail);
  };
  return (
    <div
      className="w-full min-h-[30px] px-1 bg-prim-6 flex flex-col items-center cursor-pointer border-b border-acct-6 flex-wrap transition-all duration-300"
      onClick={hdlShowDetail}
    >
      <div className="w-full flex flex-wrap">
        <Tag icon="AdjustIcon" txt="Test1" color="6" isShowTxt={isShowTxt} />
        <Tag icon="AdjustIcon" txt="Test2" color="7" isShowTxt={isShowTxt} />
        <Tag icon="AdjustIcon" txt="Test3" color="2" isShowTxt={isShowTxt} />
        <Tag icon="AdjustIcon" txt="Test3" color="2" isShowTxt={isShowTxt} />
        <Tag icon="AdjustIcon" txt="Test3" color="2" isShowTxt={isShowTxt} />
        <Tag icon="AdjustIcon" txt="Test3" color="2" isShowTxt={isShowTxt} />
        <Tag icon="AdjustIcon" txt="Test3" color="2" isShowTxt={isShowTxt} />
      </div>
    </div>
  );
}

export default TransMainDetail;
