import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import "./ThemeButton.css";

type Props = { click: () => void };

type ButtonProps = {
  dark: boolean;
  click: () => void;
};

const Button: React.FC<ButtonProps> = ({ dark, click }) => {
  return (
    <button
      className={`${
        dark ? "dark" : "light"
      }-btn rounded-lg h-8 w-8 flex justify-center items-center`}
      onClick={click}
    >
      {dark ? <MoonIcon h={16} w={16} /> : <SunIcon h={20} w={20} />}
    </button>
  );
};

const LightButton: React.FC<Props> = ({ click }) => {
  return (
    <button
      className="light-btn rounded-lg h-8 w-8 flex justify-center items-center"
      onClick={click}
    >
      <SunIcon h={18} w={18} />
    </button>
  );
};

const DarkButton: React.FC<Props> = ({ click }) => {
  return (
    <button
      className="dark-btn rounded-lg h-8 w-8 flex justify-center items-center"
      onClick={click}
    >
      <MoonIcon h={16} w={16} />
    </button>
  );
};

const ThemeButton: React.FC = () => {
  const { dark, setDark } = useContext(ThemeContext);

  const handleThemeChange = () => {
    setDark(!dark);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={dark ? "light-btn" : "dark-btn"}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button dark={!dark} click={handleThemeChange} />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeButton;
