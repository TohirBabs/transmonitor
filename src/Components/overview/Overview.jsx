import { Infocard } from "../infocard/Infocard";
import { InfoGraph } from "../infograph/InfoGraph";
import { Payments } from "../payments/Payments";
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
          <div className="transaction_card">
            <h3>Orders</h3>
            <div className="progress_bar">
              <div className="progress"></div>
            </div>
            <p className="first">
              Pending Orders: <span>20</span>
            </p>
            <p className="sec">
              Reconcilled Orders: <span>80</span>
            </p>
            <p className="third">
              Total Orders: <span>100</span>
            </p>
          </div>
          <div className="transaction_card">
            <h3>Payments</h3>
            <div className="progress_bar">
              <div className="progress"></div>
            </div>
            <p className="first">
              Un-reconciled Payments: <span>20</span>
            </p>
            <p className="sec">
              Reconcilled Payments: <span>80</span>
            </p>
            <p className="third">
              Total Payments: <span>100</span>
            </p>
          </div>
        </div>
      </div>
      <Payments />
    </div>
  );
};

export default Overview;
