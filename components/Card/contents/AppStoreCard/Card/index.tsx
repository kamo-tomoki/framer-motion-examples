import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { motion, useMotionValue } from "framer-motion";
import { closeSpring, openSpring } from "@/utils/animation";
import useResizeObserver from "@/utils/use-resize-observer";

type Props = {
  parentShow: boolean;
  setParentShow: Dispatch<SetStateAction<boolean>>;
};

const Card: React.FC<Props> = ({ parentShow, setParentShow }) => {
  const [show, setShow] = useState(false);
  const [scaleVal, setScaleVal] = useState(1);
  const zIndex = useMotionValue(0);

  const onClickCard = (e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (parentShow && !show) {
      setShow(true);
    } else if (!parentShow && !show) {
      setParentShow(true);
    }
  };

  const handleOnMouseEnter = () => {
    if (parentShow && !show) setScaleVal(1.05);
  };

  const handleOnMouseLeave = () => {
    if (parentShow && !show) setScaleVal(1);
  };

  const handleStyleUpdate = (latest: {
    zIndex: number;
    scale: number;
    width: number;
  }) => {
    // when animation is done
    if (latest.width === width) {
      // if it's a close animation
      if (!show) {
        zIndex.set(0);
      }
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useResizeObserver(containerRef);

  useEffect(() => {
    show && zIndex.set(2);
  }, [show]);

  return (
    <div className="appstore-card">
      <div
        className={`appstore-card-content-container ${
          show && "appstore-card-open"
        }`}
        ref={containerRef}
        onClick={() => setShow(false)}
      >
        <motion.div
          className="appstore-card-content shadow-xl"
          initial={{ scale: 1 }}
          animate={{ scale: scaleVal, width: width }}
          transition={show ? openSpring : closeSpring}
          layout="position"
          style={{
            zIndex,
          }}
          onClick={onClickCard}
          onUpdate={handleStyleUpdate}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        ></motion.div>
      </div>
    </div>
  );
};

export default Card;
