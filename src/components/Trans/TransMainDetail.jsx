import React, { useState } from "react";
import { format } from "date-fns";
import Tag from "../common/Tag";
import { motion, AnimatePresence } from "framer-motion";
import TransMainDetailSub from "./TransMainDetailSub";
import formatNumber from "../../utils/formatNumber";

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

  const { icon, color, txt } = typeMapping[tran?.type] || {};

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

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd-MMM-yy : HH:MM");
  };

  return (
    <motion.div
      initial={{ height: 33 }}
      animate={{ height: isShowDetail ? "auto" : 33 }}
      exit={{ height: 33 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-full px-1 bg-prim-6 flex items-start cursor-pointer my-1 rounded-[16px] shadow-sm"
      onClick={hdlShowDetail}
    >
      <div className="w-full flex flex-col items-center">
        {/* First Line */}
        <div className="w-full flex items-center">
          <div className="w-full flex flex-wrap">
            <Tag icon={icon} txt={txt} color={color} isShowTxt={false} />
            {renderTransSub}
          </div>
          <div className="min-w-[160px] flex justify-between px-1 font-bold">
            <div className="text-acct-2">
              {formatNumber(tran.transSubIsInTrue, "plus")}
            </div>
            <div className="text-acct-7">
              {formatNumber(tran.transSubIsInFalse, "minus")}
            </div>
          </div>
        </div>
        {/* Detail */}
        <AnimatePresence>
          {isShowDetail && (
            <motion.div
              className="w-full flex flex-col items-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <hr className="w-full mt-[2px] border-t border-prim-4" />
              <div className="w-full flex items-center gap-1 justify-between">
                <Tag icon={icon} txt={txt} color={color} isShowTxt={true} />
                <div className="text-text-d text-opacity-50 font-bold">
                  {formatDateTime(tran.time)}
                </div>
              </div>
              {/* transSub */}
              {tran?.TransSub.map((el, idx) => (
                <div key={idx} className="w-full">
                  <TransMainDetailSub transSub={el} />
                </div>
              ))}
              {/* memo area */}
              <div className="w-full">
                <hr className="w-full mt-[2px] border-t border-prim-4" />
                <div className="w-full flex">
                  {/* memo */}
                  <div className="w-full px-2 py-1">
                    <p>{tran?.memo}</p>
                  </div>
                  {/* button */}
                  <div className="flex text-text-l self-end">
                    <Tag
                      icon="EditIcon"
                      txt="Edit"
                      color={6}
                      isShowTxt={false}
                    />
                    <Tag
                      icon="DeleteIcon"
                      txt="Delete"
                      color={7}
                      isShowTxt={false}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default TransMainDetail;
