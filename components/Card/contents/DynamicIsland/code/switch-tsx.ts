const code = `import { useState } from "react";
import { motion } from "framer-motion";
import { IslandState } from "./DynamicIsland";
import timer from "./timer";

type Props = {
  isOn: boolean;
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>;
  setIsland: React.Dispatch<React.SetStateAction<IslandState>>;
};

const Switch: React.FC<Props> = ({ isOn, setIsOn, setIsland }) => {
  const [animating, setAnimating] = useState(false);
  const handleChange = async () => {
    if (animating) return;
    setAnimating(true);

    if (isOn) {
      setIsland("remove-text");
      await timer(200);
      setIsland("close");
      await timer(600);
      setIsland("popout");
      setIsOn(false);
      await timer(100);
      setIsland("hide");
    } else {
      setIsland("popin");
      setIsOn(true);
      await timer(400);
      setIsland("open");
    }
    setAnimating(false);
  };

  return (
    <div className={\`switch \${isOn ? "on" : ""}\`} onClick={handleChange}>
      <motion.div className="handle" layout />
    </div>
  );
};

export default Switch;
`;

export default code;
