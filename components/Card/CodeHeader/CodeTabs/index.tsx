import { CodeContext } from "@/contexts/CardContext";
import { Tab, Tabs } from "@nextui-org/react";
import { useContext } from "react";
import ReactIcon from "../../../icons/React";
import TypeScriptIcon from "../../../icons/TypeScript";
import CssIcon from "../../../icons/Css";

type Props = {
  sampleCode: { [key: string]: string };
};

const CodeTabs: React.FC<Props> = ({ sampleCode }) => {
  const { selectedCode, setSelectedCode } = useContext(CodeContext);
  return (
    <div className="tabs">
      <Tabs
        selectedKey={selectedCode}
        onSelectionChange={(key) => {
          typeof key === "string" && setSelectedCode(key);
        }}
      >
        {Object.keys(sampleCode).map((key) => (
          <Tab
            key={key}
            title={
              <div className="tab flex items-center space-x-2">
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
    </div>
  );
};

export default CodeTabs;
