import React, { useState } from "react";
import Tag from "../common/Tag";

function TransMainDetail({ tran }) {
  const [isShowTxt, setIsShowTxt] = useState(false);

  const hdlShowDetail = () => {
    setIsShowTxt(!isShowTxt);
  };

  const typeMapping = {
    EXPENSE: { icon: "ExpenseIcon", color: "7", txt: "Expense" },
    INCOME: { icon: "IncomeIcon", color: "2", txt: "Income" },
    TRANSFER: { icon: "TransferIcon", color: "10", txt: "Transfer" },
    ADJUST: { icon: "AdjustIcon", color: "9", txt: "Adjust" },
  };

  // Destructure and provide fallback in case tran.type is undefined
  const { icon, color, txt } = typeMapping[tran?.type] || {};

  // Check if tran.TransSub exists and is an array
  const renderTransSub = tran?.TransSub?.map((el, idx) => (
    <div key={idx} className="flex">
      <Tag
        icon={`Icon${el?.acct?.icon}`}
        color={el?.acct?.color}
        txt={el?.acct?.name}
        isShowTxt={isShowTxt}
      />
      {el?.cat && (
        <Tag
          icon={`Icon${el?.cat?.icon}`}
          color={el?.cat?.color}
          txt={el?.cat?.name}
          isShowTxt={isShowTxt}
        />
      )}
    </div>
  ));

  const formatNumber = (value, type) => {
    if (value === 0) {
      return ""; // Return empty string for zero
    }

    const absValue = Math.abs(value).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

    if (type === "minus") {
      return `-${absValue}`; // Prefix with a minus for "minus" type
    } else {
      return `+${absValue}`; // No prefix for "plus" type
    }
  };

  return (
    <div
      className="w-full min-h-[30px] px-1 bg-prim-6 flex items-center cursor-pointer my-1 rounded-full"
      onClick={hdlShowDetail}
    >
      <div className="w-full flex items-center">
        <div className="w-full flex flex-wrap ">
          <Tag icon={icon} txt={txt} color={color} isShowTxt={isShowTxt} />
          {renderTransSub}
        </div>
        <div className="min-w-[140px] flex justify-between px-1 font-bold">
          <div className="text-acct-2">
            {formatNumber(tran.transSubIsInTrue, "plus")}
          </div>
          <div className="text-acct-7">
            {formatNumber(tran.transSubIsInFalse, "minus")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransMainDetail;
