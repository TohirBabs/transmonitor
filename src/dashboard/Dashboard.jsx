import Navbar from "../Components/navbar/Navbar";
import Overview from "../Components/overview/Overview";
import Sidebar from "../Components/sidebar/Sidebar";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard_layout">
        <Sidebar />
        <Overview />
      </div>
    </div>
  );
};

export default Dashboard;
