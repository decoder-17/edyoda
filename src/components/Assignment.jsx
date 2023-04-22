import "../assets/css/Submodule.css";
import calendar from "../assets/calendar.svg";
import clock from "../assets/clock-blue.svg";

export default function Assignment() {
  return (
    <div className="submodule-topic">
      <div className="submodule-header">
        <div className="submodule-head">
          <div className="heading">Assignment-1: Operators | Loops</div>
          <div className="date">20 December 2021</div>
        </div>
        <div className="submodule-head-right">
          <div className="param">
            <div className="param-head">3</div>
            <div className="param-sub">Problems</div>
          </div>
          <div className="param">
            <div className="param-head">100</div>
            <div className="param-sub">Total Score</div>
          </div>
        </div>
      </div>
      <div className="submodule-subheading">Assignment Details</div>
      <div className="card">
        <div className="card-right">
          <div className="param">
            <div className="param-head">3</div>
            <div className="param-sub">Problems</div>
          </div>
          <div className="param">
            <div className="param-head">100</div>
            <div className="param-sub">Total Score</div>
          </div>
        </div>
        <div className="card-left">
          <div className="moment">
            <div className="moment-head">Start:</div>
            <div className="day">
              <img src={calendar} alt="calendar" className="icon" />
              20 December 2021
            </div>
            <div className="time">
              <img src={clock} alt="clock" className="icon" />
              07:30 PM
            </div>
          </div>
          <div className="moment">
            <div className="moment-head">Due:</div>
            <div className="day">
              <img src={calendar} alt="calendar" className="icon" />
              26 December 2021
            </div>
            <div className="time">
              <img src={clock} alt="clock" className="icon" />
              11:59 PM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
