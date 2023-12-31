import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./HighlightedCode.css";
import { useEffect, useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import ReactIcon from "../icons/ReactIcon";
import CssIcon from "../icons/CssIcon";

type Props = {
  sampleCode: { [key: string]: string };
};
const HighlightedCode: React.FC<Props> = ({ sampleCode }) => {
  const [activeTab, setActiveTab] = useState(Object.entries(sampleCode)[0][0]);

  return (
    <div className="code-container">
      <Tabs className="dark" onSelectionChange={setActiveTab}>
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
