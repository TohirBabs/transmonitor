import "./infograph.scss";
import { Graph } from "./Graph";

export const InfoGraph = () => {
  return (
    <div className="infograph">
      <div className="date">
        <p className="today">Today: 5, Aug 2018</p>
        <div className="selection">
          <div className="time_period">
            <p>1 Jan - 1 Jun</p>
          </div>
          <div className="arrows">
            <button>&lt;</button>
            <button>&gt;</button>
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
      {/* <Graph /> */}
      <img src="./assets/images/Gradient.png" />
    </div>
  );
};
