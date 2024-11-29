import { format } from "date-fns";
import Tag from "../common/Tag";
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
              <div className="px-1 font-bold mt-1 text-text-d text-opacity-50">
                {tranDate}
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
