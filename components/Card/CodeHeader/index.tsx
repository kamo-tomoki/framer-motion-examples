import { Button } from "@nextui-org/react";
import CopyIcon from "../../icons/Copy";
import "./index.css";
import CopyToClipboard from "react-copy-to-clipboard";
import { memo, useContext } from "react";
import { MediaContext } from "@/contexts/MediaContext";
import { CodeContext } from "@/contexts/CardContext";
import CodeTabs from "./CodeTabs";
import CodeSelect from "./CodeSelect";
import { ToastContext } from "@/contexts/ToastContext";

type Props = {
  sampleCode: { [key: string]: string };
  sticky: boolean;
};

// eslint-disable-next-line react/display-name
const CodeHeader = memo(({ sampleCode, sticky }: Props) => {
  const sm = useContext(MediaContext);
  const { selectedCode } = useContext(CodeContext);
  const { setToast } = useContext(ToastContext);

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
