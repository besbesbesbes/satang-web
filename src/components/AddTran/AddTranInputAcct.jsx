import { SettingIcon } from "../../icons/mainIcon";
import InputButton from "../common/InputButton";

function AddTranInputAcct({ acct }) {
  const length = acct.length + 1;
  let h_box = length <= 3 ? 52 : length <= 6 ? 102 : length <= 9 ? 152 : 200;
  return (
    <div
      className={`w-full h-[${h_box}px] bg-prim-6 grid grid-cols-3 auto-rows-min font-bold gap-1 p-1 overflow-y-auto`}
    >
      <div className="h-[45px] bg-prim-3 font-bold flex justify-start items-center gap-1 rounded-[16px] pl-2">
        <SettingIcon
          className={`w-[25px] h-[25px] bg-prim-5 text-prim-3 p-1 rounded-full`}
        />
        <p className="text-text-l">Edit</p>
      </div>
      {acct.map((el, idx) => (
        <InputButton key={idx} txt={el.name} color={el.color} icon={el.icon} />
      ))}
    </div>
  );
}

export default AddTranInputAcct;
