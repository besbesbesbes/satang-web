import { AnimatePresence, motion } from "framer-motion";
import AddTranInputType from "./AddTranInputType";
import AddTranInputAmt from "./AddTranInputAmt";
import AddTranInputCat from "./AddTranInputCat";
import AddTranInputAcct from "./AddTranInputAcct";
import AddTranInputTrip from "./AddTranInputTrip";
import AddTranInputTime from "./AddTranInputTime";

function AddTranInput({ activeInput, cat, acct, trip }) {
  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };
  return (
    <AnimatePresence mode="wait">
      {activeInput === "type" && (
        <motion.div
          key="type"
          className="w-full"
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.1 }}
        >
          <AddTranInputType />
        </motion.div>
      )}
      {activeInput === "acct" && (
        <motion.div
          key="acct"
          className="w-full"
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.1 }}
        >
          <AddTranInputAcct acct={acct} />
        </motion.div>
      )}
      {activeInput === "cat" && (
        <motion.div
          key="cat"
          className="w-full"
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.1 }}
        >
          <AddTranInputCat cat={cat} />
        </motion.div>
      )}
      {activeInput === "trip" && (
        <motion.div
          key="trip"
          className="w-full"
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.1 }}
        >
          <AddTranInputTrip trip={trip} />
        </motion.div>
      )}
      {activeInput === "amt" && (
        <motion.div
          key="amt"
          className="w-full"
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.1 }}
        >
          <AddTranInputAmt />
        </motion.div>
      )}
      {activeInput === "time" && (
        <motion.div
          key="time"
          className="w-full"
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ duration: 0.1 }}
        >
          <AddTranInputTime />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AddTranInput;
