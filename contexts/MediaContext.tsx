import { createContext } from "react";
import { useMediaQuery } from "react-responsive";

export const MediaContext = createContext(false);

type Props = { children: React.ReactNode };

export const MediaProvider: React.FC<Props> = ({ children }) => {
  const sm = !useMediaQuery({ query: "(min-width: 701px)" });
  return <MediaContext.Provider value={sm}>{children}</MediaContext.Provider>;
};
