const code = `import { RefObject, useEffect, useState } from "react";

const useResizeObserver = (elem: RefObject<HTMLDivElement>) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((mutations) => {
      setWidth(mutations[0].contentRect.width);
      setHeight(mutations[0].contentRect.height);
    });

    if (elem.current) {
      resizeObserver.observe(elem.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return { width, height };
};

export default useResizeObserver;
`;

export default code;
