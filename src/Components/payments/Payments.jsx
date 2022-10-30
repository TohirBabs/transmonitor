import { SearchIcon } from "../icons/SearchIcon";
import "./payment.scss";

export const Payments = () => {
  return (
    <div className="payments">
      <h2>Payments</h2>
      <div className="payment_info">
        <div className="right">
          <p className="showing">
            showing <span className="amt_shown"></span>out of 500 payments
          </p>
          <div className="search">
            <div className="search_icon">
              <SearchIcon />
            </div>

            <input type="text" placeholder="Search payments" />
          </div>
        </div>
        <div className="left">
          <p>show</p>
          <div className="select">All</div>
        </div>
      </div>
      <div className="payment_table">
        <div className="header">
          <p>Item Type</p>
          <p>Price</p>
          <p>Transaction No</p>
          <p>Time</p>
          <p>Status</p>
        </div>
        <div className="payment_row">
          <div className="type">
            <div className="tag">vw</div>
            <p>Apple Mac Book 15” 250 SSD 12GB</p>
          </div>
          <div className="price">$73430</div>
          <div className="transaction_no">1234567890</div>
          <div className="time">12:30</div>
          <div className="status">
            <div className="dot"></div> Reconciled
          </div>
        </div>
        <div className="payment_row">
          <div className="type">
            <div className="tag">vw</div>
            <p>Apple Mac Book 15” 250 SSD 12GB</p>
          </div>
          <div className="price">$73430</div>
          <div className="transaction_no">1234567890</div>
          <div className="time">12:30</div>
          <div className="status">
            <div className="dot"></div> Reconciled
          </div>
        </div>
        <div className="payment_row">
          <div className="type">
            <div className="tag">vw</div>
            <p>Apple Mac Book 15” 250 SSD 12GB</p>
          </div>
          <div className="price">$73430</div>
          <div className="transaction_no">1234567890</div>
          <div className="time">12:30</div>
          <div className="status">
            <div className="dot"></div> Reconciled
          </div>
        </div>
        <div className="payment_row">
          <div className="type">
            <div className="tag">vw</div>
            <p>Apple Mac Book 15” 250 SSD 12GB</p>
          </div>
          <div className="price">$73430</div>
          <div className="transaction_no">1234567890</div>
          <div className="time">12:30</div>
          <div className="status">
            <div className="dot"></div> Reconciled
          </div>
        </div>
        <div className="payment_row">
          <div className="type">
            <div className="tag">vw</div>
            <p>Apple Mac Book 15” 250 SSD 12GB</p>
          </div>
          <div className="price">$73430</div>
          <div className="transaction_no">1234567890</div>
          <div className="time">12:30</div>
          <div className="status">
            <div className="dot"></div> Reconciled
          </div>
        </div>
        <div className="payment_row">
          <div className="type">
            <div className="tag">vw</div>
            <p>Apple Mac Book 15” 250 SSD 12GB</p>
          </div>
          <div className="price">$73430</div>
          <div className="transaction_no">1234567890</div>
          <div className="time">12:30</div>
          <div className="status">
            <div className="dot"></div> Reconciled
          </div>
        </div>
        <div className="payment_row">
          <div className="type">
            <div className="tag">vw</div>
            <p>Apple Mac Book 15” 250 SSD 12GB</p>
          </div>
          <div className="price">$73430</div>
          <div className="transaction_no">1234567890</div>
          <div className="time">12:30</div>
          <div className="status">
            <div className="dot"></div> Reconciled
          </div>
        </div>
        <div className="payment_row">
          <div className="type">
            <div className="tag">vw</div>
            <p>Apple Mac Book 15” 250 SSD 12GB</p>
          </div>
          <div className="price">$73430</div>
          <div className="transaction_no">1234567890</div>
          <div className="time">12:30</div>
          <div className="status">
            <div className="dot"></div> Reconciled
          </div>
        </div>
        <div className="payment_row">
          <div className="type">
            <div className="tag">vw</div>
            <p>Apple Mac Book 15” 250 SSD 12GB</p>
          </div>
          <div className="price">$73430</div>
          <div className="transaction_no">1234567890</div>
          <div className="time">12:30</div>
          <div className="status">
            <div className="dot"></div> Reconciled
          </div>
        </div>
        <div className="payment_row">
          <div className="type">
            <div className="tag">vw</div>
            <p>Apple Mac Book 15” 250 SSD 12GB</p>
          </div>
          <div className="price">$73430</div>
          <div className="transaction_no">1234567890</div>
          <div className="time">12:30</div>
          <div className="status">
            <div className="dot"></div> Reconciled
          </div>
        </div>
        <div className="payment_row">
          <div className="type">
            <div className="tag">vw</div>
            <p>Apple Mac Book 15” 250 SSD 12GB</p>
          </div>
          <div className="price">$73430</div>
          <div className="transaction_no">1234567890</div>
          <div className="time">12:30</div>
          <div className="status">
            <div className="dot"></div> Reconciled
          </div>
        </div>
        <div className="payment_row">
          <div className="type">
            <div className="tag">vw</div>
            <p>Apple Mac Book 15” 250 SSD 12GB</p>
          </div>
          <div className="price">$73430</div>
          <div className="transaction_no">1234567890</div>
          <div className="time">12:30</div>
          <div className="status">
            <div className="dot"></div> Reconciled
          </div>
        </div>
      </div>
    </div>
  );
};
