import { useState, useEffect, RefObject } from "react";

interface Constraints {
  top: number;
  bottom: number;
}

/**
 * Calculate the top/bottom scroll constraints of a full-screen element vs the viewport
 */
export function useScrollConstraints(
  cardTop: number | undefined,
  cardHeight: number | undefined,
  measureConstraints: boolean
) {
  const [constraints, setConstraints] = useState<Constraints>({
    top: 0,
    bottom: 0,
  });

  useEffect(() => {
    if (!measureConstraints) return;
    else if (
      typeof cardTop === "undefined" ||
      typeof cardHeight === "undefined"
    )
      return;

    const viewportHeight = window.innerHeight;
    const scrollableViewport = viewportHeight - cardTop * 2;
    const top = Math.min(scrollableViewport - cardHeight, 0);

    setConstraints({ top, bottom: 0 });
  }, [measureConstraints, cardTop, cardHeight]);

  return constraints;
}
