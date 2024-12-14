import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useMainStore from "../../stores/mainStore";
import consoleLog from "../../utils/consoleLog";
import AddTranInput from "./AddTranInput";
import Tag from "../common/Tag";
import formatNumber from "../../utils/formatNumber";
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
  const [input, setInput] = useState({
    time: "",
    type: "EXPENSE",
    category: "",
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
  console.log(input.type, typeIcon, typeColor, typeTxt);
  const animationVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };
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
  const hdlInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    console.log(input);
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
          <AnimatePresence mode="wait">
            <motion.div
              className="px-1 col-start-2 col-end-5  border-b border-prim-4"
              key={typeTxt}
              variants={animationVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.1 }}
            >
              <Tag
                icon={typeIcon}
                txt={typeTxt}
                color={typeColor}
                isShowTxt={true}
                isOutline={false}
              />
            </motion.div>
          </AnimatePresence>
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
        <div className=" w-full h-[35px]  grid grid-cols-[repeat(3,_1fr)_25px]  items-center bg-prim-5 border border-prim-4 rounded-full px-1 gap-1">
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
        <div className=" w-full grid grid-cols-4 items-center">
          <div className="text-right font-bold px-1">Memo :</div>
          <input
            name="memo"
            className="px-1 col-start-2 col-end-5  border-b border-prim-4"
            value={input.memo}
            onChange={hdlInputChange}
          />
        </div>
        <div className="text-xs flex gap-2">
          <button onClick={() => toggleInput("type")}>Type</button>
          <button onClick={() => toggleInput("acct")}>Acct</button>
          <button onClick={() => toggleInput("debt")}>Debt</button>
          <button onClick={() => toggleInput("cat-ex")}>Cat-Ex</button>
          <button onClick={() => toggleInput("cat-in")}>Cat-In</button>
          <button onClick={() => toggleInput("trip")}>Trip</button>
          <button onClick={() => toggleInput("amt")}>Amt</button>
          <button onClick={() => toggleInput("time")}>Time</button>
          <button onClick={() => console.log(input)}>Input</button>
        </div>

        {/* Add more buttons for other inputs as needed */}
      </div>
      {/* input area with animations */}
      <AddTranInput
        activeInput={activeInput}
        cat={cat}
        acct={acct}
        trip={trip}
        setInput={setInput}
      />
    </div>
  );
}

export default AddTran;
