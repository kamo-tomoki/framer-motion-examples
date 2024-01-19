"use client";
import Card from "./Card";
import SelectBox from "./contents/select-box/SelectBox";
import AppStoreCard from "./contents/app-store-card-ui/AppStoreCardUi";
import DynamicIslandStyle from "./contents/dynamic-island-style/DynamicIslandStyle";
import {
  selectBoxCodes,
  appstoreCardCodes,
  dynamicIslandStyleCodes,
  modalCodes,
} from "./contents/contents-codes";
import BlurredModal from "./contents/blurred-modal/BlurredModal";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import lazyImport from "./LazyImport";

const CodeHeader = lazyImport(() => import("./contents/CodeHeader"));
const Toast = lazyImport(() => import("./Toast"));

const samplesData = [
  {
    title: "SelectBox",
    Content: SelectBox,
    sampleCode: selectBoxCodes,
  },
  {
    title: "App Store Card",
    Content: AppStoreCard,
    sampleCode: appstoreCardCodes,
  },
  {
    title: "Dynamic Island Style",
    Content: DynamicIslandStyle,
    sampleCode: dynamicIslandStyleCodes,
  },
  {
    title: "Modal with Blurred Background",
    Content: BlurredModal,
    sampleCode: modalCodes,
  },
];

const Samples = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [stickyCodeHeader, setStickyCodeHeader] = useState(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const sm = !useMediaQuery({ query: "(min-width: 701px)" });

  useEffect(() => {
    if (selectedCard === null) return;
    const currentSampleCode = samplesData[selectedCard].sampleCode;
    const initialActiveTab = Object.entries(currentSampleCode)[0][0];
    setActiveTab(initialActiveTab);
  }, [selectedCard]);

  return (
    <div className="container py-[40px] px-[25px] mb-3">
      <h1 className={`font-bold text-4xl mb-5 ${sm && "pl-[25px]"}`}>
        Pick up
      </h1>
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
            setToast={setToast}
          />
        ))}
      </ul>
      {selectedCard !== null && activeTab && stickyCodeHeader && (
        <div className="flex justify-center">
          <div className="code-header-container">
            <CodeHeader
              sampleCode={samplesData[selectedCard].sampleCode}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setToast={setToast}
              sticky
            />
          </div>
        </div>
      )}
      <Toast toast={toast} />
    </div>
  );
};

export default Samples;
