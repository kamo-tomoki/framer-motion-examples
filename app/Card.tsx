import { motion, useMotionValue, useSpring } from "framer-motion";
import React, {
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Title from "./Title";
import { openSpring, closeSpring } from "./utils/animation";
import CloseButton from "./CloseButton";
import { useScrollConstraints } from "./utils/use-scroll-contents";
import { useWheelScroll } from "./utils/use-wheel-scroll";
import HighlightedCode from "./contents/HighlightedCode";
import "./Card.css";

type Props = {
  Content: React.FC<{
    show: boolean;
    setShow: React.Dispatch<SetStateAction<boolean>>;
  }>;
  sampleCode: { [key: string]: string };
  title: string;
};
const Card: React.FC<Props> = ({ Content, sampleCode, title }) => {
  const [show, setShow] = useState(false);
  const [scaleVal, setScaleVal] = useState(1);
  const [hover, setHover] = useState(false);
  const [slow, setSlow] = useState(false);
  const zIndex = useMotionValue(0);
  // const y = useMotionValue(0);
  const y = useSpring(0, { stiffness: 700, damping: 50 });

  const cardRef = useRef<HTMLDivElement>(null);
  const constraints = useScrollConstraints(cardRef, show);

  const containerRef = useRef<HTMLDivElement>(null);
  const dismissDistance = 80;
  const checkSwipeToDismiss = () => {
    if (y.get() > dismissDistance) setShow(false);
  };
  useWheelScroll(
    containerRef,
    y,
    constraints,
    checkSwipeToDismiss,
    show,
    setSlow
  );

  const checkZIndex = (latest: { scale: number }) => {
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
    <div className="card" ref={containerRef}>
      <Overlay show={show} setShow={setShow} />
      <div
        className={`card-content-container ${show && "open"}`}
        onClick={() => setShow(false)}
      >
        <motion.div
          ref={cardRef}
          className="card-content"
          initial={{ scale: 1 }}
          animate={{ scale: scaleVal }}
          transition={show ? openSpring : closeSpring}
          layout="preserve-aspect"
          style={{
            zIndex,
            y,
          }}
          drag={show ? "y" : false}
          dragConstraints={constraints}
          // whileHover={show ? { scale: 1 } : { scale: 1.05 }}
          onDrag={checkSwipeToDismiss}
          onClick={onClickCard}
          onUpdate={checkZIndex}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          <Title title={title} show={show} />
          {show && <CloseButton show={show} setShow={setShow} />}
          <Content show={show} setShow={setShow} />
          <HighlightedCode sampleCode={sampleCode} />
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
