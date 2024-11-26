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
            className="absolute inset-0 bg-acct-06 z-[-1]"
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
  const hdlPageChange = (pageIndex) => {
    setCurPage(pageIndex);
  };

  useEffect(() => {
    consoleLog("useEffect Footer");
  }, [curPage]);
  return (
    <div className="w-full h-[40px] bg-prim-02 fixed bottom-0 text-text-l text-xs grid grid-cols-6">
      <MenuBox
        hdlPageChange={hdlPageChange}
        pageIdx={0}
        txt="New"
        curPage={curPage}
        icon={icons.addTranIcon}
      />
      <MenuBox
        hdlPageChange={hdlPageChange}
        pageIdx={1}
        txt="Transactions"
        curPage={curPage}
        icon={icons.transIcon}
      />
      <MenuBox
        hdlPageChange={hdlPageChange}
        pageIdx={2}
        txt="Accounts"
        curPage={curPage}
        icon={icons.acctIcon}
      />
      <MenuBox
        hdlPageChange={hdlPageChange}
        pageIdx={3}
        txt="Debtors"
        curPage={curPage}
        icon={icons.debtIcon}
      />
      <MenuBox
        hdlPageChange={hdlPageChange}
        pageIdx={4}
        txt="Reports"
        curPage={curPage}
        icon={icons.reportIcon}
      />
      <MenuBox
        hdlPageChange={hdlPageChange}
        pageIdx={5}
        txt="Setting"
        curPage={curPage}
        icon={icons.settingIcon}
      />
    </div>
  );
}

export default Footer;
