import React, { useEffect, useState } from "react";
import useMainStore from "../../stores/mainStore";
import consoleLog from "../../utils/consoleLog";
import AddTranInput from "./AddTranInput";
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
      return;
    }
    consoleLog("useEffect AddTran");
    getInputCat();
    getInputAcct();
    getInputTrip();
  }, [curPage]);
  return (
    <div className="w-full h-[calc(100svh-80px)] bg-prim-5 absolute flex flex-col justify-between">
      {/* detail */}
      <div className="h-full flex flex-col">
        <button onClick={() => toggleInput("type")}>Input Type</button>
        <button onClick={() => toggleInput("acct")}>Input Acct</button>
        <button onClick={() => toggleInput("cat")}>Input Cat</button>
        <button onClick={() => toggleInput("trip")}>Input Trip</button>
        <button onClick={() => toggleInput("amt")}>Input Amt</button>
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
