import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import "./index.css";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const SelectBox: React.FC<Props> = ({ show }) => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (!show) {
      setIsOpen(false);
    }
  }, [show]);
  return (
    <div className="content-wrapper">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu"
      >
        <motion.button
          whileTap={show ? { scale: 0.97 } : { scale: 1 }}
          onClick={() => show && setIsOpen(!isOpen)}
          style={{ cursor: show ? "pointer" : "default" }}
        >
          Select
          <motion.div
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20">
              <path d="M0 7 L 20 7 L 10 16" />
            </svg>
          </motion.div>
        </motion.button>
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          <motion.li variants={itemVariants}>Item 1 </motion.li>
          <motion.li variants={itemVariants}>Item 2 </motion.li>
          <motion.li variants={itemVariants}>Item 3 </motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default SelectBox;
