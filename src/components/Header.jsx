import useMainStore from "../stores/mainStore";
import { icons } from "../icons/mainIcon";
const pageName = [
  "New Transaction",
  "Transactions",
  "Accounts",
  "Debtors",
  "Reports",
  "Setting",
];

function Header() {
  const curPage = useMainStore((state) => state.curPage);
  const { satangIcon: SatangIcon } = icons;
  return (
    <div className="w-full h-[40px] px-1 bg-prim-02 font-bold fixed top-0 flex gap-2 text-text-l justify-between items-center z-10 shadow-[0_5px_5px_rgba(0,0,0,0.1)]">
      <div className="w-[30px] h-[30px] p-1 bg-acct-06 rounded-full flex justify-center items-center">
        <SatangIcon className="text-text-l w-[30px] h-[30px]" />
      </div>
      <p className="flex-1 text-center">{pageName[curPage]}</p>
      <div className="w-[30px] h-[30px] p-1 bg-prim-01 rounded-full flex justify-center items-center">
        P
      </div>
    </div>
  );
}

export default Header;
