import { Infocard } from "../infocard/Infocard";
import { InfoGraph } from "../infograph/InfoGraph";
import "./overview.scss";

const Overview = () => {
  const InfoCards = [
    { name: "Daily Transaction Volume", value: "2,342" },
    { name: "Daily Transaction Value", value: "₦4,000,000" },
    ,
    { name: "Total Transaction Volume", value: "452,000" },
    ,
    { name: "Total Transaction Value", value: "₦4,000,000" },
  ];
  return (
    <div className="overview">
      <div className="infocards">
        {InfoCards.map((card) => (
          <Infocard name={card.name} value={card.value} />
        ))}
      </div>
      <InfoGraph />
    </div>
  );
};

export default Overview;
