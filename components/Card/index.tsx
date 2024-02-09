import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useSpring,
} from "framer-motion";
import React, {
  memo,
  MouseEvent,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Title from "./Title";
import { openSpring, closeSpring } from "../../utils/animation";
import CloseButton from "./CloseButton";
import { useScrollConstraints } from "../../utils/use-scroll-contents";
import { useWheelScroll } from "../../utils/use-wheel-scroll";
import HighlightedCode from "./HighlightedCode";
import "./index.css";
import timer from "../../utils/timer";
import { MediaContext } from "@/contexts/MediaContext";
import { CardContext } from "@/contexts/CardContext";
import samplesData from "./contents";

type Props = {
  id: number;
  setStickyCodeHeader: React.Dispatch<SetStateAction<boolean>>;
};

// eslint-disable-next-line react/display-name
const Card = memo(({ id, setStickyCodeHeader }: Props) => {
  const [show, setShow] = useState(false);
  const [scaleVal, setScaleVal] = useState(1);
  const [hover, setHover] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const sm = useContext(MediaContext);
  const { setSelectedCard } = useContext(CardContext);

  const sampleData = samplesData[id];
  const title = sampleData.title;
  const sampleCode = sampleData.sampleCode;
  const Content = sampleData.Content;

  const zIndex = useMotionValue(0);
  const y = useSpring(0, { stiffness: 1400, damping: 90 });

  const cardRef = useRef<HTMLDivElement>(null);
  const constraints = useScrollConstraints(cardRef, show, sm);

  const containerRef = useRef<HTMLLIElement>(null);
  const dismissDistance = 80;
  const checkSwipeToDismiss = () => {
    // found a bug so temporarily disabled
    /* if (y.get() > dismissDistance) {
        y.set(0);
        setShow(false);
      } */
  };
  useWheelScroll(containerRef, y, constraints, checkSwipeToDismiss, show);

  const checkZIndex = (latest: { scale: number }) => {
    if (show) {
      setScaleVal(1);
      zIndex.set(2);
    } else if (!show && !hover && latest.scale == 1.05) {
      setScaleVal(1);
    }
  };

  useMotionValueEvent(y, "change", (latest: number) => {
    if (sm) {
      latest <= -360 ? setStickyCodeHeader(true) : setStickyCodeHeader(false);
    } else {
      latest <= -450 ? setStickyCodeHeader(true) : setStickyCodeHeader(false);
    }
  });

  const closeCard = async () => {
    if (!show) return;
    y.set(0);
    if (y.get() < -100) {
      await timer(300);
    }
    setShow(false);
  };

  const onClickCard = (e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    !show && setShow(true);
  };

  const handleOnMouseEnter = () => {
    if (show || zIndex.get() === 2) {
      return;
    }
    setHover(true);
    !show && setScaleVal(1.05);
  };

  const handleOnMouseLeave = () => {
    if (show || zIndex.get() === 2) {
      return;
    }
    setHover(false);
    !show && setScaleVal(1);
  };

  useEffect(() => {
    if (show) {
      zIndex.set(2);
      setHover(false);
      setSelectedCard(id);
    } else {
      zIndex.set(0);
      setSelectedCard(null);
    }
  }, [show]);

  return (
    <li className="card" ref={containerRef}>
      <Overlay show={show} setShow={setShow} />
      <div
        className={`card-content-container ${show && "open"}`}
        onClick={closeCard}
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
          drag={show && !isDragging ? "y" : false}
          dragConstraints={constraints}
          onDrag={checkSwipeToDismiss}
          onClick={onClickCard}
          onUpdate={checkZIndex}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        >
          <Title title={title} show={show} />
          {show && <CloseButton show={show} closeCard={closeCard} />}
          <Content show={show} setShow={setShow} />
          {show && <HighlightedCode sampleCode={sampleCode} />}
        </motion.div>
      </div>
    </li>
  );
});

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
