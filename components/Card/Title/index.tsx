import { openSpring, closeSpring } from "../../../utils/animation";
import { motion } from "framer-motion";
type Props = {
  title: string;
  show: boolean;
};
const Title: React.FC<Props> = ({ title, show }) => {
  const x = 30;
  const y = x;

  return (
    <motion.div
      className="card-title"
      initial={false}
      animate={{ x, y }}
      transition={show ? openSpring : closeSpring}
      style={{ originX: 0, originY: 0 }}
    >
      <h1>{title}</h1>
    </motion.div>
  );
};

export default Title;
