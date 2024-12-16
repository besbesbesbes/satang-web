import { AnimatePresence, motion } from "framer-motion";

function AddTranAnimate({ keyChange, children }) {
  const animationVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };
  console.log(keyChange);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={keyChange}
        variants={animationVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default AddTranAnimate;
