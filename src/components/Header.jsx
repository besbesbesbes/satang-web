import useMainStore from "../stores/mainStore";
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
  return (
    <div className="w-full h-[40px] px-2 bg-prim-02 font-bold fixed top-0 flex gap-2 text-text-l justify-between items-center">
      <div className="w-[25px] h-[25px] p-1 bg-prim-01 rounded-full flex justify-center items-center">
        L
      </div>
      <p className="flex-1 text-center">{pageName[curPage]}</p>
      <div className="w-[25px] h-[25px] p-1 bg-prim-01 rounded-full flex justify-center items-center">
        P
      </div>
    </div>
  );
}

export default Header;
