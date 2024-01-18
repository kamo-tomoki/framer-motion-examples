const code = `import { LayoutGroup } from "framer-motion";
import Card from "./Card";
import "./style.css";

const AppStoreCard: React.FC = () => {
  return (
    <div className="root-container">
      <div className="card-list-container">
        <ul className="card-list">
          <LayoutGroup>
            <Card />
            <Card />
          </LayoutGroup>
        </ul>
      </div>
    </div>
  );
};
export default AppStoreCard;
`;

export default code;
