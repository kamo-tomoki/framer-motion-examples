import {
  selectBoxCodes,
  appstoreCardCodes,
  dynamicIslandStyleCodes,
  modalCodes,
} from "./contents-codes";
import SelectBox from "./select-box/SelectBox";
import AppStoreCard from "./app-store-card-ui/AppStoreCardUi";
import DynamicIslandStyle from "./dynamic-island-style/DynamicIslandStyle";
import BlurredModal from "./blurred-modal/BlurredModal";

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
