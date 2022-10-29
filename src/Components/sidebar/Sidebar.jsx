import { useState } from "react";
import "./sidebar.scss";
import { OverviewIcon } from "../icons/OverviewIcon";
import { WalletIcon } from "../icons/WalletIcon";
import { ApprovedWalletIcon } from "../icons/ApprovedWalletIcon";
import { CancelledWalletIcon } from "../icons/CancelledWalletIcon";
import { SettlementIcon } from "../icons/settlementIcon";
import { OrderIcon } from "../icons/OrderIcon";
import { PendingOrderIcon } from "../icons/PendingOrderIcon";
import { ApprovedOrderIcon } from "../icons/ApprovedOrderIcon";
import { UserIcon } from "../icons/UserIcon";

const Sidebar = () => {
  const paymentNavs = [
    { name: "All Payments", icon: <WalletIcon /> },
    { name: "Reconciled Payments", icon: <ApprovedWalletIcon /> },
    { name: "Un - Reconciled Payments", icon: <CancelledWalletIcon /> },
    { name: "Manual Settlement", icon: <SettlementIcon /> },
  ];

  const orderNavs = [
    { name: "All Orders", icon: <OrderIcon /> },
    { name: "Pending Orders", icon: <PendingOrderIcon /> },
    { name: "Reconciled Orders", icon: <ApprovedOrderIcon /> },
  ];

  const SideNavItem = ({ name, icon }) => {
    return (
      <li
        onClick={() => setactiveNav(name)}
        className={`nav ${activeNav === name ? "active" : ""}`}
      >
        {icon}
        <p>{name}</p>
      </li>
    );
  };

  const [activeNav, setactiveNav] = useState("Overview");
  return (
    <div className="sidebar">
      <button className="cta">GENERATE INVOICE</button>
      <div className="navigation">
        <div className="main_nav">
          <h3>Main</h3>
          <SideNavItem name="Overview" icon={<OverviewIcon />} />
        </div>
        <div className="payments">
          <h3>Payments</h3>
          <ul>
            {paymentNavs.map((nav) => (
              <SideNavItem name={nav.name} icon={nav.icon} />
            ))}
          </ul>
        </div>
        <div className="Orders">
          <h3>Orders</h3>
          <ul>
            {orderNavs.map((nav) => (
              <SideNavItem name={nav.name} icon={nav.icon} />
            ))}
          </ul>
        </div>
        <div className="profile">
          <SideNavItem name="Merchant Profile" icon={<UserIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
