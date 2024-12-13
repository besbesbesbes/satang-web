import { format } from "date-fns";
import TransMainDetail from "./TransMainDetail";

function TransMain({ trans }) {
  let prevDate = null;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd-MMM-yy");
  };

  return (
    <div className="w-full flex-grow bg-prim-5 overflow-y-auto relative pb-[40px] px-1">
      {trans.map((tran) => {
        const tranDate = formatDate(tran.time);
        const showDate = prevDate !== tranDate;
        prevDate = tranDate;

        return (
          <div key={tran.id}>
            {showDate && (
              <div className="w-full px-1 font-bold mt-1 text-text-d text-opacity-50 flex justify-between items-center">
                <div>{format(tranDate, "MMM-yy")}</div>
                <div>{format(tranDate, "EEE-dd")}</div>
              </div>
            )}
            <TransMainDetail tran={tran} />
          </div>
        );
      })}
    </div>
  );
}

export default TransMain;
