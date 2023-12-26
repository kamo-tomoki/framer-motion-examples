"use client";
import Card from "./Card";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Test from "./contents/Test";

const Samples = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container p-12">
      <div className="body-container">
        <h1 className="font-bold text-4xl mb-5">Pick up</h1>
        <ul className="card-list">
          <LayoutGroup>
            <Card>
              <Test />
            </Card>
            <Card>
              <Test />
            </Card>
          </LayoutGroup>
        </ul>
      </div>
    </div>
  );
};

export default Samples;
