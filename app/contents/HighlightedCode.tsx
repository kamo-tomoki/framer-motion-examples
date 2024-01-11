import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./HighlightedCode.css";
import CodeHeader from "./CodeHeader";

type Props = {
  sampleCode: { [key: string]: string };
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  setToast: React.Dispatch<React.SetStateAction<string | null>>;
};
const HighlightedCode: React.FC<Props> = ({
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
