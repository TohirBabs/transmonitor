import Navbar from "../Components/navbar/Navbar";
import Sidebar from "../Components/sidebar/Sidebar";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <Sidebar />
      <div className="dashboard_container">container</div>
    </div>
  );
};

export default Dashboard;
