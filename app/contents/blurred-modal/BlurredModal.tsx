import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./BlurredModal.css";
import CloseIcon from "@/app/icons/CloseIcon";

type Props = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};

const BlurredModal: React.FC<Props> = ({ show }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!show) {
      setIsOpen(true);
    }
  }, [show]);

  return (
    <div className="content-wrapper">
      <button
        className="bg-white p-3 rounded-2xl font-bold"
        onClick={() => setIsOpen(true)}
      >
        Open
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              layout
              className={`blurred-modal-overlay ${!show && "no-blur"}`}
              initial={{ backdropFilter: "blur(0px)", zIndex: 3 }}
              animate={{ backdropFilter: "blur(10px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
              onClick={() => setIsOpen(false)}
            ></motion.div>
            <motion.div
              layout
              className={`blurred-modal shadow-xl ${
                !show && "blurred-modal-disabled"
              }`}
              initial={{ opacity: 0, y: 50, zIndex: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              <div className="p-5 flex items-center justify-between">
                <h2 className="text-xl font-bold">Hello</h2>
                <div
                  className="close-icon-container w-[25px] h-[25px] rounded-xl flex items-center justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  <CloseIcon />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlurredModal;
