"use client";
import Card from "./Card";
import SelectBox from "./contents/select-box/SelectBox";
import AppStoreCard from "./contents/app-store-card-ui/AppStoreCardUi";
import DynamicIslandStyle from "./contents/dynamic-island-style/DynamicIslandStyle";
import sampleCode from "./contents/select-box/code/sample-code";
import BlurredModal from "./contents/blurred-modal/BlurredModal";
import { useState } from "react";
import CodeHeader from "./contents/CodeHeader";
import { useMediaQuery } from "react-responsive";

const samplesData = [
  {
    title: "SelectBox",
    Content: SelectBox,
    sampleCode: sampleCode,
  },
  {
    title: "App Store Card",
    Content: AppStoreCard,
    sampleCode: sampleCode,
  },
  {
    title: "Dynamic Island Style",
    Content: DynamicIslandStyle,
    sampleCode: sampleCode,
  },
  {
    title: "Modal with Blurred Background",
    Content: BlurredModal,
    sampleCode: sampleCode,
  },
];

const Samples = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [stickyCodeHeader, setStickyCodeHeader] = useState(false);
  const [activeTab, setActiveTab] = useState(Object.entries(sampleCode)[0][0]);
  const sm = !useMediaQuery({ query: "(min-width: 651px)" });

  return (
    <div className="container pt-[40px]">
      <h1 className="font-bold text-4xl mb-5">Pick up</h1>
      <ul className="card-list">
        {samplesData.map((sampleData, index) => (
          <Card
            id={index}
            key={sampleData.title}
            title={sampleData.title}
            Content={sampleData.Content}
            sampleCode={sampleData.sampleCode}
            sm={sm}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            setSelectedCard={setSelectedCard}
            setStickyCodeHeader={setStickyCodeHeader}
          />
        ))}
      </ul>
      {selectedCard !== null && stickyCodeHeader && (
        <CodeHeader
          sampleCode={samplesData[selectedCard].sampleCode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}
    </div>
  );
};

export default Samples;
