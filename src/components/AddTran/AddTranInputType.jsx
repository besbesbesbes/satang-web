import { IncomeIcon, ExpenseIcon, TransferIcon } from "../../icons/catIcon";

const Button = ({ txt, color, Icon }) => (
  <div className=" bg-prim-4 font-bold flex justify-center items-center gap-1 rounded-[16px]">
    <Icon
      className={`w-[25px] h-[25px] bg-acct-${color} text-text-l p-1 rounded-full`}
    />
    <p>{txt}</p>
  </div>
);

function AddTranInputType() {
  return (
    <div className="w-full h-[50px] bg-prim-5 grid grid-cols-3 font-bold gap-1 p-1">
      <Button txt="Expense" color="7" Icon={ExpenseIcon} />
      <Button txt="Income" color="2" Icon={IncomeIcon} />
      <Button txt="Transfer" color="10" Icon={TransferIcon} />
    </div>
  );
}

export default AddTranInputType;
