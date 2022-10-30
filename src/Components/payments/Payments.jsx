import { SearchIcon } from "../icons/SearchIcon";
import { SearchIconsm } from "../icons/SearchIconsm";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./payment.scss";
import { useState } from "react";

export const Payments = () => {
  const [activePage, setactivePage] = useState(1);
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

  const [paymentSelect, setpaymentSelect] = useState("All");

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
        <div className="stat">
          <div className={`status ${status.toLowerCase()}`}>
            <div className="dot"></div>
            {status}
          </div>
          <KeyboardArrowDownIcon />
        </div>
      </div>
    );
  };

  const PaymentSelection = () => {
    const [openSelection, setopenSelection] = useState(false);

    const selections = [
      "All",
      "Reconciled",
      "Un-reconciled",
      "Settled",
      "Un-settled",
    ];

    return (
      <div className="payment_selection">
        <p>Show</p>
        <div
          className="select"
          onClick={() => setopenSelection(!openSelection)}
        >
          <p>{paymentSelect}</p>
          <KeyboardArrowDownIcon color="primary" />
        </div>
        <ul className={`selections ${openSelection ? "open" : "close"}`}>
          {selections.map((selection) => (
            <li
              onClick={() => {
                setpaymentSelect(selection);
              }}
            >
              {selection}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="payments">
      <h2>Payments</h2>
      <div className="payment_info">
        <div className="right">
          <p className="showing">
            Showing{" "}
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
        <PaymentSelection />
      </div>
      <div className="payment_table">
        <div className="header">
          <p>Item Type</p>
          <p>Price</p>
          <p>Transaction No</p>
          <p>Time</p>
          <p>Status </p>
        </div>

        {paymentSelect === "All"
          ? paymentStatus.map((payment) => <PaymentRow status={payment} />)
          : paymentStatus
              .filter((pay) => pay === paymentSelect)
              .map((payment) => <PaymentRow status={payment} />)}
      </div>

      <div className="bottom">
        <p>Showing 1 to 10 of 500 entries</p>
        <div className="pagination">
          <div
            onClick={() => {
              setactivePage(1);
            }}
            className="prev"
          >
            Previous
          </div>
          <div className={`page ${activePage == 1 ? "active" : ""}`}>1</div>
          <div className={`page ${activePage == 2 ? "active" : ""}`}>2</div>
          <div
            onClick={() => {
              setactivePage(2);
            }}
            className="next"
          >
            Next
          </div>
        </div>
      </div>
    </div>
  );
};
