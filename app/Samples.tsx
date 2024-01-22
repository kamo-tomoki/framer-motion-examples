"use client";

import Card from "./Card";
import { useContext, useState } from "react";
import lazyImport from "./LazyImport";
import { MediaContext } from "@/contexts/MediaContext";
import { CardContext, CodeContext } from "@/contexts/CardContext";
import samplesData from "./contents";
import { ThemeContext } from "@/contexts/ThemeContext";

const CodeHeader = lazyImport(() => import("./contents/CodeHeader"));
const Toast = lazyImport(() => import("./Toast"));

const Samples = () => {
  const [stickyCodeHeader, setStickyCodeHeader] = useState(false);
  const sm = useContext(MediaContext);
  const { selectedCard } = useContext(CardContext);
  const { selectedCode } = useContext(CodeContext);
  const { dark } = useContext(ThemeContext);

  return (
    <div className="container py-[40px] px-[25px] mb-3">
      <h1
        className={`font-bold text-4xl mb-5 ${sm ? "pl-[25px]" : null} ${
          dark ? "text-white" : null
        }`}
      >
        Pick up
      </h1>
      <ul className="card-list">
        {samplesData.map((sampleData, index) => (
          <Card
            key={sampleData.title}
            id={index}
            setStickyCodeHeader={setStickyCodeHeader}
          />
        ))}
      </ul>
      {selectedCard !== null && selectedCode && stickyCodeHeader && (
        <div className="flex justify-center">
          <div className="code-header-container">
            <CodeHeader
              sampleCode={samplesData[selectedCard].sampleCode}
              activeTab={selectedCode}
              sticky
            />
          </div>
        </div>
      )}
      <Toast />
    </div>
  );
};

export default Samples;
