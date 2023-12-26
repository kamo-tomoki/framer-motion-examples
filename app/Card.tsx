import {
  LayoutGroup,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import React, { SetStateAction, use, useEffect, useState } from "react";
import Title from "./Title";
import { openSpring, closeSpring } from "./animation";

type Props = {
  children?: React.ReactNode;
};
const Card: React.FC<Props> = (props) => {
  const { children } = props;
  const [show, setShow] = useState(false);
  const [scale, setScale] = useState(1.0);
  const zIndex = useMotionValue(0);
  const scaleX = useMotionValue(1);

  const checkZIndex = (latest: { scale: number }) => {
    if (show) {
      zIndex.set(2);
    } else if (!show && latest.scale === 1.0) {
      zIndex.set(0);
    }
    setScale(latest.scale);
  };
  return (
    <div className="card">
      <Overlay show={show} setShow={setShow} />
      <div className={`card-content-container ${show && "open"}`}>
        <motion.div
          className="card-content"
          initial={{ scale: 1 }}
          transition={show ? openSpring : closeSpring}
          layout="preserve-aspect"
          style={{
            zIndex,
            scaleX,
          }}
          whileHover={show ? { scale: 1 } : { scale: 1.05 }}
          onClick={() => setShow(!show)}
          onUpdate={checkZIndex}
        >
          <Title title="AppStore Card" show={show} scale={scale} />
          {children}
        </motion.div>
      </div>
    </div>
  );
};

const Overlay: React.FC<{
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
}> = ({ show, setShow }) => {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: show ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ pointerEvents: show ? "auto" : "none" }}
      className="overlay"
      onClick={() => show && setShow(false)}
    ></motion.div>
  );
};

export default Card;
