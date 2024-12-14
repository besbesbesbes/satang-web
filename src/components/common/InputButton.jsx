import { catIcons } from "../../icons/catIcon";

function InputButton({ txt, icon, color }) {
  const Icon = icon ? catIcons[`Icon${icon}`] : null;
  return (
    <div className="h-[45px] bg-prim-6 font-bold flex justify-start items-center gap-1 rounded-[16px] pl-2">
      <Icon
        className={`w-[25px] h-[25px] bg-acct-${color} text-text-l p-1 rounded-full`}
      />
      <p className="overflow-hidden">{txt}</p>
    </div>
  );
}

export default InputButton;
