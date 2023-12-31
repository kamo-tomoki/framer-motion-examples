import { openSpring, closeSpring } from "./utils/animation";
import { motion } from "framer-motion";
type Props = {
  title: string;
  show: boolean;
};
const Title: React.FC<Props> = ({ title, show }) => {
  const x = 30;
  const y = x;
  const getMotionValue = (latest) => {
    // console.log(latest);
    // console.log(scale);
  };
  return (
    <motion.div
      className="card-title"
      initial={false}
      animate={{ x, y }}
      transition={show ? openSpring : closeSpring}
      style={{ originX: 0, originY: 0 }}
      onUpdate={getMotionValue}
    >
      <h1>{title}</h1>
    </motion.div>
  );
};

const scaleTranslate = ({ x, y, scaleX, scaleY }) => {
  return `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`;
};
export default Title;
