import React from "react";

export const TransactionCard = () => {
  return (
    <div className="transaction_card">
      <h3>Orders</h3>
      <div className="progress_bar">
        <div className="progress"></div>
      </div>
      <p>
        Pending Orders: <span>20</span>{" "}
      </p>
      <p>
        Reconcilled Orders: <span>80</span>
      </p>
      <p>
        Total Orders: <span>100</span>{" "}
      </p>
    </div>
  );
};
