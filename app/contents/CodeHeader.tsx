import { Button } from "@nextui-org/react";
import CopyIcon from "../icons/CopyIcon";
import "./CodeHeader.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { memo, useContext } from "react";
import { MediaContext } from "@/contexts/MediaContext";
import { CodeContext } from "@/contexts/CardContext";
import CodeTabs from "./CodeTabs";
import CodeSelect from "./CodeSelect";

type Props = {
  sampleCode: { [key: string]: string };
  sticky: boolean;
  setToast: React.Dispatch<React.SetStateAction<string | null>>;
};

// eslint-disable-next-line react/display-name
const CodeHeader = memo(({ sampleCode, sticky, setToast }: Props) => {
  const sm = useContext(MediaContext);
  const { selectedCode } = useContext(CodeContext);

  const showToast = () => {
    setToast("Copied to clipboard");
    setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  return (
    <div className={`code-header${sticky ? "-sticky" : ""}`}>
      {sm ? (
        <CodeSelect sampleCode={sampleCode} />
      ) : (
        <CodeTabs sampleCode={sampleCode} />
      )}
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
