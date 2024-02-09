const code = `import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./style.css";
import CloseIcon from "./CloseIcon";

const Modal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wrapper">
      <button className="open-btn" onClick={() => setIsOpen(true)}>
        Open
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              layout
              className="modal-overlay"
              initial={{
                backdropFilter: "blur(0px)",
                WebkitBackdropFilter: "blur(0px)",
                zIndex: 3,
              }}
              animate={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
              exit={{
                backdropFilter: "blur(0px)",
                WebkitBackdropFilter: "blur(0px)",
              }}
              onClick={() => setIsOpen(false)}
            ></motion.div>
            <motion.div
              layout
              className="modal"
              initial={{ opacity: 0, y: 50, zIndex: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              <div className="modal-content">
                <h2 className="modal-title">Hello</h2>
                <div
                  className="close-icon-container"
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

export default Modal;
`;

export default code;
