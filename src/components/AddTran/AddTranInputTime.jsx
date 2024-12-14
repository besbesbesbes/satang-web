import { useRef, useState } from "react";
import { UpDownIcon } from "../../icons/mainIcon";

function AddTranInputTime() {
  const dateRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const hourRef = useRef(null);
  const minuteRef = useRef(null);

  const [currentDate, setCurrentDate] = useState(1);
  const [currentMonth, setCurrentMonth] = useState("Jan");
  const [currentYear, setCurrentYear] = useState(2020);
  const [currentHour, setCurrentHour] = useState(0);
  const [currentMinute, setCurrentMinute] = useState(0);

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const years = Array.from({ length: 11 }, (_, i) => 2020 + i);
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  const handleScroll = (ref, items, setValue) => {
    const scrollTop = ref.current.scrollTop;
    const itemHeight = 45;
    const currentIndex = Math.round(scrollTop / itemHeight);
    setValue(items[currentIndex]);
  };

  return (
    <div className="w-full h-[140px] bg-prim-5 font-bold grid grid-cols-3 grid-rows-[20px,45px,20px,45px] gap-x-1 p-1">
      <div className="h-[20px] text-center text-text-d text-opacity-50 flex justify-center items-center">
        Day
        <UpDownIcon className="w-[16px]" />
      </div>
      <div className="h-[20px] text-center text-text-d text-opacity-50 flex justify-center items-center">
        Month
        <UpDownIcon className="w-[16px]" />
      </div>
      <div className="h-[20px] text-center text-text-d text-opacity-50 flex justify-center items-center">
        Year
        <UpDownIcon className="w-[16px]" />
      </div>
      {/* Date */}
      <div
        ref={dateRef}
        className="h-[45px] bg-prim-6 rounded-[16px] overflow-auto scroll-container relative"
        onScroll={() =>
          handleScroll(
            dateRef,
            [...Array(31).keys()].map((n) => n + 1),
            setCurrentDate
          )
        }
        style={{ scrollSnapType: "y mandatory" }}
      >
        {[...Array(31)].map((_, i) => (
          <div
            key={i}
            className="w-full h-[45px] flex justify-center items-center"
            style={{ scrollSnapAlign: "start" }}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Month */}
      <div
        ref={monthRef}
        className="h-[45px] bg-prim-6 rounded-[16px] overflow-auto scroll-container"
        onScroll={() => handleScroll(monthRef, months, setCurrentMonth)}
        style={{ scrollSnapType: "y mandatory" }}
      >
        {months.map((month, i) => (
          <div
            key={i}
            className="w-full h-[45px] flex justify-center items-center"
            style={{ scrollSnapAlign: "start" }}
          >
            {month}
          </div>
        ))}
      </div>

      {/* Year */}
      <div
        ref={yearRef}
        className="h-[45px] bg-prim-6 rounded-[16px] overflow-auto scroll-container"
        onScroll={() => handleScroll(yearRef, years, setCurrentYear)}
        style={{ scrollSnapType: "y mandatory" }}
      >
        {years.map((year, i) => (
          <div
            key={i}
            className="w-full h-[45px] flex justify-center items-center"
            style={{ scrollSnapAlign: "start" }}
          >
            {year}
          </div>
        ))}
      </div>
      <div className="h-[20px] text-center text-text-d text-opacity-50 flex justify-center items-center">
        Hour <UpDownIcon className="w-[16px]" />
      </div>
      <div className="h-[20px] text-center text-text-d text-opacity-50 flex justify-center items-center">
        Minute <UpDownIcon className="w-[16px]" />
      </div>
      <div className="h-[20px] text-center text-acct-6">Seleted Date</div>
      {/* Hour */}
      <div
        ref={hourRef}
        className="h-[45px] bg-prim-6 rounded-[16px] overflow-auto scroll-container"
        onScroll={() => handleScroll(hourRef, hours, setCurrentHour)}
        style={{ scrollSnapType: "y mandatory" }}
      >
        {hours.map((hour, i) => (
          <div
            key={i}
            className="w-full h-[45px] flex justify-center items-center"
            style={{ scrollSnapAlign: "start" }}
          >
            {hour}
          </div>
        ))}
      </div>

      {/* Minute */}
      <div
        ref={minuteRef}
        className="h-[45px] bg-prim-6 rounded-[16px] overflow-auto scroll-container"
        onScroll={() => handleScroll(minuteRef, minutes, setCurrentMinute)}
        style={{ scrollSnapType: "y mandatory" }}
      >
        {minutes.map((minute, i) => (
          <div
            key={i}
            className="w-full h-[45px] flex justify-center items-center"
            style={{ scrollSnapAlign: "start" }}
          >
            {minute.toString().padStart(2, "0")}
          </div>
        ))}
      </div>

      {/* Current Selection */}
      <div className="h-[45px] bg-acct-6 text-text-l flex justify-center items-center rounded-[16px] flex-col">
        <div>{`${currentDate} ${currentMonth} ${currentYear} `}</div>
        <div>{`${currentHour}:${currentMinute
          .toString()
          .padStart(2, "0")}`}</div>
      </div>
    </div>
  );
}

export default AddTranInputTime;
