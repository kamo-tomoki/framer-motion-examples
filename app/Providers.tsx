"use client";

import { NextUIProvider } from "@nextui-org/react";
import { MediaProvider } from "@/contexts/MediaContext";
import { CardProvider } from "@/contexts/CardContext";
import { ToastProvider } from "@/contexts/ToastContext";

type Props = { children: React.ReactNode };

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <NextUIProvider>
      <MediaProvider>
        <CardProvider>
          <ToastProvider>{children}</ToastProvider>
        </CardProvider>
      </MediaProvider>
    </NextUIProvider>
  );
};

export default Providers;
