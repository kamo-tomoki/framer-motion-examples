import { memo, useContext, useState } from "react";
import { CodeContext } from "@/contexts/CardContext";
import { Select, SelectItem } from "@nextui-org/react";
import ReactIcon from "../../../icons/React";
import TypeScriptIcon from "../../../icons/TypeScript";
import CssIcon from "../../../icons/Css";

type Props = {
  sampleCode: { [key: string]: string };
};

const CodeSelect: React.FC<Props> = ({ sampleCode }) => {
  const { selectedCode, setSelectedCode } = useContext(CodeContext);

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCode(e.target.value);
  };

  if (!selectedCode) return null;
  return (
    <Select
      classNames={{
        base: "w-[280px]",
        trigger: "h-[32px] min-h-[32px] code-select",
        selectorIcon: "fill-white",
      }}
      size="sm"
      selectedKeys={[selectedCode]}
      onChange={handleSelectionChange}
      renderValue={() => {
        return <Item code={selectedCode} />;
      }}
    >
      {Object.keys(sampleCode).map((key) => (
        <SelectItem
          className="text-foreground bg-background"
          key={key}
          value={key}
        >
          <Item code={key} />
        </SelectItem>
      ))}
    </Select>
  );
};

// eslint-disable-next-line react/display-name
const Item = memo(({ code }: { code: string }) => {
  return (
    <div className="tab flex items-center space-x-2">
      {code.split(".").pop() === "tsx" ? (
        <ReactIcon />
      ) : code.split(".").pop() === "ts" ? (
        <TypeScriptIcon />
      ) : code.split(".").pop() === "css" ? (
        <CssIcon />
      ) : (
        <></>
      )}
      <span>{code}</span>
    </div>
  );
});

export default CodeSelect;
