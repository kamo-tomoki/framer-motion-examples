import { Tabs, Tab, Button } from "@nextui-org/react";
import ReactIcon from "../icons/ReactIcon";
import CssIcon from "../icons/CssIcon";
import CopyIcon from "../icons/CopyIcon";
import "./CodeHeader.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { memo, useState } from "react";
import TypeScriptIcon from "../icons/TypeScriptIcon";

type Props = {
  sampleCode: { [key: string]: string };
  activeTab: string;
  sticky: boolean;
  setToast: React.Dispatch<React.SetStateAction<string | null>>;
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>;
};

// eslint-disable-next-line react/display-name
const CodeHeader = memo(
  ({ sampleCode, activeTab, sticky, setToast, setActiveTab }: Props) => {
    const showToast = () => {
      setToast("Copied to clipboard");
      setTimeout(() => {
        setToast(null);
      }, 2000);
    };
    return (
      <div className={`dark code-header${sticky ? "-sticky" : ""}`}>
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
                <div className="code-header-tab flex items-center space-x-2">
                  {key.split(".").pop() === "tsx" ? (
                    <ReactIcon />
                  ) : key.split(".").pop() === "ts" ? (
                    <TypeScriptIcon />
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
          <Button isIconOnly onClick={showToast}>
            <CopyIcon />
          </Button>
        </CopyToClipboard>
      </div>
    );
  }
);

export default CodeHeader;
