import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";

const CloseButton: React.FC<{
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}> = ({ show, setShow }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      className="close-btn"
      onClick={() => show && setShow(false)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <motion.path
          d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
          fill="none"
          stroke="white"
          strokeMiterlimit="10"
          strokeWidth="32"
          initial={{ pathLength: 0 }}
          animate={hover ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        />
        <motion.path
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
          d="M320 320L192 192M192 320l128-128"
          initial={{ pathLength: 1 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </button>
  );
};

export default CloseButton;
