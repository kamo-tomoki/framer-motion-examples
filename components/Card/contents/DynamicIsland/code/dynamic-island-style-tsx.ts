const code = `import { motion } from "framer-motion";
import { useState } from "react";
import Switch from "./Switch";
import "./style.css";

export type IslandState =
  | "popin"
  | "open"
  | "remove-text"
  | "close"
  | "popout"
  | "hide";

const DynamicIsland: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const [island, setIsland] = useState<IslandState>("hide");

  return (
    <div className="wrapper">
      <motion.div
        initial={{ borderRadius: 50 }}
        className={\`island \${"island-" + island}\`}
        layout
        animate={isOn ? "popup" : "popout"}
        variants={{
          popup: {
            y: -100,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.5,
            },
          },
          popout: {
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
          className="island-text"
          initial={{ opacity: 0 }}
          animate={{
            opacity: island === "open" ? 1 : 0,
          }}
          layout="position"
        >
          Hello
        </motion.h1>
      </motion.div>
      <div>
        <Switch isOn={isOn} setIsOn={setIsOn} setIsland={setIsland} />
      </div>
    </div>
  );
};

export default DynamicIsland;
`;

export default code;
