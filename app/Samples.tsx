"use client";
import Card from "./Card";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Test from "./contents/Test";
import SelectBox from "./contents/SelectBox";

const Samples = () => {
  return (
    <div className="container p-12">
      <div className="body-container">
        <h1 className="font-bold text-4xl mb-5">Pick up</h1>
        <ul className="card-list">
          <LayoutGroup>
            <Card title="SelectBox" SelectBox={SelectBox}></Card>
            <Card title="SelectBox" SelectBox={SelectBox}></Card>
          </LayoutGroup>
        </ul>
      </div>
    </div>
  );
};

export default Samples;
