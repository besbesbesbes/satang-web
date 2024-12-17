import { SettingIcon } from "../../icons/mainIcon";
import { ExpenseIcon, IncomeIcon } from "../../icons/catIcon";
import InputButton from "../common/InputButton";

function AddTranInputCatEx({ cat, setInput, toggleInput }) {
  const length = cat.filter((el) => el.type === "EXPENSE").length;
  let h_box = length <= 0 ? 52 : length <= 3 ? 102 : length <= 6 ? 152 : 200;
  return (
    <div
      className={`w-full h-[${h_box}px] bg-prim-5 grid grid-cols-3 auto-rows-min font-bold gap-1 p-1 overflow-y-auto `}
    >
      {/* expense */}
      <div className="h-[45px] bg-acct-7 font-bold flex justify-start items-center gap-1 rounded-[16px] pl-2">
        <ExpenseIcon
          className={`w-[25px] h-[25px] bg-prim-6 text-acct-7 p-1 rounded-full`}
        />
        <p className="text-text-l">Expense</p>
      </div>
      {/* income */}
      <div
        className="h-[45px] bg-prim-6 font-bold flex justify-start items-center gap-1 rounded-[16px] pl-2 border border-acct-2"
        onClick={() => toggleInput("cat-in")}
      >
        <IncomeIcon
          className={`w-[25px] h-[25px] bg-acct-2 text-text-l p-1 rounded-full`}
        />
        <p className="text-acct-2">Income</p>
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
          el.type === "EXPENSE" && (
            <InputButton
              keyId={el.id}
              key={idx}
              txt={el.name}
              color={el.color}
              icon={el.icon}
              setInput={setInput}
              type="cat"
              toggleInput={toggleInput}
            />
          )
      )}
    </div>
  );
}

export default AddTranInputCatEx;
