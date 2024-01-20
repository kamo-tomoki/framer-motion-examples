"use client";

import { MediaProvider } from "@/contexts/MediaContext";
import { CardProvider } from "@/contexts/CardContext";
import { ToastProvider } from "@/contexts/ToastContext";

type Props = { children: React.ReactNode };

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <MediaProvider>
      <CardProvider>
        <ToastProvider>{children}</ToastProvider>
      </CardProvider>
    </MediaProvider>
  );
};

export default Providers;
