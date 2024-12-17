import React, { useEffect, useState } from "react";
import useMainStore from "../../stores/mainStore";
import consoleLog from "../../utils/consoleLog";
import AddTranInput from "./AddTranInput";
import Tag from "../common/Tag";
import formatNumber from "../../utils/formatNumber";
import AddTranAnimate from "./AddTranAnimate";
import { SaveIcon } from "../../icons/mainIcon";
import {
  getInputCatApi,
  getInputAcctApi,
  getInputTripApi,
} from "../../apis/addtran-api";

function getCurrentTime() {
  const now = new Date();
  const dd = now.getDate();
  const mm = now.getMonth() + 1;
  const yy = now.getFullYear();
  const HH = now.getHours();
  const MM = now.getMinutes();
  return [dd, mm, yy, HH, MM];
}
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

function AddTran() {
  const curPage = useMainStore((state) => state.curPage);
  const [activeInput, setActiveInput] = useState(null);
  const [cat, setCat] = useState([]);
  const [acct, setAcct] = useState([]);
  const [trip, setTrip] = useState([]);
  const [input, setInput] = useState({
    time: getCurrentTime(),
    type: "EXPENSE",
    cat: "",
    trip: "",
    acct: {},
    memo: "",
  });
  const typeMapping = {
    EXPENSE: { icon: "ExpenseIcon", color: "7", txt: "Expense" },
    INCOME: { icon: "IncomeIcon", color: "2", txt: "Income" },
    TRANSFER: { icon: "TransferIcon", color: "10", txt: "Transfer" },
    ADJUST: { icon: "AdjustIcon", color: "9", txt: "Adjust" },
  };
  const {
    icon: typeIcon,
    color: typeColor,
    txt: typeTxt,
  } = typeMapping[input.type] || {};
  const toggleInput = (inputName) => {
    setActiveInput((prev) => (prev === inputName ? null : inputName));
  };
  const getInputCat = async () => {
    consoleLog("call getInputCat");
    try {
      const result = await getInputCatApi();
      console.log("getInputCat result : ", result.data.cat);
      setCat(result.data.cat);
    } catch (err) {
      console.log(err?.response?.data?.error || err.message);
    }
  };
  const getInputAcct = async () => {
    consoleLog("call getInputAcct");
    try {
      const result = await getInputAcctApi();
      console.log("getInputAcct result : ", result.data.acct);
      setAcct(result.data.acct);
    } catch (err) {
      console.log(err?.response?.data?.error || err.message);
    }
  };
  const getInputTrip = async () => {
    consoleLog("call getInputTrip");
    try {
      const result = await getInputTripApi();
      console.log("getInputTrip result : ", result.data.trip);
      setTrip(result.data.trip);
    } catch (err) {
      console.log(err?.response?.data?.error || err.message);
    }
  };
  const hdlInputMemo = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const hdlSelectedInput = (val) => {
    toggleInput(val);
  };

  useEffect(() => {
    if (curPage !== 0) {
      setActiveInput(null);
      return;
    }
    consoleLog("useEffect AddTran");
    getInputCat();
    getInputAcct();
    getInputTrip();
    toggleInput("type");
    setInput({
      time: getCurrentTime(),
      type: "EXPENSE",
      cat: "",
      trip: "",
      acct: {},
      memo: "",
    });
  }, [curPage]);
  return (
    <div className="w-full h-[calc(100svh-80px)] bg-prim-6 absolute flex flex-col justify-between">
      {/* detail */}
      <div className="w-full h-full flex flex-col bg-prim-6 pt-5 overflow-auto text-base gap-1 px-2">
        <button onClick={() => console.log(input)}>input</button>
        {/* time */}
        <div
          className={`w-full h-[35px] grid grid-cols-4 items-center ${
            activeInput === "time" && "animate-blink-seleted"
          }`}
          onClick={() => hdlSelectedInput("time")}
        >
          <div className="text-right font-bold px-1">Time :</div>
          <div className="px-1 col-start-2 col-end-5 border-b border-prim-4">
            <div className="w-fit">
              {`${input.time[0]}-${months[input.time[1] - 1]}-${
                input.time[2]
              }, ${input.time[3]}:${input.time[4].toString().padStart(2, "0")}`}
            </div>
          </div>
        </div>
        {/* type */}
        <div
          className={`w-full h-[35px] grid grid-cols-4 items-center ${
            activeInput === "type" && "animate-blink-seleted"
          }`}
          onClick={() => hdlSelectedInput("type")}
        >
          <div className="text-right font-bold px-1">Type :</div>
          <div className="px-1 col-start-2 col-end-5 border-b border-prim-4">
            <AddTranAnimate keyChange={typeTxt}>
              <Tag
                icon={typeIcon}
                txt={typeTxt}
                color={typeColor}
                isShowTxt={true}
                isOutline={false}
              />
            </AddTranAnimate>
          </div>
        </div>
        {input.type !== "TRANSFER" && (
          <AddTranAnimate keyChange={input.type}>
            <div className=" flex flex-col gap-1">
              {/* category */}
              <div
                className={`w-full h-[35px] grid grid-cols-4 items-center ${
                  (activeInput === "cat-ex" || activeInput === "cat-in") &&
                  "animate-blink-seleted"
                } 
                }`}
                onClick={() =>
                  hdlSelectedInput(
                    input.type === "EXPENSE" ? "cat-ex" : "cat-in"
                  )
                }
              >
                <div className="text-right font-bold px-1">Category :</div>
                <div className="px-1 col-start-2 col-end-5  border-b border-prim-4">
                  {!input.cat ? (
                    <div className="h-[35px]"> </div>
                  ) : (
                    <AddTranAnimate
                      keyChange={cat.filter((el) => el.id == input.cat)[0].id}
                    >
                      <Tag
                        icon={`Icon${
                          cat.filter((el) => el.id == input.cat)[0].icon
                        }`}
                        txt={cat.filter((el) => el.id == input.cat)[0].name}
                        color={cat.filter((el) => el.id == input.cat)[0].color}
                        isShowTxt={true}
                        isOutline={false}
                      />
                    </AddTranAnimate>
                  )}
                </div>
              </div>
              {/* trip */}
              <div
                className={`w-full h-[35px] grid grid-cols-4 items-center ${
                  activeInput === "trip" && "animate-blink-seleted"
                }
                }`}
                onClick={() => hdlSelectedInput("trip")}
              >
                <div className="text-right font-bold px-1">Trip :</div>
                <div className="px-1 col-start-2 col-end-5 border-b border-prim-4">
                  {!input.trip ? (
                    <div className="h-[35px]"> </div>
                  ) : (
                    <AddTranAnimate
                      keyChange={trip.filter((el) => el.id == input.trip)[0].id}
                    >
                      <Tag
                        icon={`Icon${
                          trip.filter((el) => el.id == input.trip)[0].icon
                        }`}
                        txt={trip.filter((el) => el.id == input.trip)[0].name}
                        color={
                          trip.filter((el) => el.id == input.trip)[0].color
                        }
                        isShowTxt={true}
                        isOutline={false}
                      />
                    </AddTranAnimate>
                  )}
                </div>
              </div>
            </div>
          </AddTranAnimate>
        )}
        {/* acct & amt */}
        <div className="mt-1 w-full h-[35px]  grid grid-cols-[repeat(3,_1fr)_25px]  items-center bg-prim-5 border border-prim-4 rounded-full px-1 gap-1">
          <div className="pr-2 text-right col-start-1 col-end-2 font-bold">
            Account
          </div>
          <div className="px-1 text-right font-bold">Amount</div>
          <div></div>
          <div className="flex justify-end font-bold">
            <Tag icon="AddIcon" color={2} txt="Split" isShowTxt={false} />
          </div>
        </div>
        {/* list */}
        <div className=" w-full grid grid-cols-[repeat(3,_1fr)_25px] items-center px-1 gap-1 border-b border-prim-4 ">
          <div className="pr-2 text-right col-start-1 col-end-2">SCB</div>
          <div className="px-1 text-right  text-acct-2"></div>
          <div className="px-1 text-right  text-acct-7">
            {formatNumber(1234.0, "minus")}
          </div>
          <div className="w-full flex justify-end">
            <Tag icon="DeleteIcon" color={7} isShowTxt={false} />
          </div>
        </div>
        <div className=" w-full grid grid-cols-[repeat(3,_1fr)_25px] items-center gap-1 px-1 border-b border-prim-4">
          <div className="pr-2 text-right col-start-1 col-end-2">KBank</div>
          <div className="px-1 text-right  text-acct-2">
            {formatNumber(1234.0, "plus")}
          </div>
          <div className="px-1 text-right  text-acct-7"></div>
          <div className="w-full flex justify-end">
            <Tag icon="DeleteIcon" color={7} isShowTxt={false} />
          </div>
        </div>
        {/* total amt */}
        <div className=" w-full h-[35px] grid grid-cols-[repeat(3,_1fr)_25px] items-center px-1 border-b border-prim-4">
          <div className="pr-2 text-right col-start-1 col-end-2 font-bold">
            Total
          </div>
          <div className="px-1 text-right font-bold text-acct-2">
            {" "}
            {formatNumber(11234.0, "plus")}
          </div>
          <div className="px-1 text-right font-bold text-acct-7">
            {" "}
            {formatNumber(11234.0, "minus")}
          </div>
          <div className="flex justify-end font-bold"></div>
        </div>
        {/* memo */}
        <div className="w-full h-[35px] grid grid-cols-4 items-center">
          <div className="text-right font-bold px-1">Memo :</div>
          <input
            name="memo"
            className="h-[35px] px-1 col-start-2 col-end-5 border-b border-prim-4 focus:outline-none"
            value={input.memo}
            onChange={hdlInputMemo}
            onFocus={() => toggleInput(null)}
          />
        </div>
        {/* save and delete button */}
        <div className="w-full mt-2 justify-center flex gap-2">
          <button className="h-[35px] bg-acct-6 text-text-l font-bold px-3 rounded-[16px] flex gap-1 justify-center items-center">
            <SaveIcon className="w-[25px] h-[25px]" />
            Save
          </button>
        </div>

        {/* <div className="text-xs flex gap-2">
          <button onClick={() => toggleInput("type")}>Type</button>
          <button onClick={() => toggleInput("acct")}>Acct</button>
          <button onClick={() => toggleInput("debt")}>Debt</button>
          <button onClick={() => toggleInput("cat-ex")}>Cat-Ex</button>
          <button onClick={() => toggleInput("cat-in")}>Cat-In</button>
          <button onClick={() => toggleInput("trip")}>Trip</button>
          <button onClick={() => toggleInput("amt")}>Amt</button>
          <button onClick={() => toggleInput("time")}>Time</button>
          <button onClick={() => console.log(input)}>Input</button>
        </div> */}

        {/* Add more buttons for other inputs as needed */}
      </div>
      {/* input area with animations */}
      <AddTranInput
        activeInput={activeInput}
        cat={cat}
        acct={acct}
        trip={trip}
        setInput={setInput}
        input={input}
        toggleInput={toggleInput}
      />
    </div>
  );
}

export default AddTran;
