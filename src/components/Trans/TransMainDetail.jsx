import React, { useState } from "react";
import Tag from "../common/Tag";
import { motion, AnimatePresence } from "framer-motion";

function TransMainDetail({ tran }) {
  const [isShowTxt, setIsShowTxt] = useState(false);
  const [isShowDetail, setIsShowDetail] = useState(false);

  const hdlShowDetail = () => {
    setIsShowTxt(!isShowTxt);
    setIsShowDetail(!isShowDetail);
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
        isShowTxt={false}
      />
      {el?.cat && (
        <Tag
          icon={`Icon${el?.cat?.icon}`}
          color={el?.cat?.color}
          txt={el?.cat?.name}
          isShowTxt={true}
          isOutline={true}
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
    <AnimatePresence initial={false}>
      <motion.div
        initial={{ height: 33, opacity: 0 }}
        animate={
          isShowDetail
            ? { height: 100, opacity: 1 }
            : { height: 33, opacity: 1 }
        }
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full px-1 bg-prim-6 flex items-start cursor-pointer my-1 rounded-[16px] shadow-sm"
        onClick={hdlShowDetail}
      >
        <div className="w-full flex items-center">
          <div className="w-full flex flex-wrap">
            <Tag icon={icon} txt={txt} color={color} isShowTxt={false} />
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
      </motion.div>
    </AnimatePresence>
  );
}

export default TransMainDetail;
