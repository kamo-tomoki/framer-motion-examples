import { motion } from "framer-motion";
import "./index.css";
import { IslandState } from "..";
import timer from "@/utils/timer";

type Props = {
  show: boolean;
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsland: React.Dispatch<React.SetStateAction<IslandState>>;
};

const Switch: React.FC<Props> = ({ show, isOn, setIsOn, setIsland }) => {
  const handleChange = async () => {
    if (isOn) {
      setIsland("remove-text");
      await timer(200);
      setIsland("start-close");
      await timer(600);
      setIsland("close");
      setIsOn(!isOn);
      await timer(100);
      setIsland("hide");
    } else {
      setIsland("start-open");
      setIsOn(!isOn);
      await timer(400);
      setIsland("open");
    }
  };

  return (
    <div className="switch" data-isOn={isOn} onClick={handleChange}>
      <motion.div className="handle" layout />
    </div>
  );
};

export default Switch;
