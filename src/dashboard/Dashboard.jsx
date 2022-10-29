import { useState, useEffect } from "react";
import { MobileNavbar } from "../Components/navbar/MobileNavbar";

import Navbar from "../Components/navbar/Navbar";
import Overview from "../Components/overview/Overview";
import Sidebar from "../Components/sidebar/Sidebar";
import "./dashboard.scss";

const Dashboard = () => {
  const [mobileView, setmobileView] = useState(false);
  var width;

  function handleWindowSizeChange(params) {
    setmobileView(window.innerWidth <= 768);
    console.log(window.innerWidth);
  }
  useEffect(() => {
    handleWindowSizeChange();
  }, []);

  return (
    <div className="dashboard">
      {mobileView ? <MobileNavbar /> : <Navbar />}
      <div className="dashboard_layout">
        {mobileView ? <></> : <Sidebar />}
        <Overview />
      </div>
    </div>
  );
};

export default Dashboard;
