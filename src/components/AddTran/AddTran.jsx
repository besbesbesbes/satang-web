import React, { useEffect, useState } from "react";
import useMainStore from "../../stores/mainStore";
import consoleLog from "../../utils/consoleLog";
import AddTranInput from "./AddTranInput";
import Tag from "../common/Tag";
import {
  getInputCatApi,
  getInputAcctApi,
  getInputTripApi,
} from "../../apis/addtran-api";

function AddTran() {
  const curPage = useMainStore((state) => state.curPage);
  const [activeInput, setActiveInput] = useState(null);
  const [cat, setCat] = useState([]);
  const [acct, setAcct] = useState([]);
  const [trip, setTrip] = useState([]);

  const toggleInput = (inputName) => {
    setActiveInput((prev) => (prev === inputName ? null : inputName));
  };
  const getInputCat = async () => {
    consoleLog("call getInputCat");
    try {
      const result = await getInputCatApi();
      console.log(result.data.cat);
      setCat(result.data.cat);
    } catch (err) {
      console.log(err?.response?.data?.error || err.message);
    }
  };
  const getInputAcct = async () => {
    consoleLog("call getInputAcct");
    try {
      const result = await getInputAcctApi();
      console.log(result.data.acct);
      setAcct(result.data.acct);
    } catch (err) {
      console.log(err?.response?.data?.error || err.message);
    }
  };
  const getInputTrip = async () => {
    consoleLog("call getInputTrip");
    try {
      const result = await getInputTripApi();
      console.log(result.data.trip);
      setTrip(result.data.trip);
    } catch (err) {
      console.log(err?.response?.data?.error || err.message);
    }
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
  }, [curPage]);
  return (
    <div className="w-full h-[calc(100svh-80px)] bg-prim-6 absolute flex flex-col justify-between">
      {/* detail */}
      <div className="w-full h-full flex flex-col bg-prim-6 pt-5 overflow-auto text-base gap-3 px-2">
        {/* time */}
        <div className=" w-full grid grid-cols-4 items-center">
          <div className="text-right font-bold px-1">Time :</div>
          <div className="px-1 col-start-2 col-end-5 border-b border-prim-4">
            13-Dec-24 15:30
          </div>
        </div>
        {/* type */}
        <div className=" w-full grid grid-cols-4 items-center">
          <div className="text-right font-bold px-1">Type :</div>
          <div className="px-1 col-start-2 col-end-5  border-b border-prim-4">
            Expense
          </div>
        </div>
        {/* category */}
        <div className=" w-full grid grid-cols-4 items-center">
          <div className="text-right font-bold px-1">Category :</div>
          <div className="px-1 col-start-2 col-end-5  border-b border-prim-4">
            Foods
          </div>
        </div>
        {/* trip */}
        <div className=" w-full grid grid-cols-4 items-center">
          <div className="text-right font-bold px-1">Trip :</div>
          <div className="px-1 col-start-2 col-end-5 border-b border-prim-4">
            Trip1
          </div>
        </div>
        {/* acct & amt */}
        <div className=" w-full h-[35px]  grid grid-cols-3 items-center border border-prim-4 rounded-full px-1">
          <div className="pr-2 text-right col-start-1 col-end-2 font-bold">
            Account
          </div>
          <div className="px-1 text-right font-bold">Amount</div>
          <div className="flex justify-end font-bold">
            <Tag icon="AddIcon" color={2} txt="Split" isShowTxt={true} />
          </div>
        </div>
        {/* list */}
        <div className=" w-full grid grid-cols-3 items-center px-1">
          <div className="pr-2 text-right col-start-1 col-end-2">SCB</div>
          <div className="px-1 text-right">1,234.00</div>
          <div className="w-full flex justify-end">
            <Tag icon="DeleteIcon" color={7} isShowTxt={false} />
          </div>
        </div>
        <div className=" w-full grid grid-cols-3 items-center px-1">
          <div className="pr-2 text-right col-start-1 col-end-2">KBank</div>
          <div className="px-1 text-right">1,234.00</div>
          <div className="w-full flex justify-end">
            <Tag icon="DeleteIcon" color={7} isShowTxt={false} />
          </div>
        </div>
        {/* total amt */}
        <div className=" w-full h-[35px] grid grid-cols-3 items-center border-t border-prim-4  px-1">
          <div className="pr-2 text-right col-start-1 col-end-2 font-bold">
            Total
          </div>
          <div className="px-1 text-right font-bold">3,333.33</div>
          <div className="flex justify-end font-bold"></div>
        </div>
        {/* memo */}
        <div className=" w-full grid grid-cols-4 items-center">
          <div className="text-right font-bold px-1">Memo :</div>
          <input
            className="px-1 col-start-2 col-end-5  border-b border-prim-4"
            value="Test Memo"
          />
        </div>
        <div className="text-xs">
          <button onClick={() => toggleInput("type")}>Input Type</button>
          <button onClick={() => toggleInput("acct")}>Input Acct</button>
          <button onClick={() => toggleInput("cat")}>Input Cat</button>
          <button onClick={() => toggleInput("trip")}>Input Trip</button>
          <button onClick={() => toggleInput("amt")}>Input Amt</button>
          <button onClick={() => toggleInput("time")}>Input Time</button>
        </div>

        {/* Add more buttons for other inputs as needed */}
      </div>
      {/* input area with animations */}
      <AddTranInput
        activeInput={activeInput}
        cat={cat}
        acct={acct}
        trip={trip}
      />
    </div>
  );
}

export default AddTran;
