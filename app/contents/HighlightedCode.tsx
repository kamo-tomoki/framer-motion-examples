import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./HighlightedCode.css";
import { useState } from "react";
import { Tabs, Tab, Button } from "@nextui-org/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactIcon from "../icons/ReactIcon";
import CssIcon from "../icons/CssIcon";
import CopyIcon from "../icons/CopyIcon";
import { motion } from "framer-motion";

type Props = {
  sampleCode: { [key: string]: string };
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};
const HighlightedCode: React.FC<Props> = ({
  sampleCode,
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="code-container">
      <motion.div className="code-header dark">
        <Tabs
          selectedKey={activeTab}
          onSelectionChange={(key) => {
            typeof key === "string" && setActiveTab(key);
          }}
        >
          {Object.keys(sampleCode).map((key) => (
            <Tab
              key={key}
              title={
                <div className="flex items-center space-x-2">
                  {key.split(".").pop() === "tsx" ? (
                    <ReactIcon />
                  ) : key.split(".").pop() === "css" ? (
                    <CssIcon />
                  ) : (
                    <></>
                  )}
                  <span>{key}</span>
                </div>
              }
            />
          ))}
        </Tabs>
        <CopyToClipboard text={sampleCode[activeTab]}>
          <Button isIconOnly>
            <CopyIcon />
          </Button>
        </CopyToClipboard>
      </motion.div>
      <SyntaxHighlighter
        language={activeTab.split(".").pop()}
        style={vscDarkPlus}
        wrapLines
        wrapLongLines
        customStyle={{ margin: 0, padding: "20px 40px" }}
      >
        {sampleCode[activeTab]}
      </SyntaxHighlighter>
    </div>
  );
};

export default HighlightedCode;
