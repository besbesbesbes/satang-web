import { useEffect, useRef } from "react";
import { UpDownIcon } from "../../icons/mainIcon";

function getCurrentTime() {
  const now = new Date();
  const dd = now.getDate();
  const mm = now.getMonth() + 1;
  const yy = now.getFullYear();
  const HH = now.getHours();
  const MM = now.getMinutes();
  return [dd, mm, yy, HH, MM];
}

function AddTranInputTime({ input, setInput, toggleInput }) {
  const dateRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const hourRef = useRef(null);
  const minuteRef = useRef(null);

  const monthsTxt = [
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
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = Array.from({ length: 11 }, (_, i) => 2020 + i);
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  // Ensure input.time is initialized
  if (!input.time || input.time.length < 5) {
    setInput((prevInput) => ({
      ...prevInput,
      time: [1, 1, 2025, 0, 0],
    }));
  }

  const handleScroll = (ref, items, updateIndex) => {
    const scrollTop = ref.current.scrollTop;
    const itemHeight = 45;
    const currentIndex = Math.round(scrollTop / itemHeight);
    if (currentIndex >= 0 && currentIndex < items.length) {
      setInput((prevInput) => {
        const updatedTime = [...prevInput.time];
        updatedTime[updateIndex] = items[currentIndex];
        return { ...prevInput, time: updatedTime };
      });
    }
  };

  const useNow = () => {
    setInput((prevInput) => ({
      ...prevInput,
      time: getCurrentTime(),
    }));
    toggleInput(null);
  };

  const updateInputButton = () => {
    dateRef.current.scrollTo(0, 45 * (input.time[0] - 1));
    monthRef.current.scrollTo(0, 45 * input.time[1]);
    yearRef.current.scrollTo(0, 45 * (input.time[2] - 2020));
    hourRef.current.scrollTo(0, 45 * input.time[3]);
    minuteRef.current.scrollTo(0, 45 * input.time[4]);
  };

  useEffect(() => {
    updateInputButton();
  }, []);

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
            0 // Index for day
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
        onScroll={() => handleScroll(monthRef, months, 1)} // Index for month
        style={{ scrollSnapType: "y mandatory" }}
      >
        {monthsTxt.map((month, i) => (
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
        onScroll={() => handleScroll(yearRef, years, 2)} // Index for year
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
      <div className="h-[20px] text-center text-acct-6"></div>
      {/* Hour */}
      <div
        ref={hourRef}
        className="h-[45px] bg-prim-6 rounded-[16px] overflow-auto scroll-container"
        onScroll={() => handleScroll(hourRef, hours, 3)} // Index for hour
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
        onScroll={() => handleScroll(minuteRef, minutes, 4)} // Index for minute
        style={{ scrollSnapType: "y mandatory" }}
      >
        {minutes.map((minute, i) => (
          <div
            key={i}
            className="w-full h-[45px] flex justify-center items-center"
            style={{ scrollSnapAlign: "start" }}
          >
            {minute.toString()}
          </div>
        ))}
      </div>
      {/* Current Selection */}
      <div className="h-[45px] bg-acct-6 text-text-l flex justify-center items-center rounded-[16px] flex-col">
        <div onClick={useNow}>Use Now</div>
        {/* <button onClick={() => console.log(input.time)}>Time</button> */}
      </div>
    </div>
  );
}

export default AddTranInputTime;
