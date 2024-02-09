import {
  selectBoxCodes,
  appstoreCardCodes,
  dynamicIslandStyleCodes,
  modalCodes,
} from "./contents-codes";
import SelectBox from "./SelectBox";
import AppStoreCard from "./AppStoreCard";
import DynamicIslandStyle from "./DynamicIsland";
import BlurredModal from "./Modal";

const samplesData = [
  {
    title: "SelectBox",
    Content: SelectBox,
    sampleCode: selectBoxCodes,
  },
  {
    title: "App Store Card",
    Content: AppStoreCard,
    sampleCode: appstoreCardCodes,
  },
  {
    title: "Dynamic Island Style",
    Content: DynamicIslandStyle,
    sampleCode: dynamicIslandStyleCodes,
  },
  {
    title: "Modal with Blurred Background",
    Content: BlurredModal,
    sampleCode: modalCodes,
  },
];

export default samplesData;
