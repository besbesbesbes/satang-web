import Tag from "../common/Tag";

function TransFilter() {
  const hdlFilter = () => {
    console.log("first");
  };
  return (
    <div
      className="w-full h-[40px] flex-none bg-prim-5 flex justify-start items-center overflow-x-auto cursor-pointer"
      onClick={hdlFilter}
    >
      <Tag icon="AllIcon" txt="All" color="1" />
      <Tag icon="IncomeIcon" txt="Income" color="2" />
      <Tag icon="ExpenseIcon" txt="Expense" color="3" />
      <Tag icon="TransferIcon" txt="Transfer" color="4" />
      <Tag icon="AdjustIcon" txt="Adjust" color="5" isShowTxt={false} />
    </div>
  );
}

export default TransFilter;
