import { IncomeIcon, ExpenseIcon, TransferIcon } from "../../icons/catIcon";

const Button = ({ txt, color, Icon, onClick }) => (
  <div
    className=" bg-prim-6 font-bold flex justify-center items-center gap-1 rounded-[16px] cursor-pointer hover:bg-prim-4 transition-all duration-300"
    onClick={() => onClick(txt.toUpperCase())}
  >
    <Icon
      className={`w-[25px] h-[25px] bg-acct-${color} text-text-l p-1 rounded-full`}
    />
    <p>{txt}</p>
  </div>
);

function AddTranInputType({ setInput }) {
  const hdlSelectedType = (txt) => {
    setInput((prev) => ({ ...prev, type: txt }));
  };
  return (
    <div className="w-full h-[50px] bg-prim-5 grid grid-cols-3 font-bold gap-1 p-1 ">
      <Button
        txt="Expense"
        color="7"
        Icon={ExpenseIcon}
        onClick={hdlSelectedType}
      />
      <Button
        txt="Income"
        color="2"
        Icon={IncomeIcon}
        onClick={hdlSelectedType}
      />
      <Button
        txt="Transfer"
        color="10"
        Icon={TransferIcon}
        onClick={hdlSelectedType}
      />
    </div>
  );
}

export default AddTranInputType;
