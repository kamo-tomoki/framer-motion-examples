import { ToastContext } from "@/contexts/ToastContext";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";

// eslint-disable-next-line react/display-name
const Toast: React.FC = () => {
  const { toast } = useContext(ToastContext);
  return (
    <AnimatePresence>
      {toast && (
        <div className="flex justify-center">
          <motion.div
            className="toast fixed bottom-[20px] bg-white z-30"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{ opacity: 0, y: 100 }}
          >
            {toast}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
