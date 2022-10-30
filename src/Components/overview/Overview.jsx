import { Infocard } from "../infocard/Infocard";
import { InfoGraph } from "../infograph/InfoGraph";
import { TransactionCard } from "../transactioncard/TransactionCard";
import "./overview.scss";

const Overview = () => {
  const InfoCards = [
    { name: "Daily Transaction Volume", value: "2,342" },
    { name: "Daily Transaction Value", value: "₦4,000,000" },

    { name: "Total Transaction Volume", value: "452,000" },

    { name: "Total Transaction Value", value: "₦4,000,000" },
  ];
  return (
    <div className="overview">
      <div className="infocards">
        {InfoCards.map((card) => (
          <Infocard name={card.name} value={card.value} />
        ))}
      </div>
      <div className="dashboard_info">
        <InfoGraph />
        <div className="transaction_data">
          <TransactionCard />
          <TransactionCard />
        </div>
      </div>
    </div>
  );
};

export default Overview;
