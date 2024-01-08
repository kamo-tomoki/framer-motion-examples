import { Tabs, Tab, Button } from "@nextui-org/react";
import ReactIcon from "../icons/ReactIcon";
import CssIcon from "../icons/CssIcon";
import CopyIcon from "../icons/CopyIcon";
import "./CodeHeader.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { memo, useState } from "react";

type Props = {
  sampleCode: { [key: string]: string };
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

// eslint-disable-next-line react/display-name
const CodeHeader = memo(({ sampleCode, activeTab, setActiveTab }: Props) => {
  //   const [activeTab, setActiveTab] = useState(Object.entries(sampleCode)[0][0]);
  return (
    <div className="flex justify-center">
      <div className="code-header-container">
        <div className="code-header-test dark">
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
        </div>
      </div>
    </div>
  );
});

export default CodeHeader;
