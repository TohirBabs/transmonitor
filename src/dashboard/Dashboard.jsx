import { useState, useEffect } from "react";
import { MobileNavbar } from "../Components/navbar/MobileNavbar";

import Navbar from "../Components/navbar/Navbar";
import Overview from "../Components/overview/Overview";
import Sidebar from "../Components/sidebar/Sidebar";
import "./dashboard.scss";

const Dashboard = () => {
  const [mobileView, setmobileView] = useState(false);

  function handleWindowSizeChange(params) {
    setmobileView(window.innerWidth <= 1110);
    console.log(window.innerWidth);
  }
  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
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
