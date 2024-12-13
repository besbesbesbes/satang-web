import { catIcons } from "../../icons/catIcon";
import { SettingIcon } from "../../icons/mainIcon";

const Button = ({ txt, icon, color }) => {
  const Icon = icon ? catIcons[`Icon${icon}`] : null;
  return (
    <div className="h-[45px] bg-prim-4 font-bold flex justify-start items-center gap-1 rounded-[16px] pl-2">
      <Icon
        className={`w-[25px] h-[25px] bg-acct-${color} text-text-l p-1 rounded-full`}
      />
      <p>{txt}</p>
    </div>
  );
};

function AddTranInputTrip({ trip }) {
  const length = trip.length + 1;
  let h_box = length <= 3 ? 52 : length <= 6 ? 102 : length <= 9 ? 152 : 200;
  return (
    <div
      className={`w-full h-[${h_box}px] bg-prim-5 grid grid-cols-3 auto-rows-min font-bold gap-1 p-1 overflow-y-auto`}
    >
      <div className="h-[45px] bg-prim-3 font-bold flex justify-start items-center gap-1 rounded-[16px] pl-2">
        <SettingIcon
          className={`w-[25px] h-[25px] bg-prim-5 text-prim-3 p-1 rounded-full`}
        />
        <p className="text-text-l">Edit</p>
      </div>
      {trip.map((el, idx) => (
        <Button key={idx} txt={el.name} color={el.color} icon={el.icon} />
      ))}
    </div>
  );
}

export default AddTranInputTrip;
