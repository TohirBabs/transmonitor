import "./transactioncard.scss";

export const TransactionCard = () => {
  return (
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
  );
};
