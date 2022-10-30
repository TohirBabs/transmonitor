import { SearchIcon } from "../icons/SearchIcon";
import { SearchIconsm } from "../icons/SearchIconsm";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./payment.scss";

export const Payments = () => {
  const paymentStatus = [
    "Reconciled",
    "Pending",
    "Reconciled",
    "Reconciled",
    "Pending",
    "Un-reconciled",
    "Reconciled",
    "Un-reconciled",
    "Pending",
  ];

  const PaymentRow = ({ status }) => {
    return (
      <div className="payment_row">
        <div className="type">
          <div className="tag">vw</div>
          <p>Apple Mac Book 15” 250 SSD 12GB</p>
        </div>
        <div className="price">$73430</div>
        <div className="transaction_no">1234567890</div>
        <div className="time">12:30</div>
        <div className={`status ${status.toLowerCase()}`}>
          <div className="dot"></div>
          {status}
        </div>
      </div>
    );
  };

  return (
    <div className="payments">
      <h2>Payments</h2>
      <div className="payment_info">
        <div className="right">
          <p className="showing">
            showing{" "}
            <span className="amt_shown">
              <span>20</span> <KeyboardArrowDownIcon />
            </span>
            out of 500 payments
          </p>
          <div className="search">
            <div className="search_icon">
              <SearchIconsm />
            </div>

            <input type="text" placeholder="Search payments" />
          </div>
        </div>
        <div className="left">
          <p>Show</p>
          <div className="select">
            <p>All</p>
            <KeyboardArrowDownIcon color="primary" />
          </div>
          <ul className="selections">
            <li>All</li>
            <li>Reconciled</li>
            <li>Un-reconciled</li>
            <li>Settled</li>
            <li>Un-settled</li>
          </ul>
        </div>
      </div>
      <div className="payment_table">
        <div className="header">
          <p>Item Type</p>
          <p>Price</p>
          <p>Transaction No</p>
          <p>Time</p>
          <p>Status </p>
        </div>
        {paymentStatus.map((payment) => (
          <PaymentRow status={payment} />
        ))}
      </div>

      <div className="bottom">
        <p>Showing 1 to 10 of 500 entries</p>
        <div className="pagination">
          <div className="prev">Previous</div>
          <div className="page active">1</div>
          <div className="page">2</div>
          <div className="next">Next</div>
        </div>
      </div>
    </div>
  );
};
