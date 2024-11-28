import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useMainStore from "../stores/mainStore";
import consoleLog from "../utils/consoleLog";
import { icons } from "../icons/mainIcon";

function MenuBox({ hdlPageChange, pageIdx, txt, curPage, icon: Icon }) {
  const isActive = pageIdx === curPage;
  return (
    <motion.button
      onClick={() => hdlPageChange(pageIdx)}
      className="w-full relative overflow-hidden flex flex-col items-center justify-center"
    >
      {Icon && <Icon className="w-[25px] h-[25px] mb-[-4px]" />}
      <p className="text-[8px] font-bold my-[-2px] translate-y-[3px]">{txt}</p>
      <AnimatePresence>
        {isActive && (
          <motion.div
            layoutId="bg-highlight"
            className="absolute inset-0 bg-acct-6 z-[-1]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function Footer() {
  const curPage = useMainStore((state) => state.curPage);
  const setCurPage = useMainStore((state) => state.setCurPage);
  const { AddIcon } = icons;
  const hdlPageChange = (pageIndex) => {
    setCurPage(pageIndex);
  };

  useEffect(() => {
    consoleLog("useEffect Footer");
  }, [curPage]);
  return (
    <div className="w-full h-[40px] bg-prim-2 fixed bottom-0 text-text-l text-xs grid grid-cols-5 z-10 shadow-[0_-5px_5px_rgba(0,0,0,0.1)]">
      {/* <MenuBox
        hdlPageChange={hdlPageChange}
        pageIdx={0}
        txt="New"
        curPage={curPage}
        icon={icons.AddTranIcon}
      /> */}
      <MenuBox
        hdlPageChange={hdlPageChange}
        pageIdx={1}
        txt="Transactions"
        curPage={curPage}
        icon={icons.TransIcon}
      />
      <MenuBox
        hdlPageChange={hdlPageChange}
        pageIdx={2}
        txt="Accounts"
        curPage={curPage}
        icon={icons.AcctIcon}
      />
      <MenuBox
        hdlPageChange={hdlPageChange}
        pageIdx={3}
        txt="Debtors"
        curPage={curPage}
        icon={icons.DebtIcon}
      />
      <MenuBox
        hdlPageChange={hdlPageChange}
        pageIdx={4}
        txt="Reports"
        curPage={curPage}
        icon={icons.ReportIcon}
      />
      <MenuBox
        hdlPageChange={hdlPageChange}
        pageIdx={5}
        txt="Setting"
        curPage={curPage}
        icon={icons.SettingIcon}
      />
      {/* addButton */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-[45px] cursor-pointer hover:scale-105 transition-all duration-300"
        onClick={() => hdlPageChange(0)}
      >
        <AnimatePresence>
          {curPage === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className=" w-fit h-[30px] p-2 bg-acct-6  rounded-full flex items-center justify-center"
            >
              <AddIcon className="w-[25px] h-[25px] font-bold" />
              <p className="text-lg font-bold px-1">New</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Footer;
