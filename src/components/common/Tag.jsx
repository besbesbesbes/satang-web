import { motion, AnimatePresence } from "framer-motion";
import { catIcons } from "../../icons/catIcon";

function Tag(prop) {
  const { icon, txt, color, isShowTxt = true } = prop;
  const Icon = icon ? catIcons[icon] : null;

  return (
    <div
      className={`bg-acct-${color} h-[20px] mx-[1px] w-fit p-2 text-text-l rounded-full flex justify-center items-center my-1`}
    >
      {Icon && <Icon className="w-[15px] h-[15px]" />}

      <AnimatePresence initial={false}>
        {isShowTxt && (
          <motion.div
            className="font-bold ml-1"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "fit-content", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            {txt}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Tag;
