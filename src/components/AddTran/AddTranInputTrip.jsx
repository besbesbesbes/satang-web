import { DeleteIcon } from "../../icons/catIcon";
import { SettingIcon, SkipIcon } from "../../icons/mainIcon";
import InputButton from "../common/InputButton";

function AddTranInputTrip({ trip }) {
  const length = trip.length;
  let h_box = length <= 0 ? 52 : length <= 3 ? 102 : length <= 6 ? 152 : 200;
  return (
    <div
      className={`w-full h-[${h_box}px] bg-prim-5 grid grid-cols-3 auto-rows-min font-bold gap-1 p-1 overflow-y-auto`}
    >
      {/* Skip */}
      <div className="h-[45px] bg-prim-6 font-bold flex justify-start items-center gap-1 rounded-[16px] pl-2 border border-prim-1">
        <SkipIcon
          className={`w-[25px] h-[25px] bg-prim-1 text-text-l p-1 rounded-full`}
        />
        <p className="text-text-d">Skip</p>
      </div>
      {/* Clear */}
      <div className="h-[45px] bg-prim-6 font-bold flex justify-start items-center gap-1 rounded-[16px] pl-2 border border-prim-1">
        <DeleteIcon
          className={`w-[25px] h-[25px] bg-prim-1 text-text-l p-1 rounded-full`}
        />
        <p className="text-text-d">Clear</p>
      </div>
      {/* edit */}
      <div className="h-[45px] bg-prim-6 font-bold flex justify-start items-center gap-1 rounded-[16px] pl-2 border border-prim-1">
        <SettingIcon
          className={`w-[25px] h-[25px] bg-prim-1 text-text-l p-1 rounded-full`}
        />
        <p className="text-text-d">Edit</p>
      </div>
      {/* list */}
      {trip.map((el, idx) => (
        <InputButton key={idx} txt={el.name} color={el.color} icon={el.icon} />
      ))}
    </div>
  );
}

export default AddTranInputTrip;
