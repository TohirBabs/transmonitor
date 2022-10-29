import { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import "./sidebar.scss";

const Sidebar = () => {
  const paymentNavs = [
    { name: "All Payments", icon: "/assets/icons/search_icon.png" },
    { name: "Reconciled Payments", icon: "/assets/icons/search_icon.png" },
    { name: "Un - Reconciled Payments", icon: "/assets/icons/search_icon.png" },
    { name: "Manual Settlement", icon: "/assets/icons/search_icon.png" },
  ];
  const SideNavItem = ({ name, icon }) => {
    return (
      <li className={`nav ${activeNav === name ? "active" : ""}`}>
        <img src={icon} />
        <p>{name}</p>
      </li>
    );
  };

  const [activeNav, setactiveNav] = useState("Overview");
  return (
    <div className="sidebar">
      <button className="cta">GENERATE INVOICE</button>
      <div className="navigation">
        <div className="main">
          <h3>Main</h3>
          <SideNavItem name="Overview" icon="/assets/icons/search_icon.png" />
        </div>
        <div className="payments">
          <h3>Payments</h3>
          <ul>
            {paymentNavs.map((nav) => {
              <SideNavItem name={nav.name} icon={nav.icon} />;
            })}
            <li className="nav">
              <DashboardIcon />
              <p>All Payments</p>
            </li>
            <li className="nav">
              <img src="/assets/icons/search_icon.png" />
              <p>Reconciled Payments</p>
            </li>
            <li className="nav">
              <img src="/assets/icons/search_icon.png" />
              <p>Un - Reconciled Payments</p>
            </li>
            <li className="nav">
              <img src="/assets/icons/search_icon.png" />
              <p>Manual Settlement</p>
            </li>
          </ul>
        </div>
        <div className="Orders">
          <h3>Orders</h3>
          <ul>
            <li className="nav">
              <img src="/assets/icons/search_icon.png" />
              <p>All Orders</p>
            </li>
            <li className="nav">
              <img src="/assets/icons/search_icon.png" />
              <p>Reconciled Orders</p>
            </li>{" "}
          </ul>
        </div>
        <div className="profile nav">
          <img src="/assets/icons/search_icon.png" />
          <p>Merchant Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
