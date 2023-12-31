import {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { motion, useMotionValue } from "framer-motion";
import { closeSpring, openSpring } from "@/app/utils/animation";

type Props = {
  parentShow: boolean;
  setParentShow: Dispatch<SetStateAction<boolean>>;
};

const Card: React.FC<Props> = ({ parentShow, setParentShow }) => {
  const [show, setShow] = useState(false);
  const zIndex = useMotionValue(0);
  const [hover, setHover] = useState(false);
  const [scaleVal, setScaleVal] = useState(1);

  const onClickCard = (e: MouseEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (parentShow && !show) {
      setShow(true);
    } else if (!parentShow && !show) {
      setParentShow(true);
    }
  };

  const handleOnMouseEnter = () => {
    setHover(true);
    if (parentShow && !show) setScaleVal(1.05);
  };

  const handleOnMouseLeave = () => {
    setHover(false);
    if (parentShow && !show) {
      setScaleVal(1);
    }
  };

  const checkZIndex = (latest: { scale: number }) => {
    if (show) {
      setScaleVal(1);
      zIndex.set(2);
    } else if (!show && !hover && latest.scale == 1.05) {
      setScaleVal(1);
    }
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
    <div className="appstore-card">
      <div
        className={`appstore-card-content-container ${
          show && "appstore-card-open"
        }`}
        onClick={() => setShow(false)}
      >
        <motion.div
          className="appstore-card-content"
          initial={{ scale: 1 }}
          animate={{ scale: scaleVal }}
          transition={show ? openSpring : closeSpring}
          layout="position"
          style={{
            zIndex,
          }}
          onClick={onClickCard}
          onUpdate={checkZIndex}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        ></motion.div>
      </div>
    </div>
  );
};

export default Card;
