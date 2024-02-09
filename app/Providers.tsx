"use client";

import { NextUIProvider } from "@nextui-org/react";
import { MediaProvider } from "@/contexts/MediaContext";
import { CardProvider } from "@/contexts/CardContext";
import { ToastProvider } from "@/contexts/ToastContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

type Props = { children: React.ReactNode };

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <NextUIProvider>
      <MediaProvider>
        <CardProvider>
          <ToastProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </ToastProvider>
        </CardProvider>
      </MediaProvider>
    </NextUIProvider>
  );
};

export default Providers;
