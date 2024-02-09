import { useState, useEffect, RefObject } from "react";
import useResizeObserver from "./use-resize-observer";

interface Constraints {
  top: number;
  bottom: number;
}

/**
 * Calculate the top/bottom scroll constraints of a full-screen element vs the viewport
 */
export function useScrollConstraints(
  ref: RefObject<HTMLDivElement>,
  measureConstraints: boolean,
  sm: boolean
) {
  const [constraints, setConstraints] = useState<Constraints>({
    top: 0,
    bottom: 0,
  });

  // watch for changes in the element's height
  // height would be changed in responsive breakpoint
  const { height } = useResizeObserver(ref);

  useEffect(() => {
    if (!measureConstraints) return;
    else if (!ref.current) return;

    const element = ref.current;
    const viewportHeight = window.innerHeight;
    const top = element.offsetTop;
    const scrollableViewport = viewportHeight - top * 2;
    const constraintsTop = Math.min(scrollableViewport - height, 0);

    setConstraints({ top: constraintsTop, bottom: 0 });
  }, [measureConstraints, height]);

  return constraints;
}
