import React from "react";
import Tag from "../common/Tag";
import formatNumber from "../../utils/formatNumber";

function TransMainDetailSub({ transSub }) {
  return (
    <div className="w-full grid grid-cols-4 items-center auto-rows-min">
      {/* account */}
      <Tag
        icon={`Icon${transSub?.acct?.icon}`}
        color={transSub?.acct?.color}
        txt={transSub?.acct?.name}
        isShowTxt={true}
        isOutline={true}
        isBorder={false}
        isShadow={false}
      />
      {/* category */}
      {transSub?.cat ? (
        <Tag
          icon={`Icon${transSub?.cat?.icon}`}
          color={transSub?.cat?.color}
          txt={transSub?.cat?.name}
          isShowTxt={true}
          isOutline={true}
          isBorder={false}
          isShadow={false}
        />
      ) : (
        <div></div>
      )}
      {/* trip */}
      {transSub?.trip ? (
        <Tag
          icon={`Icon${transSub?.trip?.icon}`}
          color={transSub?.trip?.color}
          txt={transSub?.trip?.name}
          isShowTxt={true}
          isOutline={true}
          isBorder={false}
          isShadow={false}
        />
      ) : (
        <div></div>
      )}
      {/* amt */}
      <div
        className={`text-right pr-1 font-bold ${
          transSub?.isIn ? "text-acct-2" : "text-acct-7"
        }`}
      >
        {formatNumber(transSub?.amt, transSub?.isIn ? "plus" : "minus")}
      </div>
    </div>
  );
}

export default TransMainDetailSub;
