"use client";
import Card from "./Card";
import { LayoutGroup } from "framer-motion";
import SelectBox from "./contents/select-box/SelectBox";
import AppStoreCard from "./contents/app-store-card-ui/AppStoreCardUi";
import DynamicIslandStyle from "./contents/dynamic-island-style/DynamicIslandStyle";
import sampleCode from "./contents/select-box/code/sample-code";
import BlurredModal from "./contents/blurred-modal/BlurredModal";

const Samples = () => {
  return (
    <div className="container pt-[40px]">
      <h1 className="font-bold text-4xl mb-5">Pick up</h1>
      <ul className="card-list">
        {/* <LayoutGroup> */}
        <Card title="SelectBox" Content={SelectBox} sampleCode={sampleCode} />
        <Card
          title="App Store Card"
          Content={AppStoreCard}
          sampleCode={sampleCode}
        />
        <Card
          title="Dynamic Island Style"
          Content={DynamicIslandStyle}
          sampleCode={sampleCode}
        />
        <Card
          title="Modal with Blurred Background"
          Content={BlurredModal}
          sampleCode={sampleCode}
        />
        {/* </LayoutGroup> */}
      </ul>
    </div>
  );
};

export default Samples;
