import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./HighlightedCode.css";
import CodeHeader from "./CodeHeader";

type Props = {
  sm: boolean;
  sampleCode: { [key: string]: string };
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setToast: React.Dispatch<React.SetStateAction<string | null>>;
};
const HighlightedCode: React.FC<Props> = ({
  sm,
  sampleCode,
  activeTab,
  setActiveTab,
  setToast,
}) => {
  return (
    <div className="code-container">
      <CodeHeader
        sampleCode={sampleCode}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        setToast={setToast}
        sticky={false}
      />
      <div>
        <SyntaxHighlighter
          language={activeTab.split(".").pop()}
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
          {sampleCode[activeTab]}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default HighlightedCode;
