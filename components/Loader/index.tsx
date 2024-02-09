"use client";

import { Progress } from "@nextui-org/react";
import "./index.css";

const Loader: React.FC = () => {
  return (
    <>
      <div className="loader-container shadow-xl">
        <p className="font-bold text-[27px] mb-9">Loading</p>
        <Progress className="loader" isIndeterminate aria-label="Loading..." />
      </div>
      <div className="overlay" />
    </>
  );
};

export default Loader;
