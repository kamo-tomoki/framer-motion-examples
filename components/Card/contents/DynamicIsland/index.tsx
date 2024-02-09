import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import "./index.css";
import Switch from "./Switch";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

export type IslandState =
  | "start-open"
  | "open"
  | "remove-text"
  | "start-close"
  | "close"
  | "hide"
  | "disabled";

const DynamicIslandStyle: React.FC<Props> = ({ show }) => {
  const [isOn, setIsOn] = useState(false);
  const [island, setIsland] = useState<IslandState>("open");

  useEffect(() => {
    if (show) {
      setIsland("open");
      setIsOn(true);
    } else {
      setIsland("disabled");
    }
  }, [show]);

  return (
    <div className="content-wrapper">
      <motion.div
        initial={{ borderRadius: 50 }}
        className={`bg-white island ${"island-" + island} ${
          show && "mt-[100px]"
        }`}
        layout
        animate={isOn ? "up" : "reset"}
        variants={{
          up: {
            y: -100,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.5,
            },
          },
          reset: {
            y: 0,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
      >
        <motion.h1
          className="text-xl pl-5 pt-[5.5px] font-bold"
          initial={{ opacity: 0 }}
          animate={{
            opacity: island === "open" || island === "disabled" ? 1 : 0,
          }}
          layout="position"
        >
          Hello
        </motion.h1>
      </motion.div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Switch
              show={show}
              isOn={isOn}
              setIsOn={setIsOn}
              setIsland={setIsland}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DynamicIslandStyle;
