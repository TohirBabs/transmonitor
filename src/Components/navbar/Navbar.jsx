import "./navbar.scss";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { BellIcon } from "./icons/BellIcon";
import { SearchIcon } from "./icons/SearchIcon";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">TransMonitor</div>
        <div className="search">
          <div className="search_icon">
            <SearchIcon />
          </div>

          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <ul className="right">
        <li>Support</li>
        <li>FAQ</li>
        <li>
          <BellIcon />
          <p className="notification_count">8</p>
        </li>
        <li className="user_info">
          <div className="username">
            <p>Hello</p>
            <p>Oluwaleke Ojo</p>
          </div>
          <img src="/assets/images/avatar.png" alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
