import Tag from "../common/Tag";

function TransFilter() {
  const hdlFilter = () => {
    console.log("first");
  };
  return (
    <div
      className="w-full h-[40px] bg-prim-5 flex flex-none justify-start items-center cursor-pointer overflow-x-auto"
      onClick={hdlFilter}
    >
      <Tag icon="AllIcon" txt="All" color="1" />
      <Tag icon="IncomeIcon" txt="Income" color="2" />
      <Tag icon="ExpenseIcon" txt="Expense" color="3" />
      <Tag icon="TransferIcon" txt="Transfer" color="4" />
      <Tag icon="AdjustIcon" txt="Adjust" color="5" />
      <Tag icon="DebtIcon" txt="Debtor" color="6" />
      <Tag icon="DebtIcon" txt="Debtor" color="6" />
      <Tag icon="DebtIcon" txt="Debtor" color="6" />
      <Tag icon="DebtIcon" txt="Debtor" color="6" />
      <Tag icon="DebtIcon" txt="Debtor" color="6" />
    </div>
  );
}

export default TransFilter;
