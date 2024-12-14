import { SettingIcon, AcctIcon, DebtIcon } from "../../icons/mainIcon";
import InputButton from "../common/InputButton";

function AddTranInputDebt({ acct }) {
  const length = acct.filter((el) => el.type === "DEBTOR").length;
  let h_box = length <= 0 ? 52 : length <= 3 ? 102 : length <= 6 ? 152 : 200;
  return (
    <div
      className={`w-full h-[${h_box}px] bg-prim-5 grid grid-cols-3 auto-rows-min font-bold gap-1 p-1 overflow-y-auto`}
    >
      {/* Account */}
      <div className="h-[45px] bg-prim-6 font-bold flex justify-start items-center gap-1 rounded-[16px] pl-2 border border-acct-6">
        <AcctIcon
          className={`w-[25px] h-[25px] bg-acct-6 text-text-l p-1 rounded-full`}
        />
        <p className="text-acct-6">Accounts</p>
      </div>
      {/* Debtor */}
      <div className="h-[45px] bg-acct-6 font-bold flex justify-start items-center gap-1 rounded-[16px] pl-2">
        <DebtIcon
          className={`w-[25px] h-[25px] bg-prim-6 text-acct-6 p-1 rounded-full`}
        />
        <p className="text-text-l">Debtors</p>
      </div>
      {/* edit */}
      <div className="h-[45px] bg-prim-6 font-bold flex justify-start items-center gap-1 rounded-[16px] pl-2 border border-prim-1">
        <SettingIcon
          className={`w-[25px] h-[25px] bg-prim-1 text-text-l p-1 rounded-full`}
        />
        <p className="text-text-d">Edit</p>
      </div>
      {/* list */}
      {acct.map(
        (el, idx) =>
          el.type === "DEBTOR" && (
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

export default AddTranInputDebt;
