const code = `import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import useResizeObserver from "./use-resize-observer";

const openSpring = { type: "spring", stiffness: 200, damping: 30 };
const closeSpring = { type: "spring", stiffness: 300, damping: 35 };

const Card: React.FC = () => {
  const [show, setShow] = useState(false);
  const [scaleVal, setScaleVal] = useState(1);

  const zIndex = useMotionValue(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const { width } = useResizeObserver(containerRef);

  const handleOnMouseEnter = () => {
    /**
     * we don't want hover animation
     * if the card is open or close animation is in progress
     */
    if (show || zIndex.get() !== 0) {
      return;
    }
    setScaleVal(1.05);
  };

  const handleOnMouseLeave = () => {
    if (!show) {
      setScaleVal(1);
    }
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

  useEffect(() => {
    show && zIndex.set(2);
  }, [show]);

  return (
    <div className="card">
      <div
        className={\`card-content-container \${show && "open"}\`}
        onClick={() => show && setShow(false)}
        ref={containerRef}
      >
        <motion.div
          className="card-content"
          initial={{ scale: 1 }}
          animate={{ scale: scaleVal, width: width }}
          transition={show ? openSpring : closeSpring}
          layout
          style={{
            zIndex,
          }}
          onClick={() => setShow(true)}
          onUpdate={handleStyleUpdate}
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleOnMouseLeave}
        ></motion.div>
      </div>
    </div>
  );
};

export default Card;
`;

export default code;
