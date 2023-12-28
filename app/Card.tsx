import {
  LayoutGroup,
  motion,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import React, {
  MouseEvent,
  SetStateAction,
  use,
  useEffect,
  useState,
} from "react";
import Title from "./Title";
import { openSpring, closeSpring } from "./animation";
import CloseButton from "./CloseButton";

type Props = {
  SelectBox: React.FC<{
    show: boolean;
    setShow: React.Dispatch<SetStateAction<boolean>>;
  }>;
  title: string;
};
const Card: React.FC<Props> = ({ SelectBox, title }) => {
  const [show, setShow] = useState(false);
  const [scaleVal, setScaleVal] = useState(1);
  const [hover, setHover] = useState(false);
  const zIndex = useMotionValue(0);
  const scale = useMotionValue(1);

  const checkZIndex = (latest: { scale: number }) => {
    console.log(latest);
    if (show) {
      setScaleVal(1);
      zIndex.set(2);
    } else if (!show && !hover && latest.scale == 1.05) {
      setScaleVal(1);
    }
  };

  const onClickCard = (e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    !show && setShow(true);
  };

  const handleOnMouseEnter = () => {
    setHover(true);
    !show && setScaleVal(1.05);
  };

  const handleOnMouseLeave = () => {
    setHover(false);
    !show && setScaleVal(1);
  };

  useEffect(() => {
    if (show) {
      zIndex.set(2);
      setHover(false);
    } else {
      zIndex.set(0);
    }
  }, [show]);

  return (
    <div className="card">
      <Overlay show={show} setShow={setShow} />
      <div
        className={`card-content-container ${show && "open"}`}
        onClick={() => setShow(false)}
      >
        <motion.div
          className="card-content"
          initial={{ scale: 1 }}
          animate={{ scale: scaleVal }}
          transition={show ? openSpring : closeSpring}
          layout="position"
          style={{
            zIndex,
          }}
          // whileHover={show ? { scale: 1 } : { scale: 1.05 }}
          onClick={onClickCard}
          onUpdate={checkZIndex}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          <Title title={title} show={show} />
          {show && <CloseButton show={show} setShow={setShow} />}
          <SelectBox show={show} setShow={setShow} />
          {/* <p>Connecting the dots.</p> */}
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
