import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./infograph.scss";

export const InfoGraph = () => {
  return (
    <div className="infograph">
      <div className="date">
        <p className="today">Today: 5, Aug 2018</p>
        <div className="selection">
          <div className="time_period">
            <p>1 Jan - 1 Jun</p>
            <KeyboardArrowDownIcon />
          </div>
          <div className="arrows">
            <button>
              <KeyboardArrowLeftIcon />
            </button>
            <button>
              <KeyboardArrowRightIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="months">
        <p>Jan</p>
        <p>Feb</p>
        <p>Mar</p>
        <p>Apr</p>
        <p>May</p>
        <p>Jun</p>
      </div>
      <div className="lines">
        <div className=""></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className=""></div>
      </div>
      <img src="./assets/images/Gradient.png" />
    </div>
  );
};
