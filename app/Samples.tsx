"use client";
import Card from "./Card";
import { LayoutGroup } from "framer-motion";
import { useEffect, useState } from "react";
import SelectBox from "./contents/select-box/SelectBox";
import AppStoreCard from "./contents/app-store-card-ui/AppStoreCardUi";
import sampleCode from "./contents/select-box/code/sample-code";

const Samples = () => {
  return (
    <div className="container p-12">
      <div className="body-container">
        <h1 className="font-bold text-4xl mb-5">Pick up</h1>
        <ul className="card-list">
          <LayoutGroup>
            <Card
              title="SelectBox"
              Content={SelectBox}
              sampleCode={sampleCode}
            ></Card>
            <Card
              title="App Store Card"
              Content={AppStoreCard}
              sampleCode={sampleCode}
            ></Card>
          </LayoutGroup>
        </ul>
      </div>
    </div>
  );
};

export default Samples;
