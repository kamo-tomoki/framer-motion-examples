import samplesData from "@/components/Card/contents";
import { createContext, useEffect, useState } from "react";

export const CardContext = createContext<{
  selectedCard: number | null;
  setSelectedCard: React.Dispatch<React.SetStateAction<number | null>>;
}>({
  selectedCard: null,
  setSelectedCard: () => {},
});

export const CodeContext = createContext<{
  selectedCode: string | null;
  setSelectedCode: React.Dispatch<React.SetStateAction<string | null>>;
}>({
  selectedCode: null,
  setSelectedCode: () => {},
});

type Props = { children: React.ReactNode };

export const CardProvider: React.FC<Props> = ({ children }) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCard === null) return;
    const currentSampleCode = samplesData[selectedCard].sampleCode;
    const initialActiveTab = Object.entries(currentSampleCode)[0][0];
    setSelectedCode(initialActiveTab);
  }, [selectedCard]);

  return (
    <CardContext.Provider value={{ selectedCard, setSelectedCard }}>
      <CodeContext.Provider value={{ selectedCode, setSelectedCode }}>
        {children}
      </CodeContext.Provider>
    </CardContext.Provider>
  );
};
