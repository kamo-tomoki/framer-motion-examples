import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import "./DynamicIslandStyle.css";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

type AnimationState = "start-open" | "open" | "start-close" | "close";

const DynamicIslandStyle: React.FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animation, setAnimation] = useState<AnimationState>("open");

  const handleClick = async () => {
    if (isOpen) {
      setAnimation("start-close");
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 700);
      });
      setAnimation("close");
      setIsOpen(!isOpen);
    } else {
      setAnimation("start-open");
      setIsOpen(!isOpen);
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 700);
      });
      setAnimation("open");
    }
  };

  useEffect(() => {
    console.log(animation);
  }, [animation]);

  return (
    <div className="content-wrapper" onClick={handleClick}>
      <div className="h-56 bg-slate-300" />
      <div className="flex justify-center">
        <motion.div
          className={`island ${"island-" + animation}`}
          layout
          initial={{ borderRadius: 50 }}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: {
              //   clipPath: "inset(0% 0% 0% 0% round 30px)",
              y: -100,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
              },
            },
            closed: {
              //   clipPath: "inset(10% 50% 90% 50% round 10px)",
              y: 0,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
        >
          {/* <h1 className="text-2xl">test</h1> */}
        </motion.div>
      </div>
    </div>
  );
};

export default DynamicIslandStyle;
