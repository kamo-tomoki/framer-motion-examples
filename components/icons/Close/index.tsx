import { IconProps } from "../icon-props";

const CloseIcon: React.FC<IconProps> = ({ w, h }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={h || "16"}
      width={w || "16"}
      viewBox="0 0 20 20"
    >
      <path
        d="M15 5L5 15M5 5l5.03 5.03L15 15"
        fill="transparent"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinecap="round"
      ></path>
    </svg>
  );
};

export default CloseIcon;
