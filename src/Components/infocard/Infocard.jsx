import "./infocard.scss";
import { LineChart } from "./LineChart";

export const Infocard = ({ name, value }) => {
  return (
    <div className="infocard">
      <div className="info_text">
        <p>{name}</p>
        <p>{value}</p>
      </div>
      <LineChart />
    </div>
  );
};
