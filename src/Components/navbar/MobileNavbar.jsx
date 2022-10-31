import { useState } from "react";
import "./mobilenavbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { OverviewIcon } from "../icons/OverviewIcon";
import { ApprovedWalletIcon } from "../icons/ApprovedWalletIcon";
import { CancelledWalletIcon } from "../icons/CancelledWalletIcon";
import { SettlementIcon } from "../icons/settlementIcon";
import { OrderIcon } from "../icons/OrderIcon";
import { PendingOrderIcon } from "../icons/PendingOrderIcon";
import { ApprovedOrderIcon } from "../icons/ApprovedOrderIcon";
import { UserIcon } from "../icons/UserIcon";
import { WalletIcon } from "../icons/WalletIcon";
import { SearchIcon } from "../icons/SearchIcon";
import { BellIcon } from "../icons/BellIcon";

export const MobileNavbar = () => {
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
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className="mobile_navbar">
      <div className="topbar">
        <h1 className="logo">TransMonitor</h1>

        <div className="right">
          <div className="user_info">
            <div className="username">
              <p>Hello</p>
              <p>Oluwaleke Ojo</p>
            </div>
            <img src="/assets/images/avatar.png" alt="" />
          </div>
          <div className="notification">
            <BellIcon />
            <p className="notification_count">8</p>
          </div>
          {menuOpen ? (
            <CloseIcon
              onClick={() => {
                setmenuOpen(!menuOpen);
              }}
            />
          ) : (
            <MenuIcon
              onClick={() => {
                setmenuOpen(!menuOpen);
              }}
            />
          )}
        </div>
      </div>
      <div className={`menu ${menuOpen ? "open" : "close"}`}>
        <div className="flex">
          <div className="search">
            <div className="search_icon">
              <SearchIcon />
            </div>

            <input type="text" placeholder="Search..." />
          </div>
          <button className="cta">GENERATE INVOICE</button>
        </div>
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
          <div className="bottom">
            <div className="nav">
              <p>Support</p>
            </div>
            <div className="nav">
              <p>FAQ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
