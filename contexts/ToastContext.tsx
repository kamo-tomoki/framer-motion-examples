import { createContext, useState } from "react";

export const ToastContext = createContext<{
  toast: string | null;
  setToast: React.Dispatch<React.SetStateAction<string | null>>;
}>({
  toast: null,
  setToast: () => {},
});

type Props = { children: React.ReactNode };

export const ToastProvider: React.FC<Props> = ({ children }) => {
  const [toast, setToast] = useState<string | null>(null);
  return (
    <ToastContext.Provider value={{ toast, setToast }}>
      {children}
    </ToastContext.Provider>
  );
};
