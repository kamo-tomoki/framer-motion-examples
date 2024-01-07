import { LayoutGroup } from "framer-motion";
import Card from "./Card";
import "./AppStoreCardUi.css";
import { SetStateAction } from "react";

type Props = {
  show: boolean;
  setShow: React.Dispatch<SetStateAction<boolean>>;
};

const AppStoreCard: React.FC<Props> = ({ show, setShow }) => {
  return (
    <div className="appstore-card-ui-bg">
      <>
        <ul className="appstore-card-list">
          <LayoutGroup>
            <Card parentShow={show} setParentShow={setShow} />
            <Card parentShow={show} setParentShow={setShow} />
          </LayoutGroup>
        </ul>
      </>
    </div>
  );
};
export default AppStoreCard;
