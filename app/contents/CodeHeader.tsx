import { Tabs, Tab, Button } from "@nextui-org/react";
import ReactIcon from "../icons/ReactIcon";
import CssIcon from "../icons/CssIcon";
import CopyIcon from "../icons/CopyIcon";
import "./CodeHeader.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { memo, useContext } from "react";
import TypeScriptIcon from "../icons/TypeScriptIcon";
import { MediaContext } from "@/contexts/MediaContext";
import { CodeContext } from "@/contexts/CardContext";

type Props = {
  sampleCode: { [key: string]: string };
  sticky: boolean;
  setToast: React.Dispatch<React.SetStateAction<string | null>>;
};

// eslint-disable-next-line react/display-name
const CodeHeader = memo(({ sampleCode, sticky, setToast }: Props) => {
  const sm = useContext(MediaContext);
  const { selectedCode, setSelectedCode } = useContext(CodeContext);

  const showToast = () => {
    setToast("Copied to clipboard");
    setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  return (
    <div className={`dark code-header${sticky ? "-sticky" : ""}`}>
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
      {selectedCode && (
        <CopyToClipboard text={sampleCode[selectedCode]}>
          <Button isIconOnly onClick={showToast} size={sm ? "sm" : "md"}>
            <CopyIcon w={sm ? 14 : 20} h={sm ? 16 : 20} />
          </Button>
        </CopyToClipboard>
      )}
    </div>
  );
});

export default CodeHeader;
