import { SettingIcon } from "../../icons/mainIcon";
import { ExpenseIcon, IncomeIcon } from "../../icons/catIcon";
import InputButton from "../common/InputButton";

function AddTranInputCatIn({ cat }) {
  const length = cat.filter((el) => el.type === "INCOME").length;
  let h_box = length <= 0 ? 52 : length <= 3 ? 102 : length <= 6 ? 152 : 200;
  return (
    <div
      className={`w-full h-[${h_box}px] bg-prim-5 grid grid-cols-3 auto-rows-min font-bold gap-1 p-1 overflow-y-auto shadow-[0_-5px_5px_rgba(0,0,0,0.1)]`}
    >
      {/* expense */}
      <div className="h-[45px] bg-prim-6 font-bold flex justify-start items-center gap-1 rounded-[16px] pl-2 border border-acct-7">
        <ExpenseIcon
          className={`w-[25px] h-[25px] bg-acct-7 text-text-l p-1 rounded-full`}
        />
        <p className="text-acct-7">Expense</p>
      </div>
      {/* income */}
      <div className="h-[45px] bg-acct-2 font-bold flex justify-start items-center gap-1 rounded-[16px] pl-2 border border-acct-2">
        <IncomeIcon
          className={`w-[25px] h-[25px] bg-prim-6 text-acct-2 p-1 rounded-full`}
        />
        <p className="text-text-l">Income</p>
      </div>
      {/* edit */}
      <div className="h-[45px] bg-prim-6 font-bold flex justify-start items-center gap-1 rounded-[16px] pl-2 border border-prim-1">
        <SettingIcon
          className={`w-[25px] h-[25px] bg-prim-1 text-text-l p-1 rounded-full`}
        />
        <p className="text-text-d">Edit</p>
      </div>
      {/* list */}
      {cat.map(
        (el, idx) =>
          el.type === "INCOME" && (
            <InputButton
              key={idx}
              txt={el.name}
              color={el.color}
              icon={el.icon}
            />
          )
      )}
    </div>
  );
}

export default AddTranInputCatIn;
