import useMainStore from "../stores/mainStore";
import useUserStore from "../stores/userStore";
import { SatangIcon } from "../icons/mainIcon";
import { useEffect } from "react";
import consoleLog from "../utils/consoleLog";
const pageName = [
  "New Transaction",
  "Transactions",
  "Accounts",
  "Debtors",
  "Trips",
  "Reports",
  "Setting",
];

function Header() {
  const curPage = useMainStore((state) => state.curPage);
  const setCurPage = useMainStore((state) => state.setCurPage);
  const user = useUserStore((state) => state.user);
  const hdlPageChange = (pageIndex) => {
    setCurPage(pageIndex);
  };
  useEffect(() => {
    consoleLog("useEffect Header");
  }, [curPage]);
  return (
    <div className="w-full h-[40px] px-1 bg-prim-2 font-bold fixed top-0 flex gap-2 text-text-l justify-between items-center z-10 shadow-[0_5px_5px_rgba(0,0,0,0.1)]">
      <div className="w-[30px] h-[30px] p-1 bg-acct-6 rounded-full flex justify-center items-center">
        <SatangIcon className="text-text-l w-[30px] h-[30px]" />
      </div>
      <p className="flex-1 text-center">{pageName[curPage]}</p>
      <img
        src={user.profilePic}
        alt=""
        className="w-[30px] h-[30px] bg-prim-1 rounded-full object-cover cursor-pointer"
        onClick={() => hdlPageChange(6)}
      />
    </div>
  );
}

export default Header;
