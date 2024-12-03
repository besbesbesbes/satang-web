import { motion, AnimatePresence } from "framer-motion";
import { catIcons } from "../../icons/catIcon";

function Tag(prop) {
  const { icon, txt, color, isShowTxt = true, isOutline = false } = prop;
  const Icon = icon ? catIcons[icon] : null;

  return (
    <div
      className={`bg-acct-${color} h-[25px] mx-[1px] min-w-[25px] text-text-l rounded-full flex justify-center items-center my-1 
      ${isShowTxt && "px-2"} ${
        isOutline && `bg-prim-6 border border-acct-${color}`
      } flex-shrink-0 shadow-sm`}
    >
      {Icon && (
        <Icon
          className={`w-[15px] h-[15px] ${isOutline && `text-acct-${color}`}`}
        />
      )}

      <AnimatePresence initial={false}>
        {isShowTxt && (
          <motion.div
            className={`font-bold ml-1 text-xs ${
              isOutline && `text-acct-${color}`
            }`}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "fit-content", opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {txt}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Tag;
