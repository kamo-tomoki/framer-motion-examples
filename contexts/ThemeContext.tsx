import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext<{
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  dark: false,
  setDark: () => {},
});

type Props = { children: React.ReactNode };

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    dark
      ? document.documentElement.classList.add("original-dark")
      : document.documentElement.classList.remove("original-dark");
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
