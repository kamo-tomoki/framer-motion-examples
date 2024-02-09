import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./index.css";
import CodeHeader from "../CodeHeader";
import { useContext } from "react";
import { MediaContext } from "@/contexts/MediaContext";
import { CodeContext } from "@/contexts/CardContext";
import { ToastContext } from "@/contexts/ToastContext";

type Props = {
  sampleCode: { [key: string]: string };
};
const HighlightedCode: React.FC<Props> = ({ sampleCode }) => {
  const sm = useContext(MediaContext);
  const { selectedCode } = useContext(CodeContext);
  const { setToast } = useContext(ToastContext);

  if (!selectedCode) return <></>;

  return (
    <div className="code-container">
      <CodeHeader sampleCode={sampleCode} sticky={false} />
      <div>
        <SyntaxHighlighter
          language={selectedCode.split(".").pop()}
          style={vscDarkPlus}
          wrapLines
          wrapLongLines
          customStyle={{
            margin: 0,
            padding: `20px ${sm ? "20px" : "40px"}`,
            width: "100%",
            overflow: sm ? "hidden" : "auto",
          }}
        >
          {sampleCode[selectedCode]}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default HighlightedCode;
